import { z } from "zod";
import { copy } from "@/lib/content";

const australianPhone = /^(\+?61|0)[2-478](\s?\d){8}$/;

export function createLeadSchema(source: "quote" | "contact") {
  return z
    .object({
      name: z.string().min(1, copy("validation.name.required")),
      phone: z
        .string()
        .min(1, copy("validation.phone.required"))
        .refine((value) => australianPhone.test(value.replace(/\s+/g, "")), copy("validation.phone.format")),
      service: z.string().optional(),
      postcode: z.string().optional(),
      message: z.string().trim().optional(),
      source: z.enum(["quote", "contact", "unknown"]).default(source),
      turnstileToken: z.string().optional(),
    })
    .superRefine((value, ctx) => {
      if (source === "quote" && (!value.service || value.service.length === 0)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: copy("validation.service.required"),
          path: ["service"],
        });
      }

      if (source === "quote" && (!value.postcode || value.postcode.length === 0)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: copy("validation.postcode.required"),
          path: ["postcode"],
        });
      }

      if (source === "contact" && (!value.message || value.message.length < 8)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: copy("errors.form.submit"),
          path: ["message"],
        });
      }
    });
}

export type QuoteLeadInput = z.infer<ReturnType<typeof createLeadSchema>>;