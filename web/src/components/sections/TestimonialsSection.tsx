import { TestimonialCard } from "@/components/cards/TestimonialCard";

const testimonials = [
  {
    quote: "The team arrived quickly after a storm and handled inspection and scope clearly.",
    author: "Sarah M.",
    context: "Homeowner · 2024"
  },
  {
    quote: "No pressure, clear material guidance, and the install quality was excellent.",
    author: "David L.",
    context: "Homeowner · 2025"
  },
  {
    quote: "Communication was excellent from estimate through final walkthrough.",
    author: "Priya K.",
    context: "Property Manager · 2025"
  }
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold text-foreground">Customer Feedback</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.author} {...item} />
        ))}
      </div>
    </section>
  );
}
