import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/lib/content'
import { cn } from '@/lib/utils'
import type { BlogPost } from '@/lib/api-client'

interface BlogFeedProps {
  posts: BlogPost[]
  columns?: 2 | 3
  className?: string
}

export default function BlogFeed({ posts, columns = 3, className }: BlogFeedProps) {
  const colClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  }[columns]

  return (
    <ul
      role="list"
      className={cn('grid gap-8', colClasses, className)}
    >
      {posts.map((post) => (
        <li key={post.slug}>
          <article>
            <Link
              href={`/blog/${post.slug}`}
              className="group block card overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-lg"
            >
              <div className="relative aspect-video overflow-hidden bg-surface-raised">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-base group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 eyebrow bg-brand-primary text-text-inverse px-2.5 py-1 rounded-pill text-xs">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-AU', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <span aria-hidden>·</span>
                  <span>{post.readTime} {t('blog.read_time')}</span>
                </div>
                <h3 className="font-display font-semibold text-text-strong mb-2 leading-snug group-hover:text-brand-primary transition-fast">
                  {post.title}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-xs font-medium text-text-default">{post.author}</span>
                </div>
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
