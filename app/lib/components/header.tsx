import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

const navLinkClass =
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-2 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white md:px-4";

// Split pill: two links each side of the badge, which is the home link.
export default function Header() {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)]">
      <nav
        aria-label="Main"
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 rounded-full border border-white/10 bg-dark-gray/95 px-2 py-1.5 md:gap-3 md:px-3"
      >
        <div className="flex items-center justify-end gap-0.5 md:gap-1">
          {NAV_LINKS.left.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
          aria-label="UPLB Data Science Guild home"
        >
          <Image src="/logo.webp" alt="" width={36} height={36} priority className="h-9 w-9" />
        </Link>

        <div className="flex items-center gap-0.5 md:gap-1">
          {NAV_LINKS.right.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
