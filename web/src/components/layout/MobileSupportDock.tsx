"use client";

import Link from "next/link";
import { Home, Layers, Calculator, Headset, User } from "lucide-react";
import { allContent } from "@/lib/content";

export const MobileSupportDock = () => {
  return (
    <nav
      aria-label="Mobile dock"
      className="fixed inset-x-0 bottom-0 z-20 border-t bg-white/95 px-3 py-2 backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5 gap-2 text-center text-[0.72rem]">
        <li>
          <Link className="focusable flex flex-col items-center gap-1" href="/">
            <Home size={16} aria-hidden="true" />
            <span>{allContent.nav.home}</span>
          </Link>
        </li>
        <li>
          <Link className="focusable flex flex-col items-center gap-1" href="/services">
            <Layers size={16} aria-hidden="true" />
            <span>{allContent.nav.services}</span>
          </Link>
        </li>
        <li>
          <Link className="focusable flex flex-col items-center gap-1" href="/quote">
            <Calculator size={16} aria-hidden="true" />
            <span>{allContent.nav.quote}</span>
          </Link>
        </li>
        <li>
          <Link className="focusable flex flex-col items-center gap-1" href="/contact">
            <Headset size={16} aria-hidden="true" />
            <span>{allContent.nav.contact}</span>
          </Link>
        </li>
        <li>
          <Link className="focusable flex flex-col items-center gap-1" href="/account">
            <User size={16} aria-hidden="true" />
            <span>{allContent.nav.account}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
