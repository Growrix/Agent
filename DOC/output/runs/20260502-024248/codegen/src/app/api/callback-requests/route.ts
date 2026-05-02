import { NextRequest } from 'next/server'
import { createCallbackRequestSchema, createCallbackRequestService } from '@/server/services/callback-requests'
import { successResponse, errorResponse, requestId } from '@/lib/api-response'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const rid = requestId()
  try {
    const ip = getClientIp(req)
    checkRateLimit(`callback:${ip}`, { windowMs: 60_000, max: 8 })

    const body: unknown = await req.json()
    const input = createCallbackRequestSchema.parse(body)

    const callback = await createCallbackRequestService(input)

    return successResponse({ id: callback.id, status: callback.status }, 201)
  } catch (err) {
    return errorResponse(err, '/api/callback-requests', rid)
  }
}
