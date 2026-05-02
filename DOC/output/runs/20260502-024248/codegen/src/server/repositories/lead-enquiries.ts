import { db } from '@/server/db/client'
import type { LeadEnquiry, LeadStatus, Prisma } from '@prisma/client'

export async function createLeadEnquiry(
  data: Prisma.LeadEnquiryCreateInput,
): Promise<LeadEnquiry> {
  return db.leadEnquiry.create({ data })
}

export async function getLeadEnquiriesPaginated(opts: {
  page: number
  limit: number
  status?: LeadStatus
}): Promise<{ items: LeadEnquiry[]; total: number }> {
  const where: Prisma.LeadEnquiryWhereInput = opts.status
    ? { status: opts.status }
    : {}

  const [items, total] = await db.$transaction([
    db.leadEnquiry.findMany({
      where,
      skip: (opts.page - 1) * opts.limit,
      take: opts.limit,
      orderBy: { createdAt: 'desc' },
    }),
    db.leadEnquiry.count({ where }),
  ])

  return { items, total }
}

export async function findLeadEnquiryById(id: string): Promise<LeadEnquiry | null> {
  return db.leadEnquiry.findUnique({ where: { id } })
}

export async function updateLeadEnquiryStatus(
  id: string,
  status: LeadStatus,
  assignedToUserId?: string,
): Promise<LeadEnquiry> {
  return db.leadEnquiry.update({
    where: { id },
    data: {
      status,
      ...(assignedToUserId ? { assignedToUserId } : {}),
      updatedAt: new Date(),
    },
  })
}
