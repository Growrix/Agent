import { z } from 'zod'

const serverSchema = z.object({
  CLERK_SECRET_KEY: z.string().min(1),
  CLERK_WEBHOOK_SIGNING_SECRET: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  DIRECT_URL: z.string().min(1),
  SANITY_API_READ_TOKEN: z.string().min(1),
  SANITY_API_WRITE_TOKEN: z.string().min(1),
  SANITY_REVALIDATE_SECRET: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_ADDRESS: z.string().email(),
  RESEND_REPLY_TO: z.string().email(),
  POSTHOG_API_KEY: z.string().min(1),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
})

const clientSchema = z.object({
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: z.string().min(1),
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: z.string().min(1),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  NEXT_PUBLIC_SANITY_API_VERSION: z.string().min(1),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url(),
})

function parseEnv() {
  const serverResult = serverSchema.safeParse(process.env)
  const clientResult = clientSchema.safeParse(process.env)

  if (!serverResult.success || !clientResult.success) {
    const serverErrors = serverResult.success ? [] : serverResult.error.issues
    const clientErrors = clientResult.success ? [] : clientResult.error.issues
    const allErrors = [...serverErrors, ...clientErrors]
    const missing = allErrors.map((e) => e.path.join('.')).join(', ')
    throw new Error(`❌ Invalid environment variables: ${missing}`)
  }

  return { ...serverResult.data, ...clientResult.data } as const
}

export const env = parseEnv()
