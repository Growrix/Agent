"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { useAuthModal } from "@/components/providers/AuthModalProvider";
import { t } from "@/lib/content";

function AuthFormCard({ mode, onSwitchMode }: { mode: "sign-in" | "sign-up"; onSwitchMode?: () => void }) {
  const title = mode === "sign-in" ? t("auth.modal.signInTitle") : t("auth.modal.signUpTitle");

  return (
    <div className="rounded-2xl border border-theme bg-surface-raised p-6 shadow-theme-lg">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      <form className="mt-4 space-y-3">
        <input className="w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" placeholder="email@example.com" />
        <input className="w-full rounded-xl border border-theme bg-background px-4 py-3 text-foreground" placeholder="••••••••" type="password" />
        <button className="w-full rounded-xl bg-primary-600 px-4 py-3 font-semibold text-theme-inverse" type="button">
          {title}
        </button>
      </form>
      <div className="mt-4 text-sm text-theme-secondary">
        {onSwitchMode ? (
          <button className="underline" type="button" onClick={onSwitchMode}>
            {mode === "sign-in" ? t("auth.modal.switchToSignUp") : t("auth.modal.switchToSignIn")}
          </button>
        ) : mode === "sign-in" ? (
          <Link href="/sign-up" className="underline">
            {t("auth.modal.switchToSignUp")}
          </Link>
        ) : (
          <Link href="/sign-in" className="underline">
            {t("auth.modal.switchToSignIn")}
          </Link>
        )}
      </div>
    </div>
  );
}

export function AuthModal() {
  const { isOpen, mode, close, switchMode } = useAuthModal();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
          onClick={close}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            className="w-full max-w-md"
          >
            <AuthFormCard mode={mode} onSwitchMode={switchMode} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}



