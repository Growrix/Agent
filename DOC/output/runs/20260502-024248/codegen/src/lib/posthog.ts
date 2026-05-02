import { PostHog } from 'posthog-node'
import { env } from '@/env'

const globalForPostHog = globalThis as unknown as {
  posthogNode: PostHog | undefined
}

export const posthogNode =
  globalForPostHog.posthogNode ??
  new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPostHog.posthogNode = posthogNode
}
