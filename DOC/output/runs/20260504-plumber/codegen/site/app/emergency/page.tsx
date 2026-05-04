"use client";

import { useState } from "react";

export default function EmergencyPage() {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const questions = [
    "Is water currently flooding your property?",
    "Do you smell gas near appliances or pipes?",
    "Is the problem getting worse quickly?",
  ];

  const current = answers.length;
  const emergency = answers.includes(true);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h1 className="text-4xl font-extrabold text-[var(--primary)]">Emergency Plumbing Triage</h1>
      <p className="mt-3 text-slate-600">
        Answer three quick questions to get the fastest route to resolution.
      </p>

      <div className="card mt-8 p-6 text-left">
        {current < questions.length ? (
          <>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Question {current + 1} of 3</p>
            <p className="mt-2 text-xl font-bold">{questions[current]}</p>
            <div className="mt-5 flex gap-3">
              <button
                className="rounded-lg bg-red-600 px-5 py-2 font-semibold text-white"
                onClick={() => setAnswers((prev) => [...prev, true])}
              >
                Yes
              </button>
              <button
                className="rounded-lg bg-slate-200 px-5 py-2 font-semibold"
                onClick={() => setAnswers((prev) => [...prev, false])}
              >
                No
              </button>
            </div>
          </>
        ) : emergency ? (
          <div>
            <p className="text-lg font-bold text-red-700">This appears urgent. Call now for immediate help.</p>
            <a href="tel:+611300758623" className="mt-4 inline-block rounded-lg bg-green-600 px-6 py-3 font-bold text-white">
              Call Now
            </a>
          </div>
        ) : (
          <div>
            <p className="text-lg font-bold text-[var(--primary)]">This can be handled with a scheduled visit.</p>
            <a href="/book" className="mt-4 inline-block rounded-lg bg-[var(--primary)] px-6 py-3 font-bold text-white">
              Book Online
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
