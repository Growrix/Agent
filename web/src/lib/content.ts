import { content } from "@/content/en-US/surfaces";

export type ContentPath = string;

const getPathValue = (obj: unknown, path: string): unknown => {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (typeof acc === "object" && acc !== null && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export const t = (path: ContentPath): string => {
  const value = getPathValue(content, path);
  if (typeof value === "string") {
    return value;
  }
  return path;
};

export const allContent = content;
