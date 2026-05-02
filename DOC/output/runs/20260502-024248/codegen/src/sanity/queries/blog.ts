import { getSanityClient } from '@/sanity/client'

export interface SanityPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  coverImage?: { asset: { url: string }; alt?: string }
  publishedAt: string
  author?: {
    name: string
    avatar?: { asset: { url: string } }
  }
  categories?: Array<{ title: string; slug: { current: string } }>
  body?: unknown[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: { asset: { url: string } }
  }
}

export async function getPublishedPosts(): Promise<SanityPost[]> {
  const client = await getSanityClient()
  return client.fetch<SanityPost[]>(
    `*[_type == "post" && !(_id in path("drafts.**")) && publishedAt <= now()] | order(publishedAt desc){
      _id, title, slug, excerpt, coverImage, publishedAt,
      author->{ name, avatar },
      categories[]->{ title, slug }
    }`,
    {},
    { next: { revalidate: 120 } },
  )
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const client = await getSanityClient()
  return client.fetch<SanityPost | null>(
    `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
      _id, title, slug, excerpt, coverImage, publishedAt, body, seo,
      author->{ name, avatar },
      categories[]->{ title, slug }
    }`,
    { slug },
    { next: { revalidate: 120 } },
  )
}

export async function getAllPostSlugs(): Promise<string[]> {
  const client = await getSanityClient()
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post" && !(_id in path("drafts.**"))]{slug}`,
  )
  return posts.map((p) => p.slug.current)
}
