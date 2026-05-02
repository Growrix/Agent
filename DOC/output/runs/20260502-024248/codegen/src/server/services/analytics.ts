import { posthogNode } from '@/lib/posthog'
import { logger } from '@/lib/logger'
import type { AnalyticsEvent } from '@/lib/analytics-events'

export async function captureEvent(opts: {
  event: AnalyticsEvent
  distinctId: string
  properties?: Record<string, unknown>
}): Promise<void> {
  try {
    posthogNode.capture({
      distinctId: opts.distinctId,
      event: opts.event,
      properties: opts.properties,
    })
    await posthogNode.flushAsync()
  } catch (err) {
    logger.warn({ message: 'PostHog capture failed', error: String(err) })
  }
}

export async function identifyUser(opts: {
  distinctId: string
  properties: Record<string, unknown>
}): Promise<void> {
  try {
    posthogNode.identify({
      distinctId: opts.distinctId,
      properties: opts.properties,
    })
    await posthogNode.flushAsync()
  } catch (err) {
    logger.warn({ message: 'PostHog identify failed', error: String(err) })
  }
}
