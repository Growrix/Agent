import type { Metadata } from "next";

export function seoMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}
