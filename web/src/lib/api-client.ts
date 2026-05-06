/**
 * API client — typed stubs matching the OpenAPI contract.
 * In development these return mock data. Wire to real endpoints via NEXT_PUBLIC_API_BASE_URL.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Service {
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  features: string[]
  image: string
}

export interface PortfolioProject {
  slug: string
  title: string
  type: 'residential' | 'commercial' | 'monitoring'
  systemSizeKw: number
  location: string
  image: string
  highlights: string[]
  completedAt: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  review: string
  rating: number
  date: string
  projectType: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: number
  image: string
  featured: boolean
  body?: string
}

export interface QuoteEstimate {
  systemSizeKw: number
  annualSavings: number
  paybackYears: number
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_SERVICES: Service[] = [
  {
    slug: 'residential-solar',
    title: 'Residential Solar',
    subtitle: 'Panels, inverters, and battery storage for your home.',
    description:
      'We design and install grid-connected and off-grid solar systems for homes of all sizes, using Tier-1 panels and premium inverters.',
    icon: 'home',
    features: [
      'Free site assessment',
      'Custom system design',
      'Same-day permits',
      '25-year panel warranty',
      'App-based monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
  },
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar',
    subtitle: 'Large-scale systems optimised for maximum ROI.',
    description:
      'From small offices to industrial rooftops, we deliver commercial solar installations backed by detailed energy modelling and financing options.',
    icon: 'building',
    features: [
      'Energy audit included',
      'Structural engineering',
      'PPAs & finance available',
      'ISO-certified install team',
      'SCADA monitoring',
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
  {
    slug: 'battery-storage',
    title: 'Battery Storage',
    subtitle: 'Store solar energy and use it day or night.',
    description:
      'Pair your solar system with a lithium battery to maximise self-consumption, protect against outages, and reduce grid dependence.',
    icon: 'battery',
    features: [
      'Tesla Powerwall & Enphase',
      'Backup power mode',
      'Time-of-use optimisation',
      '10-year battery warranty',
      'Retrofit to existing solar',
    ],
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
  },
  {
    slug: 'monitoring-maintenance',
    title: 'Monitoring & Maintenance',
    subtitle: 'Keep your system performing at its best.',
    description:
      'Our operations team monitors your system in real time and dispatches technicians proactively when performance dips.',
    icon: 'chart',
    features: [
      'Real-time performance alerts',
      'Annual health check',
      'Inverter fault diagnosis',
      'Panel cleaning service',
      'Rapid response SLA',
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  },
]

const MOCK_PROJECTS: PortfolioProject[] = [
  {
    slug: 'hunter-valley-winery',
    title: 'Hunter Valley Winery — 120 kW Commercial',
    type: 'commercial',
    systemSizeKw: 120,
    location: 'Hunter Valley, NSW',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    highlights: ['Reduced energy bills by 78%', '480 panels installed', 'ROI in 4.2 years'],
    completedAt: '2024-03',
  },
  {
    slug: 'newcastle-residence',
    title: 'Newcastle Family Home — 13.2 kW Residential',
    type: 'residential',
    systemSizeKw: 13.2,
    location: 'Newcastle, NSW',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
    highlights: ['$3,200 annual savings', 'Battery backup included', '2-day installation'],
    completedAt: '2024-06',
  },
  {
    slug: 'gosford-medical-centre',
    title: 'Gosford Medical Centre — 45 kW Commercial',
    type: 'commercial',
    systemSizeKw: 45,
    location: 'Gosford, NSW',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
    highlights: ['Zero downtime install', 'SCADA monitoring', 'Covered car park integration'],
    completedAt: '2024-09',
  },
  {
    slug: 'erina-heights-home',
    title: 'Erina Heights — 6.6 kW + Powerwall',
    type: 'residential',
    systemSizeKw: 6.6,
    location: 'Erina Heights, NSW',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    highlights: ['Off-grid capable', '10-year battery warranty', 'Same-week install'],
    completedAt: '2024-11',
  },
  {
    slug: 'tuggerah-warehouse',
    title: 'Tuggerah Distribution Centre — 200 kW',
    type: 'commercial',
    systemSizeKw: 200,
    location: 'Tuggerah, NSW',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    highlights: ['Largest installation to date', '60% energy offset', 'Stage-2 battery pending'],
    completedAt: '2025-01',
  },
  {
    slug: 'mona-vale-residence',
    title: 'Mona Vale Family Home — 10 kW',
    type: 'residential',
    systemSizeKw: 10,
    location: 'Mona Vale, NSW',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    highlights: ['North-facing optimised array', 'EV charger integrated', 'Smart monitoring'],
    completedAt: '2025-02',
  },
]

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & James Thompson',
    location: 'Newcastle, NSW',
    review:
      'Exceptional from start to finish. The team assessed our roof, explained the system in plain English, and installed everything in two days. Our bills have dropped by 80%.',
    rating: 5,
    date: '2024-08-14',
    projectType: 'Residential Solar + Battery',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Gosford, NSW',
    review:
      'Professional, punctual, and the monitoring app is fantastic. Six months in and the system is performing above the projected output.',
    rating: 5,
    date: '2024-09-02',
    projectType: 'Residential Solar 13.2 kW',
  },
  {
    id: '3',
    name: 'Greenleaf Café Group',
    location: 'Wyong, NSW',
    review:
      'The commercial team handled our permits, structural report, and STCs all in-house. The installation on three separate rooftops was seamless.',
    rating: 5,
    date: '2024-10-18',
    projectType: 'Commercial Solar 60 kW',
  },
  {
    id: '4',
    name: 'Patricia Ng',
    location: 'Erina, NSW',
    review:
      "I was worried about the installation disrupting the family, but the crew was in and out in a day. The app shows me real-time generation — I'm obsessed.",
    rating: 5,
    date: '2024-11-05',
    projectType: 'Residential Solar 6.6 kW',
  },
  {
    id: '5',
    name: 'David Kowalski',
    location: 'Mona Vale, NSW',
    review:
      'Outstanding quality. They took the time to optimise the panel layout for my awkward roof angle. Year-one performance is 12% above estimate.',
    rating: 5,
    date: '2025-01-22',
    projectType: 'Residential Solar 10 kW + EV Charger',
  },
  {
    id: '6',
    name: 'Sunrise Childcare',
    location: 'Tuggerah, NSW',
    review:
      'We\'ve reduced our electricity costs by 65% in the first quarter. The team was respectful of our operating hours and the kids loved watching the install!',
    rating: 4,
    date: '2025-02-10',
    projectType: 'Commercial Solar 45 kW',
  },
]

const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-size-your-solar-system',
    title: 'How to size your solar system: a complete guide for Australian homes',
    excerpt:
      'System sizing is the single most important factor in your solar ROI. Here\'s how we calculate the right kilowatt-peak for your roof and usage profile.',
    category: 'guides',
    author: 'Alex Rivera',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&q=80',
    date: '2025-03-12',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    featured: true,
  },
  {
    slug: 'battery-storage-2025',
    title: 'Battery storage in 2025: is it finally worth it?',
    excerpt:
      'With battery prices falling 30% year-on-year, we analyse whether adding storage makes financial sense for an average Australian household.',
    category: 'savings',
    author: 'Priya Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&q=80',
    date: '2025-02-28',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
    featured: false,
  },
  {
    slug: 'hunter-valley-winery-case-study',
    title: 'Case study: how a 120 kW system cut a winery\'s energy bill by 78%',
    excerpt:
      'A deep dive into the design decisions, permitting process, and first-year performance of our largest installation to date.',
    category: 'projects',
    author: 'Tom Bradley',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80',
    date: '2025-01-15',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80',
    featured: false,
  },
  {
    slug: 'solar-rebates-nsw-2025',
    title: 'Solar rebates and incentives in NSW for 2025',
    excerpt:
      'A plain-English breakdown of the current STCs, VPPs, and state-level programs you can access right now.',
    category: 'news',
    author: 'Alex Rivera',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&q=80',
    date: '2025-01-08',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    featured: false,
  },
]

// ─── API functions ─────────────────────────────────────────────────────────────

async function fetchOrMock<T>(path: string, mock: T): Promise<T> {
  if (!API_BASE) return mock
  const res = await fetch(`${API_BASE}${path}`, { next: { revalidate: 3600 } })
  if (!res.ok) return mock
  return res.json() as Promise<T>
}

export const api = {
  services: {
    list: () => fetchOrMock<Service[]>('/services', MOCK_SERVICES),
    bySlug: (slug: string) =>
      fetchOrMock<Service | null>(
        `/services/${slug}`,
        MOCK_SERVICES.find((s) => s.slug === slug) ?? null,
      ),
  },
  portfolio: {
    list: () => fetchOrMock<PortfolioProject[]>('/portfolio', MOCK_PROJECTS),
    bySlug: (slug: string) =>
      fetchOrMock<PortfolioProject | null>(
        `/portfolio/${slug}`,
        MOCK_PROJECTS.find((p) => p.slug === slug) ?? null,
      ),
  },
  testimonials: {
    list: () => fetchOrMock<Testimonial[]>('/testimonials', MOCK_TESTIMONIALS),
    aggregate: () =>
      fetchOrMock('/testimonials/aggregate', {
        rating: 4.9,
        count: 248,
        sources: 'Google · Facebook · Trustpilot',
      }),
  },
  blog: {
    list: () => fetchOrMock<BlogPost[]>('/blog', MOCK_BLOG_POSTS),
    bySlug: (slug: string) =>
      fetchOrMock<BlogPost | null>(
        `/blog/${slug}`,
        MOCK_BLOG_POSTS.find((p) => p.slug === slug) ?? null,
      ),
  },
  quote: {
    estimate: (monthlyBill: number): Promise<QuoteEstimate> => {
      const systemSizeKw = Math.round((monthlyBill / 30) * 1.5 * 10) / 10
      const annualSavings = Math.round(monthlyBill * 0.75 * 12)
      const systemCost = systemSizeKw * 1100
      const paybackYears = Math.round((systemCost / annualSavings) * 10) / 10
      return Promise.resolve({ systemSizeKw, annualSavings, paybackYears })
    },
  },
}
