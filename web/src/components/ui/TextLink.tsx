import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = LinkProps & {
  className?: string;
  children: ReactNode;
};

export function TextLink({ className, children, ...props }: TextLinkProps) {
  return (
    <Link
      {...props}
      className={`text-primary-600 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${className ?? ""}`.trim()}
    >
      {children}
    </Link>
  );
}
