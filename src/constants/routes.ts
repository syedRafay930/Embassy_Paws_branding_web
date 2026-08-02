export const ROUTES = {
  HOME: "/",
  SERVICES: "#services",
  DESTINATIONS: "#features",
  HOW_IT_WORKS: "#about",
  ABOUT: "#about",
  BLOGS: "#categories",
  BOARDING: "#boarding",
  RELOCATION: "#relocation",
  TAXI: "#taxi",
  FAQ: "#faq",
  CONTACT: "#contact",
  REVIEWS: "#reviews",
  LOGIN: "#login",
  JOIN: "#contact",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
