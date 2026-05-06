import type { Service, Area, Testimonial, FaqItem, BlogPost } from "./types";

export const SERVICES: Service[] = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    shortDescription: "Slow or clogged drains cleared quickly and cleanly.",
    icon: "Droplets",
  },
  {
    slug: "leak-repair",
    title: "Leak Repair",
    shortDescription: "Visible or hidden leaks found and fixed before they cause damage.",
    icon: "AlertTriangle",
  },
  {
    slug: "water-heater",
    title: "Water Heater Service",
    shortDescription: "Repair, flush, or replacement of tank and tankless units.",
    icon: "Flame",
  },
  {
    slug: "toilet-repair",
    title: "Toilet Repair",
    shortDescription: "Running, rocking, or non-flushing toilets fixed or replaced.",
    icon: "Wrench",
  },
  {
    slug: "faucet-fixture",
    title: "Faucet & Fixture",
    shortDescription: "Dripping faucets and failing fixtures repaired or installed.",
    icon: "Settings",
  },
  {
    slug: "sewer-line",
    title: "Sewer Line",
    shortDescription: "Slow drainage, backups, or sewer odors investigated and resolved.",
    icon: "ArrowDown",
  },
];

export const AREAS: Area[] = [
  {
    slug: "downtown",
    name: "Downtown",
    shortDescription: "Fast service for condos and urban homes in the downtown core.",
  },
  {
    slug: "northside",
    name: "Northside",
    shortDescription: "Serving residential neighborhoods across the northside.",
  },
  {
    slug: "westend",
    name: "West End",
    shortDescription: "Reliable coverage throughout West End and nearby streets.",
  },
  {
    slug: "east-district",
    name: "East District",
    shortDescription: "Prompt service for homes and small properties in East District.",
  },
  {
    slug: "south-valley",
    name: "South Valley",
    shortDescription: "South Valley homeowners can count on same-day availability.",
  },
  {
    slug: "lakeside",
    name: "Lakeside",
    shortDescription: "Serving Lakeside and waterfront properties nearby.",
  },
  {
    slug: "heights",
    name: "The Heights",
    shortDescription: "The Heights coverage for residential and light commercial.",
  },
  {
    slug: "riverside",
    name: "Riverside",
    shortDescription: "Riverside and surrounding neighborhoods in our regular rotation.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Maria S.",
    location: "Northside",
    rating: 5,
    body: "Called at 8 AM and they were at my door by noon. The drain was cleared and everything was explained. No surprise charges.",
    serviceSlug: "drain-cleaning",
  },
  {
    id: "t2",
    name: "James R.",
    location: "Downtown",
    rating: 5,
    body: "The technician found a hidden leak behind the wall that I had no idea about. Fixed same day. Very professional.",
    serviceSlug: "leak-repair",
  },
  {
    id: "t3",
    name: "Carla M.",
    location: "West End",
    rating: 5,
    body: "Water heater was going cold. They came out, diagnosed the issue, and replaced the heating element the same visit.",
    serviceSlug: "water-heater",
  },
  {
    id: "t4",
    name: "David T.",
    location: "South Valley",
    rating: 5,
    body: "Running toilet was wasting a lot of water. They replaced the internal parts cleanly and the cost was reasonable.",
    serviceSlug: "toilet-repair",
  },
  {
    id: "t5",
    name: "Lynn H.",
    location: "Lakeside",
    rating: 5,
    body: "Kitchen faucet was dripping for weeks. Quick fix, clean work area, and the technician answered all my questions.",
    serviceSlug: "faucet-fixture",
  },
  {
    id: "t6",
    name: "Tom K.",
    location: "The Heights",
    rating: 5,
    body: "Had a slow sewer drain that kept backing up. Cleared it out and recommended a follow-up inspection. Solid work.",
    serviceSlug: "sewer-line",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq1",
    question: "Do you offer same-day service?",
    answer: "Yes. We prioritize same-day calls when availability allows. Call us in the morning for the best chance of a same-day visit.",
    category: "scheduling",
  },
  {
    id: "faq2",
    question: "How do I know what the job will cost?",
    answer: "We confirm pricing before any work begins. Estimates are based on the scope, access, and parts needed.",
    category: "pricing",
  },
  {
    id: "faq3",
    question: "Are you licensed and insured?",
    answer: "Yes. We are fully licensed and carry liability insurance on every job.",
    category: "credentials",
  },
  {
    id: "faq4",
    question: "What areas do you serve?",
    answer: "We serve the greater metro area and a number of surrounding neighborhoods. Check our areas page or call to confirm.",
    category: "coverage",
  },
  {
    id: "faq5",
    question: "Do I need to be home during the appointment?",
    answer: "Someone over 18 should be present during the visit so we can walk through the issue and confirm work before we start.",
    category: "scheduling",
  },
  {
    id: "faq6",
    question: "What payment methods do you accept?",
    answer: "We accept cash, check, and major credit cards. Payment is due when the job is complete.",
    category: "pricing",
  },
  {
    id: "faq7",
    question: "Can I get a quote over the phone?",
    answer: "For many common jobs, yes. Call us and describe the issue — we can often give a range before visiting.",
    category: "pricing",
  },
  {
    id: "faq8",
    question: "What should I do while waiting for the plumber?",
    answer: "If there is active water, shut off the supply valve nearest to the problem. If you are unsure, shut off the main. We will walk you through it over the phone.",
    category: "general",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-unclog-a-drain",
    title: "How to unclog a slow drain before calling a plumber",
    summary: "Simple steps homeowners can try first. When to stop and call a pro.",
    date: "2025-04-10",
    readingTime: "4 min read",
  },
  {
    slug: "signs-water-heater-failing",
    title: "5 signs your water heater is about to fail",
    summary: "Watch for these warning signs before you end up with cold showers.",
    date: "2025-03-22",
    readingTime: "3 min read",
  },
  {
    slug: "fix-running-toilet",
    title: "Why your toilet keeps running and what fixes it",
    summary: "A running toilet wastes water and money. Here is why it happens.",
    date: "2025-02-15",
    readingTime: "3 min read",
  },
];

export const SITE = {
  businessName: "Local Plumbing",
  phone: "(555) 000-0000",
  phoneLink: "tel:+15550000000",
  hours: "Mon – Sat, 7 AM – 7 PM",
  license: "Lic. #PL-0000000",
  serviceArea: "Greater Metro Area",
  aggregateRating: "5.0",
  reviewCount: "120+",
};
