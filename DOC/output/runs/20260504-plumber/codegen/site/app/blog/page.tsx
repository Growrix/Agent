import Link from "next/link";

const posts = [
  { slug: "blocked-drain-warning-signs", title: "5 warning signs of blocked drains" },
  { slug: "hot-water-efficiency-tips", title: "Hot water efficiency tips for winter" },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Plumbing Insights</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card p-5">
            <h2 className="font-bold">{post.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
