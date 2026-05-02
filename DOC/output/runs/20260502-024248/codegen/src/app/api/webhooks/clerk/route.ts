import { NextRequest, NextResponse } from 'next/server'
import { Webhook } from 'svix'
import { env } from '@/env'
import { syncUserFromClerk } from '@/server/services/users'
import { logger } from '@/lib/logger'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text()
    const headers = {
      'svix-id': req.headers.get('svix-id') ?? '',
      'svix-timestamp': req.headers.get('svix-timestamp') ?? '',
      'svix-signature': req.headers.get('svix-signature') ?? '',
    }

    const wh = new Webhook(env.CLERK_WEBHOOK_SIGNING_SECRET)
    let event: { type: string; data: Record<string, unknown> }

    try {
      event = wh.verify(payload, headers) as { type: string; data: Record<string, unknown> }
    } catch {
      logger.warn({ message: 'Clerk webhook signature verification failed' })
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const supportedEvents = ['user.created', 'user.updated', 'user.deleted']
    if (supportedEvents.includes(event.type)) {
      await syncUserFromClerk(event as Parameters<typeof syncUserFromClerk>[0])
    }

    logger.info({ message: 'Clerk webhook processed', type: event.type })
    return NextResponse.json({ received: true })
  } catch (err) {
    logger.error({ message: 'Clerk webhook error', error: String(err) })
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
