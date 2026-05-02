import { NextRequest } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { z } from 'zod'
import { updateLeadStatusService } from '@/server/services/lead-enquiries'
import { successResponse, errorResponse, requestId } from '@/lib/api-response'
import { getClientIp } from '@/lib/rate-limit'
import type { LeadStatus } from '@prisma/client'

export const runtime = 'nodejs'

const bodySchema = z.object({
  status: z.enum(['new', 'contacted', 'quoted', 'converted', 'closed']),
})

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const rid = requestId()
  try {
    const { userId } = await auth()
    if (!userId) {
      return errorResponse({ code: 'UNAUTHORIZED', message: 'Unauthorised', statusCode: 401 }, '/api/admin/leads/[id]/status', rid)
    }

    const { id } = await params
    const body: unknown = await req.json()
    const { status } = bodySchema.parse(body)
    const ip = getClientIp(req)

    const updated = await updateLeadStatusService(id, status as LeadStatus, userId, ip)

    return successResponse({ id: updated.id, status: updated.status })
  } catch (err) {
    return errorResponse(err, '/api/admin/leads/[id]/status', rid)
  }
}
