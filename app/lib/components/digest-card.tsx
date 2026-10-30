import Image from "next/image";
import Link from "next/link";
import type { DigestEntry } from "@/lib/data";

export default function DigestCard({ entry }: { entry: DigestEntry }) {
  return (
    <Link
      href={`/digest/${entry.slug}`}
      prefetch={false}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-dark-gray transition-colors hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
    >
      <div className="img-shimmer relative aspect-square overflow-hidden bg-black">
        <Image
          src={`/digest/${entry.slug}/cover.webp`}
          alt={entry.panels[0].alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-sm text-accent-text">
          {entry.date}
        </p>
        <h3 className="font-display text-2xl font-bold leading-tight text-off-white group-hover:underline">
          {entry.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
          {entry.description}
        </p>
        {entry.contentBy && (
          <p className="text-sm text-white/60">
            By <span className="text-white/85">{entry.contentBy}</span>
          </p>
        )}
      </div>
    </Link>
  );
}
