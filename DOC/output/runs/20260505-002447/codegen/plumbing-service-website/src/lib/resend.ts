import { Resend } from "resend";
import { env, isLocalMockMode } from "@/env";

const resendClient = isLocalMockMode() ? null : new Resend(env.RESEND_API_KEY);

export async function sendResendEmail(input: {
  to: string | string[];
  subject: string;
  html: string;
}) {
  if (!resendClient) {
    return {
      id: "mock-resend-id",
      status: "mocked",
    };
  }

  return resendClient.emails.send({
    from: env.RESEND_FROM_EMAIL,
    to: input.to,
    subject: input.subject,
    html: input.html,
  });
}