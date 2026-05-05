import { createHmac, timingSafeEqual } from "node:crypto";
import { env } from "@/env";

type WebhookPayload = {
  type?: string;
  slug?: string;
};

export class CmsWebhookError extends Error {
  constructor(public readonly code: "invalid_signature" | "malformed_payload") {
    super(code);
  }
}

export function verifySanitySignature(body: string, signature: string | null) {
  if (!signature) {
    return false;
  }

  const expected = createHmac("sha256", env.SANITY_WEBHOOK_SECRET).update(body).digest("hex");
  const actual = Buffer.from(signature, "utf8");
  const wanted = Buffer.from(expected, "utf8");

  if (actual.length !== wanted.length) {
    return false;
  }

  return timingSafeEqual(actual, wanted);
}

export function getAffectedRoutes(body: string, signature: string | null) {
  if (!verifySanitySignature(body, signature)) {
    throw new CmsWebhookError("invalid_signature");
  }

  let payload: WebhookPayload;

  try {
    payload = JSON.parse(body) as WebhookPayload;
  } catch {
    throw new CmsWebhookError("malformed_payload");
  }

  if (!payload.type) {
    throw new CmsWebhookError("malformed_payload");
  }

  const routes = new Set<string>(["/"]);

  if (payload.type === "service" && payload.slug) {
    routes.add("/services");
    routes.add(`/services/${payload.slug}`);
  }

  if (payload.type === "area" && payload.slug) {
    routes.add("/areas");
    routes.add(`/areas/${payload.slug}`);
  }

  if (payload.type === "review") {
    routes.add("/reviews");
  }

  if (payload.type === "faq") {
    routes.add("/faq");
  }

  if (payload.type === "legal") {
    routes.add("/privacy");
    routes.add("/terms");
  }

  return Array.from(routes);
}