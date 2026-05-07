import Link from "next/link";
import { FinancingCard } from "@/components/cards/FinancingCard";

const options = [
  {
    title: "Deferred Start",
    description: "Delay first payment while your project is completed."
  },
  {
    title: "Fixed Monthly Plans",
    description: "Predictable terms for planned replacement projects."
  },
  {
    title: "Warranty Upgrade",
    description: "Extended material and labor protection with partner-backed coverage."
  }
];

export function FinancingSection() {
  return (
    <section className="bg-surface-raised py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-3xl font-semibold text-foreground">Financing And Warranty Confidence</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {options.map((option) => (
            <FinancingCard key={option.title} {...option} />
          ))}
        </div>
        <Link href="/financing" className="mt-6 inline-flex rounded-full bg-primary-600 px-5 py-3 text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
          Review Financing Options
        </Link>
      </div>
    </section>
  );
}
