import type { Metadata } from "next";
import DigestCard from "@/components/digest-card";
import { DIGEST_ENTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Data Digest | UPLB Data Science Guild",
  description:
    "Explore visual explainers from the UPLB Data Science Guild covering AI, statistics, computing, and data science.",
  alternates: { canonical: "/digest/" },
};

export default function DigestIndexPage() {
  return (
    <div className="min-h-screen bg-background px-6 pt-32 pb-24 text-off-white">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent-main">
            Small bytes, big insights
          </p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">
            DATA <span className="text-accent-main">DIGEST</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70 md:text-xl">
            The guild&apos;s visual series for learning data science one concept at a time.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIGEST_ENTRIES.map((entry) => (
            <DigestCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
