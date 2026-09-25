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
    className: "md:col-span-3 aspect-[16/9] md:aspect-[21/9]",
    problem: "Preyson Moto Company required a seamlessly integrated commercial platform capable of handling real-time storefront e-commerce, in-store POS, and complex inventory management simultaneously without friction.",
    solution: "We engineered a decoupled, real-time architecture utilizing React 19, Socket.io, and a Node.js backend. This robust infrastructure seamlessly bridges online purchases with physical store operations through a unified admin suite.",
    impactMetrics: [
      { label: "Architecture", value: "Real-time" },
      { label: "Performance", value: "Blazing" },
      { label: "System", value: "Unified" },
    ],
  }
];
