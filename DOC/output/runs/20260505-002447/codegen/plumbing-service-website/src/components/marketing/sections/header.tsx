"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/marketing/shared/button";
import { navigation, siteConfig } from "@/config/site";
import { copy } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell pt-4">
        <div className="utility-shell mb-3 hidden items-center justify-between rounded-full px-5 py-2 text-[0.74rem] text-white/72 lg:flex">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="font-mono uppercase tracking-[0.22em] text-white/56">24/7 triage</span>
            <span className="truncate">{siteConfig.emergencyBlurb}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{siteConfig.serviceArea}</span>
            <a className="focus-ring rounded-full px-3 py-1 font-semibold text-white" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="utility-shell flex items-center justify-between rounded-4xl px-3 py-3 text-white sm:px-5">
          <Link className="focus-ring flex flex-col rounded-2xl px-2 py-1" href="/">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/58">{copy("home.hero.eyebrow")}</span>
            <span className="font-display text-lg font-semibold sm:text-xl">{siteConfig.businessName}</span>
            <span className="hidden text-xs text-white/64 sm:block">{siteConfig.license}</span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <Link className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:bg-white/8 hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="text-right">
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/50">Emergency line</p>
              <a className="focus-ring rounded-full text-sm font-semibold text-white" href={siteConfig.phoneHref}>
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <Button eventName="home_hero_call_clicked" href={siteConfig.phoneHref} variant="primary">
              {copy("component.button.call_now")}
            </Button>
          </div>

          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/6 lg:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
          </button>
        </div>

        {open ? (
          <div className="utility-shell mt-3 rounded-[1.75rem] p-4 text-white lg:hidden">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/56">Need help now?</p>
              <p className="mt-2 text-sm leading-6 text-white/76">{siteConfig.emergencyBlurb}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/72">
                <span>{siteConfig.serviceArea}</span>
                <span>{siteConfig.hours}</span>
              </div>
            </div>
            <nav aria-label="Mobile Primary" className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button href={siteConfig.phoneHref}>{copy("component.button.call_now")}</Button>
                <Button href="/quote" variant="secondary">
                  {copy("component.button.get_quote")}
                </Button>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}