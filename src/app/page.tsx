"use client";

import { motion, Transition } from "framer-motion";
import { ArrowDownRight, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { Founders } from "@/components/sections/Founders";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Workflow } from "@/components/sections/Workflow";
import { FAQ, Testimonials } from "@/components/sections/FAQTestimonials";

// Using explicit Transition type to satisfy Framer Motion v12 strict types
const customTransition: Transition = { 
  duration: 1.4, 
  ease: [0.16, 1, 0.3, 1] as any 
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 overflow-hidden pt-32 pb-20">
        
        {/* Ambient Background Elements */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto w-full z-10">
          <div className="flex flex-col items-start">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...customTransition, delay: 0.1 }}
              className="flex items-center gap-3 mb-6 md:mb-8"
            >
              <span className="w-6 md:w-8 h-[1px] bg-accent" />
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] text-accent">
                Elite UI/UX & Full-Stack Studio
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="relative">
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...customTransition, delay: 0.2 }}
                className="block text-responsive-h1 font-heading font-black uppercase tracking-tighter"
              >
                Absolute
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...customTransition, delay: 0.3 }}
                className="block text-responsive-h1 font-heading font-black uppercase tracking-tighter text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
              >
                Digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...customTransition, delay: 0.4 }}
                className="block text-responsive-h1 font-heading font-black uppercase tracking-tighter"
              >
                Perfection<span className="text-accent">.</span>
              </motion.span>
            </h1>

            {/* Subtext & CTA */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full mt-10 md:mt-16 gap-8 md:gap-12">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="max-w-md text-base md:text-xl text-foreground/50 font-light leading-relaxed"
              >
                We architect high-end digital solutions for visionary brands. 
                Experience the intersection of brutalist aesthetics and elite performance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...customTransition, delay: 1 }}
                className="z-20 w-full md:w-auto"
              >
                <Link
                  href="/#work"
                  className="group relative flex items-center justify-between md:justify-start gap-8 bg-transparent border-2 border-accent text-white px-8 py-5 md:px-12 md:py-7 overflow-hidden transition-all duration-500 active:scale-95"
                >
                  <span className="relative z-10 font-heading font-black uppercase text-sm md:text-base tracking-[0.2em]">
                    Explore Our Work
                  </span>
                  
                  {/* Kinetic Icon Container */}
                  <div className="relative z-10 w-10 h-10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                    <ArrowDownRight 
                      size={24} 
                      className="text-white group-hover:text-accent transition-colors duration-500 group-hover:rotate-45 transition-transform" 
                    />
                  </div>

                  {/* Animated Background Fill */}
                  <div className="absolute top-0 left-0 w-full h-full bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Dynamic Background Text (Parallax Effect) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute -bottom-10 left-0 right-0 pointer-events-none select-none overflow-hidden"
        >
          <h2 className="text-[30vw] md:text-[25vw] font-heading font-black uppercase leading-none whitespace-nowrap -mb-5 md:-mb-10 opacity-50">
            QISA.STUDIO QISA.STUDIO
          </h2>
        </motion.div>

        {/* Interaction Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-12 hidden lg:flex items-center gap-4 text-[9px] uppercase tracking-[0.5em] text-foreground/20"
        >
          <MousePointer2 size={12} />
          <span>Interactive Environment</span>
        </motion.div>
      </section>

      {/* Trust Bar / Marquee */}
      <section className="bg-foreground text-background py-6 md:py-10 overflow-hidden border-y border-white/5 mt-10 md:mt-20 relative z-30">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              <span className="text-lg md:text-3xl font-heading font-black uppercase mx-8 md:mx-16">Next-Gen Architecture</span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-accent rotate-45" />
              <span className="text-lg md:text-3xl font-heading font-black uppercase mx-8 md:mx-16">Pixel Perfect UI</span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-accent rotate-45" />
              <span className="text-lg md:text-3xl font-heading font-black uppercase mx-8 md:mx-16">Full-Stack Elite</span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-accent rotate-45" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Main Sections */}
      <TechStack />
      <Founders />
      <Workflow />
      <Projects />
      <Testimonials />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
}
