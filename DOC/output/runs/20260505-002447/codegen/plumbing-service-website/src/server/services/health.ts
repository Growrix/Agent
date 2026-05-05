import { isLocalMockMode } from "@/env";

export function getRuntimeHealth() {
  return {
    status: "ok" as const,
    mode: isLocalMockMode() ? ("mock" as const) : ("live" as const),
  };
}