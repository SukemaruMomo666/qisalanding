"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Palette, Globe, Cpu, Smartphone, Layout } from "lucide-react";

const services = [
  {
    title: "Elite Web Development",
    desc: "Next.js 15+ and high-performance engineering for the modern web.",
    icon: Globe,
    className: "md:col-span-2 lg:col-span-2 bg-accent/5",
  },
  {
    title: "UI/UX ProMax",
    desc: "Awwwards-level design systems and immersive digital storytelling.",
    icon: Palette,
    className: "md:col-span-1 lg:col-span-1 bg-white/5",
  },
  {
    title: "Full-Stack Architecture",
    desc: "End-to-end scalable solutions from database to deployment.",
    icon: Cpu,
    className: "md:col-span-1 lg:col-span-1 bg-white/5",
  },
  {
    title: "Mobile Experiences",
    desc: "Native-feel cross-platform apps using React Native & Flutter.",
    icon: Smartphone,
    className: "md:col-span-1 lg:col-span-1 bg-accent/10",
  },
  {
    title: "Brand Systems",
    desc: "Establishing visual identities that dominate digital landscapes.",
    icon: Layout,
    className: "md:col-span-1 lg:col-span-1 bg-white/5",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4 block">Our Capabilities</span>
          <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
            Services for the <br />
            <span className="text-accent italic font-light lowercase">Visionaries</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-10 relative group border border-white/5 glass-card flex flex-col justify-between min-h-[320px] ${service.className}`}
            >
              <div className="w-12 h-12 bg-accent/20 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                <service.icon size={24} className="text-accent group-hover:text-white transition-colors" />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/50 text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                 <service.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
