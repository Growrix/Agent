type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  eyebrow?: string;
  tone?: "light" | "dark";
};

export function StatCard({ label, value, detail, eyebrow, tone = "light" }: StatCardProps) {
  const isDark = tone === "dark";

  return (
    <article className={isDark ? "dark-stat" : "surface-panel rounded-[1.75rem] p-6"}>
      <p className={isDark ? "font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/62" : "font-mono text-[0.68rem] uppercase tracking-[0.22em] text-brand"}>
        {eyebrow ?? label}
      </p>
      <p className={isDark ? "mt-3 font-display text-4xl font-semibold text-white" : "mt-3 font-display text-4xl font-semibold text-foreground"}>{value}</p>
      <p className={isDark ? "mt-3 text-sm font-semibold text-white" : "mt-3 text-sm font-semibold text-foreground"}>{label}</p>
      <p className={isDark ? "mt-3 text-sm leading-7 text-white/72" : "mt-3 text-sm leading-7 text-slate-600"}>{detail}</p>
    </article>
  );
}