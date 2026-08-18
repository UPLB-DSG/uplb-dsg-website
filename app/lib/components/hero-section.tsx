/* Hallmark · pre-emit critique: P5 H5 E4 S5 R4 V5 · genre: atmospheric · macrostructure: Manifesto · theme: incumbent DSG · enrichment: E5 tier-A CSS art · scope: mobile hero */
import Image from "next/image";
import { COPY, FACEBOOK_URL } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden flex flex-col lg:block">
      <div className="absolute top-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
        <div className="absolute top-[-150px] left-[-10%] w-[50%] h-[300px] bg-glow-magenta blur-[120px] rounded-[100%]" />
        <div className="absolute top-[-200px] left-[20%] w-[60%] h-[400px] bg-glow-violet blur-[140px] rounded-[100%]" />
        <div className="absolute top-[-150px] right-[-10%] w-[40%] h-[300px] bg-glow-amber/80 blur-[120px] rounded-[100%]" />
      </div>

      <div className="container mx-auto z-30 relative h-full min-h-svh w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0">
        <div className="absolute inset-x-6 top-28 bottom-12 z-30 flex flex-col lg:static lg:block lg:w-[50%] lg:space-y-6 xl:w-[45%]">
          <p className="text-sm min-[360px]:text-base md:text-lg lg:text-xl text-off-white font-bold uppercase tracking-[0.16em] lg:tracking-[0.2em]">
            {COPY.orgName}
          </p>

          <h1 className="mt-4 min-w-0 w-fit font-display text-[clamp(1.5rem,7.5vw,2.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] [overflow-wrap:anywhere] drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-headline-from via-headline-via to-white lg:mt-0 lg:text-[clamp(2rem,6.5vw,4.5rem)] lg:leading-[1.1] lg:tracking-normal lg:[overflow-wrap:normal]">
            <span className="block">INTEGRITY.</span>
            <span className="block">INTERDEPENDENCE.</span>
            <span className="block">INNOVATION.</span>
          </h1>

          <div className="absolute left-0 top-[68%] flex items-center gap-3 lg:static lg:mt-0 lg:gap-6 lg:pt-6">
            <span className="text-sm text-gray-300">Follow us on</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-max items-center whitespace-nowrap rounded-sm bg-accent-main px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-off-white shadow-[0_0_20px_rgba(114,48,255,0.4)] transition-colors hover:bg-accent-secondary active:bg-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white lg:min-h-0"
            >
              FACEBOOK
            </a>
          </div>
        </div>

        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none [--tile-size:clamp(64px,12vw,112px)] lg:relative lg:inset-auto lg:mt-0 lg:mb-0 lg:w-[50%] lg:flex-none lg:aspect-[1468/845] lg:[--tile-size:clamp(64px,8vw,160px)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] bg-accent-main rounded-full blur-[60px] lg:blur-[80px] opacity-60 z-0" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] flex items-center justify-center pointer-events-none"
            style={{
              WebkitMaskImage:
                "radial-gradient(50% 50% at center, black 20%, transparent 70%)",
              maskImage:
                "radial-gradient(50% 50% at center, black 20%, transparent 70%)",
            }}
          >
            <div className="absolute w-[200%] md:w-[150%] aspect-square [transform:rotateX(54.736deg)_rotateZ(45deg)] flex items-center justify-center">
              <div className="absolute inset-0">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
                  style={{
                    width: "calc(var(--tile-size) * 6)",
                    height: "calc(var(--tile-size) * 6)",
                    background:
                      "radial-gradient(circle, var(--color-accent-main) 0%, transparent 50%)",
                  }}
                />

                {[
                  { x: 0, y: 0, opacity: 0.6 },
                  { x: 1, y: 0, opacity: 0.4 },
                  { x: 0, y: 1, opacity: 0.4 },
                  { x: -1, y: 0, opacity: 0.2 },
                  { x: 0, y: -1, opacity: 0.2 },
                  { x: 2, y: 0, opacity: 0.15 },
                  { x: 0, y: 2, opacity: 0.15 },
                  { x: -2, y: 0, opacity: 0.05 },
                  { x: 0, y: -2, opacity: 0.05 },
                ].map((tile, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 bg-accent-main pointer-events-none"
                    style={{
                      width: "var(--tile-size)",
                      height: "var(--tile-size)",
                      opacity: tile.opacity,
                      transform: `translate(calc(-50% + ${tile.x} * var(--tile-size)), calc(-50% + ${tile.y} * var(--tile-size)))`,
                    }}
                  />
                ))}
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                         linear-gradient(to right, rgba(167, 139, 250, 0.25) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(167, 139, 250, 0.25) 1px, transparent 1px)
                       `,
                  backgroundSize: "var(--tile-size) var(--tile-size)",
                  backgroundPosition: "center center",
                }}
              />
            </div>
          </div>

          <div
            className="absolute top-[44%] left-1/2 z-20 flex items-center justify-center lg:top-1/2"
            style={{
              width: "calc(var(--tile-size) * 1.4142)",
              aspectRatio: "240 / 264",
              transform: "translate(-50%, -25%)",
            }}
          >
            <Image
              src="/polygon-15.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 15vw, 40vw"
              className="object-contain absolute z-10"
            />
            <Image
              src="/group-49.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 15vw, 40vw"
              className="object-contain absolute z-20"
            />
            <Image
              src="/group-47.png"
              alt="DSG isometric cube logo"
              fill
              priority
              sizes="(min-width: 1024px) 15vw, 40vw"
              className="object-contain absolute z-30 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
