import { describe, expect, it } from "vitest";
import { estimateQuote } from "./quote";

describe("estimateQuote", () => {
  it("returns configured range for known service", () => {
    expect(estimateQuote("Blocked Drains")).toBe("$220 - $480");
  });

  it("returns fallback range for unknown service", () => {
    expect(estimateQuote("Unknown Service")).toBe("$200 - $600");
  });
});
