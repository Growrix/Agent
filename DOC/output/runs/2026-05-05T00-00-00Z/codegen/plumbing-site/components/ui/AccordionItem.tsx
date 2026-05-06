"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "./Icon";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[--color-border]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between w-full py-4 text-left text-base font-medium text-[--color-text]",
          "hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-focus-ring] focus-visible:ring-offset-2 rounded",
          "motion-safe:transition-colors"
        )}
      >
        <span className="pr-4">{question}</span>
        <Icon
          name="ChevronDown"
          size={18}
          className={cn(
            "shrink-0 text-[--color-text-muted] motion-safe:transition-transform",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="pb-4 text-[--color-text-muted] text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
