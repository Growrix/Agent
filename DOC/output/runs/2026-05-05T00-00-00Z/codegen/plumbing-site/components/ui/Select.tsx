import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

export default function Select({
  label,
  options,
  error,
  placeholder,
  id,
  className,
  ...props
}: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${selectId}-error`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={selectId} className="text-sm font-medium text-[--color-text]">
        {label}
        {props.required && (
          <span aria-hidden="true" className="ml-1 text-[--color-destructive]">
            *
          </span>
        )}
      </label>
      <select
        {...props}
        id={selectId}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? "true" : undefined}
        className={cn(
          "w-full px-3 py-2.5 rounded-[--radius-input] border border-[--color-border] bg-[--color-surface] text-[--color-text] text-base",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-1",
          error && "border-[--color-destructive]",
          className
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[--color-destructive]">
          {error}
        </p>
      )}
    </div>
  );
}
