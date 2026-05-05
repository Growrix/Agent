import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface FormRowProps {
  children: ReactNode;
  columns?: 1 | 2;
  className?: string;
}

export default function FormRow({ children, columns = 1, className }: FormRowProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 && "sm:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
}
