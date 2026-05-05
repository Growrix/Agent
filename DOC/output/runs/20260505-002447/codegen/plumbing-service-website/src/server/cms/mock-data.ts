import { copy } from "@/lib/content";
import { siteConfig } from "@/config/site";
import type {
  AreaData,
  FAQItem,
  HeroMetric,
  LegalPage,
  MarketingStat,
  ReviewItem,
  ServiceCardData,
  ServiceDetailData,
} from "@/server/cms/types";

const heroImage = {
  src: siteConfig.images.hero,
  alt: copy("home.hero.media_alt"),
};

const vanImage = {
  src: siteConfig.images.coverage,
  alt: "Harbourline service van staged outside a Federation-era home for a booked plumbing visit",
};

const teamImage = {
  src: siteConfig.images.team,
  alt: "Harbourline technicians reviewing the day plan before heading to jobs",
};

export const reviews: ReviewItem[] = [
  {
    id: "review-1",
    quote: copy("reviews.cards.0.quote"),
    name: "Paddington terrace owner",
    context: "Burst pipe response",
    ratingText: "5-star response for same-day leak triage",
    location: "Paddington",
    outcome: "Leak isolated, repair plan confirmed, and cabinetry protected before the full fix.",
  },
  {
    id: "review-2",
    quote: copy("reviews.cards.1.quote"),
    name: "North Sydney strata manager",
    context: "Hot water replacement",
    ratingText: "5-star feedback for clear quoting and punctual attendance",
    location: "North Sydney",
    outcome: "Old cylinder assessed in the morning, replacement options priced clearly, and the install booked without back-and-forth.",
  },
  {
    id: "review-3",
    quote: copy("reviews.cards.2.quote"),
    name: "Marrickville family home",
    context: "Blocked drain investigation",
    ratingText: "5-star feedback for explanation, cleanup, and follow-through",
    location: "Marrickville",
    outcome: "Drain issue diagnosed, cleared, and documented with prevention advice before the team left site.",
  },
];

export const marketingStats: MarketingStat[] = [
  {
    label: copy("component.stats.response_time_label"),
    value: "30 mins",
    detail: "Target callback window for urgent triage during staffed hours",
    eyebrow: "Response",
  },
  {
    label: copy("component.stats.jobs_completed_label"),
    value: "2,480+",
    detail: "Sydney household jobs delivered across maintenance, drainage, and hot water work",
    eyebrow: "Throughput",
  },
  {
    label: copy("component.stats.satisfaction_label"),
    value: "4.9/5",
    detail: "Average post-job review rating from recurring residential clients",
    eyebrow: "Confidence",
  },
];

const heroMetrics: HeroMetric[] = [...siteConfig.heroMetrics];

const sharedFaqs: FAQItem[] = [
  {
    question: copy("faq.items.0.question"),
    answer: copy("faq.items.0.answer"),
  },
  {
    question: copy("faq.items.1.question"),
    answer: copy("faq.items.1.answer"),
  },
  {
    question: copy("faq.items.2.question"),
    answer: copy("faq.items.2.answer"),
  },
];

export const services: ServiceDetailData[] = [
  {
    slug: "emergency-plumbing",
    title: copy("services.grid.items.0.title"),
    body: "Rapid response for burst pipes, active leaks, overflowing fixtures, and failures that cannot sit overnight.",
    cta: copy("services.grid.items.0.cta"),
    image: heroImage,
    accent: "Urgent response",
    timing: "Immediate triage call-back and same-day make-safe planning.",
    highlights: ["Burst pipe isolation", "Leak source tracing", "Make-safe and repair plan"],
    heroBody:
      "Urgent repairs are framed around rapid triage, what can be made safe immediately, and the clearest route to a same-day attendance window.",
    includes: [
      "Burst pipe isolation with clear make-safe instructions while the team is en route",
      "Leak tracing with plain-language explanation of the likely failure point",
      "Short-term protection steps and full repair options once the issue is visible",
    ],
    process: [
      {
        title: "Call or send the issue summary",
        body: "Urgent jobs use the direct call path first, while the quote form captures details only when the issue is stable enough to wait for a callback.",
      },
      {
        title: "Confirm the likely scope",
        body: "The triage step confirms whether the issue needs immediate attendance, a make-safe plan, or a scheduled quoted visit.",
      },
      {
        title: "Receive the visit plan",
        body: "Arrival expectations, access requirements, and what the plumber will inspect are clarified before the van leaves the previous job.",
      },
    ],
    faqs: sharedFaqs,
    quoteGuidance: [
      "Describe where the issue is happening in the home.",
      "Mention whether water can be isolated safely.",
      "Include photos later if the team asks for a quick visual before arrival.",
    ],
    proof: reviews.slice(0, 2),
  },
  {
    slug: "hot-water-systems",
    title: copy("services.grid.items.1.title"),
    body: "Diagnosis, repair, replacement guidance, and clean installation planning for electric and gas hot water systems.",
    cta: copy("services.grid.items.1.cta"),
    image: vanImage,
    accent: "System replacement",
    timing: "Diagnosis first, replacement path second, install timing made explicit.",
    highlights: ["Electric and gas systems", "Repair-versus-replace advice", "Tidy swap-over planning"],
    heroBody:
      "Hot water work is positioned around diagnosis first, replacement planning second, and a tidy handover once the system is stable again.",
    includes: [
      "System inspection for age, condition, venting, and likely failure points",
      "Repair-versus-replace guidance without trade jargon or vague pricing language",
      "Installation planning that explains timing, access, and household disruption upfront",
    ],
    process: [
      {
        title: "Share the system symptoms",
        body: "Visitors can describe temperature problems, leaks, or complete outages without needing to know the system type first.",
      },
      {
        title: "Confirm the likely system type",
        body: "The visit is matched to electric, gas, or storage systems with the right preparation steps and likely replacement scenario.",
      },
      {
        title: "Move into the repair or replacement path",
        body: "The quote path stays simple while setting expectations on timing, follow-up parts, and access requirements.",
      },
    ],
    faqs: sharedFaqs,
    quoteGuidance: [
      "If possible, note the current system brand and age.",
      "Mention whether there is any visible leaking or rust.",
      "Flag whether the issue is total failure, temperamental, or leaking only under demand.",
    ],
    proof: reviews.slice(1),
  },
  {
    slug: "blocked-drains",
    title: copy("services.grid.items.2.title"),
    body: "Drain clearing, camera-led investigation, and prevention advice for recurring blockages and overflow risk.",
    cta: copy("services.grid.items.2.cta"),
    image: teamImage,
    accent: "Investigation-led",
    timing: "Overflow issues are escalated immediately, recurring issues are scoped properly.",
    highlights: ["Overflow triage", "Drain camera checks", "Prevention guidance"],
    heroBody:
      "Blocked drain enquiries emphasise diagnosis, clear communication on cause, and practical prevention advice after the immediate fix is complete.",
    includes: [
      "Drain inspection and blockage confirmation before guessing at a fix",
      "Clearing strategy based on severity, overflow risk, and recurrence",
      "Preventive guidance for households with repeat kitchen, stormwater, or sewer issues",
    ],
    process: [
      {
        title: "Describe the symptoms",
        body: "Slow drainage, smells, gurgling, or overflow are enough to start the process without forcing the customer into technical guesses.",
      },
      {
        title: "Assess urgency",
        body: "Overflow or active backup issues shift into the urgent call path immediately, while slower recurring issues move into proper investigation.",
      },
      {
        title: "Confirm the visit and remedy path",
        body: "Visitors receive a simple expectation of what will be checked, cleared, and explained before the team arrives.",
      },
    ],
    faqs: sharedFaqs,
    quoteGuidance: [
      "Note whether the issue affects one fixture or multiple fixtures.",
      "Mention if water is backing up or overflowing.",
      "Describe how long the problem has been happening.",
    ],
    proof: [reviews[0], reviews[2]],
  },
];

export const serviceCards: ServiceCardData[] = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  body: service.body,
  cta: service.cta,
  image: service.image,
  accent: service.accent,
  timing: service.timing,
  highlights: service.highlights,
}));

export const areas: AreaData[] = [
  {
    slug: "inner-west",
    name: "Inner West",
    body: "Fast response for terraces, semis, and apartment blocks where access, parking, and older pipe runs change how jobs get planned.",
    heroBody: "The Inner West page ties likely property constraints, realistic response language, and local proof together before visitors call.",
    image: vanImage,
    serviceSlugs: ["emergency-plumbing", "hot-water-systems"],
    process: services[0].process,
    faqs: [sharedFaqs[0], sharedFaqs[2]],
    proof: [reviews[0], reviews[1]],
    metrics: marketingStats,
    neighbourhoods: ["Marrickville", "Newtown", "Leichhardt"],
    responseNote: "Traffic and terrace access are considered in the arrival plan before dispatch.",
  },
  {
    slug: "north-shore",
    name: "North Shore",
    body: "Service planning for strata, detached homes, and tighter scheduling windows where residents need clear communication before the visit.",
    heroBody: "North Shore coverage is framed around appointment clarity, strata access expectations, and dependable follow-through.",
    image: heroImage,
    serviceSlugs: ["hot-water-systems", "blocked-drains"],
    process: services[1].process,
    faqs: [sharedFaqs[0], sharedFaqs[1]],
    proof: [reviews[1], reviews[2]],
    metrics: marketingStats,
    neighbourhoods: ["North Sydney", "Cammeray", "Lane Cove"],
    responseNote: "Strata access notes and resident communications are clarified before the booking locks in.",
  },
  {
    slug: "eastern-suburbs",
    name: "Eastern Suburbs",
    body: "Coverage for apartments, family homes, and renovation-prone properties where leak history and access often matter as much as the fault itself.",
    heroBody: "Eastern Suburbs trust is handled through visible standards, quote guidance, and project-ready communication instead of generic suburb stuffing.",
    image: teamImage,
    serviceSlugs: ["emergency-plumbing", "blocked-drains"],
    process: services[2].process,
    faqs: [sharedFaqs[1], sharedFaqs[2]],
    proof: [reviews[0], reviews[2]],
    metrics: marketingStats,
    neighbourhoods: ["Bondi", "Randwick", "Paddington"],
    responseNote: "Parking, building access, and active water damage risks are addressed during the first call.",
  },
];

export const homePageData = {
  heroImage,
  heroMetrics,
  proofIntro: copy("home.proof.body"),
  process: services[0].process,
  coveragePoints: [copy("trust.response_time"), copy("trust.guarantee"), copy("trust.areas")],
  coverageImage: vanImage,
};

export const aboutPageData = {
  heroImage: teamImage,
  story:
    "Harbourline is presented as the kind of local operator people actually want to deal with under pressure: organised on the phone, calm on site, and explicit about what happens next.",
  standards: [copy("trust.license"), copy("trust.years"), copy("trust.guarantee")],
  values: [
    {
      title: "Responsiveness",
      body: "Urgent calls are triaged quickly and planned jobs still get a clear callback window instead of disappearing into a generic inbox.",
    },
    {
      title: "Tidy workmanship",
      body: "The team is framed around protecting the home, explaining the repair, and leaving the area fit to walk straight back into.",
    },
    {
      title: "Honest quoting",
      body: "Visitors are shown what information helps, what the next step looks like, and when a phone call is the better option than a long quote form.",
    },
  ],
};

export const legalPages: Record<"privacy" | "terms", LegalPage> = {
  privacy: {
    title: copy("privacy.hero.title"),
    intro: copy("privacy.contact_line"),
    paragraphs: [
      "This prototype stores no application database records for website leads. Local form submissions are processed in memory, validated, and forwarded through the planned email service boundary.",
      "When live vendor credentials are connected, the site will use the declared spam-protection and analytics integrations. Until then, local mock mode remains isolated to non-production use only.",
      "Replace the placeholder business identity, phone number, and legal wording before production deployment.",
    ],
  },
  terms: {
    title: copy("terms.hero.title"),
    intro: copy("terms.contact_line"),
    paragraphs: [
      "The generated site is a marketing and lead-capture surface. Final service terms, pricing disclosures, and licensing statements must be confirmed by the operating business before launch.",
      "Urgent plumbing issues should use the direct phone path whenever the issue cannot safely wait for a scheduled callback.",
      "Use the contact page if any service terms need clarification before booking or requesting a quote.",
    ],
  },
};

export const faqGroups = {
  coverage: [sharedFaqs[2]],
  timing: [sharedFaqs[0]],
  quote: [sharedFaqs[1]],
};