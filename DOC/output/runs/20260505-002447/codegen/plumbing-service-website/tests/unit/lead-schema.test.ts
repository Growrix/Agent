import { describe, expect, test } from "vitest";
import { createLeadSchema } from "@/server/validation/lead";

describe("createLeadSchema", () => {
  test("accepts a valid quote submission", () => {
    const schema = createLeadSchema("quote");
    const result = schema.safeParse({
      name: "Taylor",
      phone: "0400123123",
      service: "Emergency repairs",
      postcode: "2000",
      message: "Burst pipe under the laundry sink.",
      source: "quote",
    });

    expect(result.success).toBe(true);
  });

  test("requires a message for contact submissions", () => {
    const schema = createLeadSchema("contact");
    const result = schema.safeParse({
      name: "Jordan",
      phone: "0400123123",
      source: "contact",
      message: "short",
    });

    expect(result.success).toBe(false);
  });
});