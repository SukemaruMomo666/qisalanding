"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: t("navbar.work"), href: "/#work" },
    { name: t("navbar.services"), href: "/#services" },
    { name: t("navbar.about"), href: "/#about" },
    { name: t("navbar.faq"), href: "/#faq" },
    { name: t("navbar.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 py-6 md:px-12 md:py-8",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 no-underline relative z-[110]" onClick={() => setIsOpen(false)}>
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
             <div className="absolute inset-0 bg-accent rotate-45 group-hover:rotate-90 transition-transform duration-700 ease-in-out" />
             <span className="relative z-10 font-heading font-black text-white text-sm md:text-lg">Q</span>
          </div>
          <span className="font-heading font-black text-lg md:text-2xl tracking-tighter uppercase text-white">
            qisa.studio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          
          {/* Language Toggle */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-sm">
            <button
              onClick={() => setLanguage("id")}
              className={cn(
                "px-3 py-1 text-[9px] font-black uppercase tracking-widest transition-all",
                language === "id" ? "bg-accent text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              IND
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-3 py-1 text-[9px] font-black uppercase tracking-widest transition-all",
                language === "en" ? "bg-accent text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              ENG
            </button>
          </div>

          <Link
            href="/#contact"
            className="group relative px-6 py-2 overflow-hidden border border-white/20 hover:border-accent transition-colors duration-500"
          >
            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em]">{t("navbar.start_project")}</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4 relative z-[110]">
          {/* Mobile Language Toggle */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-sm">
            <button
              onClick={() => setLanguage("id")}
              className={cn(
                "px-2 py-1 text-[9px] font-black uppercase tracking-widest transition-all",
                language === "id" ? "bg-accent text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-1 text-[9px] font-black uppercase tracking-widest transition-all",
                language === "en" ? "bg-accent text-white" : "text-white/30 hover:text-white/60"
              )}
            >
              EN
            </button>
          </div>

          {/* Mobile Toggle - Min Touch Target 44x44px */}
          <button
            className="text-white flex items-center justify-center w-11 h-11 transition-opacity bg-transparent border-none active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-background/95 backdrop-blur-2xl z-[100] md:hidden flex flex-col pt-32 px-8 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-heading font-black uppercase tracking-tighter text-white/90 hover:text-accent flex items-center justify-between group active:opacity-70 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto pt-12 border-t border-white/5"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40 mb-6">{t("navbar.connect_label")}</p>
              <Link
                href="mailto:hello@qisa.studio"
                className="text-lg font-heading font-bold text-white mb-8 block"
              >
                hello@qisa.studio
              </Link>
              <Link
                href="/#contact"
                className="w-full bg-accent text-white py-6 text-center text-[11px] font-black uppercase tracking-[0.3em] block active:scale-[0.98] transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
