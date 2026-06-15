import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-12">
          Privacy <span className="text-accent italic font-light lowercase">Policy</span>.
        </h1>
        
        <div className="space-y-12 text-foreground/60 text-lg font-light leading-relaxed">
          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">01. Overview</h2>
            <p>At qisa.studio, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">02. Data Collection</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data (name), Contact Data (email address), and Technical Data (IP address, browser type).</p>
          </section>

          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">03. Use of Data</h2>
            <p>We use your data to provide and maintain our service, to notify you about changes to our service, and to provide customer support when you reach out via our contact forms.</p>
          </section>

          <section>
            <h2 className="text-white font-heading font-bold uppercase tracking-widest text-sm mb-4">04. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at: <span className="text-white underline underline-offset-4 decoration-accent">hello@qisa.studio</span></p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/20">
          Last Updated: June 15, 2026
        </div>
      </div>
    </div>
  );
}
