import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold capitalize text-[var(--primary)]">{slug.replaceAll("-", " ")}</h1>
      <p className="mt-3 text-slate-700">
        Practical homeowner guidance for maintenance, emergency prevention, and water efficiency.
      </p>
      <Link href="/quote" className="mt-4 inline-block font-semibold text-[var(--primary)]">
        Need help now? Request a quote.
      </Link>
    </div>
  );
}
