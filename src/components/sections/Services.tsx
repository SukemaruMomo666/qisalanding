"use client";

import React from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Globe, Palette, Cpu, Smartphone, Layout } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      title: t("services.items.web.title"),
      desc: t("services.items.web.desc"),
      icon: Globe,
      className: "md:col-span-2 lg:col-span-2 bg-accent/5",
      bgImage: "/images/services/web-dev-bg-2.jpg",
    },
    {
      title: t("services.items.uiux.title"),
      desc: t("services.items.uiux.desc"),
      icon: Palette,
      className: "md:col-span-1 lg:col-span-1 bg-white/5",
      bgImage: "/images/services/uiux-bg.jpg",
    },
    {
      title: t("services.items.fullstack.title"),
      desc: t("services.items.fullstack.desc"),
      icon: Cpu,
      className: "md:col-span-1 lg:col-span-1 bg-white/5",
      bgImage: "/images/services/fullstack-bg.jpg",
    },
    {
      title: t("services.items.mobile.title"),
      desc: t("services.items.mobile.desc"),
      icon: Smartphone,
      className: "md:col-span-1 lg:col-span-1 bg-accent/10",
      bgImage: "/images/services/mobile-bg.jpg",
    },
    {
      title: t("services.items.brand.title"),
      desc: t("services.items.brand.desc"),
      icon: Layout,
      className: "md:col-span-1 lg:col-span-1 bg-white/5",
      bgImage: "/images/services/brand-bg.jpg",
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

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Glowing Orbs - Intensified */}
        <div className="absolute top-[-10%] -left-[10%] w-[60vw] h-[60vw] bg-accent/25 rounded-full blur-[140px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[50vw] h-[50vw] bg-accent/25 rounded-full blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_2s]" />
        
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.7%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4 block">{t("services.label")}</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
                {t("services.title_1")} <br />
                <span className="text-accent italic font-light lowercase">{t("services.title_2")}</span>.
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
                  className={`p-10 relative group border border-white/5 glass-card flex flex-col justify-between min-h-[320px] overflow-hidden ${service.className}`}
                >
                  {/* Optional Background Image */}
                  {service.bgImage && (
                    <>
                      <div 
                        className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 group-hover:scale-105 transform"
                        style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      />
                      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
                    </>
                  )}

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="w-12 h-12 bg-accent/20 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-500 backdrop-blur-sm">
                      <service.icon size={24} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tighter mb-4 drop-shadow-lg">
                        {service.title}
                      </h3>
                      <p className="text-foreground/80 text-sm font-light leading-relaxed drop-shadow-md">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity z-10">
                    <service.icon size={80} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

