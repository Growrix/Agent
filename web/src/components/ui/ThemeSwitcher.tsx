"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { t } from "@/lib/content";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      aria-label={t("theme.toggle")}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-theme bg-surface-raised text-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </motion.button>
  );
}



