import type { MarketingEventName } from "@/lib/events";

export type EventMetadata = Record<string, string | number | boolean>;

export function trackClientEvent(eventName: MarketingEventName, metadata?: EventMetadata) {
  void eventName;
  void metadata;

  if (typeof window === "undefined") {
    return;
  }
}

export function trackPageView(pathname: string, enabled: boolean) {
  void pathname;
  void enabled;

  if (typeof window === "undefined") {
    return;
  }
}