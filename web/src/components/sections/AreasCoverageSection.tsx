import Link from "next/link";

const areas = ["north-hills", "lakeview", "ridge-garden", "east-canyon", "west-valley", "harbor-point"];

export function AreasCoverageSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-foreground">Areas We Serve</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <Link key={area} href={`/areas/${area}`} className="rounded-xl border border-theme bg-surface-raised px-4 py-3 text-sm capitalize text-foreground hover:border-(--color-primary-600) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
            {area.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </section>
  );
}
