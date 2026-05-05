import type { ReactNode } from "react";

// Root layout (app/layout.tsx) provides Header, Footer, ActionBar, and skip-link.
// This group layout is a transparent wrapper for organizational purposes only.
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
