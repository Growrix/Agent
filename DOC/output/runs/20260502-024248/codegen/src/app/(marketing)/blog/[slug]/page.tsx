import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPostSlugs } from '@/sanity/queries/blog'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.seo?.metaTitle ?? post.title,
    description: post.seo?.metaDescription ?? post.excerpt,
    openGraph: {
      images: post.seo?.ogImage
        ? [{ url: post.seo.ogImage.asset.url }]
        : post.coverImage?.asset?.url
        ? [{ url: post.coverImage.asset.url }]
        : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-brand-blue">Home</Link>
        {' / '}
        <Link href="/blog" className="hover:text-brand-blue">Blog</Link>
        {' / '}
        <span className="text-gray-900">{post.title}</span>
      </nav>

      {post.coverImage?.asset?.url && (
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <Image
            src={post.coverImage.asset.url}
            alt={post.coverImage.alt ?? post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories?.map((cat) => (
            <span
              key={cat.slug.current}
              className="bg-blue-100 text-brand-blue text-xs font-medium px-3 py-1 rounded-full"
            >
              {cat.title}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          {post.author && (
            <span className="font-medium text-gray-700">{post.author.name}</span>
          )}
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-AU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </header>

      {post.excerpt && (
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>
      )}

      {/* Portable text content rendered here */}
      <div className="prose prose-lg max-w-none">
        {Array.isArray(post.body) && post.body.length > 0 ? (
          <p className="text-gray-600">Article content rendered by Portable Text renderer.</p>
        ) : (
          <p className="text-gray-500">Content coming soon.</p>
        )}
      </div>
    </article>
  )
}
