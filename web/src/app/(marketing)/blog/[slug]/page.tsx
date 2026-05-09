import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blog, seo } from "@/lib/content";
import { Reveal } from "@/components/primitives/Reveal";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const POST_IMAGES: Record<string, string> = {
  "how-to-spot-roof-damage-after-a-storm": "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=1200&q=85",
  "repair-vs-replacement-how-to-decide": "https://images.unsplash.com/photo-1601077836997-3f03f71a6c4d?w=1200&q=85",
  "5-signs-your-roof-needs-attention": "https://images.unsplash.com/photo-1632823471406-4c5c7e4c6f24?w=1200&q=85",
  "how-to-choose-roofing-materials": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
  "emergency-roof-repair-what-to-do": "https://images.unsplash.com/photo-1612198195072-e9c2f2853ee8?w=1200&q=85",
  "roof-maintenance-checklist": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=85",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} ${seo.default_title_suffix}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const imageSrc = POST_IMAGES[post.slug] ?? "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85";

  return (
    <>
      {/* Hero */}
      <article aria-labelledby="post-heading">
        <header className="bg-[var(--color-background)] pt-24 lg:pt-32">
          <div className="container-x py-[var(--space-16)] max-w-[780px] mx-auto flex flex-col gap-[var(--space-6)]">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-[var(--space-1)] text-sm text-[var(--color-accent)] font-semibold hover:text-[var(--color-accent-hover)] transition-colors focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] rounded-[var(--radius-sm)]"
              >
                ← Back to Blog
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <span className="trust-chip">{post.category}</span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1
                id="post-heading"
                className="font-display font-[800] text-[var(--color-text)] tracking-[-0.03em] leading-[1.1]"
                style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
              >
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="flex items-center gap-[var(--space-4)] text-sm text-[var(--color-text-muted)]">
                <span className="flex items-center gap-[var(--space-1)]">
                  <Calendar size={14} strokeWidth={1.5} aria-hidden="true" />
                  <time dateTime={post.date}>{post.date}</time>
                </span>
                <span className="flex items-center gap-[var(--space-1)]">
                  <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
                  {post.read_time}
                </span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Featured image */}
        <Reveal>
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={post.image_alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>

        {/* Content */}
        <div className="container-x py-[var(--space-16)] max-w-[780px] mx-auto">
          <Reveal>
            <div className="prose prose-lg max-w-none text-[var(--color-text)]">
              <p className="text-xl text-[var(--color-text-muted)] mb-[var(--space-8)] leading-relaxed">
                {post.excerpt}
              </p>
              <p className="leading-relaxed">
                This article provides expert guidance on {post.title.toLowerCase()} from the experienced team at Apex Roofing Co. With over 15 years of service in the Manchester area, we&apos;ve seen every type of roofing challenge and are here to share our knowledge.
              </p>
              <p className="leading-relaxed">
                Whether you&apos;re dealing with an existing issue or planning preventive maintenance, understanding the basics can save you time and money. Our team of certified professionals is always available to assess your specific situation.
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.1} className="mt-[var(--space-12)] p-[var(--space-8)] rounded-[var(--radius-card)] bg-[var(--color-inset)] border border-[var(--color-border)]">
            <h2 className="font-display font-bold text-2xl text-[var(--color-text)] tracking-[-0.02em] mb-[var(--space-3)]">
              Need a professional assessment?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-[var(--space-6)]">
              Get a free, no-obligation quote from our certified roofing team.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-md)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)] font-semibold transition-all hover:bg-[var(--color-accent-hover)] hover:-translate-y-[2px] focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2"
            >
              Get Free Quote
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </article>
    </>
  );
}
