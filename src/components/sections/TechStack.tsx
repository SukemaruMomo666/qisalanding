"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFramer, 
  SiReact, 
  SiPostgresql, 
  SiPrisma 
} from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-3 block">Powering the Future</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter">
              Our Tech <span className="text-accent italic font-light lowercase">Arsenal</span>.
            </h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-widest text-foreground/30 leading-relaxed">
            We only use the most advanced tools to deliver absolute performance and scalability.
          </p>
        </motion.div>
      </div>

      <div className="relative flex">
        {/* Infinite Marquee Container */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap py-10"
        >
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center mx-12 md:mx-20 transition-all duration-500"
            >
              <div className="relative mb-4">
                {/* Monochrome Icon */}
                <tech.icon 
                  size={48} 
                  className="text-foreground/20 group-hover:opacity-0 transition-opacity duration-500" 
                />
                {/* Colored Icon (Visible on Hover) */}
                <tech.icon 
                  size={48} 
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/10 group-hover:text-foreground/50 transition-colors duration-500">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};
