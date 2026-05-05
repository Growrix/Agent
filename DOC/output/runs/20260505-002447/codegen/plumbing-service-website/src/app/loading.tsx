export default function Loading() {
  return (
    <main className="section-shell pb-24 pt-10" id="main-content">
      <div className="surface-panel animate-pulse rounded-4xl p-10">
        <div className="h-6 w-40 rounded-full bg-slate-200" />
        <div className="mt-6 h-14 w-3/4 rounded-3xl bg-slate-200" />
        <div className="mt-4 h-6 w-full rounded-full bg-slate-100" />
        <div className="mt-3 h-6 w-4/5 rounded-full bg-slate-100" />
      </div>
    </main>
  );
}