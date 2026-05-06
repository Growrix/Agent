import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/content'
import { api } from '@/lib/api-client'
import BlogFeed from '@/components/ui/BlogFeed'
import CtaBand from '@/components/ui/CtaBand'

export const metadata: Metadata = {
  title: 'Solar Blog',
  description: 'Guides, industry news, and real project stories from SolarPro.',
}

export default async function BlogPage() {
  const posts = await api.blog.list()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const sidebarPosts = posts.filter((p) => p.slug !== featured.slug).slice(0, 2)
  const allPosts = posts.filter((p) => p.slug !== featured.slug)

  return (
    <>
      {/* ── HERO: Editorial masthead — 3/5 featured + 2/5 two stacked ── */}
      <section
        className="py-section-md bg-surface-base border-b border-border-subtle"
        aria-label={t('blog.hero.title')}
      >
        <div className="container-solar">
          <p className="eyebrow mb-4">{t('blog.hero.eyebrow')}</p>
          <h1 className="sr-only">{t('blog.hero.title')}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Featured post — 3 of 5 columns */}
            <article className="lg:col-span-3">
              <Link
                href={`/blog/${featured.slug}`}
                className="group block relative rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <div className="relative aspect-video lg:aspect-auto lg:h-96 overflow-hidden bg-surface-raised">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-base group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)' }}
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="eyebrow text-brand-accent text-xs mb-2 block">{t('blog.hero.featured_label')}</span>
                  <h2 className="font-display font-bold text-text-inverse text-xl lg:text-2xl leading-snug mb-2">
                    {featured.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-text-inverse/70">
                    <time dateTime={featured.date}>{new Date(featured.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    <span aria-hidden>·</span>
                    <span>{featured.readTime} {t('blog.read_time')}</span>
                  </div>
                </div>
              </Link>
            </article>

            {/* Two stacked smaller cards — 2 of 5 columns */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {sidebarPosts.map((post) => (
                <article key={post.slug} className="flex-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 card p-4 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-xl"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-raised">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-base group-hover:scale-[1.04]"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex flex-col justify-between min-w-0">
                      <div>
                        <span className="eyebrow text-xs block mb-1">{post.category}</span>
                        <h2 className="font-semibold text-text-strong text-sm leading-snug group-hover:text-brand-primary transition-fast line-clamp-2">
                          {post.title}
                        </h2>
                      </div>
                      <time className="text-xs text-text-muted" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}
                      </time>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT ARTICLES ── */}
      <section className="py-section-xl bg-surface-canvas" aria-label={t('blog.list_title')}>
        <div className="container-solar">
          <h2 className="text-display-section font-display font-bold text-text-strong mb-10">
            {t('blog.list_title')}
          </h2>
          <BlogFeed posts={allPosts} columns={3} />
        </div>
      </section>

      {/* ── CONTENT PILLARS ── */}
      <section className="py-section-lg bg-surface-base border-t border-border-subtle" aria-label={t('blog.pillars.title')}>
        <div className="container-solar">
          <h2 className="text-display-section font-display font-bold text-text-strong mb-8 text-center">
            {t('blog.pillars.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[t('blog.pillars.guides'), t('blog.pillars.projects'), t('blog.pillars.savings')].map((pillar) => (
              <article key={pillar} className="card p-6 text-center">
                <p className="text-sm text-text-default font-medium leading-relaxed">{pillar}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t('blog.cta_title')}
        subtitle={t('blog.cta_subtitle')}
        primaryLabel={t('cta.get_quote')}
        primaryHref="/quote"
        variant="brand"
      />
    </>
  )
}
