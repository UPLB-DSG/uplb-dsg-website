"use client";

import { useEffect, useRef } from "react";

// Lazy Lottie player: loads the light renderer on the client only, plays when
// the element is in view, pauses when it leaves, and renders the last frame
// under prefers-reduced-motion.
export default function Lottie({
  src,
  className = "",
  loop = true,
  label,
}: {
  src: string;
  className?: string;
  loop?: boolean;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let destroy = () => {};
    import("lottie-web/build/player/lottie_light").then(({ default: lottie }) => {
      if (cancelled) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const anim = lottie.loadAnimation({
        container: el,
        renderer: "svg",
        loop: loop && !reduce,
        autoplay: false,
        path: src,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true },
      });
      const io = new IntersectionObserver(([entry]) => {
        if (reduce) { anim.goToAndStop(anim.totalFrames - 1, true); return; }
        if (entry.isIntersecting) anim.play(); else anim.pause();
      });
      anim.addEventListener("DOMLoaded", () => io.observe(el));
      destroy = () => { io.disconnect(); anim.destroy(); };
    });
    return () => { cancelled = true; destroy(); };
  }, [src, loop]);

  return <div ref={ref} className={className} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true} />;
}
