import { getSanityClient } from '@/sanity/client'

export interface SanityPage {
  _id: string
  title: string
  slug: { current: string }
  body: unknown[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: { asset: { url: string } }
  }
}

export async function getMarketingPageBySlug(slug: string): Promise<SanityPage | null> {
  const client = await getSanityClient()
  return client.fetch<SanityPage | null>(
    `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
      _id,
      title,
      slug,
      body,
      seo
    }`,
    { slug },
    { next: { revalidate: 120 } },
  )
}

export async function getHomepageBySlug(slug: string): Promise<SanityPage | null> {
  const client = await getSanityClient()
  return client.fetch<SanityPage | null>(
    `*[_type == "page" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
      _id,
      title,
      slug,
      body,
      seo
    }`,
    { slug },
    { next: { revalidate: 60 } },
  )
}

export async function getAllPageSlugs(): Promise<string[]> {
  const client = await getSanityClient()
  const pages = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "page" && !(_id in path("drafts.**"))]{slug}`,
  )
  return pages.map((p) => p.slug.current)
}
