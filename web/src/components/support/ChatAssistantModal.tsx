"use client";

import { useId } from "react";
import { allContent } from "@/lib/content";

type ChatAssistantModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ChatAssistantModal = ({ open, onClose }: ChatAssistantModalProps) => {
  const titleId = useId();

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-60 bg-slate-950/60 p-4" role="presentation" onClick={onClose}>
      <section
        aria-modal="true"
        role="dialog"
        aria-labelledby={titleId}
        className="mx-auto mt-20 max-w-xl rounded-2xl bg-white p-5 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="heading-display text-2xl" id={titleId}>
          {allContent.support.assistantLabel}
        </h2>
        <p className="mt-2 text-sm text-slate-600">{allContent.blog.subtitle}</p>
        <div aria-live="polite" className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm">
          {allContent.support.responseTime}
        </div>
        <textarea
          aria-label={allContent.support.assistantLabel}
          className="focusable mt-4 min-h-28 w-full rounded-xl border border-slate-300 p-3"
          placeholder={allContent.quote.subtitle}
        />
        <div className="mt-4 flex items-center justify-end gap-3">
          <button className="focusable rounded-full border px-4 py-2" onClick={onClose} type="button">
            {allContent.actions.backHome}
          </button>
          <button className="focusable rounded-full bg-emerald-800 px-4 py-2 text-white" type="button">
            {allContent.actions.submit}
          </button>
        </div>
      </section>
    </div>
  );
};
