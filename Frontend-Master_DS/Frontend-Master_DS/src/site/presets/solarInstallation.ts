import { ROUTES } from "@/app/route-map";
import {
  BookOpen,
  Globe,
  Home,
  Layers,
  PhoneCall,
  type PublicSitePreset,
} from "@/ds";

export const SOLAR_INSTALLATION_PRESET: PublicSitePreset = {
  id: "solar-installation",
  label: "Solar Installation Service",
  archetype: "local-business-trust",
  config: {
    brand: {
      name: "SolarBright",
      href: ROUTES.home,
      tagline: "Solar installs, upgrades, and maintenance",
    },
    nav: {
      primary: [
        { id: "home", label: "Home", href: ROUTES.home, icon: Home },
        { id: "services", label: "Services", href: ROUTES.services, icon: Layers },
        { id: "projects", label: "Projects", href: ROUTES.projects, icon: Layers },
        { id: "blog", label: "Insights", href: ROUTES.blog, icon: BookOpen },
        { id: "contact", label: "Contact", href: ROUTES.contact, icon: PhoneCall },
      ],
      mobileBottom: [
        { id: "home", label: "Home", href: ROUTES.home, icon: Home, iconOnly: true },
        { id: "services", label: "Services", href: ROUTES.services, icon: Layers, iconOnly: true },
        { id: "projects", label: "Projects", href: ROUTES.projects, icon: Layers, iconOnly: true },
        { id: "blog", label: "Blog", href: ROUTES.blog, icon: BookOpen, iconOnly: true },
        { id: "contact", label: "Contact", href: ROUTES.contact, icon: PhoneCall, iconOnly: true },
      ],
    },
    socials: [
      { id: "website", label: "Company website", href: "https://example.com", icon: Globe },
    ],
    footer: {
      columns: [
        {
          id: "company",
          title: "Company",
          links: [
            { label: "Home", href: ROUTES.home },
            { label: "Services", href: ROUTES.services },
            { label: "Projects", href: ROUTES.projects },
          ],
        },
        {
          id: "learn",
          title: "Learn",
          links: [
            { label: "Insights", href: ROUTES.blog },
            { label: "Contact", href: ROUTES.contact },
          ],
        },
        {
          id: "legal",
          title: "Legal",
          links: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
          ],
        },
      ],
      attribution: {
        prefix: "Built and maintained by",
        linkText: "Growrix OS",
        url: "https://www.growrixos.com",
        ariaLabel: "Built and maintained by Growrix OS (opens in a new tab)",
      },
    },
    support: {
      actions: [
        { id: "whatsapp", kind: "whatsapp", label: "WhatsApp", phoneE164: "+15551234567" },
        { id: "call", kind: "call", label: "Call", phoneE164: "+15551234567" },
        { id: "chat", kind: "chat", label: "AI Assistant" },
      ],
      chat: {
        title: "AI Assistant",
        description: "Ask about pricing, solar savings, or booking an install visit.",
        placeholder: "Example: What size system do I need for a 2,000 sq ft home?",
        sendLabel: "Send",
        disclaimer: "Mock UI only — connect to your assistant backend.",
      },
    },
  },
  pages: {
    home: {
      id: "home",
      title: "Home",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-editorial-premium-1",
          kicker: "Solar Installation",
          title: "Engineered installs that pay back season after season",
          lede: "From design to commissioning — we manage the full roof-to-grid pipeline so households see stable production from day one.",
          primaryAction: { label: "Get a quote", href: ROUTES.contact },
          secondaryAction: { label: "View projects", href: ROUTES.projects },
          trustChips: [
            { id: "licensed", label: "Licensed installers" },
            { id: "warranty", label: "10-year workmanship warranty" },
            { id: "speed", label: "24-hour quote turnaround" },
          ],
        },
        {
          id: "stats",
          kind: "stats-band",
          stats: [
            { id: "installs", value: "1,200+", label: "Homes installed" },
            { id: "kw", value: "9.4 MW", label: "Combined capacity" },
            { id: "savings", value: "$3.1M", label: "Customer savings to date" },
            { id: "csat", value: "4.9 / 5", label: "Customer satisfaction" },
          ],
        },
        {
          id: "features",
          kind: "features",
          variant: "features-split-alternating",
          header: {
            kicker: "Why us",
            title: "A predictable process from survey to switch-on",
            lede: "We measure twice, install once, and document everything so the inspection passes the first time.",
          },
          features: [
            { id: "design", title: "System design", description: "Roof analysis, shading study, and production modelling produce a system tuned to your usage profile and orientation." },
            { id: "install", title: "Clean install", description: "Two-day install with conduit runs hidden in the attic; we leave the site cleaner than we found it." },
            { id: "monitor", title: "Monitoring", description: "Per-panel monitoring dashboard from day one — see live production, year-over-year output, and savings reports." },
          ],
        },
        {
          id: "process",
          kind: "process-steps",
          header: {
            kicker: "Our process",
            title: "From first call to switch-on in under 30 days",
            lede: "Each step is timed and visible to you. No mystery stages, no surprise fees.",
          },
          steps: [
            { id: "s1", title: "Site survey", description: "On-site within 5 business days; we measure roof orientation, panel placement, and existing electrical capacity." },
            { id: "s2", title: "Design + quote", description: "Production model + binding quote delivered within 24 hours of the survey." },
            { id: "s3", title: "Permits + scheduling", description: "We handle the utility paperwork and AHJ permits; you confirm your install date." },
            { id: "s4", title: "Install + inspection", description: "Two-day install, inspection booked the same week, switch-on within 7 days of inspection clearance." },
          ],
        },
        {
          id: "testimonials",
          kind: "testimonials",
          variant: "testimonials-marquee",
          header: { kicker: "Proof", title: "Homeowners love the results" },
          items: [
            { id: "t1", quote: "Install was seamless — the crew was punctual and professional.", name: "Ayesha R.", meta: "8.2 kW system" },
            { id: "t2", quote: "The monitoring setup is great. I can see savings day by day.", name: "Mark T.", meta: "6.5 kW system" },
            { id: "t3", quote: "Clear pricing and great workmanship — would recommend.", name: "Samira K.", meta: "10.1 kW system" },
          ],
        },
        {
          id: "faq",
          kind: "faq",
          header: { kicker: "FAQ", title: "Questions, answered" },
          items: [
            { id: "q1", q: "How long does installation take?", a: "Most residential installs complete in 1–2 days after permits." },
            { id: "q2", q: "Do you handle permits?", a: "Yes — we manage permits and coordinate inspections." },
            { id: "q3", q: "Can I finance the system?", a: "Financing options vary; connect your provider in the backend layer." },
          ],
        },
        {
          id: "cta",
          kind: "cta",
          variant: "cta-full-bleed",
          header: { title: "Ready to see your solar savings?" },
          body: "Get a binding quote within 24 hours. We handle survey, design, permits, and install — you keep the savings.",
          primaryAction: { label: "Request a quote", href: ROUTES.contact },
          secondaryAction: { label: "Browse insights", href: ROUTES.blog },
        },
      ],
    },
    services: {
      id: "services",
      title: "Services",
      sections: [
        {
          id: "hero",
          kind: "hero",
          kicker: "Services",
          title: "Everything you need for a reliable solar system",
          lede: "Define your own services via presets and connect CMS later.",
          primaryAction: { label: "Talk to an expert", href: ROUTES.contact },
        },
        {
          id: "features",
          kind: "features",
          header: { title: "Core services" },
          features: [
            { id: "new", title: "New installations", description: "From design to commissioning." },
            { id: "upgrade", title: "Upgrades", description: "Battery add-ons, inverter swaps, panel expansions." },
            { id: "maint", title: "Maintenance", description: "Diagnostics, cleaning, and performance checks." },
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      title: "Projects",
      sections: [
        {
          id: "hero",
          kind: "hero",
          kicker: "Portfolio",
          title: "Recent installs and case studies",
          lede: "Model projects as posts or case-study content in your CMS.",
          primaryAction: { label: "Get a quote", href: ROUTES.contact },
        },
        {
          id: "cases",
          kind: "blogList",
          header: { title: "Featured case studies" },
          posts: [
            { id: "c1", title: "8.2 kW roof install", excerpt: "High-output layout optimized for afternoon sun.", href: "#" },
            { id: "c2", title: "Battery + solar retrofit", excerpt: "Backup power and peak shaving for a busy home.", href: "#" },
            { id: "c3", title: "Commercial parking canopy", excerpt: "A scalable layout designed for future expansion.", href: "#" },
          ],
        },
      ],
    },
    blog: {
      id: "blog",
      title: "Insights",
      sections: [
        {
          id: "hero",
          kind: "hero",
          kicker: "Insights",
          title: "Solar tips, rebates, and best practices",
          lede: "Drive SEO with content — wire this to a CMS later.",
          primaryAction: { label: "Contact", href: ROUTES.contact },
        },
        {
          id: "posts",
          kind: "blogList",
          header: { title: "Latest posts" },
          posts: [
            { id: "p1", title: "How net metering works", excerpt: "A quick guide to credits and billing cycles.", href: "#" },
            { id: "p2", title: "Choosing the right inverter", excerpt: "String vs microinverters — practical tradeoffs.", href: "#" },
            { id: "p3", title: "Battery basics", excerpt: "What to know before adding backup power.", href: "#" },
          ],
        },
        { id: "newsletter", kind: "newsletter", header: { title: "Stay updated" }, title: "Solar newsletter" },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      sections: [
        {
          id: "hero",
          kind: "hero",
          kicker: "Contact",
          title: "Get a quote in 24 hours",
          lede: "Replace mock UI with your quote flow and forms.",
          primaryAction: { label: "Open chat", href: "#" },
        },
        {
          id: "cta",
          kind: "cta",
          header: { title: "Fast next steps" },
          body: "Use the support dock for WhatsApp, calling, and AI chat. For full lead capture, connect a CMS + backend in the next phase.",
          primaryAction: { label: "Call now", href: "tel:+15551234567" },
          secondaryAction: { label: "WhatsApp", href: "https://wa.me/15551234567" },
        },
      ],
    },
  },
};
