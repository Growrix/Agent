export default async function ServiceAreaCrossPage({
  params,
}: {
  params: Promise<{ slug: string; "area-slug": string }>;
}) {
  const { slug, "area-slug": areaSlug } = await params;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold capitalize text-[var(--primary)]">
        {slug.replaceAll("-", " ")} in {areaSlug.replaceAll("-", " ")}
      </h1>
      <p className="mt-2 text-slate-600">
        Hyper-local SEO page with compliance-ready contact paths and immediate conversion CTA.
      </p>
      <a href="/quote" className="mt-4 inline-block rounded-lg bg-[var(--primary)] px-5 py-2 font-semibold text-white">
        Request Quote
      </a>
    </div>
  );
}
