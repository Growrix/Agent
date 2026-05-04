import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell py-16">
      <h1 className="text-3xl font-bold text-primary">Page not found</h1>
      <p className="mt-3 text-muted">The page may have moved. You can return home or get help using the floating contact actions.</p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-primary px-5 py-2 font-semibold text-white">
        Back Home
      </Link>
    </main>
  );
}
