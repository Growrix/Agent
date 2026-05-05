import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[--color-primary] text-[--color-primary-foreground] hover:bg-[--color-primary-hover] focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2",
  secondary:
    "bg-transparent border border-[--color-primary] text-[--color-primary] hover:bg-[--color-inset] focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-[--color-primary] hover:bg-[--color-inset] focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2",
  accent:
    "bg-[--color-accent] text-[--color-text] hover:bg-[--color-accent-hover] focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold rounded-[--radius-button] transition-colors motion-safe:transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}
