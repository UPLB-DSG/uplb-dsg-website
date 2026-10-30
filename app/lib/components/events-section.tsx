import Link from "next/link";
import ContainedImage from "@/components/contained-image";
import { PAST_EVENTS } from "@/lib/data";

const year = (date: string) => date.match(/\d{4}/)?.[0] ?? "";

// Vertical timeline, newest first, with a year marker whenever the year changes.
// The home page shows the latest few; /events shows them all.
export function EventsTimeline({ limit }: { limit?: number }) {
  const events = PAST_EVENTS.slice(0, limit);
  return (
    <ol className="relative border-l border-white/15 pl-6 sm:pl-10">
      {events.map((event, index) => {
        const showYear = index === 0 || year(event.date) !== year(events[index - 1].date);
        return (
          <li key={event.slug} className="relative pb-10 last:pb-0">
            {showYear && (
              <p className="mb-4 -ml-6 flex items-center gap-3 sm:-ml-10">
                <span className="h-px w-6 bg-accent-main sm:w-10" aria-hidden="true" />
                <span className="font-display text-2xl font-bold text-accent-text">{year(event.date)}</span>
              </p>
            )}
            <span
              aria-hidden="true"
              className="absolute -left-6 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-main bg-background sm:-left-10"
            />
            <Link
              href={`/events/${event.slug}`}
              prefetch={false}
              className="group grid gap-5 rounded-2xl border border-white/10 bg-dark-gray p-4 transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white sm:grid-cols-[220px_1fr] sm:p-5"
            >
              {event.images[0] ? (
                <ContainedImage
                  image={event.images[0]}
                  sizes="(min-width: 640px) 220px, 100vw"
                  className="aspect-[4/3] rounded-xl sm:aspect-square"
                />
              ) : (
                <div className="grid aspect-[4/3] place-items-center rounded-xl bg-black text-sm text-white/60 sm:aspect-square">
                  Photos coming soon
                </div>
              )}
              <div className="flex flex-col gap-2">
                <p className="text-sm text-accent-text">{event.date}</p>
                <h3 className="font-display text-2xl font-bold leading-tight text-off-white group-hover:underline">{event.title}</h3>
                {event.venue && <p className="text-sm text-white/60">{event.venue}</p>}
                <p className="leading-relaxed text-white/70">{event.description}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

export default function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 lg:px-12 py-20 lg:py-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 id="events-heading" className="font-display text-4xl font-extrabold text-off-white md:text-5xl">
          Recent events
        </h2>
        <p className="max-w-md leading-relaxed text-white/70">
          Symposia, orientations, quiz nights, and outreach, from the first
          Data Horizons to this year.
        </p>
      </div>
      <div className="mt-10">
        <EventsTimeline limit={4} />
      </div>
      <Link
        href="/events"
        className="mt-10 inline-flex min-h-11 items-center whitespace-nowrap rounded-sm border border-white/30 px-5 font-bold text-off-white transition-colors hover:border-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
      >
        All {PAST_EVENTS.length} events
      </Link>
    </section>
  );
}
