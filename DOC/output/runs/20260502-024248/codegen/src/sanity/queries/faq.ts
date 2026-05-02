import { getSanityClient } from '@/sanity/client'

export interface SanityFaqItem {
  _id: string
  question: string
  answer: string
  category?: string
  order?: number
}

export async function getFaqItems(): Promise<SanityFaqItem[]> {
  const client = await getSanityClient()
  try {
    return await client.fetch<SanityFaqItem[]>(
      `*[_type == "faqItem" && !(_id in path("drafts.**"))] | order(order asc){
        _id, question, answer, category, order
      }`,
      {},
      { next: { revalidate: 120 } },
    )
  } catch {
    return []
  }
}
