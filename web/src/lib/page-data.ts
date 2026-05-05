import { allContent } from "@/lib/content";
import { apiClient } from "@/lib/api-client";

export const getServiceCards = async () => {
  const services = await apiClient.getServices();
  return services.map((item) => ({ key: item.slug, title: item.title, summary: item.summary }));
};

export const getCaseCards = async () => {
  const cases = await apiClient.getCaseStudies();
  return cases.map((item) => ({ key: item.slug, title: item.title, summary: item.metric }));
};

export const getPostCards = async () => {
  const posts = await apiClient.getBlogPosts();
  return posts.map((item) => ({ key: item.slug, title: item.title, summary: item.summary }));
};

export const fallbackCards = [
  {
    key: "trust-1",
    title: allContent.home.sections.trust,
    summary: allContent.support.responseTime,
  },
  {
    key: "trust-2",
    title: allContent.actions.learnMore,
    summary: allContent.brand.tagline,
  },
  {
    key: "trust-3",
    title: allContent.actions.contactTeam,
    summary: allContent.contact.subtitle,
  },
];
