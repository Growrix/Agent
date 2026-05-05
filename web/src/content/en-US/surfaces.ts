export const content = {
  brand: {
    name: "Solar Installation Service Company",
    tagline: "Clean energy systems designed, installed, and supported",
  },
  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    testimonials: "Testimonials",
    blog: "Blog",
    quote: "Instant Quote",
    contact: "Contact",
    signIn: "Sign In",
    signUp: "Sign Up",
    account: "Account",
  },
  support: {
    phoneLabel: "Call",
    whatsappLabel: "WhatsApp",
    assistantLabel: "AI Assistant",
    responseTime: "Average first response within one short call cycle",
  },
  actions: {
    getQuote: "Get Instant Quote",
    viewProjects: "View Projects",
    contactTeam: "Contact Team",
    learnMore: "Learn More",
    readMore: "Read More",
    submit: "Submit",
    backHome: "Back to Home",
  },
  home: {
    title: "Switch to clean energy with confidence",
    subtitle:
      "Explore savings, compare system options, and move from estimate to installation with full visibility.",
    sections: {
      trust: "Trust Signals",
      services: "Featured Services",
      projects: "Featured Projects",
      testimonials: "Customer Stories",
      calculator: "Estimate Your Solar Fit",
      faq: "Frequently Asked Questions",
    },
  },
  services: {
    title: "Solar services from assessment to activation",
    subtitle: "Design, permits, installation, and monitoring support delivered through one coordinated team.",
  },
  portfolio: {
    title: "Real projects, real performance outcomes",
    subtitle: "Browse completed installations by property type, system size, and energy objective.",
  },
  testimonials: {
    title: "What customers say after going solar",
    subtitle: "Experiences from homeowners and businesses who chose our installation team.",
  },
  blog: {
    title: "Solar insights for smarter decisions",
    subtitle: "Guides, explainers, and updates from installers and energy specialists.",
  },
  quote: {
    title: "Estimate your solar fit in minutes",
    subtitle: "Use the instant calculator, then submit details for a tailored proposal.",
    form: {
      monthlyBill: "Average Monthly Bill",
      roofSize: "Roof Size",
      propertyType: "Property Type",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      privacy: "By submitting, you agree to be contacted about your quote request.",
      success: "Your quote request is in progress",
      error: "Unable to submit right now. Please try again.",
    },
  },
  contact: {
    title: "Speak with a solar specialist",
    subtitle: "Reach us by call, WhatsApp, assistant chat, or contact request form.",
  },
  about: {
    title: "Built on trust, craftsmanship, and measurable outcomes",
    subtitle: "Our team combines engineering precision with practical installation experience.",
  },
  auth: {
    signInTitle: "Welcome back",
    signUpTitle: "Create your solar account",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
  },
  account: {
    title: "Your project dashboard",
    subtitle: "Track milestones, documents, and support activity in one place.",
  },
  legal: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    updated: "Last updated",
  },
  utility: {
    notFoundTitle: "Page not found",
    notFoundSubtitle: "The page you are looking for is not available.",
  },
  footer: {
    license: "License details from CMS",
    hours: "Business hours from CMS",
    address: "Service address from CMS",
    copyright: "All rights reserved",
  },
} as const;

export type ContentSchema = typeof content;
