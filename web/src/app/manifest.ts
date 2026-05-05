import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Solar Installation Service Company",
    short_name: "Solar Service",
    description: "Modern solar installation frontend experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0b4a3d",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
