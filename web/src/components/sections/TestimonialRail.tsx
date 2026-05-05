type TestimonialRailProps = {
  heading: string;
};

const testimonials = [
  "The installation was clear, clean, and completed on schedule.",
  "We understood the ROI before signing, and support stayed responsive.",
  "The team explained every decision and delivered strong workmanship.",
];

export const TestimonialRail = ({ heading }: TestimonialRailProps) => {
  return (
    <section className="page-shell py-8 md:py-10">
      <h2 className="heading-display text-3xl md:text-4xl">{heading}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote className="panel p-5 text-sm text-slate-700" key={item}>
            {item}
          </blockquote>
        ))}
      </div>
    </section>
  );
};
