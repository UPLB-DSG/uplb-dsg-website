import Link from "next/link";
import ContainedImage from "@/components/contained-image";
import { WORKSHOPS } from "@/lib/content";

export default function WorkshopsSection() {
  return (
    <section id="workshops" aria-labelledby="workshops-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 lg:px-12 py-20 lg:py-24">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 id="workshops-heading" className="font-display text-4xl font-extrabold text-off-white md:text-5xl">
          Workshops
        </h2>
        <p className="max-w-md leading-relaxed text-white/70">
          Hands-on sessions run by the guild, from members-only training camps to
          free online workshops open to every UPLB student.
        </p>
      </div>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORKSHOPS.map((workshop) => (
          <li key={workshop.slug}>
            <Link
              href={`/events/${workshop.slug}`}
              prefetch={false}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-dark-gray transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
            >
              <ContainedImage
                image={workshop.images[0]}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[4/3]"
              />
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="text-sm text-accent-text">{workshop.date}</p>
                <h3 className="font-display text-xl font-bold leading-tight text-off-white group-hover:underline">
                  {workshop.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-white/70">{workshop.description}</p>
                {workshop.audience && <p className="mt-auto pt-2 text-sm text-white/60">{workshop.audience}</p>}
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
