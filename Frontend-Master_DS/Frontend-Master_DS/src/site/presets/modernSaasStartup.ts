import { ROUTES } from "@/app/route-map";
import {
  BookOpen,
  Globe,
  Home,
  Layers,
  PhoneCall,
  type PublicSitePreset,
} from "@/ds";

/**
 * Modern SaaS startup preset — exercises the modern-saas + ai-product archetypes.
 *
 * This preset deliberately opts into rich variants on every section it can:
 * - hero-modern-saas-split        (asymmetric split with gradient mesh)
 * - features-bento-asymmetric     (mixed-cell bento grid)
 * - testimonials-marquee          (infinite marquee)
 * - case-studies-grid             (2-column lifted cards)
 * - logo-cloud-grid               (greyscale logo wall)
 * - cta-full-bleed                (inverse-colored conversion band)
 *
 * It demonstrates that one preset CAN drive a visually distinct site purely
 * by selecting variant ids — no DS code changes required.
 */
export const MODERN_SAAS_STARTUP_PRESET: PublicSitePreset = {
  id: "modern-saas-startup",
  label: "Modern SaaS Startup",
  archetype: "modern-saas",
  config: {
    brand: {
      name: "Cadence",
      href: ROUTES.home,
      tagline: "The async-first project workspace",
    },
    nav: {
      primary: [
        { id: "home", label: "Home", href: ROUTES.home, icon: Home },
        { id: "features", label: "Features", href: ROUTES.services, icon: Layers },
        { id: "customers", label: "Customers", href: ROUTES.projects, icon: Layers },
        { id: "blog", label: "Blog", href: ROUTES.blog, icon: BookOpen },
        { id: "contact", label: "Contact", href: ROUTES.contact, icon: PhoneCall },
      ],
      mobileBottom: [
        { id: "home", label: "Home", href: ROUTES.home, icon: Home, iconOnly: true },
        { id: "features", label: "Features", href: ROUTES.services, icon: Layers, iconOnly: true },
        { id: "customers", label: "Customers", href: ROUTES.projects, icon: Layers, iconOnly: true },
        { id: "blog", label: "Blog", href: ROUTES.blog, icon: BookOpen, iconOnly: true },
        { id: "contact", label: "Contact", href: ROUTES.contact, icon: PhoneCall, iconOnly: true },
      ],
    },
    socials: [{ id: "website", label: "Company website", href: "https://example.com", icon: Globe }],
    footer: {
      columns: [
        {
          id: "product",
          title: "Product",
          links: [
            { label: "Features", href: ROUTES.services },
            { label: "Customers", href: ROUTES.projects },
            { label: "Changelog", href: "#" },
          ],
        },
        {
          id: "company",
          title: "Company",
          links: [
            { label: "Blog", href: ROUTES.blog },
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
        { id: "chat", kind: "chat", label: "AI Assistant" },
      ],
      chat: {
        title: "Cadence Assistant",
        description: "Ask about features, pricing, or integrations.",
        placeholder: "Example: How does Cadence sync with GitHub PRs?",
        sendLabel: "Send",
        disclaimer: "Mock UI only — connect to your assistant backend.",
      },
    },
  },
  pages: {
    home: {
      id: "home",
      title: "Home",
      archetype: "modern-saas",
      sections: [
        {
          id: "hero",
          kind: "hero",
          variant: "hero-modern-saas-split",
          kicker: "Async-first project workspace",
          title: "Ship faster without the meeting tax",
          lede: "Cadence keeps work moving in writing, with structured updates that replace standups and unblock decisions before anyone needs a call.",
          primaryAction: { label: "Start free", href: ROUTES.contact },
          secondaryAction: { label: "See customer stories", href: ROUTES.projects },
        },
        {
          id: "logos",
          kind: "logo-cloud",
          header: { kicker: "Trusted by", title: "Teams shipping with Cadence" },
          logos: [
            { id: "l1", label: "Northwind" },
            { id: "l2", label: "Acme" },
            { id: "l3", label: "Pencilworks" },
            { id: "l4", label: "Sora Labs" },
            { id: "l5", label: "Lattice & Co" },
            { id: "l6", label: "Brightside" },
          ],
        },
        {
          id: "stats",
          kind: "stats-band",
          stats: [
            { id: "teams", value: "8,400", label: "Teams shipping" },
            { id: "updates", value: "1.2M", label: "Async updates / week" },
            { id: "saved", value: "32 hr", label: "Meeting hours saved / team / mo" },
            { id: "csat", value: "4.8 / 5", label: "G2 rating" },
          ],
        },
        {
          id: "features",
          kind: "features",
          variant: "features-bento-asymmetric",
          header: {
            kicker: "What's inside",
            title: "Built around how engineering teams actually work",
            lede: "Standups, retros, decisions, and unblocks — all written, all linkable, all searchable.",
          },
          features: [
            { id: "f1", title: "Structured async updates", description: "Replace standups with templated daily writes-ups that surface blockers automatically." },
            { id: "f2", title: "Decision logs", description: "Every architectural call captured with context and links." },
            { id: "f3", title: "GitHub sync", description: "PR activity threaded into the same workspace as written updates." },
            { id: "f4", title: "Smart digests", description: "Daily and weekly summaries auto-generated for stakeholders." },
            { id: "f5", title: "Searchable history", description: "Find that decision from six months ago in 30 seconds." },
            { id: "f6", title: "Permissioned spaces", description: "Per-team, per-project, per-stakeholder access with audit trail." },
          ],
        },
        {
          id: "customers",
          kind: "case-studies",
          header: { kicker: "In the wild", title: "Teams who replaced their daily standup" },
          items: [
            { id: "c1", title: "How Northwind cut sync hours by 60%", excerpt: "A 40-engineer org rebuilt their async ritual in one quarter.", href: "#", tags: ["Engineering", "40 ppl"] },
            { id: "c2", title: "Acme's distributed design ops", excerpt: "Six time zones, one shared decision log.", href: "#", tags: ["Design", "Distributed"] },
          ],
        },
        {
          id: "testimonials",
          kind: "testimonials",
          variant: "testimonials-marquee",
          header: { kicker: "Voices", title: "What teams say after 90 days" },
          items: [
            { id: "t1", quote: "We replaced our daily standup in week two and never looked back.", name: "Priya N.", meta: "Eng lead, Northwind" },
            { id: "t2", quote: "Decision log alone is worth the price.", name: "Hank R.", meta: "Director of platform, Acme" },
            { id: "t3", quote: "Best onboarding I've seen in a B2B tool.", name: "Sara L.", meta: "PM, Brightside" },
            { id: "t4", quote: "Cadence is how we coordinate across three time zones.", name: "Tomás G.", meta: "VP Eng, Sora Labs" },
          ],
        },
        {
          id: "cta",
          kind: "cta",
          variant: "cta-full-bleed",
          header: { title: "Try Cadence with your team this week" },
          body: "Free for the first 14 days. No credit card. Slack import in under a minute.",
          primaryAction: { label: "Start free trial", href: ROUTES.contact },
          secondaryAction: { label: "Talk to sales", href: ROUTES.contact },
        },
      ],
    },
  },
};
