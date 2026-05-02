import { getSanityClient } from '@/sanity/client'

export interface SanityService {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  body?: unknown[]
  icon?: string
  featuredImage?: { asset: { url: string }; alt?: string }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: { asset: { url: string } }
  }
}

export async function getAllServices(): Promise<SanityService[]> {
  const client = await getSanityClient()
  return client.fetch<SanityService[]>(
    `*[_type == "service" && !(_id in path("drafts.**"))] | order(title asc){
      _id, title, slug, excerpt, icon, featuredImage
    }`,
    {},
    { next: { revalidate: 60 } },
  )
}

export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  const client = await getSanityClient()
  return client.fetch<SanityService | null>(
    `*[_type == "service" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
      _id, title, slug, excerpt, body, icon, featuredImage, seo
    }`,
    { slug },
    { next: { revalidate: 60 } },
  )
}

export async function getAllServiceSlugs(): Promise<string[]> {
  const client = await getSanityClient()
  const services = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "service" && !(_id in path("drafts.**"))]{slug}`,
  )
  return services.map((s) => s.slug.current)
}
