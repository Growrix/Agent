import { siteCopy } from "@/content/site-copy";

export const siteConfig = {
  businessName: "Harbourline Plumbing Co.",
  phoneDisplay: "1300 486 737",
  phoneHref: "tel:1300486737",
  address: siteCopy["component.footer.address"],
  hours: siteCopy["component.footer.hours"],
  license: siteCopy["component.footer.license"],
  serviceArea: siteCopy["component.footer.service_area"],
  email: "hello@harbourlineplumbing.com.au",
  emergencyBlurb: "Burst pipe or hot water failure? Call for immediate triage.",
  suburbCount: "4 coverage zones",
  placeholderBusinessFacts: false,
  images: {
    hero:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    coverage:
      "https://images.unsplash.com/photo-1621905252472-e8b1f0b7c8d7?auto=format&fit=crop&w=1200&q=80",
    team:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  heroMetrics: [
    { value: "30 min", label: "Urgent triage target", detail: "Callback plan for active leaks and failures" },
    { value: "4.9/5", label: "Review average", detail: "Verified local-service feedback across repeat jobs" },
    { value: "12+ yrs", label: "Sydney trade experience", detail: "Residential maintenance, drains, and hot water work" },
  ],
} as const;

export const serviceOptions = [
  { value: "Emergency repairs", label: "Emergency repairs" },
  { value: "Hot water systems", label: "Hot water systems" },
  { value: "Blocked drains", label: "Blocked drains" },
  { value: "Leak detection", label: "Leak detection" },
  { value: "General maintenance", label: "General maintenance" },
] as const;

export const navigation = [
  { href: "/", label: siteCopy["component.nav.home"] },
  { href: "/services", label: siteCopy["component.nav.services"] },
  { href: "/areas", label: siteCopy["component.nav.areas"] },
  { href: "/reviews", label: siteCopy["component.nav.reviews"] },
  { href: "/about", label: siteCopy["component.nav.about"] },
  { href: "/faq", label: siteCopy["component.nav.faq"] },
  { href: "/contact", label: siteCopy["component.nav.contact"] },
] as const;