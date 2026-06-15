"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export const Workflow = () => {
  const { t, language } = useLanguage();

  const workflowSteps = [
    {
      number: "01",
      title: t("workflow.steps.step_1.title"),
      description: t("workflow.steps.step_1.desc"),
    },
    {
      number: "02",
      title: t("workflow.steps.step_2.title"),
      description: t("workflow.steps.step_2.desc"),
    },
    {
      number: "03",
      title: t("workflow.steps.step_3.title"),
      description: t("workflow.steps.step_3.desc"),
    },
    {
      number: "04",
      title: t("workflow.steps.step_4.title"),
      description: t("workflow.steps.step_4.desc"),
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">{t("workflow.label")}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none">
                {t("workflow.title_1")} <br />
                <span className="text-accent italic font-light lowercase">{t("workflow.title_2")}</span>.
              </h2>
            </motion.div>

            {/* Workflow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-white/5 md:border-l-0">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative p-8 md:p-12 border-b border-white/5 md:border-r last:border-r-0 group hover:bg-white/[0.02] transition-colors duration-500"
                >
                  {/* Step Number */}
                  <div className="text-[10rem] font-heading font-black absolute top-0 left-0 leading-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none select-none">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <span className="text-accent font-heading font-black text-xl mb-12 block group-hover:translate-x-2 transition-transform duration-500">
                      /{step.number}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-foreground/50 text-sm font-light leading-relaxed max-w-[240px]">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Decorative Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700 ease-in-out" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Text Effect */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.01] select-none pointer-events-none">
        <h2 className="text-[40vw] font-heading font-black uppercase leading-none">WORKFLOW</h2>
      </div>
    </section>
  );
};

