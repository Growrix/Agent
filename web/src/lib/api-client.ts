type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
};

type PostItem = {
  slug: string;
  title: string;
  summary: string;
};

type CaseStudyItem = {
  slug: string;
  title: string;
  metric: string;
};

const services: ServiceItem[] = [
  { slug: "residential-solar", title: "Residential Solar", summary: "Rooftop systems tailored to household consumption." },
  { slug: "commercial-solar", title: "Commercial Solar", summary: "Energy systems for business continuity and savings." },
  { slug: "battery-backup", title: "Battery Backup", summary: "Storage options for outage resilience and load shifting." },
];

const posts: PostItem[] = [
  { slug: "solar-savings-basics", title: "Solar Savings Basics", summary: "How to estimate value before installation." },
  { slug: "net-metering-guide", title: "Net Metering Guide", summary: "Understanding energy credits and billing behavior." },
  { slug: "battery-readiness", title: "Battery Readiness", summary: "When storage improves project outcomes." },
];

const cases: CaseStudyItem[] = [
  { slug: "suburban-family-home", title: "Suburban Family Home", metric: "Bill reduction observed after first billing cycle." },
  { slug: "retail-showroom", title: "Retail Showroom", metric: "Daily load offset improved after commissioning." },
  { slug: "small-warehouse", title: "Small Warehouse", metric: "Peak-hour dependency lowered with storage pairing." },
];

export const apiClient = {
  async getServices(): Promise<ServiceItem[]> {
    return services;
  },
  async getServiceBySlug(slug: string): Promise<ServiceItem | null> {
    return services.find((item) => item.slug === slug) ?? null;
  },
  async getBlogPosts(): Promise<PostItem[]> {
    return posts;
  },
  async getBlogPostBySlug(slug: string): Promise<PostItem | null> {
    return posts.find((item) => item.slug === slug) ?? null;
  },
  async getCaseStudies(): Promise<CaseStudyItem[]> {
    return cases;
  },
  async getCaseStudyBySlug(slug: string): Promise<CaseStudyItem | null> {
    return cases.find((item) => item.slug === slug) ?? null;
  },
};

export type { ServiceItem, PostItem, CaseStudyItem };
