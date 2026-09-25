import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return {};

  return {
    title: `${project.title} | qisa.studio Case Study`,
    description: project.problem,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-foreground/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to Work</span>
        </Link>

        {/* Hero Section */}
        <header className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">{project.category}</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] lg:text-[14rem] font-heading font-black leading-[0.85] uppercase tracking-tighter mb-12">
            {project.title}<span className="text-accent">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                  {tag}
                </span>
              ))}
            </div>

            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-black px-6 py-3 border border-white hover:bg-transparent hover:text-white transition-all duration-300"
              >
                <span className="font-heading font-black uppercase tracking-widest text-xs">Visit Live Site</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </header>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 border-t border-white/5 pt-20">
          
          {/* Client Problem */}
          <div className="lg:col-span-5">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-10 block">The Challenge</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/80">
              {project.problem}
            </p>
          </div>

          {/* Qisa Solution */}
          <div className="lg:col-span-7">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-10 block">Our Solution</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/50">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx} className="glass-card p-12 border border-white/5 relative group overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-700" />
               <h3 className="text-7xl md:text-8xl font-heading font-black tracking-tighter text-accent mb-4">
                  {metric.value}
               </h3>
               <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40 italic">
                  {metric.label}
               </p>
            </div>
          ))}
        </div>

        {/* Next Project Footer */}
        <footer className="border-t border-white/5 pt-20 flex flex-col items-center text-center">
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/20 mb-6">Next Project</span>
           <Link 
            href="/" 
            className="group flex flex-col items-center"
           >
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter hover:text-accent transition-colors duration-500 mb-8">
                 Explore More Work
              </h2>
              <div className="w-20 h-20 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 rounded-full">
                 <ArrowUpRight size={32} className="group-hover:text-white transition-colors" />
              </div>
           </Link>
        </footer>
      </div>
    </div>
  );
}
