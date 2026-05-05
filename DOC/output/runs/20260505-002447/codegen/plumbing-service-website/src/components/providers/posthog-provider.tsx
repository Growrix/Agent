"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/posthog";

type PosthogProviderProps = {
  children: React.ReactNode;
  enabled: boolean;
};

export function PosthogProvider({ children, enabled }: PosthogProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname, enabled);
  }, [enabled, pathname]);

  return children;
}