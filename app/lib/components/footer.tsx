import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, COPY, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="w-full scroll-mt-24 border-t border-white/10 bg-dark-gray text-off-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 lg:px-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="space-y-4 md:max-w-md">
          <div className="flex items-center gap-3">
            <Image src="/logo.webp" alt="" width={40} height={40} className="h-10 w-10" />
            <p className="text-lg font-semibold leading-tight">{COPY.orgName}</p>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            University of the Philippines Los Baños. Write to us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="[overflow-wrap:anywhere] font-semibold text-off-white underline decoration-white/30 underline-offset-4 hover:decoration-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
          <ul className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
                >
                  <Image src={social.icon} alt="" width={20} height={20} className="h-5 w-5 invert" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 text-sm text-white/75 md:grid-cols-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm transition-colors hover:text-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl space-y-2 border-t border-white/10 px-6 py-5 lg:px-12 text-sm leading-relaxed text-white/60">
        <p>
          Website by{" "}
          <a
            href={COPY.credits.lead.href}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap text-white/85 underline decoration-white/30 underline-offset-4 hover:text-off-white hover:decoration-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
          >
            {COPY.credits.lead.name}
          </a>{" "}
          (lead) with{" "}
          {/* Names never split across lines. */}
          {new Intl.ListFormat("en", { type: "conjunction" })
            .formatToParts(COPY.credits.contributors)
            .map((part, i) => (part.type === "element" ? <span key={i} className="whitespace-nowrap">{part.value}</span> : part.value))}
          .
        </p>
        <p>© {new Date().getFullYear()} {COPY.orgName}.</p>
      </div>
    </footer>
  );
}
