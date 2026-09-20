import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, SITE_URL } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return EVENTS.map(({ slug }) => ({ slug }));
}

function findEvent(slug: string) {
  return EVENTS.find((event) => event.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.description,
    alternates: { canonical: `/events/${event.slug}/` },
    openGraph: {
      type: "article",
      title: event.title,
      description: event.description,
      images: event.images[0]
        ? [{ url: event.images[0].src, alt: event.images[0].alt }]
        : undefined,
      ...(event.publishedAt && { publishedTime: event.publishedAt }),
    },
  };
}

export default async function EventPage({
  params,
}: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = findEvent(slug);
  if (!event) notFound();

  const [cover, ...gallery] = event.images;
  const sectionLabel = event.kind === "workshop" ? "Workshops" : "Events";
  const sectionHref = event.kind === "workshop" ? "/#workshops" : "/#events";

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    ...(event.publishedAt && { startDate: event.publishedAt }),
    ...(event.venue && { location: { "@type": "Place", name: event.venue } }),
    image: event.images.map(({ src }) => `${SITE_URL}${src}`),
    organizer: { "@type": "Organization", name: "UPLB Data Science Guild", url: SITE_URL },
  };

  return (
    <article className="min-h-screen bg-background px-6 pt-28 pb-24 text-off-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
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
            href={sectionHref}
            className="inline-flex min-h-11 items-center text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
          >
            {sectionLabel}
          </Link>
        </nav>

        <header className="mt-8 border-b border-white/10 pb-10">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-main">
            {event.date}
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
            {event.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            {event.description}
          </p>
          {(event.venue || event.audience) && (
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              {event.venue && (
                <div>
                  <dt className="font-bold uppercase tracking-wider text-accent-main">Where</dt>
                  <dd className="mt-1 text-white/70">{event.venue}</dd>
                </div>
              )}
              {event.audience && (
                <div>
                  <dt className="font-bold uppercase tracking-wider text-accent-main">Who</dt>
                  <dd className="mt-1 text-white/70">{event.audience}</dd>
                </div>
              )}
            </dl>
          )}
        </header>

        {cover && (
          <figure className="img-shimmer relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-dark-gray sm:aspect-[16/10]">
            <picture>
              <source media="(max-width: 640px)" srcSet={cover.src.replace(".webp", "-640.webp")} />
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </picture>
          </figure>
        )}

        <section aria-labelledby="event-writeup" className="py-10">
          <h2 id="event-writeup" className="sr-only">
            Writeup
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-white/80">
            {event.writeup.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {gallery.length > 0 && (
          <section aria-labelledby="event-gallery" className="space-y-6">
            <h2 id="event-gallery" className="font-display text-3xl font-bold">
              Gallery
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {gallery.map((image) => (
                <li
                  key={image.src}
                  className="img-shimmer relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-dark-gray"
                >
                  <picture>
                    <source media="(max-width: 640px)" srcSet={image.src.replace(".webp", "-640.webp")} />
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 440px, 100vw"
                      className="object-cover"
                    />
                  </picture>
                </li>
              ))}
            </ul>
          </section>
        )}

        {event.source && (
          <footer className="mt-12 border-t border-white/10 pt-8 text-sm text-white/60">
            Writeup adapted from the guild&apos;s publications team caption.{" "}
            {event.source.href ? (
              <a
                href={event.source.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/30 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
              >
                Source: {event.source.label}
              </a>
            ) : (
              <span>Source: {event.source.label}</span>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
