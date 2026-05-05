import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  error,
  helpText,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const errorId = `${inputId}-error`;
  const helpId = `${inputId}-help`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-sm font-medium text-[--color-text]">
        {label}
        {props.required && (
          <span aria-hidden="true" className="ml-1 text-[--color-destructive]">
            *
          </span>
        )}
      </label>
      <input
        {...props}
        id={inputId}
        aria-describedby={
          [error ? errorId : null, helpText ? helpId : null].filter(Boolean).join(" ") ||
          undefined
        }
        aria-invalid={error ? "true" : undefined}
        className={cn(
          "w-full px-3 py-2.5 rounded-[--radius-input] border border-[--color-border] bg-[--color-surface] text-[--color-text] text-base",
          "placeholder:text-[--color-text-muted]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-1",
          error && "border-[--color-destructive]",
          className
        )}
      />
      {helpText && !error && (
        <p id={helpId} className="text-xs text-[--color-text-muted]">
          {helpText}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-[--color-destructive]">
          {error}
        </p>
      )}
    </div>
  );
}
