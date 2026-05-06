import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-[3px]",
};

export default function Spinner({ size = "md", className, label = "Loading…" }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className={cn("inline-flex items-center", className)}>
      <span
        className={cn(
          "rounded-full border-[--color-border] border-t-[--color-primary] animate-spin",
          sizes[size]
        )}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
