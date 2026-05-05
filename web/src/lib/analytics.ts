export const analyticsEvents = {
  homeView: "frontend.home.view",
  quoteSubmit: "frontend.quote.submit",
  supportOpen: "frontend.support.open",
} as const;

export const track = (eventName: string, payload?: Record<string, unknown>): void => {
  if (process.env.NODE_ENV !== "production") {
    // Intentionally lightweight no-op tracker for local development.
    console.debug("analytics", eventName, payload ?? {});
  }
};
