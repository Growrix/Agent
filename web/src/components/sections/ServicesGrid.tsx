"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const services = [
  { slug: "inspection", title: "Roof Inspection", description: "Inspection-first diagnostics with photo evidence and action plan." },
  { slug: "replacement", title: "Roof Replacement", description: "High-quality replacement with warranty-backed installation." },
  { slug: "repair", title: "Roof Repair", description: "Targeted repair for leaks, storm impact, and flashing issues." },
  { slug: "maintenance", title: "Roof Maintenance", description: "Preventive care plans that extend roof performance." }
];

export function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <motion.article
          key={service.slug}
          whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="rounded-2xl border border-theme bg-surface-raised p-5 shadow-theme-sm"
        >
          <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
          <p className="mt-2 text-sm text-theme-secondary">{service.description}</p>
          <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-medium text-primary-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
            Learn more
          </Link>
        </motion.article>
      ))}
    </div>
  );
}



