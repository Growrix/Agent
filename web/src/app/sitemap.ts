import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://summitridge.example";
  const routes = ["", "/services", "/storm-damage", "/materials", "/projects", "/financing", "/contact", "/faq", "/about", "/areas", "/sign-in", "/sign-up"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}



