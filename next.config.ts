import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Hostinger shared hosting (upload the `out/` folder to public_html).
  output: "export",
  // Apache serves folder/index.html — produces clean URLs like /about/.
  trailingSlash: true,
  // No Next.js image optimizer on static hosting; serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
