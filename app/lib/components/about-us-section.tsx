import { COPY } from "@/lib/data";
import ContainedImage from "@/components/contained-image";

export default function AboutUsSection() {
  return (
    <section
      id="mission"
      className="relative z-40 w-full border-t border-white/5 bg-surface py-24 scroll-mt-24"
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        {/* Mission: the one sentence, set large, next to the photo. */}
        <div className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <ContainedImage
            image={{ src: "/mission-vision.webp", alt: COPY.missionImageAlt }}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="reveal aspect-[4/3] rounded-2xl border border-white/10"
          />
          <div className="reveal">
            <p className="text-sm text-accent-main">Mission</p>
            <p className="mt-3 font-display text-3xl font-extrabold leading-tight text-off-white md:text-4xl lg:text-5xl">
              {COPY.mission}
            </p>
            <p className="mt-10 text-sm text-accent-main">Vision</p>
            <ol className="mt-3 space-y-4">
              {COPY.vision.map((item, index) => (
                <li key={item} className="flex gap-4 text-base leading-relaxed text-white/75 md:text-lg">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-accent-main text-center text-xs font-bold leading-6 text-accent-main">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Core values: three I's. */}
        <div className="mt-24">
          <p className="text-sm text-accent-main">Core values</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-off-white md:text-4xl">
            The three I&apos;s we hold each other to
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {COPY.coreValues.map((value, index) => (
              <li
                key={value.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-accent-main/60"
                style={{ "--i": index } as React.CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[9rem] font-black leading-none text-accent-main/25 transition-colors group-hover:text-accent-main/40"
                >
                  I
                </span>
                <h3 className="relative font-display text-2xl font-extrabold text-off-white">
                  {value.name}
                </h3>
                <p className="relative mt-4 max-w-xs leading-relaxed text-white/70">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
