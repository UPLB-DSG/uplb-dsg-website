"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Lottie from "@/components/lottie";

// Random sample: roll a die, open a random digest.
export default function RandomDigestButton({ slugs }: { slugs: string[] }) {
  const router = useRouter();
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    if (rolling) return;
    setRolling(true);
    const slug = slugs[Math.floor(Math.random() * slugs.length)];
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 900;
    window.setTimeout(() => router.push(`/digest/${slug}`), delay);
  };

  return (
    <span className="relative inline-flex">
      {rolling && (
        <Lottie
          src="/lottie/confetti.json"
          loop={false}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2"
        />
      )}
    <button
      type="button"
      onClick={roll}
      aria-label="Open a random Data Digest"
      className="inline-flex min-h-11 w-max shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border border-white/20 px-5 font-bold text-white transition-colors hover:border-accent-main hover:text-headline-via focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
    >
      <span aria-hidden="true" className={`inline-block text-lg ${rolling ? "die-roll" : ""}`}>
        🎲
      </span>
      Random sample
    </button>
    </span>
  );
}
