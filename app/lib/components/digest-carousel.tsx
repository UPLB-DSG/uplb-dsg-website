"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageItem } from "@/lib/data";

export default function DigestCarousel({ panels }: { panels: ImageItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePanel = panels[activeIndex];

  return (
    <figure className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div className="relative">
        <picture key={activePanel.src}>
          <source
            media="(max-width: 640px)"
            srcSet={activePanel.src.replace(".webp", "-640.webp")}
          />
          <Image
            src={activePanel.src}
            alt={activePanel.alt}
            width={1200}
            height={1200}
            sizes="(min-width: 672px) 640px, calc(100vw - 3rem)"
            className="h-auto w-full"
          />
        </picture>

        {panels.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((activeIndex - 1 + panels.length) % panels.length)
              }
              aria-label="Previous Data Digest panel"
              className="absolute left-3 top-1/2 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full bg-black/75 text-2xl text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((activeIndex + 1) % panels.length)}
              aria-label="Next Data Digest panel"
              className="absolute right-3 top-1/2 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full bg-black/75 text-2xl text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
            >
              ›
            </button>
          </>
        )}
      </div>

      <figcaption
        className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/60"
        aria-live="polite"
      >
        {activeIndex + 1} of {panels.length}: {activePanel.alt}
      </figcaption>
    </figure>
  );
}
