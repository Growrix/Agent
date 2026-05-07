import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60svh] w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
      <h1 className="text-4xl font-semibold text-foreground">Page not found</h1>
      <p className="text-theme-secondary">The page you requested does not exist.</p>
      <Link
        href="/"
        className="rounded-full bg-primary-600 px-5 py-3 text-theme-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      >
        Return home
      </Link>
    </main>
  );
}



