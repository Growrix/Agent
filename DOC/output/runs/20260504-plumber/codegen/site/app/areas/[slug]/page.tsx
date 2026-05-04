export default async function AreaLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold capitalize text-[var(--primary)]">Plumber in {slug.replaceAll("-", " ")}</h1>
      <p className="mt-2 text-slate-600">Local team availability with emergency and scheduled service options.</p>
      <a href="/emergency" className="mt-4 inline-block rounded-lg bg-red-600 px-5 py-2 font-semibold text-white">
        Emergency Help
      </a>
    </div>
  );
}
