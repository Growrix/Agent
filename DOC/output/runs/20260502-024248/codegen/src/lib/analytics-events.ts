export const AnalyticsEvents = {
  PHONE_CTA_CLICKED: 'phone_cta_clicked',
  QUOTE_CTA_CLICKED: 'quote_cta_clicked',
  EMERGENCY_CTA_CLICKED: 'emergency_cta_clicked',
  CALLBACK_CTA_CLICKED: 'callback_cta_clicked',
  QUOTE_REQUEST_SUBMITTED: 'quote_request_submitted',
  CALLBACK_REQUESTED: 'callback_requested',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  SERVICE_PAGE_VIEWED: 'service_page_viewed',
  SUBURB_PAGE_VIEWED: 'suburb_page_viewed',
  FAQ_ITEM_EXPANDED: 'faq_item_expanded',
  THANK_YOU_PAGE_VIEWED: 'thank_you_page_viewed',
  ADMIN_LEAD_STATUS_UPDATED: 'admin_lead_status_updated',
} as const

export type AnalyticsEvent = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents]
