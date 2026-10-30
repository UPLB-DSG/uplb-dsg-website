import Link from "next/link";
import { CONTACT_EMAIL, COPY, FACEBOOK_URL, UPCOMING } from "@/lib/data";

export default function JoinSection() {
  return (
    <section id="join" aria-labelledby="join-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 lg:px-12 py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <h2 id="join-heading" className="font-display text-4xl font-extrabold text-off-white md:text-5xl">
            How to join
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">{COPY.joinIntro}</p>

          <ol className="mt-10 space-y-6">
            {COPY.joinSteps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="font-display text-2xl font-extrabold leading-8 text-accent-text tabular-nums">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-8 text-off-white">{step.title}</h3>
                  <p className="mt-1 max-w-lg leading-relaxed text-white/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside aria-labelledby="next-heading" className="self-start rounded-2xl border border-white/10 bg-dark-gray p-6 md:p-8">
          <h2 id="next-heading" className="font-display text-2xl font-extrabold text-off-white">
            Next up
          </h2>
          {UPCOMING.length > 0 ? (
            <ul className="mt-5 space-y-4">
              {UPCOMING.map((event) => (
                <li key={event.slug}>
                  <Link
                    href={`/events/${event.slug}`}
                    className="group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
                  >
                    <span className="text-sm text-accent-text">{event.date}</span>
                    <span className="mt-1 block font-bold text-off-white group-hover:underline">{event.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 leading-relaxed text-white/75">{COPY.nothingScheduled}</p>
          )}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center whitespace-nowrap rounded-sm bg-accent-main px-5 font-bold text-off-white transition-colors hover:bg-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark-gray"
          >
            Follow us on Facebook
          </a>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/70">
            <p>
              Not ready to apply? Most of our workshops are open to every UPLB student.{" "}
              <Link href="/#workshops" className="font-semibold text-off-white underline decoration-white/30 underline-offset-4 hover:decoration-off-white">
                See past workshops
              </Link>
            </p>
            <p className="mt-3">
              Questions? Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="[overflow-wrap:anywhere] font-semibold text-off-white underline decoration-white/30 underline-offset-4 hover:decoration-off-white"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
