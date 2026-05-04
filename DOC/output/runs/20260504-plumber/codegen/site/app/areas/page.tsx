"use client";

import { useMemo, useState } from "react";

const areas = [
  { suburb: "Parramatta", postcode: "2150" },
  { suburb: "Blacktown", postcode: "2148" },
  { suburb: "Ryde", postcode: "2112" },
  { suburb: "Chatswood", postcode: "2067" },
];

export default function AreasPage() {
  const [query, setQuery] = useState("");

  type CoverageResult = { suburb: string; postcode: string } | false | null;

  const result = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return areas.find((area) => area.suburb.toLowerCase().includes(q) || area.postcode === q) ?? false;
  }, [query]) as CoverageResult;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Areas We Serve</h1>
      <p className="mt-2 text-slate-600">Use instant postcode coverage checker to confirm service availability.</p>

      <section className="card mt-6 p-6">
        <label className="text-sm font-semibold">Suburb or postcode</label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="e.g. Parramatta or 2150"
        />
        {result && (
          <p className="mt-4 rounded-lg bg-green-100 p-3 text-sm">Yes, we service {result.suburb} ({result.postcode}).</p>
        )}
        {result === false && (
          <p className="mt-4 rounded-lg bg-amber-100 p-3 text-sm">Not listed yet. Call us to confirm manual coverage.</p>
        )}
      </section>
    </div>
  );
}
