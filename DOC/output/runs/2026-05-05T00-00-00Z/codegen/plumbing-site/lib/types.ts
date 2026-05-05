export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export interface Area {
  slug: string;
  name: string;
  shortDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  body: string;
  serviceSlug?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
}
