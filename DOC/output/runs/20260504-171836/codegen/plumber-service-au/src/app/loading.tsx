export default function Loading() {
  return (
    <main className="container-shell py-16">
      <div className="h-10 w-3/5 animate-pulse rounded bg-primary/10" />
      <div className="mt-4 h-6 w-4/5 animate-pulse rounded bg-primary/10" />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="h-40 animate-pulse rounded-xl bg-primary/10" />
        <div className="h-40 animate-pulse rounded-xl bg-primary/10" />
        <div className="h-40 animate-pulse rounded-xl bg-primary/10" />
      </div>
    </main>
  );
}
