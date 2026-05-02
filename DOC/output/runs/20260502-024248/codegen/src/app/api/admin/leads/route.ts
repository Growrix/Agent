import { NextRequest } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { z } from 'zod'
import { listLeadEnquiriesService } from '@/server/services/lead-enquiries'
import { successResponse, errorResponse, requestId } from '@/lib/api-response'
import { checkRateLimit, getClientIp } from '@/lib/rate-limit'
import type { LeadStatus } from '@prisma/client'

export const runtime = 'nodejs'

const querySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: z.enum(['new', 'contacted', 'quoted', 'converted', 'closed']).optional(),
})

export async function GET(req: NextRequest) {
  const rid = requestId()
  try {
    const { userId } = await auth()
    if (!userId) {
      return errorResponse({ code: 'UNAUTHORIZED', message: 'Unauthorised', statusCode: 401 }, '/api/admin/leads', rid)
    }

    const ip = getClientIp(req)
    checkRateLimit(`admin_leads:${userId}`, { windowMs: 60_000, max: 60 })

    const { searchParams } = new URL(req.url)
    const query = querySchema.parse({
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
      status: searchParams.get('status') ?? undefined,
    })

    const { items, total } = await listLeadEnquiriesService({
      page: query.page,
      limit: query.limit,
      status: query.status as LeadStatus | undefined,
    })

    return successResponse({
      data: items,
      meta: {
        total,
        page: query.page,
        limit: query.limit,
        totalPages: Math.ceil(total / query.limit),
      },
    })
  } catch (err) {
    return errorResponse(err, '/api/admin/leads', rid)
  }
}
