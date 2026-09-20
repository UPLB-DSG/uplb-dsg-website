import Link from "next/link";
import ContainedImage from "@/components/contained-image";
import { PAST_EVENTS } from "@/lib/data";

// Vertical timeline, newest first, with a year marker whenever the year changes.
export default function EventsSection() {
  const year = (date: string) => date.match(/\d{4}/)?.[0] ?? "";
  return (
    <div id="events" className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
      <section className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl font-bold text-white tracking-wide">
            PAST <span className="text-accent-main">EVENTS</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Symposia, orientations, quiz nights, and outreach, from the first
            Data Horizons to this year.
          </p>
        </div>

        <ol className="relative border-l border-white/15 pl-6 sm:pl-10">
          {PAST_EVENTS.map((event, index) => {
            const showYear = index === 0 || year(event.date) !== year(PAST_EVENTS[index - 1].date);
            return (
              <li key={event.slug} className="reveal relative pb-12 last:pb-0">
                {showYear && (
                  <p className="mb-4 -ml-6 flex items-center gap-3 sm:-ml-10">
                    <span className="h-px w-6 bg-accent-main sm:w-10" aria-hidden="true" />
                    <span className="font-display text-2xl font-bold text-accent-main">{year(event.date)}</span>
                  </p>
                )}
                <span
                  aria-hidden="true"
                  className="absolute -left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-main bg-background sm:-left-10"
                />
                <Link
                  href={`/events/${event.slug}`}
                  prefetch={false}
                  className="group grid gap-5 rounded-2xl border border-white/10 bg-dark-gray p-4 transition-[border-color,box-shadow] duration-300 hover:border-accent-main hover:shadow-[0_8px_30px_rgba(114,48,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main sm:grid-cols-[220px_1fr] sm:p-5"
                >
                  {event.images[0] ? (
                    <ContainedImage
                      image={event.images[0]}
                      sizes="(min-width: 640px) 220px, 100vw"
                      className="aspect-[4/3] rounded-xl sm:aspect-square"
                    />
                  ) : (
                    <div className="grid aspect-[4/3] place-items-center rounded-xl bg-black text-xs text-white/40 sm:aspect-square">
                      Photos coming soon
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-accent-main">{event.date}</p>
                    <h3 className="font-display text-2xl font-bold leading-tight text-white">{event.title}</h3>
                    {event.venue && <p className="text-xs text-white/50">{event.venue}</p>}
                    <p className="text-sm leading-relaxed text-white/70">{event.description}</p>
                    <span className="mt-auto pt-2 font-bold text-white group-hover:text-headline-via">
                      Read the full writeup →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
