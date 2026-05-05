import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/unit/**/*.test.ts", "tests/unit/**/*.test.tsx"],
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    coverage: {
      reporter: ["text", "html"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80,
      },
    },
  },
});
