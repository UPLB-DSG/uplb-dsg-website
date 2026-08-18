import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    title: `${entry.title} | Data Digest`,
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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.description,
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

  return (
    <article className="min-h-screen bg-background px-6 pt-28 pb-24 text-off-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto max-w-4xl">
        <Link
          href="/digest"
          className="inline-flex min-h-11 items-center text-sm font-bold text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
        >
          ← All Data Digests
        </Link>

        <header className="mt-8 border-b border-white/10 pb-10">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent-main">
            Data Digest · <time dateTime={entry.publishedAt}>{entry.date}</time>
          </p>
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
          {entry.panels.map((panel, index) => (
            <figure
              key={panel.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black"
            >
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={panel.src.replace(".webp", "-640.webp")}
                />
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 896px) 848px, calc(100vw - 3rem)"
                  className="h-auto w-full"
                />
              </picture>
              <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/60">
                {index + 1} of {entry.panels.length}: {panel.alt}
              </figcaption>
            </figure>
          ))}
        </section>

        <footer className="mt-12 space-y-8 border-t border-white/10 pt-8">
          {(entry.contentBy || entry.layoutBy) && (
            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              {entry.contentBy && (
                <div>
                  <dt className="font-bold uppercase tracking-wider text-accent-main">
                    Content by
                  </dt>
                  <dd className="mt-1 text-white/70">{entry.contentBy}</dd>
                </div>
              )}
              {entry.layoutBy && (
                <div>
                  <dt className="font-bold uppercase tracking-wider text-accent-main">
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
      </div>
    </article>
  );
}
