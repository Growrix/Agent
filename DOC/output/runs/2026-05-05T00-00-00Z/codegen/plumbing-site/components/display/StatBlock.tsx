import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatBlock({ value, label, className }: StatBlockProps) {
  return (
    <div className={cn("flex flex-col items-center text-center gap-1", className)}>
      <span className="text-3xl font-bold text-[--color-primary] font-[--font-display] leading-none">
        {value}
      </span>
      <span className="text-sm text-[--color-text-muted]">{label}</span>
    </div>
  );
}
