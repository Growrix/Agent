import { upsertUserFromClerk, deleteUserByClerkId, findUserByClerkId } from '@/server/repositories/users'

export async function syncUserFromClerk(event: {
  type: 'user.created' | 'user.updated' | 'user.deleted'
  data: {
    id: string
    email_addresses: Array<{ email_address: string; id: string }>
    primary_email_address_id?: string
    first_name?: string | null
    last_name?: string | null
    image_url?: string | null
  }
}) {
  if (event.type === 'user.deleted') {
    await deleteUserByClerkId(event.data.id)
    return
  }

  const primaryEmail = event.data.email_addresses.find(
    (e) => e.id === event.data.primary_email_address_id,
  )
  const email = primaryEmail?.email_address ?? event.data.email_addresses[0]?.email_address ?? ''

  const firstName = event.data.first_name ?? ''
  const lastName = event.data.last_name ?? ''
  const fullName = [firstName, lastName].filter(Boolean).join(' ') || null

  await upsertUserFromClerk({
    clerkUserId: event.data.id,
    email,
    fullName,
    avatarUrl: event.data.image_url ?? null,
  })
}
