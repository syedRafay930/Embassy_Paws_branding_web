export type BlogContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string };

export const BLOG_POSTS = [
  {
    id: "document-checklist",
    category: "PREPARING FOR TRAVEL",
    title: "The Complete Pet Travel Document Checklist",
    description: "Every certificate, permit, and form you'll need. Organized by how far ahead to start.",
    image: "/blog/blog-1.png",
    date: "Jul 2, 2026",
    readTime: "4 min read",
    author: "Maria Alvarez",
    content: [
      { type: "paragraph", text: "Every country has its own entry requirements for pets, and getting even one document wrong can delay a trip by weeks. Here's the checklist our coordinators actually use, organized by how far ahead of travel you should start." },
      { type: "heading", text: "8-10 weeks before" },
      { type: "paragraph", text: "Confirm your destination country's requirements and book a vet appointment for microchipping if your pet doesn't already have an ISO-compliant chip. Most countries require the chip to be placed before the rabies vaccination for it to count." },
      { type: "quote", text: "“The single most common delay we see is a rabies vaccine given before the microchip — it has to be redone in the correct order.”" },
      { type: "heading", text: "4-6 weeks before" },
      { type: "paragraph", text: "Schedule your health certificate appointment. Most certificates are only valid for 10 days before travel, so timing this correctly matters more than almost any other step." },
      { type: "heading", text: "1-2 weeks before" },
      { type: "paragraph", text: "Confirm crate approval with your airline, print all documents in triplicate, and reconfirm your flight's live-animal policy hasn't changed.\n\nIf any of this sounds overwhelming, that's exactly what a coordinator is for — every document on this list gets checked and endorsed before we let a client fly." }
    ] as BlogContentBlock[],
  },
  {
    id: "in-cabin-vs-cargo",
    category: "AIRLINE POLICIES",
    title: "In-Cabin vs. Cargo: What's Really Different",
    description: "We break down comfort, cost and eligibility for both options across major airlines.",
    image: "/blog/blog-2.png",
    date: "Jun 24, 2026",
    readTime: "5 min read",
    author: "Sarah Mitchell",
    content: [
      { type: "paragraph", text: "Choosing between in-cabin and cargo travel is one of the most stressful decisions for pet parents. Let's break down exactly what your pet experiences in both scenarios." },
      { type: "heading", text: "In-Cabin Travel" },
      { type: "paragraph", text: "Your pet stays under the seat in front of you. This is usually only an option for small dogs and cats weighing under 18-20 lbs (including the carrier). It's comforting because you can see them, but space is highly restricted." },
      { type: "quote", text: "“Always check specific airline dimensions, as under-seat space varies wildly even on the same airline's different aircraft.”" },
      { type: "heading", text: "Cargo Travel" },
      { type: "paragraph", text: "Pets travel in a climate-controlled, pressurized section of the cargo hold. While it sounds scary, airlines have strict protocols, and for larger dogs, this is the only way to fly. They have room to stand, turn around, and sleep comfortably in their hard-sided crates." }
    ] as BlogContentBlock[],
  },
  {
    id: "moving-to-spain",
    category: "DESTINATION GUIDE",
    title: "Moving to Spain With a Dog: What to Expect",
    description: "Spain's entry rules, quarantine-free timelines, and the paperwork that trips people up.",
    image: "/blog/blog-3.png",
    date: "Jun 15, 2026",
    readTime: "7 min read",
    author: "David Chen",
    content: [
      { type: "paragraph", text: "Spain is a wonderfully pet-friendly country, offering beautiful beaches and dog-friendly cafes. However, getting your dog through Spanish customs requires strict adherence to EU regulations." },
      { type: "heading", text: "The European Health Certificate" },
      { type: "paragraph", text: "You must obtain an EU Health Certificate from a USDA-accredited veterinarian within 10 days of your flight. This document is non-negotiable and must be endorsed perfectly." },
      { type: "quote", text: "“Don't forget that the certificate must be endorsed by the USDA office before your flight, which can take several days depending on your location.”" },
      { type: "heading", text: "Arrival in Spain" },
      { type: "paragraph", text: "Once you land, the process is usually smooth. Unlike some island nations, mainland Spain does not have mandatory quarantine periods as long as all your paperwork, microchip, and rabies vaccination records are in order." }
    ] as BlogContentBlock[],
  },
  {
    id: "booking-timeline",
    category: "BOOKING & PRICING",
    title: "How Far in Advance Should You Book?",
    description: "The real answer, broken down by destination and season.",
    image: "/blog/blog-4.png",
    date: "Jun 3, 2026",
    readTime: "4 min read",
    author: "Emma Watson",
    content: [
      { type: "paragraph", text: "One of the most common questions we get is when to actually start booking a pet's travel. The answer depends heavily on where you are going and what time of year it is." },
      { type: "heading", text: "Domestic Travel" },
      { type: "paragraph", text: "For domestic flights within the US, starting the process 4 to 6 weeks in advance is usually sufficient to secure airline space and get a standard health certificate." },
      { type: "quote", text: "“Summer months are peak pet travel season. If you are flying between May and August, book as early as airlines allow.”" },
      { type: "heading", text: "International Relocations" },
      { type: "paragraph", text: "For international moves, particularly to strict rabies-free countries like Australia or New Zealand, you should start planning at least 6 to 9 months in advance due to blood titer tests and quarantine reservations." }
    ] as BlogContentBlock[],
  },
  {
    id: "reactive-dog",
    category: "TRAVEL EXPERIENCE",
    title: "Flying With a Reactive or Anxious Dog",
    description: "Practical prep steps that make a real difference in flight.",
    image: "/blog/blog-5.png",
    date: "May 22, 2026",
    readTime: "6 min read",
    author: "Dr. Rachel Green",
    content: [
      { type: "paragraph", text: "Traveling can be stressful for any pet, but for a reactive or anxious dog, it requires a specialized approach to ensure they remain safe and calm throughout the journey." },
      { type: "heading", text: "Crate Acclimation is Everything" },
      { type: "paragraph", text: "The most important step is ensuring your dog views their travel crate as a safe space. Start crate training months before the flight. Feed them in the crate and leave the door open so they associate it with positive experiences." },
      { type: "quote", text: "“Never force a dog into a crate on travel day. It should be their sanctuary, not a punishment.”" },
      { type: "heading", text: "Consult Your Vet" },
      { type: "paragraph", text: "Talk to your vet about behavioral conditioning techniques. Note that airlines prohibit sedation for pets flying in cargo because it affects their ability to regulate their body temperature, but natural pheromone sprays can be used." }
    ] as BlogContentBlock[],
  },
  {
    id: "microchips-vaccines",
    category: "PREPARING FOR TRAVEL",
    title: "Microchips, Vaccines & Timings Explained",
    description: "What counts as up-to-date, explained for each destination country.",
    image: "/blog/blog-6.png",
    date: "May 10, 2026",
    readTime: "5 min read",
    author: "James Peterson",
    content: [
      { type: "paragraph", text: "Vaccination and microchip rules vary wildly depending on where you are traveling. Getting the timeline wrong is the number one reason pets get turned away at the airport." },
      { type: "heading", text: "The Microchip Rule" },
      { type: "paragraph", text: "For international travel, a 15-digit ISO-compliant microchip (11784/11785) is almost universally required. If your pet has a different type, you may need to get them re-chipped or carry your own scanner." },
      { type: "quote", text: "“The golden rule: The microchip must always be implanted before or on the exact same day as the rabies vaccination. Never after.”" },
      { type: "heading", text: "Rabies Vaccination Timings" },
      { type: "paragraph", text: "Most countries require the rabies vaccine to be at least 21 days old but not older than 1 year at the time of travel. Even if your pet has a 3-year vaccine, many international destinations will only recognize it for 1 year." }
    ] as BlogContentBlock[],
  },
] as const;