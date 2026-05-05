export const defaultLocale = "en-US" as const;

export const resolveLocale = (candidate?: string): string => {
  if (!candidate) {
    return defaultLocale;
  }
  return candidate;
};
