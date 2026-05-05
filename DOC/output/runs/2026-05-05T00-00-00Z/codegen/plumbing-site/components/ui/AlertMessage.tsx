import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import Icon from "./Icon";

type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertMessageProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  message: string;
}

const styles: Record<AlertVariant, { wrapper: string; icon: string }> = {
  info: {
    wrapper: "bg-blue-50 border border-blue-200 text-blue-900",
    icon: "text-blue-600",
  },
  success: {
    wrapper: "bg-emerald-50 border border-emerald-200 text-emerald-900",
    icon: "text-emerald-600",
  },
  warning: {
    wrapper: "bg-amber-50 border border-amber-200 text-amber-900",
    icon: "text-amber-700",
  },
  error: {
    wrapper: "bg-red-50 border border-red-200 text-red-900",
    icon: "text-red-600",
  },
};

export default function AlertMessage({
  variant = "info",
  message,
  className,
  ...props
}: AlertMessageProps) {
  const s = styles[variant];
  return (
    <div
      {...props}
      role="alert"
      className={cn("flex items-start gap-3 p-4 rounded-[--radius-card] text-sm", s.wrapper, className)}
    >
      <Icon name="CheckCircle" size={18} className={cn("mt-0.5 shrink-0", s.icon)} />
      <p>{message}</p>
    </div>
  );
}
