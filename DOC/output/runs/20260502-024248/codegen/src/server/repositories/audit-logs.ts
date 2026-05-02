import { db } from '@/server/db/client'
import type { AuditLog, Prisma } from '@prisma/client'
import crypto from 'crypto'

export async function createAuditLog(data: {
  action: string
  actorId: string
  targetId: string
  targetType: string
  ipAddress?: string
}): Promise<AuditLog> {
  const ipHash = data.ipAddress
    ? crypto.createHash('sha256').update(data.ipAddress).digest('hex')
    : null

  return db.auditLog.create({
    data: {
      action: data.action,
      actorId: data.actorId,
      targetId: data.targetId,
      targetType: data.targetType,
      ipHash,
      occurredAt: new Date(),
    },
  })
}

export async function getAuditLogsForTarget(
  targetType: string,
  targetId: string,
): Promise<AuditLog[]> {
  return db.auditLog.findMany({
    where: { targetType, targetId },
    orderBy: { occurredAt: 'desc' },
    take: 50,
  })
}
