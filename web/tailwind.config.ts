import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: "var(--color-brand-primary)",
        brandAccent: "var(--color-brand-accent)",
        surfaceBase: "var(--color-surface-base)",
        textStrong: "var(--color-text-strong)",
      },
      borderRadius: {
        panel: "var(--radius-lg)",
      },
      boxShadow: {
        focus: "var(--shadow-focus)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
      },
    },
  },
};

export default config;
