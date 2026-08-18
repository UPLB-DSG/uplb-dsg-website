import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/data";

const navLinkClass =
  "px-1 py-2 md:px-4 rounded-full hover:bg-white/10 text-center text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase transition-colors text-gray-300 hover:text-white whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main";

export default function Header() {
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[98vw]">
      <nav
        aria-label="Main"
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 md:gap-4 px-2 py-2 md:px-4 md:py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(114,48,255,0.3)]"
      >
        <div className="grid grid-cols-2 items-center gap-0 md:gap-2">
          {NAV_LINKS.left.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center keyhole easter egg */}
        <Link
          href="/"
          className="group relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 shrink-0 rounded-full hover:bg-white/5 transition-colors mx-1 md:mx-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
          aria-label="UPLB Data Science Guild home"
        >
          <div className="absolute inset-0 rounded-full bg-accent-main/0 group-hover:bg-accent-main/30 blur-md transition-all duration-300" />
          <div className="relative z-10 w-3 h-5 md:w-4 md:h-6">
            <Image
              src="/keyhole.png"
              alt=""
              fill
              sizes="16px"
              className="object-contain invert opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-md"
            />
          </div>
        </Link>

        <div className="grid grid-cols-2 items-center gap-0 md:gap-2">
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
