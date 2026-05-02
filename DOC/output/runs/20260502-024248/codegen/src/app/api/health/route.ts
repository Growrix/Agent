import { NextResponse } from 'next/server'
import { db } from '@/server/db/client'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`
    return NextResponse.json({
      status: 'ok',
      db: 'ok',
      ts: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json(
      { status: 'error', db: 'unreachable', ts: new Date().toISOString() },
      { status: 503 },
    )
  }
}
