import Image from "next/image";
import { COPY } from "@/lib/data";

export default function AboutUsSection() {
  return (
    <section
      id="mission"
      className="w-full bg-surface py-24 z-40 border-t border-white/5 relative scroll-mt-24"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="relative flex flex-col gap-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-off-white md:p-14">
          <div className="pointer-events-none absolute top-0 right-0 select-none p-8 text-8xl font-black tracking-tighter text-white/5 md:text-9xl">
            DSG
          </div>

          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            <picture>
              <source media="(max-width: 640px)" srcSet="/mission-vision-640.webp" />
              <Image
                src="/mission-vision.webp"
                alt={COPY.missionImageAlt}
                fill
                sizes="(min-width: 1024px) 1152px, calc(100vw - 4rem)"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </picture>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-widest text-off-white">
                MISSION
              </h2>
              <div className="w-12 h-1 bg-accent-main rounded-full" />
              <p className="text-base leading-relaxed text-white/65 md:text-lg">
                {COPY.mission}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-widest text-off-white">
                VISION
              </h2>
              <div className="w-12 h-1 bg-accent-secondary rounded-full" />
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-white/65 md:text-lg">
                {COPY.vision.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-widest text-off-white">
                CORE VALUES
              </h2>
              <div className="w-12 h-1 bg-accent-main rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COPY.coreValues.map((value) => (
                <div key={value.name} className="space-y-3 border-t border-white/10 pt-5">
                  <h3 className="font-display text-lg font-black uppercase tracking-wider text-off-white">
                    {value.name}
                  </h3>
                  <p className="leading-relaxed text-white/65">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
