import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-12">
          Terms of <span className="text-accent italic font-light lowercase">Service</span>.
        </h1>
        
        <div className="space-y-12 text-foreground/60 text-lg font-light leading-relaxed">
          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">01. Acceptance</h2>
            <p>By accessing qisa.studio, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </section>

          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">02. Intellectual Property</h2>
            <p>The content, organization, graphics, design, compilation, and other matters related to qisa.studio are protected under applicable copyrights, trademarks, and other proprietary rights.</p>
          </section>

          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">03. Project Terms</h2>
            <p>All project engagements with qisa.studio are subject to separate master service agreements (MSA) which will be provided during the discovery and contract phase.</p>
          </section>

          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">04. Liability</h2>
            <p>In no event shall qisa.studio or its founders be liable for any damages arising out of the use or inability to use the materials on qisa.studio.</p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/20">
          Last Updated: June 15, 2026
        </div>
      </div>
    </div>
  );
}
