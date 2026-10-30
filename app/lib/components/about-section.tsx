import Image from "next/image";
import ContainedImage from "@/components/contained-image";
import { COPY } from "@/lib/data";
import { DIGEST_ENTRIES, EVENTS, PAST_EVENTS, WORKSHOPS } from "@/lib/content";

// Facts counted from the content itself, so they never drift from what the site shows.
const firstYear = Math.min(...EVENTS.map((event) => Number(event.publishedAt?.slice(0, 4) ?? 9999)));
const FACTS = [
  { value: COPY.memberCount, label: "members" },
  { value: WORKSHOPS.length, label: "workshops on record" },
  { value: PAST_EVENTS.length, label: `events since ${firstYear}` },
  { value: DIGEST_ENTRIES.length, label: "Data Digest explainers" },
];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="w-full scroll-mt-24 border-t border-white/5 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="img-shimmer relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <picture>
              <source media="(max-width: 640px)" srcSet="/batch-synthesis-640.webp" />
              <Image
                src="/batch-synthesis.webp"
                alt="Members of Synthesis, the guild's newest batch, posing in a campus garden"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </picture>
          </div>

          <div>
            <h2 id="about-heading" className="font-display text-4xl font-extrabold text-off-white md:text-5xl">
              About the guild
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-white/75 md:text-lg">{COPY.whoAreWe}</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm leading-snug text-white/65">{fact.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-off-white tabular-nums md:text-4xl">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/65">
              Past events were run with {COPY.partners.slice(0, -1).join(", ")}, and the{" "}
              {COPY.partners.at(-1)}.
            </p>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <h3 className="text-sm font-semibold text-accent-text">Mission</h3>
            <p className="mt-3 font-display text-3xl font-extrabold leading-tight text-off-white md:text-4xl lg:text-5xl">
              {COPY.mission}
            </p>
            <h3 className="mt-10 text-sm font-semibold text-accent-text">Vision</h3>
            <ul className="mt-3 space-y-3">
              {COPY.vision.map((item) => (
                <li key={item} className="max-w-xl leading-relaxed text-white/75 md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ContainedImage
            image={{ src: "/mission-vision.webp", alt: COPY.missionImageAlt }}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/3] rounded-xl border border-white/10"
          />
        </div>

        <div className="mt-20 lg:mt-28">
          <h3 className="font-display text-3xl font-extrabold text-off-white md:text-4xl">
            Integrity, interdependence, innovation
          </h3>
          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {COPY.coreValues.map((value) => (
              <div key={value.name} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
                <dt className="font-display text-xl font-extrabold text-off-white">{value.name}</dt>
                <dd className="max-w-2xl leading-relaxed text-white/70">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
