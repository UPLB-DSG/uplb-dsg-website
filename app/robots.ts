import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Cloudflare rewrites mailto links to /cdn-cgi/l/email-protection, which 404s for crawlers.
    rules: { userAgent: "*", allow: "/", disallow: "/cdn-cgi/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
