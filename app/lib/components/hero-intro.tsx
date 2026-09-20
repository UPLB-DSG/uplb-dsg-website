"use client";

import { useEffect, useRef } from "react";

// First-visit opening: points scatter in, get k-means tinted, converge into
// the cube silhouette sampled from the logo, then hand off to the CSS stagger
// while the three values decode from glyph noise. Plays once per session.
// Skipped under reduced motion, on hash links, or when the page loads scrolled.
// Any click, key, or scroll fast-forwards to the handoff.

const COLORS = ["#7230ff", "#c77dff", "#a35c3e"];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SESSION_KEY = "dsgIntro";

type P = { x: number; y: number; tx: number; ty: number; c: number; alpha: number };

function sampleLogo(src: string, size: number): Promise<{ x: number; y: number }[]> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const off = document.createElement("canvas");
      const scale = size / Math.max(img.width, img.height);
      off.width = Math.round(img.width * scale);
      off.height = Math.round(img.height * scale);
      const c = off.getContext("2d");
      if (!c) return resolve([]);
      c.drawImage(img, 0, 0, off.width, off.height);
      const data = c.getImageData(0, 0, off.width, off.height).data;
      const out: { x: number; y: number }[] = [];
      for (let y = 0; y < off.height; y += 2) {
        for (let x = 0; x < off.width; x += 2) {
          if (data[(y * off.width + x) * 4 + 3] > 128) out.push({ x: x - off.width / 2, y: y - off.height / 2 });
        }
      }
      resolve(out);
    };
    img.onerror = () => resolve([]);
    img.src = src;
  });
}

function scramble(el: HTMLElement, duration: number) {
  const final = el.textContent ?? "";
  // Lock the line's box so glyph noise never reflows or wraps the headline.
  const { width, height } = el.getBoundingClientRect();
  el.style.width = `${width}px`;
  el.style.height = `${height}px`;
  el.style.whiteSpace = "nowrap";
  el.style.overflow = "hidden";
  const unlock = () => { el.style.width = ""; el.style.height = ""; el.style.whiteSpace = ""; el.style.overflow = ""; };
  const start = performance.now();
  const tick = (now: number) => {
    const t = (now - start) / duration;
    let out = "";
    for (let i = 0; i < final.length; i++) {
      const reveal = (i + 1) / final.length;
      out += t >= reveal ? final[i] : final[i] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }
    el.textContent = out;
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = final;
      unlock();
    }
  };
  requestAnimationFrame(tick);
}

export default function HeroIntro({ heroId, cubeId }: { heroId: string; cubeId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    const cube = document.getElementById(cubeId);
    const canvas = canvasRef.current;
    if (!hero || !cube || !canvas) return;

    const finish = () => {
      hero.removeAttribute("data-intro");
      canvas.remove();
    };

    let skip = false;
    try {
      skip = !!sessionStorage.getItem(SESSION_KEY);
    } catch { /* storage blocked: play once anyway */ }
    if (skip || window.matchMedia("(prefers-reduced-motion: reduce)").matches || location.hash || window.scrollY > 40) {
      finish();
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) { finish(); return; }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const heroRect = hero.getBoundingClientRect();
    canvas.width = Math.round(heroRect.width * dpr);
    canvas.height = Math.round(heroRect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cubeRect = cube.getBoundingClientRect();
    const cx = cubeRect.left - heroRect.left + cubeRect.width / 2;
    const cy = cubeRect.top - heroRect.top + cubeRect.height / 2;

    let points: P[] = [];
    let centroids = [0, 1, 2].map(() => ({ x: Math.random() * heroRect.width, y: Math.random() * heroRect.height }));
    let phase: "scatter" | "converge" | "fade" = "scatter";
    let phaseStart = performance.now();
    let raf = 0;
    let done = false;
    let kmeansIter = 0;

    const end = () => {
      if (done) return;
      done = true;
      cancelAnimationFrame(raf);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ }
      finish();
      hero.querySelectorAll<HTMLElement>("h1 .hero-enter").forEach((el, i) => {
        window.setTimeout(() => scramble(el, 700), 120 * (i + 1));
      });
      document.removeEventListener("pointerdown", end);
      document.removeEventListener("keydown", end);
      document.removeEventListener("wheel", end);
      document.removeEventListener("touchmove", end);
    };
    document.addEventListener("pointerdown", end);
    document.addEventListener("keydown", end);
    document.addEventListener("wheel", end, { passive: true });
    document.addEventListener("touchmove", end, { passive: true });

    const assign = () => {
      for (const p of points) {
        let best = 0, bestD = Infinity;
        centroids.forEach((c, i) => {
          const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
          if (d < bestD) { bestD = d; best = i; }
        });
        p.c = best;
      }
      centroids = centroids.map((c, i) => {
        const m = points.filter((p) => p.c === i);
        return m.length ? { x: m.reduce((s, p) => s + p.x, 0) / m.length, y: m.reduce((s, p) => s + p.y, 0) / m.length } : c;
      });
    };

    const frame = (now: number) => {
      if (done) return;
      const t = now - phaseStart;
      ctx.clearRect(0, 0, heroRect.width, heroRect.height);

      if (phase === "scatter") {
        // three k-means iterations, 280 ms apart
        if (t > kmeansIter * 280 && kmeansIter < 3) { assign(); kmeansIter++; }
        for (const p of points) p.alpha = Math.min(1, p.alpha + 0.04);
        if (t > 950) { phase = "converge"; phaseStart = now; }
      } else if (phase === "converge") {
        for (const p of points) {
          p.x += (p.tx - p.x) * 0.085;
          p.y += (p.ty - p.y) * 0.085;
        }
        if (t > 1000) { phase = "fade"; phaseStart = now; hero.removeAttribute("data-intro"); }
      } else {
        for (const p of points) p.alpha = Math.max(0, p.alpha - 0.06);
        if (t > 350) { end(); return; }
      }

      for (const p of points) {
        ctx.globalAlpha = p.alpha * 0.9;
        ctx.fillStyle = COLORS[p.c];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      if (phase === "scatter") {
        ctx.globalAlpha = 0.9;
        ctx.strokeStyle = "#fafafa";
        ctx.lineWidth = 1.5;
        for (const c of centroids) { ctx.beginPath(); ctx.arc(c.x, c.y, 7, 0, Math.PI * 2); ctx.stroke(); }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };

    sampleLogo("/group-47.png", Math.min(cubeRect.width, cubeRect.height, 160)).then((targets) => {
      if (done) return;
      if (targets.length === 0) { end(); return; }
      const scale = cubeRect.width / Math.min(cubeRect.width, cubeRect.height, 160);
      points = targets.map((tg) => ({
        x: Math.random() * heroRect.width,
        y: Math.random() * heroRect.height,
        tx: cx + tg.x * scale,
        ty: cy + tg.y * scale,
        c: Math.floor(Math.random() * 3),
        alpha: 0,
      }));
      phaseStart = performance.now();
      raf = requestAnimationFrame(frame);
    });

    // Safety net: never leave the hero hidden.
    const failsafe = window.setTimeout(end, 4000);
    return () => { window.clearTimeout(failsafe); end(); };
  }, [heroId, cubeId]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-40 h-full w-full" />;
}
