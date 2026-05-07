import { cn } from "@/lib/utils";

export function Surface({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-2xl border border-theme bg-surface-raised", className)}>{children}</div>;
}



