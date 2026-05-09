/**
 * Apex Roofing Co. — Typed content library
 * Locale: en-US
 * Source: content.en.json (planning bundle run 20260509T1200-roofing)
 * RULE: All visible strings must come from this module — never hardcoded in JSX.
 */

export const brand = {
  name: "Apex Roofing Co.",
  phone: "(512) 555-0198",
  phone_uri: "tel:+15125550198",
  email: "hello@apexroofingco.com",
  address: "123 Rooftop Drive, Austin, TX 78701",
  founded_year: "2006",
  years_in_business: "20+",
  project_count: "2,400+",
  satisfaction_rate: "98%",
  response_time_minutes: "45",
  license: "TX-RC-847219",
  google_rating: "4.9",
  google_review_count: "387",
  hours_weekday: "Mon–Fri: 7am – 7pm",
  hours_emergency: "24/7 Emergency Service",
  hours: {
    weekday: "Mon–Sat: 7am – 7pm",
    weekend: "Sun: Emergency calls only",
    emergency: "24/7 Emergency Service",
  },
} as const;

export const nav = {
  topbar: {
    phone: brand.phone,
    phone_aria: `Call Apex Roofing at ${brand.phone}`,
    phone_uri: brand.phone_uri,
    hours: brand.hours_weekday,
    emergency: "24/7 Emergency:",
    emergency_phone: brand.phone,
    license: `License #${brand.license}`,
  },
  links: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Areas", href: "/areas" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    get_quote: "Get Free Quote",
    call_now: "Call Now",
    emergency: "Emergency? Call Now",
  },
  skip_to_content: "Skip to main content",
  aria_label: "Main navigation",
  mobile_menu_open: "Open navigation menu",
  mobile_menu_close: "Close navigation menu",
} as const;

export const cta = {
  get_free_quote: "Get Free Quote",
  call_now_label: "Call (512) 555-0198",
  call_now_short: "Call Now",
  book_inspection: "Book Free Inspection",
  learn_more: "Learn More",
  see_all_services: "See All Services",
  check_my_area: "Check My Area",
  view_reviews: "View All Reviews",
  emergency_call: "Call Now — We're Available 24/7",
  emergency_short: "Emergency? Call Now",
  view_project: "View Project",
  read_more: "Read More",
} as const;

export const trust = {
  badge: {
    licensed: "State Licensed",
    licensed_aria: "State licensed roofing contractor",
    insured: "Fully Insured",
    insured_aria: "Fully insured — liability and workers compensation",
    years: "20+ Years",
    years_aria: "20+ years in business",
    guarantee: "10-Year Guarantee",
    guarantee_aria: "10-year workmanship guarantee",
    rating: "4.9★ Google",
    rating_aria: "Rated 4.9 out of 5 on Google",
  },
} as const;

export const counters = {
  projects: { value: "2,400+", label: "Projects Completed" },
  years: { value: "20+", label: "Years in Business" },
  satisfaction: { value: "98%", label: "Satisfaction Rate" },
  response: { value: "45 min", label: "Avg. Response Time" },
} as const;

export const reviews = {
  aggregate: {
    rating: "4.9",
    count_label: "Based on 387 Google Reviews",
    aria: "4.9 out of 5 stars based on 387 Google Reviews",
  },
  page: {
    eyebrow: "Customer Stories",
    heading: "2,400+ Projects. Thousands of Happy Homeowners.",
    subhead:
      "Don't take our word for it — here's what our customers say after every job.",
  },
  items: [
    {
      id: "r1",
      author: "Sarah M.",
      location: "Austin, TX",
      rating: 5,
      date: "March 2026",
      text: "Apex replaced our entire roof in a single day. The crew was professional, cleaned everything up, and the new roof looks incredible. Highly recommend!",
    },
    {
      id: "r2",
      author: "James K.",
      location: "Cedar Park, TX",
      rating: 5,
      date: "February 2026",
      text: "Called them after a hailstorm. They were on-site within the hour, tarped the damage immediately, and had us fully repaired within a week. Outstanding service.",
    },
    {
      id: "r3",
      author: "Linda T.",
      location: "Round Rock, TX",
      rating: 5,
      date: "January 2026",
      text: "Free inspection, honest assessment, fair price. They told us we needed a repair, not a full replacement — saved us thousands. That integrity is rare.",
    },
    {
      id: "r4",
      author: "Mike R.",
      location: "Pflugerville, TX",
      rating: 5,
      date: "December 2025",
      text: "Third time using Apex. They installed our roof 10 years ago and have done two repairs since. Same quality, same team, same great attitude.",
    },
    {
      id: "r5",
      author: "Diana L.",
      location: "Georgetown, TX",
      rating: 5,
      date: "November 2025",
      text: "Got three quotes. Apex was the most transparent about materials and timeline. The job came in on budget and on time. Zero surprises.",
    },
    {
      id: "r6",
      author: "Carlos H.",
      location: "Kyle, TX",
      rating: 5,
      date: "October 2025",
      text: "The 10-year guarantee sealed the deal for me. Knowing they stand behind their work gave me real peace of mind. Great experience start to finish.",
    },
  ],
} as const;

export const home = {
  hero: {
    eyebrow: "Roofing Excellence Since 2006",
    headline_1: "Your Roof.",
    headline_2: "Our Responsibility.",
    subhead:
      "Licensed. Insured. 20+ years protecting Greater Austin area homes. Get your free quote today.",
    cta_primary: "Get Free Quote",
    cta_secondary: "Call (512) 555-0198",
    image_alt: "Aerial view of a freshly installed roof by Apex Roofing Co.",
  },
  proof: {
    eyebrow: "Before & After",
    heading: "See the Apex Difference",
    subhead:
      "Every job tells a story. Drag the slider to see the transformation.",
    before_label: "Before",
    after_label: "After",
  },
  services: {
    eyebrow: "What we do",
    heading: "Complete Roofing Services",
    subhead:
      "From minor repairs to full replacements — we handle every roofing challenge for Austin homeowners.",
  },
  process: {
    eyebrow: "How it works",
    heading: "Simple. Transparent. Guaranteed.",
    steps: [
      {
        number: "01",
        title: "Free Inspection",
        body: "We assess your roof at no cost and give you an honest, detailed report.",
      },
      {
        number: "02",
        title: "Clear Quote",
        body: "Receive a written quote with exact materials, timeline, and pricing. No surprises.",
      },
      {
        number: "03",
        title: "Expert Installation",
        body: "Our certified crew completes the work efficiently with a 10-year workmanship guarantee.",
      },
    ],
  },
  areas: {
    eyebrow: "Where we work",
    heading: "Serving Greater Austin & Beyond",
    subhead:
      "50+ cities and towns covered. Enter your postcode to confirm we're in your area.",
    cta: "Check My Area",
  },
  blog: {
    eyebrow: "Roof tips & news",
    heading: "From the Apex Blog",
    cta: "Read All Articles",
  },
  cta_band: {
    heading: "Ready for a Free Inspection?",
    subhead:
      "No pressure. No commitment. Just an honest assessment of your roof.",
    cta_primary: "Get Free Quote",
    cta_secondary: "Call (512) 555-0198",
  },
  emergency_band: {
    eyebrow: "Emergency service",
    heading: "Storm Damage? We're Available 24/7",
    subhead: "On-site within 45 minutes for emergency calls in our service area.",
    cta: "Call Now — Emergency Line",
  },
} as const;

export const services = {
  overview: {
    eyebrow: "Our services",
    heading: "Every Roofing Need, One Trusted Team",
    subhead:
      "From a missing shingle to a full roof replacement — Apex Roofing Co. handles it all with the same care and guarantee.",
  },
  "roof-installation": {
    slug: "roof-installation",
    eyebrow: "New construction & full installations",
    heading: "Roof Installation",
    card_summary: "New builds and full installations done right from the first tile.",
    starts_at: "From $8,500",
    hero: {
      headline: "A Roof Built to Last Decades",
      subhead:
        "Whether you're building new or replacing an aging structure, we install roofs with premium materials backed by a 10-year workmanship guarantee.",
      image_alt: "Professional roofers installing new roof tiles on a residential home",
    },
    features: [
      "All roofing materials: shingles, metal, flat/TPO, cedar shake",
      "10-year workmanship guarantee",
      "Manufacturer-backed material warranties",
      "Mess-free installation and full site cleanup",
      "Written quote with exact pricing before we begin",
    ],
  },
  "roof-repair": {
    slug: "roof-repair",
    eyebrow: "Expert repair service",
    heading: "Roof Repair",
    card_summary: "Fast, expert repairs that stop leaks before they become disasters.",
    starts_at: "From $350",
    hero: {
      headline: "Stop the Leak Before It Gets Worse",
      subhead:
        "A small leak becomes a major problem fast. Our crew diagnoses and repairs with precision — often on the same day you call.",
      image_alt: "Roofer repairing damaged shingles on a residential roof",
    },
    features: [
      "Same-day and next-day appointments available",
      "Leak diagnosis included at no extra charge",
      "All materials — shingles, flashing, gutters",
      "Storm damage and hail repair specialists",
      "Repair or replacement recommendation — honestly given",
    ],
  },
  "roof-replacement": {
    slug: "roof-replacement",
    eyebrow: "Full roof replacement",
    heading: "Roof Replacement",
    card_summary: "Complete replacements completed in 1–2 days, built to last.",
    starts_at: "From $9,500",
    hero: {
      headline: "Time for a New Roof? We Make It Easy.",
      subhead:
        "If your roof is beyond repair, a full replacement is the smart investment. Most jobs complete in 1–2 days with zero disruption to your family.",
      image_alt: "Before and after comparison of a complete roof replacement",
    },
    features: [
      "Complete tear-off and disposal of old materials",
      "Choice of shingles, metal, or specialty materials",
      "Full roof deck inspection and repair included",
      "Most replacements completed in 1–2 days",
      "10-year workmanship + manufacturer warranties",
    ],
  },
  "emergency-repair": {
    slug: "emergency-repair",
    eyebrow: "24/7 emergency response",
    heading: "Emergency Roof Repair",
    card_summary: "On-site within 45 minutes for urgent roof emergencies — any time.",
    starts_at: "Call for immediate response",
    hero: {
      headline: "Roof Emergency? We're Already On Our Way.",
      subhead:
        "Storm damage, sudden leaks, fallen trees. We respond within 45 minutes in our service area — 24 hours a day, 7 days a week.",
      image_alt: "Emergency roof tarping and repair after storm damage",
    },
    features: [
      "On-site within 45 minutes in our primary service area",
      "24/7/365 — including holidays",
      "Emergency tarping and water damage prevention",
      "Insurance claim assistance",
      "Full repair follow-up scheduled immediately",
    ],
  },
} as const;

export const about = {
  hero: {
    eyebrow: "Who we are",
    heading: "Built on Rooftops. Built on Trust.",
    subhead:
      "Since 2006, we've been the roofing team homeowners in Greater Austin area call when it matters most.",
    image_alt: "Apex Roofing Co. team on a completed roofing project",
  },
  story: {
    eyebrow: "Our story",
    heading: "20+ Years. Same Values.",
    body: "Apex Roofing Co. was founded in Austin, TX in 2006 by master roofer David Reyes with a simple belief: homeowners deserve honest advice, quality craftsmanship, and a contractor who stands behind their work. Two decades later, that belief still drives everything we do. We've completed over 2,400 projects across Greater Austin area — and our 98% satisfaction rate reflects the relationships we've built along the way.",
    body_2: "We're not the biggest roofing company in Texas. We're the one that answers the phone, shows up on time, gives you a straight answer, and gets the job done right the first time.",
  },
  team: {
    eyebrow: "The crew",
    heading: "The People on Your Roof",
    subhead:
      "Our certified roofing crew has an average of 12 years of field experience. Every team member is trained, background-checked, and dedicated to treating your home with respect.",
  },
  credentials: {
    license: "State License #TX-RC-847219",
    insurance: "$2M General Liability + Workers' Comp",
    warranty: "10-Year Workmanship Guarantee",
    eyebrow: "Credentials",
    heading: "Licensed. Insured. Certified.",
    subhead:
      "We carry all required state licenses, $2M in general liability, and full workers' compensation coverage.",
  },
  values: {
    eyebrow: "Our values",
    heading: "Why Austin Trusts Apex",
    items: [
      {
        title: "Honest Assessments",
        body: "We'll tell you if you need a repair instead of a replacement. Every time.",
      },
      {
        title: "No-Surprise Pricing",
        body: "Written quotes with exact costs before any work begins. Zero hidden fees.",
      },
      {
        title: "Lifetime Relationships",
        body: "Most of our customers have called us back 2–3 times over the years. That trust is everything.",
      },
    ],
  },
} as const;

export const areas = {
  page: {
    eyebrow: "Where we work",
    heading: "We Come to You",
    subhead:
      "Apex Roofing serves the Greater Austin area and 50+ surrounding towns. Enter your postcode to confirm coverage.",
    image_alt: "Map of greater Austin Texas service area",
    cities_heading: "Cities We Serve",
    cities_subhead: "Click any city to start a quote for your area.",
    coverage_heading: "Not sure if we cover your area?",
    coverage_body: "If you don't see your city listed, contact us — we may still be able to help or recommend a trusted partner in your area.",
  },
  coverage_prompt: "Enter your postcode to check coverage",
  coverage_found: "Great news — we serve {postcode}!",
  coverage_not_found:
    "We don't currently serve {postcode}, but contact us and we'll confirm.",
  cities: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Georgetown",
    "Pflugerville",
    "Kyle",
    "Buda",
    "Leander",
    "Manor",
    "Hutto",
    "Taylor",
    "San Marcos",
    "New Braunfels",
    "Bastrop",
    "Lockhart",
    "Marble Falls",
    "Lakeway",
    "Bee Cave",
    "Dripping Springs",
    "Wimberley",
  ],
} as const;

export const contact = {
  page: {
    eyebrow: "Reach us",
    heading: "Let's Talk About Your Roof",
    subhead:
      "Prefer to talk? Call (512) 555-0198. Or send us a message and we'll respond within 2 hours.",
    image_alt: "Apex Roofing Co. team member on a residential roof",
  },
  form: {
    heading: "Send a Message",
    field_name: "Your name",
    field_email: "Email address",
    field_phone: "Phone number",
    field_message: "How can we help?",
    submit: "Send Message",
    success_heading: "Message sent!",
    success_body: "We'll be in touch within 2 hours (during business hours).",
    error_network: "Something went wrong. Please call (512) 555-0198 directly.",
  },
} as const;

export const quote = {
  aria_label: "Request a free roofing quote",
  heading: "Get Your Free Quote",
  subhead: "We'll call you back within 1 business hour.",
  field: {
    name: "Your first name",
    phone: "Phone number",
    email: "Email address",
    service: "What do you need?",
    postcode: "Your postcode / zip",
    description: "Brief description (optional)",
    description_placeholder: "e.g. Missing shingles after last night's storm",
  },
  service_options: [
    "Roof Installation",
    "Roof Repair",
    "Roof Replacement",
    "Emergency Repair",
    "Other / Not sure",
  ],
  submit: "Request Free Quote",
  success: {
    heading: "Quote request received!",
    body: "We'll call you within 1 business hour. You'll also receive a confirmation email.",
  },
  error: {
    network: "Something went wrong. Please call us directly at (512) 555-0198.",
    name: { required: "Please enter your first name." },
    phone: {
      required: "Please enter a valid phone number.",
      pattern: "Please enter a valid phone number.",
    },
    service: { required: "Please select the type of service." },
    postcode: { required: "Please enter your postcode." },
  },
} as const;

export const faq = {
  page: {
    eyebrow: "Common questions",
    heading: "Everything You Wanted to Know About Your Roof",
    subhead: "Honest answers to the questions homeowners ask most.",
  },
  items: [
    {
      question: "How long does a full roof replacement take?",
      answer:
        "Most residential replacements are complete in 1–2 days. Larger or complex roofs may take 3–4 days. We'll give you a precise timeline at the quote stage.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer:
        "Yes. All workmanship is covered by our 10-year guarantee. Materials carry manufacturer warranties that vary by product — we'll explain these during your quote.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. We hold State License #TX-RC-847219 and carry full general liability and workers' compensation insurance. Certificates available on request.",
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer:
        "We aim to be on-site within 45 minutes for emergency calls in our primary service area. Call (512) 555-0198 any time — 24/7.",
    },
    {
      question: "What roofing materials do you work with?",
      answer:
        "We install and repair all common roofing materials: asphalt shingles, architectural shingles, metal roofing, flat/TPO, and cedar shake. We'll recommend the best option for your home and budget.",
    },
    {
      question: "Do I need to be home during the work?",
      answer:
        "You don't need to be present for most jobs, though we recommend it for the initial walkthrough and final inspection. We'll keep you updated throughout.",
    },
    {
      question: "How do I know if I need a repair or a full replacement?",
      answer:
        "A trained eye can tell the difference quickly. We offer a free inspection and give you an honest assessment — we'll never recommend a full replacement if a repair will do the job.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Yes. We partner with several financing providers for larger jobs. Ask about our options when you request a quote.",
    },
  ],
} as const;

export const blog = {
  page: {
    eyebrow: "Roof tips & advice",
    heading: "The Apex Roofing Blog",
    subhead: "Expert guidance from Austin's most trusted roofing team.",
  },
  posts: [
    {
      slug: "how-to-spot-roof-damage-after-a-storm",
      title: "How to Spot Roof Damage After a Storm",
      excerpt:
        "Texas weather can be brutal. Here's what to look for after hail or high winds — and when to call a professional.",
      date: "2026-04-15",
      read_time: "4 min read",
      category: "Storm Damage",
      image_alt: "Hail damage on asphalt shingles close-up",
    },
    {
      slug: "repair-vs-replacement-how-to-decide",
      title: "Repair vs. Replacement: How to Decide",
      excerpt:
        "The honest answer to the question every homeowner eventually asks. When is a repair enough, and when do you really need a new roof?",
      date: "2026-03-28",
      read_time: "6 min read",
      category: "Buying Guide",
      image_alt: "Roofer inspecting shingles on a residential roof",
    },
    {
      slug: "5-signs-your-roof-needs-attention",
      title: "5 Signs Your Roof Needs Attention",
      excerpt:
        "Don't wait for a drip to appear inside your home. These five warning signs tell you to pick up the phone before a small problem becomes a big one.",
      date: "2026-03-10",
      read_time: "3 min read",
      category: "Maintenance",
      image_alt: "Damaged and curling shingles on an aging roof",
    },
    {
      slug: "what-to-expect-during-a-roof-replacement",
      title: "What to Expect During a Roof Replacement",
      excerpt:
        "A step-by-step breakdown of what happens on day-of so there are no surprises — from tear-off to final inspection.",
      date: "2026-02-20",
      read_time: "5 min read",
      category: "Process",
      image_alt: "Roofing crew working on a residential roof replacement",
    },
    {
      slug: "metal-vs-shingles-which-is-right-for-your-austin-home",
      title: "Metal vs. Shingles: Which Is Right for Your Austin Home?",
      excerpt:
        "Both are excellent choices, but the right answer depends on your budget, home style, and long-term goals. We break it down.",
      date: "2026-01-30",
      read_time: "7 min read",
      category: "Materials",
      image_alt: "Side-by-side comparison of metal roofing and asphalt shingles",
    },
    {
      slug: "understanding-your-roof-warranty",
      title: "Understanding Your Roof Warranty",
      excerpt:
        "Workmanship vs. manufacturer. What's actually covered, for how long, and what voids it. Everything you need to know before you sign.",
      date: "2026-01-10",
      read_time: "5 min read",
      category: "Warranties",
      image_alt: "Homeowner reviewing warranty documentation with a roofer",
    },
  ],
} as const;

export const footer = {
  brand: {
    tagline: "Protecting homes across Greater Austin area since 2006.",
  },
  legal: {
    license: "License #TX-RC-847219",
    copyright: "© 2026 Apex Roofing Co. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  contact: {
    phone: "(512) 555-0198",
    phone_aria_label: "Call Apex Roofing at (512) 555-0198",
    email: "hello@apexroofingco.com",
    address: "123 Rooftop Drive, Austin, TX 78701",
    hours: "Mon–Sat 7am–7pm · 24hr Emergency",
  },
  attribution: {
    text: "Built and maintained by",
    link_text: "Growrix OS",
    url: "https://www.growrixos.com",
    aria_label: "Built and maintained by Growrix OS (opens in a new tab)",
  },
  links: {
    services: [
      { label: "Roof Installation", href: "/services/roof-installation" },
      { label: "Roof Repair", href: "/services/roof-repair" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Emergency Repair", href: "/services/emergency-repair" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Service Areas", href: "/areas" },
    ],
  },
} as const;

export const notFound = {
  heading: "Looks like this page is off the roof.",
  subhead:
    "We couldn't find what you were looking for, but we can still help with your roof.",
  cta: "Back to Home",
  cta_home: "Back to Home",
  cta_contact: "Contact Us",
} as const;

export const theme = {
  switcher: {
    switch_to_dark: "Switch to dark mode",
    switch_to_light: "Switch to light mode",
  },
} as const;

export const seo = {
  site_name: "Apex Roofing Co.",
  default_title_suffix: "| Apex Roofing Co.",
  home_title: "Expert Roofing Contractor in Greater Austin area | Apex Roofing Co.",
  home_description:
    "Licensed and insured roofing contractor serving the Greater Austin area. Roof installation, repair, replacement, and 24/7 emergency response. Free quotes. 20+ years. Call (512) 555-0198.",
  services_title: "Roofing Services | Apex Roofing Co.",
  services_description:
    "Explore all roofing services from Apex Roofing Co. — installation, repair, replacement, and 24/7 emergency response for homeowners in Greater Austin area.",
  about_title: "About Us | Apex Roofing Co.",
  about_description:
    "20+ years, 2,400+ projects, state licensed and insured. Meet the Apex Roofing Co. team — Austin's trusted roofing contractor since 2006.",
  contact_title: "Contact Us | Apex Roofing Co.",
  contact_description:
    "Contact Apex Roofing Co. for a free roof inspection or quote. Available Mon–Sat 7am–7pm and 24/7 for emergencies. Call (512) 555-0198.",
  quote_title: "Get a Free Roofing Quote | Apex Roofing Co.",
  quote_description:
    "Request your free roofing quote from Apex Roofing Co. We'll call you back within 1 business hour. Serving Greater Austin area.",
  reviews_title: "Customer Reviews | Apex Roofing Co.",
  reviews_description:
    "Read reviews from Apex Roofing Co. customers across Greater Austin area. 4.9★ on Google with 387 reviews.",
  faq_title: "Roofing FAQ | Apex Roofing Co.",
  faq_description:
    "Answers to the most common roofing questions — repairs, replacements, warranties, and more. From Austin's trusted roofing experts.",
  areas_title: "Service Areas | Apex Roofing Co.",
  areas_description:
    "Apex Roofing Co. serves the Greater Austin area and 50+ surrounding cities. Check if we cover your postcode.",
  blog_title: "Roofing Blog | Apex Roofing Co.",
  blog_description:
    "Roofing tips, guides, and news from Apex Roofing Co. — Austin's trusted roofing experts since 2006.",
  privacy_title: "Privacy Policy | Apex Roofing Co.",
  terms_title: "Terms of Service | Apex Roofing Co.",
} as const;

export const legal = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Legal",
    last_updated: "January 1, 2026",
    intro:
      "This Privacy Policy describes how Apex Roofing Co. ('we', 'our', or 'us') collects, uses, and shares information when you use our website and services.",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly, such as your name, phone number, and email address when you request a quote or contact us. We also collect usage data via analytics tools (PostHog) to improve our service.",
      },
      {
        heading: "How We Use Your Information",
        body: "We use your information to respond to enquiries, provide roofing services, send confirmation emails, and improve our website. We do not sell your personal information to third parties.",
      },
      {
        heading: "Data Retention",
        body: "We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion at any time by contacting hello@apexroofingco.com.",
      },
      {
        heading: "Cookies",
        body: "Our website uses cookies for analytics purposes. You may disable cookies in your browser settings, though this may affect some functionality.",
      },
      {
        heading: "Contact",
        body: "For any privacy-related questions, contact us at hello@apexroofingco.com or (512) 555-0198.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Legal",
    last_updated: "January 1, 2026",
    intro:
      "By using the Apex Roofing Co. website or requesting our services, you agree to these Terms of Service.",
    sections: [
      {
        heading: "Services",
        body: "Apex Roofing Co. provides residential and commercial roofing services including installation, repair, replacement, and emergency response in the Greater Austin area.",
      },
      {
        heading: "Quotes and Pricing",
        body: "All quotes are provided in writing and are valid for 30 days. Final pricing may vary if additional work is discovered during the project. Any changes will be communicated before work proceeds.",
      },
      {
        heading: "Warranties",
        body: "Our workmanship is covered by a 10-year guarantee. Material warranties vary by manufacturer. Warranty claims must be submitted in writing and are subject to inspection.",
      },
      {
        heading: "Limitation of Liability",
        body: "Our liability is limited to the value of the services provided. We are not responsible for pre-existing structural issues, weather damage after project completion, or damage caused by third parties.",
      },
      {
        heading: "Governing Law",
        body: "These terms are governed by the laws of the State of Texas. Any disputes shall be resolved in Travis County, Texas.",
      },
    ],
  },
} as const;

export const social = {
  facebook: {
    href: "https://facebook.com/apexroofingco",
    aria: "Follow Apex Roofing on Facebook",
  },
  instagram: {
    href: "https://instagram.com/apexroofingco",
    aria: "Follow Apex Roofing on Instagram",
  },
  youtube: {
    href: "https://youtube.com/@apexroofingco",
    aria: "Watch Apex Roofing on YouTube",
  },
  linkedin: {
    href: "https://linkedin.com/company/apexroofingco",
    aria: "Connect with Apex Roofing on LinkedIn",
  },
} as const;
