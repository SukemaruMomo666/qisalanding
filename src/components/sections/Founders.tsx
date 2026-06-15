"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Code2, Palette, ShieldCheck, Zap, ChevronRight } from "lucide-react";

const founders = [
  {
    id: "prabu",
    name: "Prabu Alam",
    fullName: "Prabu Alam Tian Try Suherman",
    role: "Lead Architect & Full-Stack Master",
    description: "Expert in architecting scalable, high-performance systems. Capable of flawlessly executing complex, end-to-end applications.",
    icon: Code2,
    skills: ["System Architecture", "Cloud Infrastructure", "Full-Stack"],
  },
  {
    id: "qisty",
    name: "Qisty Sauva",
    fullName: "Qisty Sauva",
    role: "Elite UI/UX & Full-Stack Engineer",
    description: "Specializing in immersive digital experiences and high-fidelity interfaces. Flawlessly bridges the gap between design and technical execution.",
    icon: Palette,
    skills: ["Experience Design", "Interaction Motion", "UI Dev"],
  },
];

export const Founders = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.02] select-none pointer-events-none translate-x-1/4 translate-y-1/4">
          <h2 className="text-[20vw] font-heading font-black uppercase leading-none">FOUNDERS</h2>
        </div>
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">The Minds Behind Qisa</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
              Architecting <br />
              <span className="text-accent italic font-light lowercase">Perfection</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 md:p-12 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-accent group-hover:h-full transition-all duration-700 ease-in-out" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent/10 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <founder.icon size={32} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">
                    {founder.fullName}
                  </h3>
                  <p className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8">{founder.role}</p>
                  <p className="text-foreground/60 text-lg font-light leading-relaxed mb-10 max-w-lg">{founder.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {founder.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-foreground/40 group-hover:border-white/20 transition-colors">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">The Minds Behind Qisa</span>
        </div>
        <h2 className="text-5xl font-heading font-black uppercase tracking-tighter leading-none">
          Architecting <br /> Perfection.
        </h2>
      </div>

      {/* Mobile Card Swapper */}
      <div className="relative h-[480px]">
        <div className="flex gap-2 mb-8 bg-white/5 p-1 rounded-sm">
          {founders.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === i ? "bg-accent text-white" : "text-white/30"}`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-16"
          >
            <div className="glass-card p-10 border border-white/10 relative overflow-hidden">
               <div className="w-14 h-14 bg-accent/20 border border-accent/20 flex items-center justify-center mb-8">
                  {React.createElement(founders[activeTab].icon, { size: 28, className: "text-accent" })}
               </div>
               
               <h3 className="text-3xl font-heading font-black uppercase tracking-tighter mb-2 leading-none">
                  {founders[activeTab].fullName}
               </h3>
               <p className="text-accent text-[9px] font-bold uppercase tracking-[0.2em] mb-8">
                  {founders[activeTab].role}
               </p>
               
               <p className="text-foreground/60 text-lg font-light leading-snug mb-10">
                  {founders[activeTab].description}
               </p>

               <div className="flex flex-wrap gap-2 mb-10">
                  {founders[activeTab].skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 text-[8px] font-bold uppercase tracking-widest text-white/40">
                      {skill}
                    </span>
                  ))}
               </div>

               <div className="flex items-center gap-3 py-4 border-t border-white/5">
                  <ShieldCheck size={16} className="text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/50">End-to-End Execution Verified</span>
               </div>

               {/* Decorative Watermark */}
               <div className="absolute -bottom-6 -right-6 opacity-[0.03] select-none pointer-events-none">
                  <Zap size={180} />
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
