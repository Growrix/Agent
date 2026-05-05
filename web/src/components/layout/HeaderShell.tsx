import Link from "next/link";
import { allContent } from "@/lib/content";
import { cn } from "@/lib/utils";

type HeaderShellProps = {
  compact?: boolean;
};

export const HeaderShell = ({ compact = false }: HeaderShellProps) => {
  const nav = allContent.nav;

  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className={cn("page-shell flex items-center justify-between", compact ? "py-3" : "py-4")}>
        <Link className="focusable font-semibold tracking-tight" href="/">
          {allContent.brand.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden gap-4 text-sm md:flex">
          <Link className="focusable" href="/">{nav.home}</Link>
          <Link className="focusable" href="/services">{nav.services}</Link>
          <Link className="focusable" href="/portfolio">{nav.portfolio}</Link>
          <Link className="focusable" href="/testimonials">{nav.testimonials}</Link>
          <Link className="focusable" href="/blog">{nav.blog}</Link>
          <Link className="focusable" href="/quote">{nav.quote}</Link>
          <Link className="focusable" href="/contact">{nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <Link className="focusable rounded-full border px-3 py-1.5" href="/auth/sign-in">
            {nav.signIn}
          </Link>
          <Link className="focusable rounded-full bg-emerald-800 px-3 py-1.5 text-white" href="/quote">
            {allContent.actions.getQuote}
          </Link>
        </div>
      </div>
    </header>
  );
};
