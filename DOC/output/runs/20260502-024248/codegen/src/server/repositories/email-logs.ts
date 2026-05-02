import { db } from '@/server/db/client'
import type { EmailLog, EmailStatus, Prisma } from '@prisma/client'

export async function createEmailLog(
  data: Prisma.EmailLogCreateInput,
): Promise<EmailLog> {
  return db.emailLog.create({ data })
}

export async function updateEmailLogByProviderId(
  providerMessageId: string,
  update: Partial<{ status: EmailStatus; error: string }>,
): Promise<void> {
  await db.emailLog.updateMany({
    where: { providerMessageId },
    data: { ...update, updatedAt: new Date() },
  })
}

export async function findEmailLogByProviderId(
  providerMessageId: string,
): Promise<EmailLog | null> {
  return db.emailLog.findFirst({ where: { providerMessageId } })
}
