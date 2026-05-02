import type { Metadata } from 'next'
import { getPublishedPosts } from '@/sanity/queries/blog'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Plumbing Tips & Advice',
  description: 'Homeowner plumbing advice, maintenance tips, cost guides, and more from our licenced plumbers.',
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Plumbing Tips &amp; Advice</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        Homeowner maintenance tips, cost guides, and advice from our licenced plumbers.
      </p>
      {posts.length === 0 ? (
        <p className="text-gray-500">Articles coming soon — check back shortly.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {post.coverImage?.asset?.url && (
                <div className="relative w-full h-48">
                  <Image
                    src={post.coverImage.asset.url}
                    alt={post.coverImage.alt ?? post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
