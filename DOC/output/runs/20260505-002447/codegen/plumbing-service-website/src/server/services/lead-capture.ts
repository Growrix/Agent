import { sendResendEmail } from "@/lib/resend";
import { siteConfig } from "@/config/site";
import { env } from "@/env";
import { verifyTurnstile } from "@/server/turnstile/verify-turnstile";
import { createLeadSchema } from "@/server/validation/lead";
import { renderLeadNotificationEmail } from "../../../emails/lead-notification";

type LeadPayload = Record<string, unknown>;

export class LeadCaptureError extends Error {
  constructor(public readonly code: "validation" | "spam_guard" | "delivery_failed") {
    super(code);
  }
}

function inferSource(input: LeadPayload) {
  return input.source === "contact" ? "contact" : "quote";
}

export async function submitLead(input: LeadPayload) {
  const source = inferSource(input);
  const schema = createLeadSchema(source);
  const parsed = schema.safeParse(input);

  if (!parsed.success) {
    throw new LeadCaptureError("validation");
  }

  const turnstileValid = await verifyTurnstile(parsed.data.turnstileToken);

  if (!turnstileValid) {
    throw new LeadCaptureError("spam_guard");
  }

  const leadId = crypto.randomUUID();

  const normalizedLead = {
    id: leadId,
    source,
    name: parsed.data.name,
    phone: parsed.data.phone,
    service: parsed.data.service ?? "General enquiry",
    postcode: parsed.data.postcode ?? "n/a",
    message: parsed.data.message ?? "No additional detail provided.",
  };

  try {
    await sendResendEmail({
      to: env.RESEND_FROM_EMAIL,
      subject: `${siteConfig.businessName} lead: ${normalizedLead.service}`,
      html: renderLeadNotificationEmail({ lead: normalizedLead }),
    });
  } catch {
    throw new LeadCaptureError("delivery_failed");
  }

  return {
    status: "received" as const,
    leadId,
  };
}