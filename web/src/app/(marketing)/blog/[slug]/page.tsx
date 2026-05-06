import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'
import BlogFeed from '@/components/ui/BlogFeed'
import CtaBand from '@/components/ui/CtaBand'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await api.blog.bySlug(slug)
  if (!post) return { title: 'Post not found' }
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await api.blog.bySlug(slug)
  if (!post) notFound()

  const allPosts = await api.blog.list()
  const related = allPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <article>
        {/* Hero image */}
        <div className="relative h-72 lg:h-[480px] overflow-hidden bg-surface-raised">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--color-surface-overlay) 0%, transparent 60%)' }} aria-hidden="true" />
        </div>

        <div className="container-solar max-w-2xl py-section-xl">
          <Link href="/blog" className="text-sm text-brand-primary hover:underline mb-6 inline-block">
            ← {t('blog.back_to_blog')}
          </Link>

          <header className="mb-10">
            <span className="eyebrow block mb-3">{post.category}</span>
            <h1 className="text-display-section font-display font-bold text-text-strong mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4">
              <Image
                src={post.authorAvatar}
                alt={post.author}
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-text-strong">{post.author}</p>
                <div className="flex gap-2 text-xs text-text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{post.readTime} {t('blog.read_time')}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="prose-solar">
            <p>{post.excerpt}</p>
            <p>
              This is a placeholder article body. In production, the full article content is loaded
              from the CMS via the OpenAPI contract. The structure above correctly assembles the
              metadata, hero image, author, and category from the API layer.
            </p>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-section-xl bg-surface-canvas border-t border-border-subtle" aria-label={t('blog.related_title')}>
          <div className="container-solar">
            <h2 className="text-title-fluid font-display font-bold text-text-strong mb-8">
              {t('blog.related_title')}
            </h2>
            <BlogFeed posts={related} columns={3} />
          </div>
        </section>
      )}

      <CtaBand
        title={t('blog.cta_title')}
        subtitle="Get a tailored proposal for your property."
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
