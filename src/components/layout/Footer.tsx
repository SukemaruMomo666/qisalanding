"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              {/* Brand */}
              <div className="lg:col-span-2">
                <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                    <span className="-rotate-45 group-hover:-rotate-90 transition-transform duration-500 font-heading font-bold text-white text-sm">Q</span>
                  </div>
                  <span className="font-heading font-bold text-2xl tracking-tighter uppercase text-white">qisa.studio</span>
                </Link>
                <p className="text-muted-foreground max-w-sm text-lg leading-relaxed mb-8 font-light">
                  {t("footer.desc")}
                </p>
                <div className="flex gap-4">
                  {["Twitter", "Instagram", "Github"].map((platform) => (
                    <Link
                      key={platform}
                      href="#"
                      className="px-4 py-2 border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 group cursor-pointer text-xs font-bold uppercase tracking-widest"
                    >
                      <span className="group-hover:text-white">{platform}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-accent">{t("footer.nav_label")}</h4>
                <ul className="space-y-4">
                  {[
                    { name: t("navbar.work"), href: "/#work" },
                    { name: t("navbar.services"), href: "/#services" },
                    { name: t("navbar.about"), href: "/#about" },
                    { name: t("navbar.contact"), href: "/#contact" },
                    { name: "Privacy Policy", href: "/privacy-policy" },
                    { name: "Terms of Service", href: "/terms-of-service" }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors uppercase text-sm tracking-wider flex items-center gap-1 group">
                        {item.name}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-6 text-accent">{t("footer.contact_label")}</h4>
                <ul className="space-y-4">
                  <li>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">{t("footer.general_inquiries")}</p>
                    <Link href="mailto:hello@qisa.studio" className="text-lg font-bold hover:text-accent transition-colors text-white">
                      hello@qisa.studio
                    </Link>
                  </li>
                  <li>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">{t("footer.new_business")}</p>
                    <Link href="#" className="text-lg font-bold hover:text-accent transition-colors underline underline-offset-4 decoration-accent text-white">
                      {t("footer.discovery_call")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <p>© {new Date().getFullYear()} qisa.studio. {t("footer.rights")}</p>
              <p>{t("footer.design_tag")}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </footer>
  );
};

