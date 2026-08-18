import type { MetadataRoute } from "next";
import { DIGEST_ENTRIES, SITE_URL } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/digest/`, changeFrequency: "monthly", priority: 0.9 },
    ...DIGEST_ENTRIES.map((entry) => ({
      url: `${SITE_URL}/digest/${entry.slug}/`,
      ...(entry.publishedAt && { lastModified: entry.publishedAt }),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: entry.panels.map(({ src }) => `${SITE_URL}${src}`),
    })),
  ];
}
