import { NextRequest } from 'next/server'
import { z } from 'zod'
import { createLeadEnquirySchema, createLeadEnquiryService } from '@/server/services/lead-enquiries'
import { successResponse, errorResponse, requestId } from '@/lib/api-response'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const rid = requestId()
  try {
    const ip = getClientIp(req)
    checkRateLimit(`lead:${ip}`, { windowMs: 60_000, max: 10 })

    const body: unknown = await req.json()
    const input = createLeadEnquirySchema.parse(body)

    const lead = await createLeadEnquiryService(input)

    return successResponse({ id: lead.id, status: lead.status }, 201)
  } catch (err) {
    return errorResponse(err, '/api/lead-enquiries', rid)
  }
}
