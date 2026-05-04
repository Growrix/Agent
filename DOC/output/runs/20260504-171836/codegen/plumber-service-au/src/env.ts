const requiredServerEnv = [
  "SANITY_API_READ_TOKEN",
  "SANITY_WEBHOOK_SECRET",
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "OPENAI_API_KEY",
  "OPENAI_MODEL",
] as const;

const requiredPublicEnv = [
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_DATASET",
  "NEXT_PUBLIC_POSTHOG_KEY",
  "NEXT_PUBLIC_POSTHOG_HOST",
] as const;

function assertDefined(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

export function validateEnv() {
  for (const key of requiredServerEnv) {
    assertDefined(key, process.env[key]);
  }

  for (const key of requiredPublicEnv) {
    assertDefined(key, process.env[key]);
  }
}
