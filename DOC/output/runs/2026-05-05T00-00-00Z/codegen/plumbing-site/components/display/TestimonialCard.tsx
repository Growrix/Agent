import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          size={14}
          className={cn(
            i < rating ? "text-[--color-accent] fill-[--color-accent]" : "text-[--color-border]"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "p-5 bg-[--color-surface] rounded-[--radius-card] border border-[--color-border] shadow-[--shadow-1] flex flex-col gap-3",
        className
      )}
    >
      <Stars rating={testimonial.rating} />
      <blockquote>
        <p className="text-sm text-[--color-text] leading-relaxed italic">&ldquo;{testimonial.body}&rdquo;</p>
      </blockquote>
      <figcaption className="text-xs text-[--color-text-muted] mt-auto">
        <span className="font-semibold not-italic text-[--color-text]">{testimonial.name}</span>
        {" · "}
        <span>{testimonial.location}</span>
      </figcaption>
    </figure>
  );
}
