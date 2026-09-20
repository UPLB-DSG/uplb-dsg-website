import type { CSSProperties } from "react";
import Link from "next/link";
import HeroCanvas from "@/components/hero-canvas";
import IsoScene from "@/components/iso-scene";
import HeroIntro from "@/components/hero-intro";
import { COPY, FACEBOOK_URL } from "@/lib/data";

export default function HeroSection() {
  return (
    <section id="hero" data-intro="pending" className="relative w-full overflow-hidden flex flex-col lg:block lg:min-h-svh">
      <picture className="pointer-events-none absolute inset-0 z-0">
        <source media="(max-width: 640px)" srcSet="/hero-bg-960.webp" />
        <img
          src="/hero-bg.webp"
          alt=""
          className="h-full w-full scale-[1.04] object-cover object-[55%_35%] opacity-60 blur-[2px]"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.4) 100%), linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0) 40%, #0a0a0a 100%), rgba(74,10,119,0.3)",
        }}
      />
      <noscript>
        <style>{`#hero[data-intro] .hero-enter, #hero[data-intro] .hero-cube-enter { animation-play-state: running; }`}</style>
      </noscript>
      <HeroCanvas heroId="hero" />
      <HeroIntro heroId="hero" cubeId="hero-cube" />
      <div className="hero-top-glow absolute top-0 left-0 right-0 h-[400px] w-full z-[1] pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
        <div className="glow-drift absolute top-[-150px] left-[-10%] w-[50%] h-[300px] bg-glow-magenta blur-[120px] rounded-[100%]" />
        <div className="glow-drift-alt absolute top-[-200px] left-[20%] w-[60%] h-[400px] bg-glow-violet blur-[140px] rounded-[100%]" />
        <div className="glow-drift absolute top-[-150px] right-[-10%] w-[40%] h-[300px] bg-glow-amber/80 blur-[120px] rounded-[100%]" />
      </div>

      <div className="container mx-auto z-30 relative flex h-full w-full flex-col px-6 pt-32 pb-6 lg:min-h-svh lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0">
        <div className="z-30 text-center lg:text-left lg:block lg:w-[50%] lg:space-y-6 xl:w-[45%]">
          <p
            className="hero-enter text-sm min-[360px]:text-base md:text-lg lg:text-xl text-off-white font-bold uppercase tracking-[0.16em] lg:tracking-[0.2em]"
            style={{ "--i": 0 } as CSSProperties}
          >
            {COPY.orgName}
          </p>

          <h1 className="mt-4 min-w-0 w-fit mx-auto lg:mx-0 font-display text-[clamp(1.5rem,7.5vw,2.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] [overflow-wrap:anywhere] drop-shadow-lg lg:text-[clamp(2rem,6.5vw,4.5rem)] lg:leading-[1.1] lg:tracking-normal lg:[overflow-wrap:normal]">
            <span className="hero-enter headline-gradient block" style={{ "--i": 1 } as CSSProperties}>
              INTEGRITY.
            </span>
            <span className="hero-enter headline-gradient block" style={{ "--i": 2 } as CSSProperties}>
              INTERDEPENDENCE.
            </span>
            <span className="hero-enter headline-gradient block" style={{ "--i": 3 } as CSSProperties}>
              INNOVATION.
            </span>
          </h1>

          <p
            className="hero-enter mx-auto mt-6 max-w-md text-base leading-relaxed text-gray-300 lg:mx-0 lg:mt-0 lg:text-lg"
            style={{ "--i": 4 } as CSSProperties}
          >
            {COPY.heroTagline}
          </p>

          <div
            className="hero-enter mt-8 flex flex-wrap items-center justify-center gap-3 lg:mt-0 lg:justify-start lg:pt-4"
            style={{ "--i": 5 } as CSSProperties}
          >
            <Link
              href="/#workshops"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm bg-accent-main px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-off-white shadow-[0_0_20px_rgba(114,48,255,0.4)] transition-[background-color,transform] duration-150 hover:bg-accent-secondary active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
            >
              Join a workshop
            </Link>
            <Link
              href="/digest"
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm border border-white/25 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-off-white transition-colors hover:border-accent-main hover:text-headline-via focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
            >
              Read the Data Digest
            </Link>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center px-2 text-xs font-bold uppercase tracking-widest text-gray-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="hero-cube-enter relative z-10 -mt-4 h-[240px] w-full pointer-events-none md:h-[320px] lg:mt-0 lg:h-auto lg:w-[50%] lg:flex-none lg:aspect-[1468/845]">
          <IsoScene />
        </div>
      </div>
    </section>
  );
}
