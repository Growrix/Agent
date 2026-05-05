export type ImageAsset = {
  src: string;
  alt: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type MarketingStat = {
  label: string;
  value: string;
  detail: string;
  eyebrow?: string;
};

export type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

export type ReviewItem = {
  id: string;
  quote: string;
  name: string;
  context: string;
  ratingText: string;
  location: string;
  outcome: string;
};

export type ServiceCardData = {
  slug: string;
  title: string;
  body: string;
  cta: string;
  image: ImageAsset;
  accent: string;
  timing: string;
  highlights: string[];
};

export type ServiceDetailData = ServiceCardData & {
  heroBody: string;
  includes: string[];
  process: ProcessStep[];
  faqs: FAQItem[];
  quoteGuidance: string[];
  proof: ReviewItem[];
};

export type AreaData = {
  slug: string;
  name: string;
  body: string;
  heroBody: string;
  image: ImageAsset;
  serviceSlugs: string[];
  process: ProcessStep[];
  faqs: FAQItem[];
  proof: ReviewItem[];
  metrics: MarketingStat[];
  neighbourhoods: string[];
  responseNote: string;
};

export type LegalPage = {
  title: string;
  intro: string;
  paragraphs: string[];
};