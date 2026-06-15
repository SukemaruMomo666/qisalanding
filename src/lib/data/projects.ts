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
    slug: "cybernexus",
    title: "CyberNexus",
    category: "Fintech Platform",
    tags: ["Next.js", "Web3", "Node.js"],
    imageColor: "bg-blue-600/20",
    className: "md:col-span-2 aspect-[16/9]",
    problem: "CyberNexus faced significant scalability issues with their legacy Web3 infrastructure, resulting in high transaction latency and a disjointed user experience for their growing user base.",
    solution: "We re-architected their entire platform using Next.js 15 and a high-performance Node.js backend. By implementing custom Web3 provider hooks and optimized state management, we achieved near-instant interaction speeds.",
    impactMetrics: [
      { label: "Transaction Speed", value: "+300%" },
      { label: "User Retention", value: "85%" },
      { label: "Load Time Reduction", value: "2.4s" },
    ],
  },
  {
    slug: "aura-luxury",
    title: "Aura Luxury",
    category: "E-Commerce",
    tags: ["Three.js", "Tailwind", "GSAP"],
    imageColor: "bg-purple-600/20",
    className: "md:col-span-1 aspect-square",
    problem: "Aura Luxury needed a digital presence that matched their physical product elegance. Their existing e-commerce site felt static and failed to engage high-net-worth customers.",
    solution: "We designed an immersive, 3D-driven shopping experience using Three.js and GSAP. The interface features fluid transitions and kinetic typography that creates a sense of digital luxury.",
    impactMetrics: [
      { label: "Engagement Boost", value: "240%" },
      { label: "Conversion Rate", value: "+12%" },
      { label: "Averge Session", value: "5.5m" },
    ],
  },
  {
    slug: "vortex-ai",
    title: "Vortex AI",
    category: "SaaS Dashboard",
    tags: ["React", "Python", "FastAPI"],
    imageColor: "bg-emerald-600/20",
    className: "md:col-span-1 aspect-square",
    problem: "Vortex AI had powerful machine learning models but an overly complex dashboard that confused users and led to high churn rates during the onboarding phase.",
    solution: "Our team simplified the data visualization layer using custom React components and a streamlined FastAPI bridge. We focused on 'progressive disclosure' to ensure users were never overwhelmed.",
    impactMetrics: [
      { label: "Churn Reduction", value: "45%" },
      { label: "Onboarding Speed", value: "2x" },
      { label: "User Satisfaction", value: "9/10" },
    ],
  },
  {
    slug: "neo-zine",
    title: "Neo-Zine",
    category: "Digital Magazine",
    tags: ["Sanity.io", "Framer Motion"],
    imageColor: "bg-orange-600/20",
    className: "md:col-span-2 aspect-[16/9]",
    problem: "Neo-Zine wanted to disrupt the traditional magazine format with a digital-first 'zine' that felt raw, aggressive, and highly interactive.",
    solution: "Applying our 'Kinetic Brutalism' philosophy, we built a headless CMS-driven platform using Sanity.io. The site features aggressive typography and scroll-triggered reanimated elements.",
    impactMetrics: [
      { label: "Monthly Readers", value: "150k" },
      { label: "Interaction Rate", value: "70%" },
      { label: "Page Views/Session", value: "8.2" },
    ],
  },
];
