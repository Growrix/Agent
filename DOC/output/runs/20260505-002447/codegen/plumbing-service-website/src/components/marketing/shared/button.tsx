"use client";

import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";
import { trackClientEvent } from "@/lib/posthog";
import type { MarketingEventName } from "@/lib/events";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: Variant;
  fullWidth?: boolean;
  eventName?: MarketingEventName;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getButtonClasses(variant: Variant, fullWidth?: boolean) {
  return cn(
    "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
    fullWidth && "w-full",
    variant === "primary" && "bg-accent text-brand-ink shadow-[0_18px_40px_rgba(211,138,40,0.28)] hover:shadow-[0_22px_48px_rgba(211,138,40,0.34)]",
    variant === "secondary" && "border border-white/30 bg-white text-brand-ink shadow-[0_16px_36px_rgba(255,255,255,0.18)]",
    variant === "ghost" && "border border-line/80 bg-white/75 text-foreground backdrop-blur hover:bg-white",
  );
}

export function Button({
  children,
  href,
  className,
  variant = "primary",
  fullWidth,
  eventName,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(getButtonClasses(variant, fullWidth), className);

  if (href) {
    const isInternal = href.startsWith("/");
    const handleClick = () => {
      if (eventName) {
        trackClientEvent(eventName);
      }
    };

    if (isInternal) {
      return (
        <Link className={classes} href={href} onClick={handleClick}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} href={href} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={(event) => {
        if (eventName) {
          trackClientEvent(eventName);
        }

        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}