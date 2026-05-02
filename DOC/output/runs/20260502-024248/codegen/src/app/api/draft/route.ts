import { NextRequest, NextResponse } from 'next/server'
import { draftMode } from 'next/headers'
import { auth } from '@clerk/nextjs/server'
import { env } from '@/env'
import { redirect } from 'next/navigation'

export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') ?? '/'

  if (secret !== env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const { enable } = await draftMode()
  enable()

  redirect(slug)
}
