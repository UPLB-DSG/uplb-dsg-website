import type { CSSProperties } from "react";
import Link from "next/link";
import HeroCanvas from "@/components/hero-canvas";
import IsoScene from "@/components/iso-scene";
import HeroSlideshow from "@/components/hero-slideshow";
import { COPY } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden flex flex-col lg:block lg:min-h-svh">
      <HeroSlideshow />
      <HeroCanvas heroId="hero" />

      <div className="relative z-30 mx-auto flex h-full w-full max-w-6xl flex-col px-6 pt-32 pb-6 lg:px-12 lg:min-h-svh lg:flex-row lg:items-center lg:justify-between lg:py-0">
        <div className="z-30 text-center lg:text-left lg:block lg:w-[52%]">
          <h1
            className="hero-enter mx-auto max-w-[14ch] font-display text-[clamp(2.25rem,10vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-off-white lg:mx-0 lg:text-[clamp(3rem,5.5vw,5rem)]"
            style={{ "--i": 0 } as CSSProperties}
          >
            {COPY.orgName}
          </h1>

          <p
            className="hero-enter mx-auto mt-6 max-w-md text-base leading-relaxed text-white/80 lg:mx-0 lg:text-lg"
            style={{ "--i": 1 } as CSSProperties}
          >
            {COPY.heroTagline}
          </p>

          <div
            className="hero-enter mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ "--i": 2 } as CSSProperties}
          >
            <Link
              href="/#join"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm bg-accent-main px-6 font-bold text-off-white transition-colors duration-150 hover:bg-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              How to join
            </Link>
            <Link
              href="/events"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm border border-white/30 bg-background/40 px-6 font-bold text-off-white transition-colors hover:border-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
            >
              See our events
            </Link>
          </div>
        </div>

        <div className="hero-cube-enter relative z-10 -mt-4 h-[280px] w-full pointer-events-none md:h-[360px] lg:mt-0 lg:h-auto lg:w-[50%] lg:flex-none lg:aspect-[1468/845]">
          <IsoScene minimal />
        </div>
      </div>
    </section>
  );
}
