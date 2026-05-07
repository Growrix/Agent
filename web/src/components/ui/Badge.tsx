import type { HTMLAttributes } from "react";

export function Badge(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={`inline-flex rounded-full bg-(--color-primary-700) px-3 py-1 text-xs font-semibold text-white ${props.className ?? ""}`.trim()}
    />
  );
}
