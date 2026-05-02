import { getSanityClient } from '@/sanity/client'

export interface SanityServiceArea {
  _id: string
  title: string
  slug: { current: string }
  suburb: string
  region?: string
  localCopy?: unknown[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export async function getAllServiceAreas(): Promise<SanityServiceArea[]> {
  const client = await getSanityClient()
  return client.fetch<SanityServiceArea[]>(
    `*[_type == "serviceArea" && !(_id in path("drafts.**"))] | order(title asc){
      _id, title, slug, suburb, region
    }`,
    {},
    { next: { revalidate: 120 } },
  )
}

export async function getServiceAreaBySlug(slug: string): Promise<SanityServiceArea | null> {
  const client = await getSanityClient()
  return client.fetch<SanityServiceArea | null>(
    `*[_type == "serviceArea" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
      _id, title, slug, suburb, region, localCopy, seo
    }`,
    { slug },
    { next: { revalidate: 120 } },
  )
}

export async function getAllServiceAreaSlugs(): Promise<string[]> {
  const client = await getSanityClient()
  const areas = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "serviceArea" && !(_id in path("drafts.**"))]{slug}`,
  )
  return areas.map((a) => a.slug.current)
}
