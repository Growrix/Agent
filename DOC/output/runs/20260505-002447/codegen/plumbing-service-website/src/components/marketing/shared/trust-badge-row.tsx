type TrustBadgeRowProps = {
  items: string[];
  tone?: "light" | "dark";
};

export function TrustBadgeRow({ items, tone = "light" }: TrustBadgeRowProps) {
  return (
    <ul className="flex flex-wrap gap-3" role="list">
      {items.map((item) => (
        <li
          className={
            tone === "dark"
              ? "inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-medium text-white"
              : "inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-medium text-foreground"
          }
          key={item}
        >
          <span className={tone === "dark" ? "h-2 w-2 rounded-full bg-accent" : "h-2 w-2 rounded-full bg-brand"} />
          {item}
        </li>
      ))}
    </ul>
  );
}