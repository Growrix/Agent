export const marketingEvents = {
  marketing_home_viewed: "marketing_home_viewed",
  home_hero_call_clicked: "home_hero_call_clicked",
  home_hero_quote_clicked: "home_hero_quote_clicked",
  service_card_clicked: "service_card_clicked",
  services_index_viewed: "services_index_viewed",
  service_detail_viewed: "service_detail_viewed",
  areas_index_viewed: "areas_index_viewed",
  area_detail_viewed: "area_detail_viewed",
  reviews_page_viewed: "reviews_page_viewed",
  about_page_viewed: "about_page_viewed",
  quote_page_viewed: "quote_page_viewed",
  contact_page_viewed: "contact_page_viewed",
  faq_page_viewed: "faq_page_viewed",
  quote_form_submitted: "quote_form_submitted",
  contact_form_submitted: "contact_form_submitted",
} as const;

export type MarketingEventName = keyof typeof marketingEvents;