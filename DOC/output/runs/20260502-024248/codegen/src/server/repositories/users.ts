import { db } from '@/server/db/client'
import type { User, Prisma } from '@prisma/client'

export async function findUserByClerkId(clerkUserId: string): Promise<User | null> {
  return db.user.findUnique({ where: { clerkUserId } })
}

export async function findUserById(id: string): Promise<User | null> {
  return db.user.findUnique({ where: { id } })
}

export async function upsertUserFromClerk(data: {
  clerkUserId: string
  email: string
  fullName: string | null
  avatarUrl: string | null
}): Promise<User> {
  return db.user.upsert({
    where: { clerkUserId: data.clerkUserId },
    update: {
      email: data.email,
      fullName: data.fullName,
      avatarUrl: data.avatarUrl,
      updatedAt: new Date(),
    },
    create: {
      clerkUserId: data.clerkUserId,
      email: data.email,
      fullName: data.fullName,
      avatarUrl: data.avatarUrl,
    },
  })
}

export async function deleteUserByClerkId(clerkUserId: string): Promise<void> {
  await db.user.deleteMany({ where: { clerkUserId } })
}
