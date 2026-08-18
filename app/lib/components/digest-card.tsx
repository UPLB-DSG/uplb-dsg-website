import Image from "next/image";
import Link from "next/link";
import type { DigestEntry } from "@/lib/data";

export default function DigestCard({ entry }: { entry: DigestEntry }) {
  return (
    <Link
      href={`/digest/${entry.slug}`}
      prefetch={false}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-gray transition-colors hover:border-accent-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
    >
      <div className="relative aspect-square overflow-hidden bg-black">
        <Image
          src={`/digest/${entry.slug}/cover.webp`}
          alt={entry.panels[0].alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="font-mono text-xs uppercase tracking-wider text-accent-main">
          {entry.date}
        </p>
        <h3 className="font-display text-2xl font-bold leading-tight text-white">
          {entry.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
          {entry.description}
        </p>
        <span className="inline-block font-bold text-white group-hover:text-headline-via">
          Read digest →
        </span>
      </div>
    </Link>
  );
}
