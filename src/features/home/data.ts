export const SERVICES = [
  {
    id: "relocation",
    title: "Pet Relocation",
    price: "$18.99",
    description:
      "Seamless domestic and international relocation with full documentation, airline coordination, and safety compliance.",
    image: "/services-relocation.png",
    anchor: "relocation",
  },
  {
    id: "flight",
    title: "Flight Booking & Crate Setup",
    price: "$18.99",
    description:
      "We arrange pet-friendly flights and provide airline-approved crates for maximum comfort and security.",
    image: "/services-flight-crate.png",
    anchor: "boarding",
  },
  {
    id: "vet",
    title: "Vet & Documentation Support",
    price: "$18.99",
    description:
      "Health certificates, vaccinations, and paperwork handled by professionals to avoid delays or issues.",
    image: "/services-vet-docs.png",
    anchor: "services",
  },
] as const;

export const TRUST_POINTS = [
  "Certified pet travel specialists for every destination",
  "Door-to-door relocation with live status updates",
  "Vet-approved crates, documents, and health checks",
  "Transparent pricing with no last-minute surprises",
  "24/7 support line for pet parents on the move",
] as const;

export const WHY_CHOOSE_POINTS = [
  "Safe, Comfortable Travel for Every Pet",
  "Expert Handling from Start to Finish",
  "End-to-End Support You Can Rely On",
  "End-to-End Support You Can Rely On",
] as const;

export const APP_FEATURES = [
  "Track boarding and relocation in real time",
  "Store vet records and travel documents",
  "Book taxi, boarding, and grooming in one place",
] as const;

export const IMPACT_STATS = [
  {
    value: "360+",
    label: "Pet Journey",
    tone: "gold",
    shape: "starburst",
    offset: "mt-2",
  },
  {
    value: "35+",
    label: "Travel Specialists",
    tone: "blue",
    shape: "scallop",
    offset: "-mt-1",
  },
  {
    value: "10K+",
    label: "Happy Pet Parents",
    tone: "peach",
    shape: "blob",
    offset: "mt-3",
  },
  {
    value: "99+",
    label: "Global Places",
    tone: "tan",
    shape: "softburst",
    offset: "mt-0",
  },
] as const;

export const FEATURE_GRID = [
  {
    title: "Pet Relocation",
    description: "End-to-end international and domestic pet moves.",
  },
  {
    title: "Boarding",
    description: "Safe suites and home stays when you travel.",
  },
  {
    title: "Pet Taxi",
    description: "Reliable rides to airports, clinics, and hotels.",
  },
  {
    title: "Vet Support",
    description: "Health checks and document prep before takeoff.",
  },
  {
    title: "Grooming",
    description: "Travel-ready grooming so your pet feels great.",
  },
  {
    title: "Travel Plans",
    description: "Custom itineraries built around your pet’s needs.",
  },
] as const;

export const CATEGORIES = [
  {
    title: "Dog Transport Services",
    image: "/categories-dog.png",
    tone: "gold",
  },
  {
    title: "Cat Transport Services",
    image: "/categories-cat.png",
    tone: "lavender",
  },
] as const;

export const REVIEWS = [
  {
    name: "Sarah Mitchell",
    quote:
      "Embassy Paws handled our move abroad with so much care. Our dog arrived calm and happy — we felt supported the whole way.",
  },
  {
    name: "James Carter",
    quote:
      "Boarding felt like a second home. Daily updates and photos made leaving our pup stress-free.",
  },
  {
    name: "Aisha Rahman",
    quote:
      "The pet taxi and document help saved us days of paperwork. Truly a one-stop journey partner.",
  },
] as const;

export const FAQS = [
  {
    question: "How early should I book pet relocation?",
    answer:
      "We recommend starting 4–8 weeks before travel for domestic moves, and 8–12 weeks for international routes so documents and airline slots are secured.",
  },
  {
    question: "Do you help with vet certificates and paperwork?",
    answer:
      "Yes. Our team coordinates health certificates, microchip checks, and destination requirements so your pet is travel-ready.",
  },
  {
    question: "What is included in pet boarding?",
    answer:
      "Supervised care, feeding schedules, playtime, and daily updates. Night boarding and home stays are available for longer trips.",
  },
  {
    question: "Can I track my pet during transport?",
    answer:
      "Absolutely. You’ll receive status updates through our app and support line from pickup through arrival.",
  },
] as const;
