import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DigestCarousel from "@/components/digest-carousel";
import RandomDigestButton from "@/components/random-digest-button";
import { DIGEST_ENTRIES, SITE_URL } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return DIGEST_ENTRIES.map(({ slug }) => ({ slug }));
}

function findEntry(slug: string) {
  return DIGEST_ENTRIES.find((entry) => entry.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/digest/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/digest/${entry.slug}/` },
    openGraph: {
      type: "article",
      title: entry.title,
      description: entry.description,
      images: [{ url: entry.panels[0].src, alt: entry.panels[0].alt }],
      ...(entry.publishedAt && { publishedTime: entry.publishedAt }),
    },
  };
}

export default async function DigestEntryPage({
  params,
}: PageProps<"/digest/[slug]">) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();

  // Entries are newest first: the previous index is newer, the next is older.
  const index = DIGEST_ENTRIES.findIndex((item) => item.slug === slug);
  const newer = DIGEST_ENTRIES[index - 1];
  const older = DIGEST_ENTRIES[index + 1];
  const otherSlugs = DIGEST_ENTRIES.filter((item) => item.slug !== slug).map((item) => item.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
    articleSection: "Data Digest",
    inLanguage: "en-PH",
    image: entry.panels.map(({ src }) => `${SITE_URL}${src}`),
    mainEntityOfPage: `${SITE_URL}/digest/${entry.slug}/`,
    author: { "@type": "Organization", name: "UPLB Data Science Guild" },
    publisher: {
      "@type": "Organization",
      name: "UPLB Data Science Guild",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    ...(entry.publishedAt && { datePublished: entry.publishedAt }),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Data Digest",
        item: `${SITE_URL}/digest/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: entry.title,
        item: `${SITE_URL}/digest/${entry.slug}/`,
      },
    ],
  };

  return (
    <article className="min-h-screen bg-background px-6 pt-28 pb-24 text-off-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-sm font-bold">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
          >
            Home
          </Link>
          <span aria-hidden="true" className="text-white/30">
            /
          </span>
          <Link
            href="/digest"
            className="inline-flex min-h-11 items-center text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
          >
            Data Digest
          </Link>
        </nav>

        <header className="mt-8 border-b border-white/10 pb-10">
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
            {entry.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            {entry.description}
          </p>
        </header>

        <section aria-labelledby="article-copy" className="py-10">
          <h2 id="article-copy" className="sr-only">
            Article
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-white/80">
            {entry.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="visual-story" className="space-y-8">
          <h2 id="visual-story" className="font-display text-3xl font-bold">
            Visual story
          </h2>
          <DigestCarousel panels={entry.panels} />
        </section>

        <footer className="mt-12 space-y-8 border-t border-white/10 pt-8">
          {(entry.contentBy || entry.layoutBy) && (
            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              {entry.contentBy && (
                <div>
                  <dt className="font-bold text-accent-main">
                    Content by
                  </dt>
                  <dd className="mt-1 text-white/70">{entry.contentBy}</dd>
                </div>
              )}
              {entry.layoutBy && (
                <div>
                  <dt className="font-bold text-accent-main">
                    Layout by
                  </dt>
                  <dd className="mt-1 text-white/70">{entry.layoutBy}</dd>
                </div>
              )}
            </dl>
          )}

          {entry.references.length > 0 && (
            <section aria-labelledby="references">
              <h2 id="references" className="font-display text-2xl font-bold">
                References
              </h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-white/70">
                {entry.references.map((reference) => (
                  <li key={reference.label}>
                    {reference.href ? (
                      <a
                        href={reference.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-white/30 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
                      >
                        {reference.label}
                      </a>
                    ) : (
                      reference.label
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </footer>

        <nav aria-label="More digests" className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-[1fr_auto_1fr]">
          {older ? (
            <Link
              href={`/digest/${older.slug}`}
              prefetch={false}
              className="group flex min-h-11 flex-col rounded-xl border border-white/10 p-4 transition-colors hover:border-accent-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
            >
              <span className="text-xs text-white/50">← Older</span>
              <span className="mt-1 font-bold text-white group-hover:text-headline-via">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          <div className="flex items-center justify-center">
            <RandomDigestButton slugs={otherSlugs} />
          </div>
          {newer ? (
            <Link
              href={`/digest/${newer.slug}`}
              prefetch={false}
              className="group flex min-h-11 flex-col rounded-xl border border-white/10 p-4 text-right transition-colors hover:border-accent-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
            >
              <span className="text-xs text-white/50">Newer →</span>
              <span className="mt-1 font-bold text-white group-hover:text-headline-via">{newer.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
