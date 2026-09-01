export type Destination = {
  id: string;
  route: string;
  city: string;
  timeline: string;
  image: string;
  requirements: string[];
  includedServices: string[];
  quarantine: string;
  bestTime: string;
};

export const DESTINATIONS: Destination[] = [
  {
    id: "madrid",
    route: "USA → Spain",
    city: "Madrid",
    timeline: "8-12 weeks",
    image: "/destinations/madrid.jpg",
    requirements: ["ISO Microchip", "Vaccinations", "Import Permit", "Health Certificate"],
    includedServices: ["Flight booking", "Document preparation", "Customs guidance", "Arrival support"],
    quarantine: "Not Usually Required",
    bestTime: "8-10 weeks before departure"
  },
  {
    id: "london",
    route: "USA → UK",
    city: "London",
    timeline: "8-12 weeks",
    image: "/destinations/london.jpg",
    requirements: ["ISO Microchip", "Vaccinations", "ToR1 Customs Form", "Health Certificate"],
    includedServices: ["Flight booking", "Document preparation", "Customs clearance", "Pet Taxi"],
    quarantine: "Not Required (if compliant)",
    bestTime: "8-10 weeks before departure"
  },
  {
    id: "singapore",
    route: "USA → Singapore",
    city: "Singapore",
    timeline: "8-12 weeks",
    image: "/destinations/singapore.jpg",
    requirements: ["ISO Microchip", "Rabies Titer Test", "Import License", "Vet Health Cert"],
    includedServices: ["Flight booking", "Quarantine booking", "Customs guidance", "Arrival support"],
    quarantine: "10-30 Days Required",
    bestTime: "12-16 weeks before departure"
  },
  {
    id: "tokyo",
    route: "USA → Japan",
    city: "Tokyo",
    timeline: "8-12 weeks",
    image: "/destinations/tokyo.jpg",
    requirements: ["ISO Microchip", "Rabies FAVN Test", "Advance Notification", "Health Cert"],
    includedServices: ["Flight booking", "Document preparation", "Customs guidance", "Arrival support"],
    quarantine: "Up to 12 Hours",
    bestTime: "6-8 Months before departure"
  },
  {
    id: "dubai",
    route: "USA → UAE",
    city: "Dubai",
    timeline: "8-12 weeks",
    image: "/destinations/dubai.jpg",
    requirements: ["ISO Microchip", "Vaccinations", "MoCCAE Import Permit", "Health Cert"],
    includedServices: ["Flight booking", "Document preparation", "Customs clearance", "Home Delivery"],
    quarantine: "Not Usually Required",
    bestTime: "6-8 weeks before departure"
  },
  {
    id: "sydney",
    route: "USA → Australia",
    city: "Sydney",
    timeline: "8-12 weeks",
    image: "/destinations/sydney.jpg",
    requirements: ["ISO Microchip", "RNATT Declaration", "Import Permit", "Health Cert"],
    includedServices: ["Flight booking", "Quarantine facility booking", "Customs", "Arrival support"],
    quarantine: "10 Days Mandatory",
    bestTime: "7-9 Months before departure"
  },
];