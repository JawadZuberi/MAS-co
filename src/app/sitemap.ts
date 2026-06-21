import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://masfirms.com";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/team",
  "/partnerships",
  "/insights",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
