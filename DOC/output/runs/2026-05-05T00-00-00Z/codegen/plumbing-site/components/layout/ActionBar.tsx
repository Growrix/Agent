"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { c } from "@/lib/content";
import Icon from "@/components/ui/Icon";

export default function ActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 80);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 md:hidden",
        "bg-[--color-surface] border-t border-[--color-border] shadow-[--shadow-3]",
        "motion-safe:transition-transform",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-stretch h-14">
        <a
          href={c("global.phone_link")}
          tabIndex={visible ? 0 : -1}
          className="flex-1 flex items-center justify-center gap-2 bg-[--color-primary] text-[--color-primary-foreground] font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        >
          <Icon name="Phone" size={16} aria-hidden="true" />
          {c("global.cta_primary")}
        </a>
        <Link
          href="/quote"
          tabIndex={visible ? 0 : -1}
          className="flex-1 flex items-center justify-center gap-2 bg-[--color-surface] text-[--color-primary] border-l border-[--color-border] font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[--color-focus-ring]"
        >
          {c("global.cta_secondary")}
        </Link>
      </div>
    </div>
  );
}
