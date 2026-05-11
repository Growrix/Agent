/**
 * Centralized route registry.
 * Every route must be registered here before or during implementation.
 * All <Link href> and router.push() calls must use ROUTES.* constants.
 */
export const ROUTES = {
  home: "/",
  services: "/services",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
