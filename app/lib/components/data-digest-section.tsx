import Link from "next/link";
import DigestCard from "@/components/digest-card";
import RandomDigestButton from "@/components/random-digest-button";
import { DIGEST_ENTRIES } from "@/lib/content";

export default function DataDigestSection() {
  return (
    <section id="digest" aria-labelledby="digest-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 lg:px-12 py-20 lg:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 id="digest-heading" className="font-display text-4xl font-extrabold text-off-white md:text-5xl">
            Data Digest
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            {DIGEST_ENTRIES.length} short visual explainers written by members, one data science idea at a time.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <RandomDigestButton slugs={DIGEST_ENTRIES.map((entry) => entry.slug)} />
          <Link
            href="/digest"
            className="inline-flex min-h-11 w-max shrink-0 items-center whitespace-nowrap rounded-sm border border-white/30 px-5 font-bold text-off-white transition-colors hover:border-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
          >
            All digests
          </Link>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DIGEST_ENTRIES.slice(0, 4).map((entry) => (
          <DigestCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </section>
  );
}
