"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Quote } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our timelines range from 4 to 12 weeks depending on complexity. We prioritize quality over speed to ensure every pixel and line of code meets our elite standards.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We provide dedicated support and maintenance packages to ensure your digital products stay high-performing and secure long after the initial deployment.",
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We specialize in Fintech, SaaS, Luxury E-commerce, and high-end portfolios. However, our engineering and design principles are built to dominate any digital landscape.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We use Slack for daily communication and bi-weekly syncs via Zoom/Meet. Transparency is core to our workflow, ensuring you're always informed about the progress.",
  },
];

const testimonials = [
  {
    name: "Alexander Reed",
    role: "CEO of CyberNexus",
    content: "Qisa Studio transformed our vision into a digital masterpiece. Their attention to detail in both UI and technical architecture is simply unmatched.",
  },
  {
    name: "Elena Vance",
    role: "Design Lead at Aura",
    content: "Working with Prabu and Qisty was a game-changer. They don't just build websites; they architect immersive experiences that truly stand out.",
  },
  {
    name: "Marcus Thorne",
    role: "Founder of Vortex AI",
    content: "The speed and stability of the platform they built exceeded our wildest expectations. Pure engineering excellence from start to finish.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* FAQ Header */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">Clear Answers</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter leading-none mb-8">
              Frequently <br />
              <span className="text-accent italic font-light lowercase">Asked</span>.
            </h2>
            <p className="text-foreground/40 text-lg font-light leading-relaxed max-w-sm">
              Everything you need to know about partnering with qisa.studio to build your next iconic product.
            </p>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-b border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group hover:text-white transition-colors"
              >
                <span className="text-xl md:text-2xl font-heading font-bold uppercase tracking-tight">
                  {faq.question}
                </span>
                <div className={openIndex === idx ? "text-accent" : "text-foreground/20 group-hover:text-foreground/60 transition-colors"}>
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="pb-10 text-foreground/50 text-lg leading-relaxed max-w-2xl font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile]);

  if (!isMobile) {
    return (
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-background relative border-y border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4 block">Proven Success</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
              Voice of our <br />
              <span className="text-accent italic font-light lowercase">Partners</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 relative group"
              >
                <Quote className="text-accent absolute top-10 right-10 opacity-20 group-hover:opacity-40 transition-opacity" size={40} />
                <div className="relative z-10">
                  <p className="text-xl italic font-light leading-relaxed mb-12 text-foreground/80">
                    &quot;{t.content}&quot;
                  </p>
                  <div>
                    <h4 className="font-heading font-black uppercase tracking-widest text-sm mb-1">{t.name}</h4>
                    <p className="text-accent text-[9px] font-bold uppercase tracking-[0.3em]">{t.role}</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-background relative border-y border-white/5 overflow-hidden">
      <div className="mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4 block text-center">Proven Success</span>
        <h2 className="text-5xl font-heading font-black uppercase tracking-tighter text-center leading-none">
          Voice of <br /> Partners.
        </h2>
      </div>

      <div className="relative min-h-[350px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="glass-card p-10 relative border border-white/10">
              <Quote className="text-accent opacity-20 mb-8" size={32} />
              <p className="text-2xl font-light italic leading-snug text-foreground/90 mb-10">
                &quot;{testimonials[index].content}&quot;
              </p>
              <div>
                <h4 className="font-heading font-black uppercase tracking-widest text-sm mb-1">{testimonials[index].name}</h4>
                <p className="text-accent text-[9px] font-bold uppercase tracking-[0.3em]">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 ${index === i ? "w-12 bg-accent" : "w-4 bg-white/10"}`}
          />
        ))}
      </div>
    </section>
  );
};
