"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

import { useLanguage } from "@/lib/LanguageContext";

export const Projects = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop Grid Render
  if (!isMobile) {
    return (
      <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-[1440px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={language}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-24"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">{t("projects.label")}</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-none">
                  {t("projects.title_1")} <br />
                  <span className="text-accent italic font-light lowercase">{t("projects.title_2")}</span>.
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative overflow-hidden bg-white/5 border border-white/5 ${project.className}`}
                  >
                    <Link href={`/work/${project.slug}`} className="block w-full h-full">
                      <div className={`absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110 ${project.imageColor}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md text-[8px] font-black uppercase tracking-widest text-white/70">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                            <ArrowUpRight size={20} />
                          </div>
                        </div>
                        <div>
                          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                            {project.category}
                          </span>
                          <h3 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-none group-hover:text-white transition-colors text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  }

  // Mobile Cinematic Carousel Render
  return (
    <section id="work" className="py-24 bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{t("projects.label")}</span>
            </div>
            <h2 className="text-5xl font-heading font-black uppercase tracking-tighter leading-[0.9]">
              {t("projects.title_1")} <br />
              <span className="text-accent italic font-light lowercase">{t("projects.title_2")}</span>.
            </h2>
          </div>

          <div className="relative">
            <motion.div 
              drag="x"
              dragConstraints={{ left: -((projects.length - 1) * 85), right: 0 }}
              className="flex gap-4 px-6 cursor-grab active:cursor-grabbing"
              style={{ width: `${projects.length * 85}vw` }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="w-[80vw] aspect-[4/5] relative overflow-hidden glass-card border border-white/10 shrink-0"
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Link href={`/work/${project.slug}`} className="block w-full h-full">
                    <div className={`absolute inset-0 ${project.imageColor}`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-white/10 backdrop-blur-md text-[7px] font-black uppercase tracking-widest text-white/80">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div>
                        <span className="text-accent text-[8px] font-bold uppercase tracking-[0.3em] mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-4xl font-heading font-black uppercase tracking-tighter leading-none text-white mb-6">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/50">
                          <span>{t("projects.view_case")}</span>
                          <ArrowUpRight size={12} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual Cue for Swipe */}
            <div className="mt-8 px-6 flex items-center justify-between">
              <div className="flex gap-1">
                  {projects.map((_, i) => (
                    <div key={i} className="w-8 h-[2px] bg-white/10 overflow-hidden relative">
                      <motion.div 
                        className="absolute inset-0 bg-accent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        viewport={{ amount: 1 }}
                      />
                    </div>
                  ))}
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-foreground/20 italic">{t("projects.swipe")}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
