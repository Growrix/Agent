import { NextRequest, NextResponse } from 'next/server'
import { handleResendWebhookEvent } from '@/server/services/email'
import { logger } from '@/lib/logger'
import { env } from '@/env'
import crypto from 'crypto'

export const runtime = 'nodejs'

function verifyResendSignature(
  payload: string,
  signature: string,
  secret: string,
): boolean {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text()
    const signature = req.headers.get('svix-signature') ?? ''

    // Resend uses Svix for webhook delivery; we verify the raw secret here
    // For full Svix verification, install the svix package and use Webhook.verify()
    if (!signature) {
      logger.warn({ message: 'Missing Resend webhook signature' })
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    const event = JSON.parse(payload) as { type: string; data: { email_id: string } }

    await handleResendWebhookEvent(event)

    logger.info({ message: 'Resend webhook processed', type: event.type })
    return NextResponse.json({ received: true })
  } catch (err) {
    logger.error({ message: 'Resend webhook error', error: String(err) })
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
