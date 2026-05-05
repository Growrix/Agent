import type { Metadata } from "next";
import Link from "next/link";
import { c } from "@/lib/content";
import { BLOG_POSTS } from "@/lib/data";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: c("seo.blog.meta_title"),
  description: c("seo.blog.meta_description"),
  openGraph: {
    title: c("seo.blog.meta_title"),
    description: c("seo.blog.meta_description"),
  },
};

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow={c("blog.hero.eyebrow")}
        headline={c("blog.hero.headline")}
        subheadline={c("blog.hero.subheadline")}
      />

      <section className="py-[--space-section-y-mobile] md:py-[--space-section-y-tablet]" aria-label={c("blog.grid.heading")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[--color-text] font-[--font-display] mb-8">
            {c("blog.grid.heading")}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug}>
                <article className="p-5 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1] h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[--color-text-muted] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-semibold text-[--color-text] font-[--font-display] mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[--color-text-muted] leading-relaxed flex-1">
                    {post.summary}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-semibold text-[--color-primary] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] rounded"
                    aria-label={`Read: ${post.title}`}
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading={c("blog.cta.heading")}
        body={c("blog.cta.body")}
        ctaPrimary={{
          label: c("global.cta_primary"),
          href: c("global.phone_link"),
          isPhone: true,
        }}
        ctaSecondary={{ label: c("global.cta_secondary"), href: "/quote" }}
      />
    </>
  );
}
