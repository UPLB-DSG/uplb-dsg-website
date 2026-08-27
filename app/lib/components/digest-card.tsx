import Image from "next/image";
import Link from "next/link";
import type { DigestEntry } from "@/lib/data";

export default function DigestCard({ entry }: { entry: DigestEntry }) {
  return (
    <Link
      href={`/digest/${entry.slug}`}
      prefetch={false}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-dark-gray transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent-main hover:shadow-[0_8px_30px_rgba(114,48,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="img-shimmer relative aspect-square overflow-hidden bg-black">
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
