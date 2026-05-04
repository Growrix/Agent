import Link from "next/link";

const links = ["/", "/services", "/areas", "/quote", "/book", "/emergency", "/reviews", "/contact", "/privacy", "/terms"];

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">HTML Sitemap</h1>
      <ul className="mt-6 space-y-2 text-[var(--primary)] underline">
        {links.map((link) => (
          <li key={link}>
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
