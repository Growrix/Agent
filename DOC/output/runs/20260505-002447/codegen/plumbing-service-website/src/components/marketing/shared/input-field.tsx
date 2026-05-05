import type { ReactNode } from "react";

type InputFieldProps = {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
};

export function InputField({ label, name, error, children }: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-foreground" htmlFor={name}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-danger" id={`${name}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}