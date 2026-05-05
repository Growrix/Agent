import Link from "next/link";
import type { PostItem } from "@/lib/api-client";

type BlogFeedProps = {
  heading: string;
  posts: PostItem[];
};

export const BlogFeed = ({ heading, posts }: BlogFeedProps) => {
  return (
    <section className="page-shell py-8 md:py-10">
      <h2 className="heading-display text-3xl md:text-4xl">{heading}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article className="panel p-5" key={post.slug}>
            <h3 className="heading-display text-xl">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{post.summary}</p>
            <Link className="focusable mt-4 inline-block text-sm underline" href={`/blog/${post.slug}`}>
              Read
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
