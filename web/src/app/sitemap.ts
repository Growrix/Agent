import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/portfolio",
    "/testimonials",
    "/blog",
    "/quote",
    "/contact",
    "/about",
    "/auth/sign-in",
    "/auth/sign-up",
    "/account",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `https://example.com${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
