import { MaterialCard } from "@/components/cards/MaterialCard";

const materials = [
  {
    name: "Asphalt Shingles",
    durability: "20-25 years",
    bestFor: "Most residential homes",
    note: "Cost-effective, proven performance, and broad style options."
  },
  {
    name: "Metal Roofing",
    durability: "40-70 years",
    bestFor: "Modern homes and durability-focused projects",
    note: "Long lifecycle, strong weather resilience, and energy efficiency."
  },
  {
    name: "Tile Roofing",
    durability: "50+ years",
    bestFor: "Premium architectural homes",
    note: "Exceptional longevity and curb appeal with premium investment profile."
  }
];

export function MaterialComparisonSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-foreground">Compare Roofing Materials</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {materials.map((material) => (
          <MaterialCard key={material.name} {...material} />
        ))}
      </div>
    </section>
  );
}
