import { ServiceCard } from "@/components/cards/ServiceCard";

const services = [
  {
    title: "Roof Inspection",
    description: "Comprehensive condition checks and clear next-step recommendations.",
    href: "/services/inspection"
  },
  {
    title: "Roof Replacement",
    description: "Full replacement options with system-level warranty confidence.",
    href: "/services/replacement"
  },
  {
    title: "Roof Repair",
    description: "Targeted repairs to restore performance and prevent spread of damage.",
    href: "/services/repair"
  },
  {
    title: "Maintenance",
    description: "Seasonal maintenance plans to extend roof life and reduce emergency risk.",
    href: "/services/maintenance"
  }
];

export function ServiceGridSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-foreground">Roofing Services Built For Reliability</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>
    </section>
  );
}
