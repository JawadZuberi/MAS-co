export const site = {
  name: "MAS & Co",
  legalName: "MAS & Co — Chartered Accountants",
  tagline: "Your Trusted Partner in Financial Excellence",
  description:
    "A premium gateway for MAS & Co, offering professional financial, taxation, audit, and global business advisory services.",
  foundedYear: 2017,
  contact: {
    address:
      "Office no 1106, Park Avenue, Adjacent to The Mansion Marque, Main Shahrah e Faisal, Karachi.",
    email: "info@masandco.com",
    phones: ["+92 21 1234 5678", "+92 300 1234567"],
    whatsapp: "+923001234567",
    mapsQuery: "Park Avenue, Shahrah-e-Faisal, Karachi",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Team", href: "/team" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
