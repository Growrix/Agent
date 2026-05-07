import { siteContent, type SiteContentKey } from "@/content/en-US/site";

export function t(key: SiteContentKey): string {
  return siteContent[key];
}

export type { SiteContentKey };



