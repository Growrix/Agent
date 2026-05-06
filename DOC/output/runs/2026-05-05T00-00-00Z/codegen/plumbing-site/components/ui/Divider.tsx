import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  decorative?: boolean;
}

export default function Divider({ className, decorative = true }: DividerProps) {
  return (
    <hr
      role={decorative ? "presentation" : undefined}
      aria-hidden={decorative}
      className={cn("border-t border-[--color-border]", className)}
    />
  );
}
