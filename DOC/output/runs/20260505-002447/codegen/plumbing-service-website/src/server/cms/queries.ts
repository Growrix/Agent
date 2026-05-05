import { cache } from "react";
import {
  aboutPageData,
  areas,
  faqGroups,
  homePageData,
  legalPages,
  marketingStats,
  reviews,
  serviceCards,
  services,
} from "@/server/cms/mock-data";

export const getMarketingHomePage = cache(async () => homePageData);

export const getMarketingHomePageTestimonials = cache(async () => reviews.slice(0, 3));

export const getFeaturedServices = cache(async () => serviceCards.slice(0, 3));

export const getCoverageProofBlock = cache(async () => ({
  image: homePageData.coverageImage,
  points: homePageData.coveragePoints,
}));

export const getMarketingStats = cache(async () => marketingStats);

export const getServiceIndexPage = cache(async () => ({
  heroImage: homePageData.coverageImage,
}));

export const getAllServiceCards = cache(async () => serviceCards);

export const getServiceBySlug = cache(async (slug: string) =>
  services.find((service) => service.slug === slug) ?? null,
);

export const getServiceTestimonialsBySlug = cache(async (slug: string) => {
  const service = services.find((item) => item.slug === slug);
  return service?.proof ?? [];
});

export const getServiceFaqBySlug = cache(async (slug: string) => {
  const service = services.find((item) => item.slug === slug);
  return service?.faqs ?? [];
});

export const getAreasIndexPage = cache(async () => ({
  heroImage: homePageData.coverageImage,
}));

export const getAreaCards = cache(async () => areas);

export const getAreaServiceCrossLinks = cache(async () => serviceCards);

export const getAreaProofRollup = cache(async () => ({
  reviews: reviews.slice(0, 2),
  stats: marketingStats,
}));

export const getAreaBySlug = cache(async (slug: string) =>
  areas.find((area) => area.slug === slug) ?? null,
);

export const getReviewsPage = cache(async () => ({
  heroImage: homePageData.coverageImage,
}));

export const getReviewsSummary = cache(async () => marketingStats.slice(0, 2));

export const getAllReviews = cache(async () => reviews);

export const getAboutPage = cache(async () => aboutPageData);

export const getAboutPageTestimonials = cache(async () => reviews.slice(1));

export const getFaqPage = cache(async () => ({
  heroImage: homePageData.heroImage,
}));

export const getFaqGroup = cache(async (group: keyof typeof faqGroups) => faqGroups[group]);

export const getLegalPage = cache(async (page: keyof typeof legalPages) => legalPages[page]);