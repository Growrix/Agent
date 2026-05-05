import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  SANITY_API_READ_TOKEN: z.string().min(1),
  SANITY_WEBHOOK_SECRET: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().email().or(z.literal("plumbing@example.com")),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
  SENTRY_AUTH_TOKEN: z.string().min(1),
  SENTRY_ORG: z.string().min(1),
  SENTRY_PROJECT: z.string().min(1),
  AXIOM_DATASET: z.string().min(1),
  AXIOM_TOKEN: z.string().min(1),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1),
  TURNSTILE_SECRET_KEY: z.string().min(1),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
  SANITY_WEBHOOK_SECRET: process.env.SANITY_WEBHOOK_SECRET,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
  SENTRY_ORG: process.env.SENTRY_ORG,
  SENTRY_PROJECT: process.env.SENTRY_PROJECT,
  AXIOM_DATASET: process.env.AXIOM_DATASET,
  AXIOM_TOKEN: process.env.AXIOM_TOKEN,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
});

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment configuration:\n${parsedEnv.error.issues
      .map((issue) => `- ${issue.path.join(".")}: ${issue.message}`)
      .join("\n")}`,
  );
}

export const env = Object.freeze(parsedEnv.data);

export function isLocalMockMode() {
  return (
    env.NEXT_PUBLIC_SANITY_PROJECT_ID === "demo-project" &&
    env.RESEND_API_KEY === "resend_test_key" &&
    env.TURNSTILE_SECRET_KEY === "turnstile-demo-secret-key"
  );
}