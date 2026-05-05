"use client";

import { Button } from "@/components/marketing/shared/button";
import { siteConfig } from "@/config/site";
import { copy } from "@/lib/content";

export function StickyContactDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 md:hidden">
      <div className="utility-shell mx-auto max-w-lg rounded-[1.75rem] p-3 text-white shadow-[0_-12px_32px_rgba(7,29,49,0.18)]">
        <div className="mb-3 flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/6 px-3 py-3">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/56">Need help now?</p>
            <p className="mt-1 text-sm text-white/76">{siteConfig.emergencyBlurb}</p>
          </div>
          <a className="focus-ring whitespace-nowrap rounded-full text-sm font-semibold text-white" href={siteConfig.phoneHref}>
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button href={siteConfig.phoneHref} variant="primary">
            {copy("component.sticky.call")}
          </Button>
          <Button className="bg-white! text-brand-ink!" href="/quote" variant="secondary">
            {copy("component.sticky.quote")}
          </Button>
          <Button className="border-white/14! bg-white/8! text-white!" href="/contact" variant="ghost">
            {copy("component.sticky.contact")}
          </Button>
        </div>
      </div>
    </div>
  );
}