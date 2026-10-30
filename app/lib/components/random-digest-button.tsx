"use client";

import { useRouter } from "next/navigation";

// Random sample: open a random digest.
export default function RandomDigestButton({ slugs }: { slugs: string[] }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/digest/${slugs[Math.floor(Math.random() * slugs.length)]}`)}
      className="inline-flex min-h-11 w-max shrink-0 items-center whitespace-nowrap rounded-sm border border-white/30 px-5 font-bold text-off-white transition-colors hover:border-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
    >
      Random digest
    </button>
  );
}
