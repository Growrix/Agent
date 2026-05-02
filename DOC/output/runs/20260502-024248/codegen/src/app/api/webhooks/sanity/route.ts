import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { env } from '@/env'
import { logger } from '@/lib/logger'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('sanity-webhook-signature') ?? ''
    const secret = env.SANITY_REVALIDATE_SECRET

    // Verify the secret token sent by Sanity
    if (!signature.includes(secret)) {
      logger.warn({ message: 'Sanity webhook signature mismatch' })
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const body = await req.json() as {
      _type?: string
      slug?: { current?: string }
    }

    const type = body._type
    const slug = body.slug?.current

    // Revalidate based on document type
    if (type === 'post') {
      revalidatePath('/blog', 'page')
      if (slug) revalidatePath(`/blog/${slug}`, 'page')
    } else if (type === 'service') {
      revalidatePath('/services', 'page')
      if (slug) revalidatePath(`/services/${slug}`, 'page')
    } else if (type === 'serviceArea') {
      revalidatePath('/areas', 'page')
      if (slug) revalidatePath(`/areas/${slug}`, 'page')
    } else if (type === 'testimonial') {
      revalidatePath('/testimonials', 'page')
    } else if (type === 'faqItem') {
      revalidatePath('/faq', 'page')
    } else if (type === 'page') {
      if (slug) revalidatePath(`/${slug}`, 'page')
      revalidatePath('/', 'page')
    } else {
      revalidatePath('/', 'layout')
    }

    logger.info({ message: 'Sanity revalidation triggered', type, slug })
    return NextResponse.json({ revalidated: true })
  } catch (err) {
    logger.error({ message: 'Sanity webhook error', error: String(err) })
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
