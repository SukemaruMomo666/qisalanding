"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

export const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, { message: language === "id" ? "Nama harus minimal 2 karakter." : "Name must be at least 2 characters." }),
    email: z.string().email({ message: language === "id" ? "Silakan masukkan alamat email yang valid." : "Please enter a valid email address." }),
    project: z.string().min(10, { message: language === "id" ? "Silakan jelaskan proyek Anda lebih detail (min 10 karakter)." : "Please describe your project in more detail (min 10 chars)." }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const phoneNumber = "6285156677227";
    const message = `Halo Qisa Studio!\n\nNama: ${data.name}\nEmail: ${data.email}\n\nDetail Proyek:\n${data.project}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Simulate slight loading for UX, then open WA
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20"
          >
            
            {/* Left Side: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">{t("contact.label")}</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter leading-[0.85] mb-12">
                {t("contact.title_1")} <br />
                {t("contact.title_2")} <span className="text-accent italic lowercase font-light">{t("contact.title_3")}</span>.
              </h2>
              <div className="space-y-6 text-foreground/50 text-xl font-light leading-relaxed max-w-md">
                <p>{t("contact.desc_1")}</p>
                <p>{t("contact.desc_2")}</p>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 glass-card p-10 md:p-14 border border-white/5 relative z-10">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] font-black text-foreground/40 block">{t("contact.form.name")}</label>
                  <input
                    id="name"
                    {...register("name")}
                    placeholder={t("contact.form.placeholders.name")}
                    className={cn(
                      "w-full bg-white/5 border-b border-white/10 p-4 focus:border-accent focus:bg-white/10 outline-none transition-all font-body text-lg",
                      errors.name && "border-accent/50 bg-accent/5"
                    )}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-2 text-accent text-[10px] uppercase font-bold mt-2">
                      <AlertCircle size={12} /> {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] font-black text-foreground/40 block">{t("contact.form.email")}</label>
                  <input
                    id="email"
                    {...register("email")}
                    placeholder={t("contact.form.placeholders.email")}
                    className={cn(
                      "w-full bg-white/5 border-b border-white/10 p-4 focus:border-accent focus:bg-white/10 outline-none transition-all font-body text-lg",
                      errors.email && "border-accent/50 bg-accent/5"
                    )}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 text-accent text-[10px] uppercase font-bold mt-2">
                      <AlertCircle size={12} /> {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Project Field */}
                <div className="space-y-2">
                  <label htmlFor="project" className="text-[10px] uppercase tracking-[0.3em] font-black text-foreground/40 block">{t("contact.form.project")}</label>
                  <textarea
                    id="project"
                    {...register("project")}
                    rows={4}
                    placeholder={t("contact.form.placeholders.project")}
                    className={cn(
                      "w-full bg-white/5 border-b border-white/10 p-4 focus:border-accent focus:bg-white/10 outline-none transition-all font-body text-lg resize-none",
                      errors.project && "border-accent/50 bg-accent/5"
                    )}
                  />
                  {errors.project && (
                    <div className="flex items-center gap-2 text-accent text-[10px] uppercase font-bold mt-2">
                      <AlertCircle size={12} /> {errors.project.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white p-6 font-heading font-black uppercase text-sm tracking-[0.3em] hover:bg-red-700 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-3"
                      >
                        <Loader2 className="animate-spin" size={20} />
                        <span>{t("contact.form.submit.processing")}</span>
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 size={20} />
                        <span>{t("contact.form.submit.success")}</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center gap-3"
                      >
                        <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        <span>{t("contact.form.submit.idle")}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>

              {/* Decorative Corner */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-accent/20 -z-1" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

