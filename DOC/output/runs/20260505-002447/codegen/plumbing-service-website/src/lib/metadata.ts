import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata(input: MetadataInput): Metadata {
  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      siteName: siteConfig.businessName,
      type: "website",
    },
  };
}