import Image from "next/image";
import Link from "next/link";
import { COPY, FOOTER_LINK_GROUPS, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-off-white/20 bg-dark-gray text-off-white scroll-mt-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between md:gap-8">
        <section className="space-y-4 md:max-w-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <p className="text-lg font-semibold leading-tight">
              {COPY.orgName}
            </p>
          </div>
          <p className="text-sm text-off-white/80 leading-relaxed">
            {COPY.tagline}
          </p>
          <div className="flex items-center gap-4 pt-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 invert"
                />
              </a>
            ))}
          </div>
        </section>

        {FOOTER_LINK_GROUPS.map((group) => (
          <section key={group.heading} className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-main">
              {group.heading}
            </h2>
            <ul className="space-y-2 text-sm text-off-white/80">
              {group.links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </footer>
  );
}
