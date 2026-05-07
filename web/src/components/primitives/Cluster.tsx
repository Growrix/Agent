import { cn } from "@/lib/utils";

export function Cluster({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex flex-wrap items-center gap-3", className)}>{children}</div>;
}



