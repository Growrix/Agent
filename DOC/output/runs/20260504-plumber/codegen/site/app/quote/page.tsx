"use client";

import { FormEvent, useState } from "react";

type QuoteData = {
  service: string;
  issue: string;
  postcode: string;
  name: string;
  phone: string;
};

const initialData: QuoteData = {
  service: "Blocked Drains",
  issue: "",
  postcode: "",
  name: "",
  phone: "",
};

const ranges: Record<string, string> = {
  "Blocked Drains": "$220 - $480",
  "Hot Water Systems": "$250 - $900",
  "Leak Detection": "$180 - $520",
  "Emergency Plumbing": "$260 - $780",
};

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteData>(initialData);
  const [status, setStatus] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "Quote request sent. We will call you shortly." : "Submission failed. Please call us.");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-[var(--primary)]">4-Step Quote Estimator</h1>
      <p className="mt-2 text-slate-600">Get a ballpark estimate, then submit for confirmed pricing.</p>
      <form onSubmit={onSubmit} className="card mt-6 space-y-5 p-6">
        {step === 1 && (
          <div>
            <label className="text-sm font-semibold">1. Select service</label>
            <select
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              value={data.service}
              onChange={(e) => setData({ ...data, service: e.target.value })}
            >
              {Object.keys(ranges).map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="text-sm font-semibold">2. Describe issue</label>
            <textarea
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              rows={4}
              value={data.issue}
              onChange={(e) => setData({ ...data, issue: e.target.value })}
              placeholder="Describe what is happening"
            />
          </div>
        )}
        {step === 3 && (
          <div>
            <label className="text-sm font-semibold">3. Enter postcode</label>
            <input
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
              value={data.postcode}
              onChange={(e) => setData({ ...data, postcode: e.target.value })}
              placeholder="e.g. 2150"
            />
          </div>
        )}
        {step === 4 && (
          <div className="space-y-3">
            <label className="text-sm font-semibold">4. Contact details</label>
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Full name"
            />
            <input
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              placeholder="Phone number"
            />
            <p className="rounded-lg bg-blue-50 p-3 text-sm">
              Estimated range for {data.service}: <strong>{ranges[data.service]}</strong>
            </p>
          </div>
        )}

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="rounded-lg bg-slate-200 px-4 py-2 font-semibold"
          >
            Back
          </button>
          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(4, s + 1))}
              className="rounded-lg bg-[var(--primary)] px-4 py-2 font-semibold text-white"
            >
              Next
            </button>
          ) : (
            <button className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-900">Submit Quote</button>
          )}
        </div>
        {status && <p className="text-sm font-semibold text-[var(--primary)]">{status}</p>}
      </form>
    </div>
  );
}
