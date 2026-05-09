"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
}

function FaqItem({ question, answer, index }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden">
      <button
        id={`faq-trigger-${index}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-[var(--space-4)] px-[var(--space-6)] py-[var(--space-5)] text-left bg-[var(--color-surface)] hover:bg-[var(--color-inset)] transition-colors focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-[-3px]"
      >
        <span className="font-semibold text-[var(--color-text)] text-base">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={prefersReduced ? { duration: 0 } : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 text-[var(--color-text-muted)]"
          aria-hidden="true"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-trigger-${index}`}
            initial={prefersReduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-[var(--space-6)] pb-[var(--space-5)] pt-[var(--space-3)] bg-[var(--color-surface)] text-[var(--color-text-muted)] text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FaqAccordionProps {
  items: Array<{ question: string; answer: string }>;
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="flex flex-col gap-[var(--space-3)]" role="list" aria-label="Frequently asked questions">
      {items.map((item, i) => (
        <div key={i} role="listitem">
          <FaqItem question={item.question} answer={item.answer} index={i} />
        </div>
      ))}
    </div>
  );
}
