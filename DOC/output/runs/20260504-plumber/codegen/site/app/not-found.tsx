import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-[var(--primary)]">Page Not Found</h1>
      <p className="mt-3 text-slate-600">The page you requested is unavailable. Need urgent help?</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="tel:+611300758623" className="rounded-lg bg-green-600 px-5 py-2 font-semibold text-white">
          Call Now
        </a>
        <Link href="/" className="rounded-lg bg-[var(--primary)] px-5 py-2 font-semibold text-white">
          Back Home
        </Link>
      </div>
    </div>
  );
}
