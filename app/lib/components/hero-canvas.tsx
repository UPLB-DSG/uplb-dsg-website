"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; cluster?: number };

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
];
const CLUSTER_COLORS = ["#7230ff", "#c77dff", "#a35c3e"];

function isTypingTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}

// Least squares fit. Returns null when the points are vertical.
function fitLine(points: Point[]) {
  const n = points.length;
  const mx = points.reduce((s, p) => s + p.x, 0) / n;
  const my = points.reduce((s, p) => s + p.y, 0) / n;
  let sxx = 0, sxy = 0, syy = 0;
  for (const p of points) {
    sxx += (p.x - mx) ** 2;
    sxy += (p.x - mx) * (p.y - my);
    syy += (p.y - my) ** 2;
  }
  if (sxx < 1e-6) return null;
  const slope = sxy / sxx;
  const r2 = syy < 1e-6 ? 1 : (sxy * sxy) / (sxx * syy);
  return { slope, intercept: my - slope * mx, r2 };
}

// Hero easter eggs on one canvas: click to drop points and fit a regression
// line; Konami code runs k-means over random points. Draws only when dirty,
// stops when the hero leaves the viewport or the tab is hidden.
export default function HeroCanvas({ heroId }: { heroId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = document.getElementById(heroId);
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let points: Point[] = [];
    let centroids: Point[] = [];
    let kmeansTimer = 0;
    let dirty = true;
    let visible = true;
    let raf = 0;
    let konamiIndex = 0;
    let typed = "";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = hero.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dirty = true;
    };

    const draw = () => {
      raf = 0;
      if (!dirty) return;
      dirty = false;
      const { width, height } = hero.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.cluster === undefined ? "#c77dff" : CLUSTER_COLORS[p.cluster];
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      for (const c of centroids) {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(Math.PI / 4);
        ctx.strokeStyle = "#fafafa";
        ctx.lineWidth = 2;
        ctx.strokeRect(-7, -7, 14, 14);
        ctx.restore();
      }

      if (centroids.length === 0 && points.length >= 3) {
        const fit = fitLine(points);
        if (fit) {
          ctx.beginPath();
          ctx.moveTo(0, fit.intercept);
          ctx.lineTo(width, fit.slope * width + fit.intercept);
          ctx.strokeStyle = "rgba(250, 250, 250, 0.7)";
          ctx.setLineDash([6, 6]);
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.setLineDash([]);
          const last = points[points.length - 1];
          ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = "rgba(250, 250, 250, 0.8)";
          ctx.fillText(`y = ${fit.slope.toFixed(2)}x + ${fit.intercept.toFixed(0)}   r² = ${fit.r2.toFixed(2)}`, Math.min(last.x + 10, width - 220), last.y - 10);
        }
      }
    };

    const requestDraw = () => {
      dirty = true;
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(draw);
    };

    const clear = () => {
      points = [];
      centroids = [];
      window.clearInterval(kmeansTimer);
      kmeansTimer = 0;
      requestDraw();
    };

    const stepKmeans = () => {
      for (const p of points) {
        let best = 0, bestD = Infinity;
        centroids.forEach((c, i) => {
          const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2;
          if (d < bestD) { bestD = d; best = i; }
        });
        p.cluster = best;
      }
      let moved = 0;
      centroids = centroids.map((c, i) => {
        const members = points.filter((p) => p.cluster === i);
        if (members.length === 0) return c;
        const nx = members.reduce((s, p) => s + p.x, 0) / members.length;
        const ny = members.reduce((s, p) => s + p.y, 0) / members.length;
        moved += Math.abs(nx - c.x) + Math.abs(ny - c.y);
        return { x: nx, y: ny };
      });
      requestDraw();
      return moved;
    };

    const startKmeans = () => {
      const { width, height } = hero.getBoundingClientRect();
      const blobs = [0, 1, 2].map(() => ({ x: width * (0.2 + Math.random() * 0.6), y: height * (0.2 + Math.random() * 0.6) }));
      points = Array.from({ length: 72 }, (_, i) => {
        const b = blobs[i % 3];
        return { x: b.x + (Math.random() - 0.5) * width * 0.25, y: b.y + (Math.random() - 0.5) * height * 0.25 };
      });
      centroids = points.slice(0, 3).map((p) => ({ x: p.x, y: p.y }));
      window.clearInterval(kmeansTimer);
      if (reduceMotion) {
        for (let i = 0; i < 20 && stepKmeans() > 0.5; i++);
        return;
      }
      let iterations = 0;
      kmeansTimer = window.setInterval(() => {
        const moved = stepKmeans();
        if (moved < 0.5 || ++iterations > 25) { window.clearInterval(kmeansTimer); kmeansTimer = 0; }
      }, 450);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!hero.contains(target) || target.closest("a, button")) return;
      if (centroids.length) { clear(); return; }
      const rect = hero.getBoundingClientRect();
      points.push({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      if (points.length > 40) points.shift();
      requestDraw();
    };

    const onKey = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return;
      if (event.key === "Escape") { clear(); return; }
      konamiIndex = event.key === KONAMI[konamiIndex] ? konamiIndex + 1 : event.key === KONAMI[0] ? 1 : 0;
      // Once the code is underway, keep arrow keys from scrolling the page.
      if (konamiIndex > 1 && event.key.startsWith("Arrow")) event.preventDefault();
      if (konamiIndex === KONAMI.length) { konamiIndex = 0; startKmeans(); }
      if (event.key.length === 1) {
        typed = (typed + event.key.toLowerCase()).slice(-20);
        if (typed.endsWith("sudo") || typed.endsWith("import antigravity")) {
          typed = "";
          document.getElementById("hero-cube")?.classList.toggle("antigravity");
        }
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestDraw();
    });
    io.observe(hero);
    const ro = new ResizeObserver(() => { resize(); requestDraw(); });
    ro.observe(hero);
    const onVisibility = () => { if (!document.hidden) requestDraw(); };

    resize();
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      ro.disconnect();
      window.clearInterval(kmeansTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [heroId]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 h-full w-full"
    />
  );
}
