export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  imageColor: string;
  className: string;
  problem: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "preyson-moto",
    title: "Preyson Moto Co.",
    category: "Web Application Platform",
    tags: ["React 19", "Socket.io", "Midtrans"],
    imageColor: "bg-red-900/20",
    className: "md:col-span-2 aspect-[16/9]",
    problem: "Preyson Moto Company required a seamlessly integrated commercial platform capable of handling real-time storefront e-commerce, in-store POS, and complex inventory management simultaneously without friction.",
    solution: "We engineered a decoupled, real-time architetcture utilizing React 19, Socket.io, and a Node.js backend. This robust infrastructure seamlessly bridges online purchases with physical store operations through a unified admin suite.",
    impactMetrics: [
      { label: "Architecture", value: "Real-time" },
      { label: "Performance", value: "Blazing" },
      { label: "System", value: "Unified" },
    ],
  },
  {
    slug: "bakso-gala",
    title: "Bakso Gala",
    category: "Smart Dining System",
    tags: ["Laravel 12", "Gemini AI", "FCM"],
    imageColor: "bg-orange-600/20",
    className: "md:col-span-1 aspect-[4/5] md:aspect-square",
    problem: "Bakso Gala needed a digital transformation to streamline peak-hour floor operations, eliminate manual ordering bottlenecks, and provide real-time financial telemetry for the management.",
    solution: "We developed an end-to-end contactless dining platform using Laravel 12 and Tailwind v4. Features include table-aware QR ordering, Midtrans payments, live FCM kitchen dispatch, and AI-curated reviews via Google Gemini.",
    impactMetrics: [
      { label: "Ordering", value: "Contactless" },
      { label: "Kitchen Alert", value: "Instant" },
      { label: "AI Integration", value: "Gemini" },
    ],
  }
];
