"use client";

import * as React from "react";

import { Modal } from "../components/Modal";
import { Icon } from "../components/Icon";
import { Text } from "../primitives/Text";
import { Textarea } from "../primitives/Textarea";
import { Button } from "../primitives/Button";
import { Stack } from "../primitives/Stack";
import { BotMessageSquare, MessageCircle, PhoneCall, Send, X } from "../icons";
import { cx } from "../utils/cx";

import type { SiteSupportAction, SiteSupportConfig } from "./siteConfig";

export type SupportDockProps = {
  support: SiteSupportConfig;
  className?: string;
};

function digitsOnly(value: string) {
  return value.replace(/[^0-9]/g, "");
}

function whatsappHref(phoneE164: string) {
  const digits = digitsOnly(phoneE164);
  return `https://wa.me/${digits}`;
}

function telHref(phoneE164: string) {
  return `tel:${phoneE164}`;
}

function assertNever(value: never): never {
  throw new Error(`Unhandled support action: ${String(value)}`);
}

function actionIcon(action: SiteSupportAction) {
  switch (action.kind) {
    case "whatsapp":
      return MessageCircle;
    case "call":
      return PhoneCall;
    case "chat":
      return BotMessageSquare;
    default: {
      return assertNever(action);
    }
  }
}

export function SupportDock({ support, className }: SupportDockProps) {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [draft, setDraft] = React.useState("");

  const actions = support.actions ?? [];
  if (actions.length === 0) return null;

  const chatConfig = support.chat;

  return (
    <>
      <div className={cx("ui-fab", className)} aria-label="Support" role="complementary">
        <div className="ui-fab__stack">
          {actions.map((a) => {
            const IconRef = actionIcon(a);
            const aria = a.label;

            if (a.kind === "chat") {
              return (
                <Button key={a.id} variant="fab" aria-label={aria} onClick={() => setChatOpen(true)}>
                  <Icon icon={IconRef} size="sm" aria-hidden />
                </Button>
              );
            }

            const href = a.kind === "call" ? telHref(a.phoneE164) : whatsappHref(a.phoneE164);
            return (
              <Button
                key={a.id}
                as="a"
                variant="fab"
                href={href}
                aria-label={aria}
                target={a.kind === "whatsapp" ? "_blank" : undefined}
                rel={a.kind === "whatsapp" ? "noreferrer" : undefined}
              >
                <Icon icon={IconRef} size="sm" aria-hidden />
              </Button>
            );
          })}
        </div>
      </div>

      <Modal
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        title={chatConfig?.title ?? "AI Assistant"}
        description={chatConfig?.description ?? "Ask a quick question and we’ll route it to the right place."}
        variant="bottom-sheet"
        size="default"
      >
        <Stack gap="compact">
          <Text tone="muted" variant="body-small">
            {chatConfig?.disclaimer ?? "Mock UI only — connect this to your AI backend or support inbox."}
          </Text>

          <Textarea
            value={draft}
            onChange={(e) => setDraft(e.currentTarget.value)}
            placeholder={chatConfig?.placeholder ?? "Type your message…"}
            aria-label="Message"
            rows={4}
          />

          <div className="ui-row ui-row--between">
            <Button variant="secondary" onClick={() => setChatOpen(false)} aria-label="Close chat">
              <Icon icon={X} size="sm" aria-hidden />
              Close
            </Button>
            <Button
              onClick={() => {
                // Placeholder action only.
                setDraft("");
              }}
              aria-label={chatConfig?.sendLabel ?? "Send message"}
              disabled={draft.trim().length === 0}
            >
              <Icon icon={Send} size="sm" aria-hidden />
              {chatConfig?.sendLabel ?? "Send"}
            </Button>
          </div>
        </Stack>
      </Modal>
    </>
  );
}
