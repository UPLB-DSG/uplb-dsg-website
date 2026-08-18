import PastEvents from "@/components/past-events";
import { PAST_EVENTS } from "@/lib/data";

export default function EventsSection() {
  return (
    <div
      id="events"
      className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-display text-4xl font-bold text-white tracking-wide">
          PAST <span className="text-accent-main">EVENTS</span>
        </h2>
        <PastEvents events={PAST_EVENTS} />
      </section>
    </div>
  );
}
