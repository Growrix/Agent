import { z } from 'zod'
import { createCallbackRequest } from '@/server/repositories/callback-requests'
import { sendEmail } from '@/server/services/email'
import { captureEvent } from '@/server/services/analytics'
import { ValidationError } from '@/server/errors'
import { AnalyticsEvents } from '@/lib/analytics-events'

export const createCallbackRequestSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^(\+61|0)[2-9]\d{8}$/, 'Enter a valid Australian phone number'),
  preferredTime: z.string().max(100).optional().default(''),
  suburb: z.string().max(100).optional().default(''),
  message: z.string().max(500).optional().default(''),
  sourcePage: z.string().optional().default('/'),
  honeypot: z.string().max(0, 'Bot detected').optional(),
})

export type CreateCallbackRequestInput = z.infer<typeof createCallbackRequestSchema>

export async function createCallbackRequestService(input: CreateCallbackRequestInput) {
  if (input.honeypot) {
    throw new ValidationError('Submission rejected')
  }

  const callback = await createCallbackRequest({
    name: input.name,
    phone: input.phone,
    preferredTime: input.preferredTime,
    suburb: input.suburb,
    message: input.message,
    sourcePage: input.sourcePage,
    status: 'new',
  })

  await Promise.allSettled([
    sendEmail({
      template: 'callback-request-notification',
      to: process.env.RESEND_REPLY_TO!,
      props: {
        name: input.name,
        phone: input.phone,
        preferredTime: input.preferredTime,
        suburb: input.suburb,
        message: input.message,
        callbackId: callback.id,
      },
    }),
    captureEvent({
      event: AnalyticsEvents.CALLBACK_REQUESTED,
      distinctId: 'anonymous',
      properties: {
        suburb: input.suburb,
        preferred_time: input.preferredTime,
        source_page: input.sourcePage,
      },
    }),
  ])

  return callback
}
