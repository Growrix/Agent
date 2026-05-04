import Link from "next/link";

const services = [
  "blocked-drains",
  "hot-water-systems",
  "leak-detection",
  "gas-fitting",
  "toilet-repairs",
  "pipe-relining",
  "emergency-plumbing",
  "bathroom-renovations",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Plumbing Services</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service} href={`/services/${service}`} className="card p-5 font-semibold capitalize">
            {service.replaceAll("-", " ")}
          </Link>
        ))}
      </div>
    </div>
  );
}
