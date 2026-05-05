"use client";

import { useState } from "react";
import type { FAQItem } from "@/server/cms/types";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article className="surface-panel overflow-hidden rounded-3xl" key={item.question}>
            <button
              aria-controls={`faq-panel-${index}`}
              aria-expanded={isOpen}
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              type="button"
            >
              <span className="font-semibold text-foreground">{item.question}</span>
              <span className="text-2xl leading-none text-brand">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div className="border-t border-line/70 px-5 py-4 text-sm leading-7 text-slate-600" id={`faq-panel-${index}`}>
                {item.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}