import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export has no image optimizer server; /_next/image URLs would 404
  // on Cloudflare Pages. Images ship as-is from public/.
  images: { unoptimized: true },
};

export default nextConfig;
