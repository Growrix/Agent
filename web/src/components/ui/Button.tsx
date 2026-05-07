import type { ButtonHTMLAttributes } from "react";

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`rounded-full bg-primary-600 px-5 py-3 font-semibold text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${props.className ?? ""}`.trim()}
    />
  );
}
