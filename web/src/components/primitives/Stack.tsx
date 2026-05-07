import { cn } from "@/lib/utils";

export function Stack({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}



