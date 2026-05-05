import { siteCopy, type ContentKey } from "@/content/site-copy";

export function copy(key: ContentKey) {
  return siteCopy[key];
}