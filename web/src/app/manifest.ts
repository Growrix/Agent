import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Summit Ridge Roofing",
    short_name: "Summit Ridge",
    description: "Inspection-first roofing platform for homeowners and storm response.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f1",
    theme_color: "#0f3a66",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  };
}



