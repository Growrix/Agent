import Link from "next/link";
import { allContent } from "@/lib/content";

export const FooterTrust = () => {
  return (
    <footer className="mt-14 border-t bg-slate-50" aria-label="Footer">
      <div className="page-shell grid gap-6 py-10 md:grid-cols-3">
        <section className="panel p-4">
          <h2 className="heading-display text-lg">{allContent.brand.name}</h2>
          <p className="mt-2 text-sm text-slate-700">{allContent.brand.tagline}</p>
        </section>
        <section className="panel p-4">
          <h2 className="heading-display text-lg">{allContent.home.sections.trust}</h2>
          <p className="mt-2 text-sm">{allContent.footer.license}</p>
          <p className="mt-1 text-sm">{allContent.footer.hours}</p>
          <p className="mt-1 text-sm">{allContent.footer.address}</p>
        </section>
        <section className="panel p-4">
          <h2 className="heading-display text-lg">{allContent.nav.contact}</h2>
          <div className="mt-2 flex gap-3 text-sm">
            <Link className="focusable underline" href="/privacy">{allContent.legal.privacy}</Link>
            <Link className="focusable underline" href="/terms">{allContent.legal.terms}</Link>
          </div>
          <p className="mt-3 text-xs text-slate-600">{allContent.footer.copyright}</p>
        </section>
      </div>
    </footer>
  );
};
