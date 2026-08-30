export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  DESTINATIONS: "/#features",
  HOW_IT_WORKS: "/how-it-works",
  ABOUT: "/about",
  BLOGS: "/blogs",
  BOARDING: "/#boarding",
  RELOCATION: "/#relocation",
  TAXI: "/#taxi",
  FAQ: "/#faq",
  CONTACT: "/#contact",
  REVIEWS: "/#reviews",
  LOGIN: "/#login",
  JOIN: "/#contact",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
