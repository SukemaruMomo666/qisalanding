"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-background border border-white/10 group active:scale-90 transition-all duration-500 overflow-hidden",
            "hover:border-accent shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          )}
          aria-label="Scroll to top"
        >
          {/* Animated Background Fill */}
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white transition-colors" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white transition-colors" />

          <ArrowUp 
            size={24} 
            className="relative z-10 text-white group-hover:-translate-y-1 transition-transform duration-500" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
