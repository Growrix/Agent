import { createClient } from "@sanity/client";
import { env, isLocalMockMode } from "@/env";

export const sanityClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-05-05",
  useCdn: true,
  token: isLocalMockMode() ? undefined : env.SANITY_API_READ_TOKEN,
});

export function isSanityMockMode() {
  return isLocalMockMode();
}