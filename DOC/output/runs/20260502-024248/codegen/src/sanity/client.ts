import { sanityClient, sanityClientWithToken } from '@/lib/sanity'
import { draftMode } from 'next/headers'

export async function getSanityClient() {
  const { isEnabled } = await draftMode()
  return isEnabled ? sanityClientWithToken : sanityClient
}
