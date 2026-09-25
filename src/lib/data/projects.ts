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
  url?: string;
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
    url: "https://preysonmoto.com/",
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
    url: "https://baksocapgala.com/",
  },
  {
    slug: "siganas",
    title: "SIGANAS",
    category: "AI Traceability System",
    tags: ["FastAPI", "React 19", "YOLO AI", "Blockchain"],
    imageColor: "bg-yellow-600/20",
    className: "md:col-span-1 aspect-[4/5] md:aspect-square",
    problem: "Subang's pineapple agriculture required an integrated digital system to accurately grade harvests via computer vision, transparently trace supply chains, and meticulously monitor food loss percentages.",
    solution: "We architected a unified platform powered by FastAPI and React 19. It utilizes YOLO AI for automated pineapple grading, robust Decision Support Systems for pricing, and Blockchain verification for unalterable supply chain traceability.",
    impactMetrics: [
      { label: "AI Vision", value: "YOLO" },
      { label: "Traceability", value: "Blockchain" },
      { label: "Architecture", value: "Decoupled" },
    ],
    url: "https://siganas.com/",
  },
  {
    slug: "pondasikita",
    title: "PondasiKita",
    category: "B2B/B2C Marketplace Ecosystem",
    tags: ["Laravel 12", "WebSockets", "Midtrans", "Biteship"],
    imageColor: "bg-blue-600/20",
    className: "md:col-span-2 aspect-[16/9]",
    problem: "Traditional building material supply chains in Indonesia are highly fragmented, lacking digital infrastructure for multi-vendor logistics, real-time messaging, and online payment processing.",
    solution: "We engineered a comprehensive digital ecosystem bridging retail stores, contractors, and consumers. Powered by Laravel 12, it features Reverb WebSockets for live chat, automated Biteship logistics, Midtrans escrow, and an AI Design Assistant.",
    impactMetrics: [
      { label: "Logistics", value: "Automated" },
      { label: "Real-time", value: "Reverb" },
      { label: "Payments", value: "Integrated" },
    ],
    url: "https://www.pondasikita.com/",
  },
  {
    slug: "gerilya",
    title: "GERILYA",
    category: "E-Government Platform",
    tags: ["Laravel 11", "PHPWord", "Tailwind v4"],
    imageColor: "bg-emerald-600/20",
    className: "md:col-span-1 aspect-[4/5] md:aspect-square",
    problem: "Kelurahan Sukapada needed to digitalize conventional bureaucracy to eliminate physical queues and automate official document generation using standard templates.",
    solution: "We engineered a citizen self-service portal utilizing Laravel and PHPWord to fully automate dynamic DOCX generation, complete with granular RBAC and OTP security.",
    impactMetrics: [
      { label: "Bureaucracy", value: "Digitalized" },
      { label: "Documents", value: "Automated" },
      { label: "Security", value: "OTP" },
    ],
    url: "https://gerilyasukapada.com/",
  },
  {
    slug: "helix-marketplace",
    title: "Helix Marketplace",
    category: "Enterprise E-Commerce",
    tags: ["Laravel 12", "Gemini AI", "Reverb", "Midtrans"],
    imageColor: "bg-indigo-600/20",
    className: "md:col-span-2 aspect-[16/9]",
    problem: "Regional MSMEs required an advanced digital marketplace integrated with government and academic sectors, bridging grassroots sellers with modern high-converting commerce.",
    solution: "We engineered a robust monolithic enterprise platform featuring a multi-tier order state machine, visual storefront builders, in-store POS, and the POTA multimodal AI shopping assistant.",
    impactMetrics: [
      { label: "AI Shopping", value: "POTA" },
      { label: "Workspace", value: "Integrated" },
      { label: "Architecture", value: "Monolithic" },
    ],
    url: "https://thelix.shop/",
  }
];
