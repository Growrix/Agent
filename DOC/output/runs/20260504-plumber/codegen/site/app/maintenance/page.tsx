"use client";

import { useState } from "react";

export default function MaintenancePage() {
  const [people, setPeople] = useState(3);
  const [minutes, setMinutes] = useState(8);
  const litres = people * minutes * 365 * 9;
  const dollars = Math.round((litres / 1000) * 2.7);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">Maintenance Plan + Water Efficiency Calculator</h1>
      <p className="mt-2 text-slate-600">Annual inspection with proactive leak prevention and lower bills.</p>
      <section className="card mt-6 p-6">
        <h2 className="text-xl font-bold">Water Savings Calculator</h2>
        <p className="mt-1 text-sm text-slate-600">Estimate potential annual savings after fixture upgrades.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label>
            <span className="text-sm font-semibold">Household size</span>
            <input
              type="number"
              value={people}
              min={1}
              onChange={(e) => setPeople(Number(e.target.value) || 1)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
          <label>
            <span className="text-sm font-semibold">Average shower minutes/day</span>
            <input
              type="number"
              value={minutes}
              min={1}
              onChange={(e) => setMinutes(Number(e.target.value) || 1)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        </div>
        <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm">
          Potential savings: <strong>{litres.toLocaleString()} litres/year</strong> (about <strong>${dollars}/year</strong>)
        </p>
      </section>
    </div>
  );
}
