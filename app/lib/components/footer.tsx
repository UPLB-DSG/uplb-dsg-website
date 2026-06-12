import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-off-white/20 bg-dark-gray text-off-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between md:gap-8">
        <section className="space-y-4 md:max-w-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="UPLB Data Science Guild Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <h2 className="text-lg font-semibold leading-tight">UPLB Data Science Guild</h2>
          </div>
          <p className="text-sm text-off-white/80 leading-relaxed">
            The UPLB Data Science Guild is a socio-civic, and pioneer
            organization of UPLB for data science.
          </p>
          <div className="flex items-center gap-4 pt-1">
            <a
              href="https://www.facebook.com/dsguplb"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="h-5 w-5 invert"
              />
            </a>
            <a
              href="https://www.instagram.com/uplbdsg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="h-5 w-5 invert"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/uplbdsg/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="h-5 w-5 invert"
              />
            </a>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-main">
            Guild
          </h3>
          <ul className="space-y-2 text-sm text-off-white/80">
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Mission</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">History</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Team</Link>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-main">
            Activities
          </h3>
          <ul className="space-y-2 text-sm text-off-white/80">
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Workshops</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Competitions</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Community</Link>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent-main">
            Connect
          </h3>
          <ul className="space-y-2 text-sm text-off-white/80">
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Contact</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Membership</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-off-white transition-colors">Partners</Link>
            </li>
          </ul>
        </section>
      </div>

    </footer>
  );
}