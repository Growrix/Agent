import { db } from '@/server/db/client'
import type { CallbackRequest, Prisma } from '@prisma/client'

export async function createCallbackRequest(
  data: Prisma.CallbackRequestCreateInput,
): Promise<CallbackRequest> {
  return db.callbackRequest.create({ data })
}

export async function getCallbackRequestsPaginated(opts: {
  page: number
  limit: number
  status?: string
}): Promise<{ items: CallbackRequest[]; total: number }> {
  const where: Prisma.CallbackRequestWhereInput = opts.status
    ? { status: opts.status }
    : {}

  const [items, total] = await db.$transaction([
    db.callbackRequest.findMany({
      where,
      skip: (opts.page - 1) * opts.limit,
      take: opts.limit,
      orderBy: { createdAt: 'desc' },
    }),
    db.callbackRequest.count({ where }),
  ])

  return { items, total }
}

export async function updateCallbackRequestStatus(
  id: string,
  status: string,
): Promise<CallbackRequest> {
  return db.callbackRequest.update({
    where: { id },
    data: { status, updatedAt: new Date() },
  })
}
