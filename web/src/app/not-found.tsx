import Link from "next/link";
import { allContent } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="page-shell py-12">
      <div className="panel p-8">
        <h1 className="heading-display text-4xl">{allContent.utility.notFoundTitle}</h1>
        <p className="mt-3 text-slate-700">{allContent.utility.notFoundSubtitle}</p>
        <div className="mt-5 flex gap-3">
          <Link className="focusable rounded-full bg-emerald-800 px-5 py-2 text-white" href="/">
            {allContent.actions.backHome}
          </Link>
          <Link className="focusable rounded-full border px-5 py-2" href="/quote">
            {allContent.actions.getQuote}
          </Link>
        </div>
      </div>
    </section>
  );
}
