import PastEvents from "@/components/past-events";
import { PAST_EVENTS, UPCOMING_EVENT } from "@/lib/data";

export default function EventsSection() {
  return (
    <div
      id="events"
      className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32 scroll-mt-24"
    >
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-display text-4xl font-bold text-white tracking-wide">
          UPCOMING <span className="text-accent-main">EVENT</span>
        </h2>

        <div className="flex flex-col gap-6 w-full">
          <div className="w-full relative md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-main/20 via-black to-accent-secondary/20" />

            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>

            <div className="relative md:absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end pt-32 p-6 md:p-12">
              <p className="text-accent-secondary font-mono text-sm mb-3 uppercase tracking-wider">
                {UPCOMING_EVENT.date}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {UPCOMING_EVENT.title}
              </h3>
              <p className="text-white/70 max-w-3xl text-lg md:text-xl leading-relaxed">
                {UPCOMING_EVENT.description}
              </p>
            </div>
          </div>

          <a
            href={UPCOMING_EVENT.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto self-center md:self-end px-16 py-5 bg-white text-black text-center text-lg font-bold tracking-widest uppercase hover:bg-accent-secondary hover:text-white transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Register
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-display text-4xl font-bold text-white tracking-wide">
          PAST <span className="text-accent-main">EVENTS</span>
        </h2>
        <PastEvents events={PAST_EVENTS} />
      </section>
    </div>
  );
}
