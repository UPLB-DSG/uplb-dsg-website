import Link from "next/link";
import DigestCard from "@/components/digest-card";
import { DIGEST_ENTRIES } from "@/lib/data";

export default function DataDigestSection() {
  return (
    <section id="digest" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-accent-main">
            Small bytes, big insights
          </p>
          <h2 className="font-display text-4xl font-bold tracking-wide text-white md:text-5xl">
            DATA <span className="text-accent-main">DIGEST</span>
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Visual explainers that make data science concepts easier to understand.
          </p>
        </div>
        <Link
          href="/digest"
          className="inline-flex min-h-11 w-max items-center rounded-sm border border-white/20 px-5 font-bold text-white transition-colors hover:border-accent-main hover:text-headline-via focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
        >
          View all digests →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DIGEST_ENTRIES.slice(0, 3).map((entry) => (
          <DigestCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </section>
  );
}
