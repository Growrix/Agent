import { getSanityClient } from '@/sanity/client'

export interface SanityTestimonial {
  _id: string
  name: string
  suburb?: string
  rating: number
  body: string
  approved: boolean
  service?: { title: string; slug: { current: string } }
  publishedAt?: string
}

export async function getApprovedTestimonials(): Promise<SanityTestimonial[]> {
  const client = await getSanityClient()
  try {
    return await client.fetch<SanityTestimonial[]>(
      `*[_type == "testimonial" && approved == true && !(_id in path("drafts.**"))] | order(publishedAt desc){
        _id, name, suburb, rating, body, approved, publishedAt,
        service->{ title, slug }
      }`,
      {},
      { next: { revalidate: 120 } },
    )
  } catch {
    return []
  }
}
