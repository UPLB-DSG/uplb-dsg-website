import type { Metadata } from "next";
import Link from "next/link";
import { EventsTimeline } from "@/components/events-section";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Symposia, orientations, quiz nights, and outreach by the UPLB Data Science Guild, newest first.",
  alternates: { canonical: "/events/" },
  openGraph: { url: "/events/", title: "Events", type: "website" },
};

export default function EventsIndexPage() {
  return (
    <div className="min-h-screen bg-background px-6 pt-32 pb-24 text-off-white">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-12">
          <Link
            href="/"
            className="mb-6 inline-flex min-h-11 items-center text-sm font-bold text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
          >
            ← Home
          </Link>
          <h1 className="font-display text-5xl font-extrabold md:text-7xl">Events</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Symposia, orientations, quiz nights, and outreach, newest first. Workshops are listed on the{" "}
            <Link href="/#workshops" className="text-off-white underline decoration-white/30 underline-offset-4 hover:decoration-off-white">
              home page
            </Link>
            .
          </p>
        </header>
        <h2 className="sr-only">All events</h2>
        <EventsTimeline />
      </div>
    </div>
  );
}
