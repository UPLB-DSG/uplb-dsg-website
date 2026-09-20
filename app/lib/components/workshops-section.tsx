import Link from "next/link";
import ContainedImage from "@/components/contained-image";
import Lottie from "@/components/lottie";
import { WORKSHOPS } from "@/lib/data";

export default function WorkshopsSection() {
  return (
    <div id="workshops" className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
      <section className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-4">
            <Lottie src="/lottie/isometric.json" className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
            <h2 className="font-display text-4xl font-bold text-white tracking-wide">
              WORKSHOP <span className="text-accent-main">SERIES</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Hands-on sessions run by the guild, from members-only training camps to
            free online workshops open to every UPLB student.
          </p>
        </div>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSHOPS.map((workshop, index) => (
            <li key={workshop.slug} className="reveal" style={{ "--i": index } as React.CSSProperties}>
              <Link
                href={`/events/${workshop.slug}`}
                prefetch={false}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-gray transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent-main hover:shadow-[0_8px_30px_rgba(114,48,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {workshop.images[0] ? (
                  <ContainedImage
                    image={workshop.images[0]}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3]"
                  />
                ) : (
                  <div className="grid aspect-[4/3] place-items-center bg-black text-xs text-white/40">
                    Poster coming soon
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <p className="text-sm text-accent-main">
                    {workshop.date}
                  </p>
                  <h3 className="font-display text-xl font-bold leading-tight text-white">
                    {workshop.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
                    {workshop.description}
                  </p>
                  {workshop.audience && (
                    <p className="text-xs text-white/50">{workshop.audience}</p>
                  )}
                  <span className="mt-auto inline-block pt-2 font-bold text-white group-hover:text-headline-via">
                    Read more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
