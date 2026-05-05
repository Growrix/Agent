"use client";

import { useMemo, useState } from "react";
import { allContent } from "@/lib/content";

export const QuoteCalculatorPanel = () => {
  const [monthlyBill, setMonthlyBill] = useState("180");
  const [roofSize, setRoofSize] = useState("medium");

  const estimate = useMemo(() => {
    const bill = Number.parseInt(monthlyBill, 10) || 0;
    if (roofSize === "large") return Math.round(bill * 1.3);
    if (roofSize === "small") return Math.round(bill * 0.8);
    return bill;
  }, [monthlyBill, roofSize]);

  return (
    <section className="page-shell py-8 md:py-10">
      <div className="panel grid gap-5 p-5 md:grid-cols-2 md:p-7">
        <div>
          <h2 className="heading-display text-3xl">{allContent.quote.title}</h2>
          <p className="mt-2 text-sm text-slate-700">{allContent.quote.subtitle}</p>
          <p aria-live="polite" className="mt-6 rounded-xl bg-slate-100 p-4 text-sm">
            Estimated monthly offset value: ${estimate}
          </p>
        </div>
        <div className="space-y-4">
          <label className="block text-sm" htmlFor="monthly-bill">
            {allContent.quote.form.monthlyBill}
          </label>
          <input
            className="focusable w-full rounded-xl border p-3"
            id="monthly-bill"
            onChange={(event) => setMonthlyBill(event.target.value)}
            type="number"
            value={monthlyBill}
          />
          <label className="block text-sm" htmlFor="roof-size">
            {allContent.quote.form.roofSize}
          </label>
          <select
            className="focusable w-full rounded-xl border p-3"
            id="roof-size"
            onChange={(event) => setRoofSize(event.target.value)}
            value={roofSize}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          <button className="focusable rounded-full bg-emerald-800 px-5 py-2 text-white" type="button">
            {allContent.actions.getQuote}
          </button>
          <p className="text-xs text-slate-500">{allContent.quote.form.privacy}</p>
        </div>
      </div>
    </section>
  );
};
