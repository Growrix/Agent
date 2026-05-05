import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

export default function Checkbox({ label, error, id, className, ...props }: CheckboxProps) {
  const checkId = id ?? `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const errorId = `${checkId}-error`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={checkId} className="flex items-start gap-2 cursor-pointer">
        <input
          {...props}
          type="checkbox"
          id={checkId}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? "true" : undefined}
          className={cn(
            "mt-0.5 h-4 w-4 rounded border-[--color-border] accent-[--color-primary]",
            "focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-1",
            className
          )}
        />
        <span className="text-sm text-[--color-text]">{label}</span>
      </label>
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[--color-destructive] ml-6">
          {error}
        </p>
      )}
    </div>
  );
}
