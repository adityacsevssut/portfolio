"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="pt-10 md:pt-16 pb-16 relative overflow-hidden flex-1 flex items-center">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-white flex flex-wrap justify-center items-center gap-x-3">
            <span className="text-[var(--color-primary-neon)]">await</span>
            <span>connect(</span>
            <span className="text-[var(--color-accent-cyan)]">&quot;Aditya&quot;</span>
            <span>);</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 font-mono text-sm md:text-base">
            {"//"} Send a message or open a collaboration thread
          </p>
        </div>

        {/* Terminal Contact Form */}
        <div className="w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-card-bg)] backdrop-blur-md border border-[#262626] rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="bg-[#121212] px-4 py-2 border-b border-[#262626] flex items-center">
              <span className="text-[var(--color-text-secondary)] font-mono text-sm">~/contact.sh</span>
            </div>
            
            <form className="p-6 flex flex-col gap-4 font-mono" suppressHydrationWarning>
              <div>
                <label className="text-[var(--color-accent-cyan)] text-sm block mb-1">const name =</label>
                <input 
                  type="text" 
                  placeholder='"Enter your name"'
                  className="w-full bg-transparent border-b border-[#262626] focus:border-[var(--color-primary-neon)] outline-none text-[#E5E7EB] py-1 placeholder:text-[#475569] placeholder:text-sm"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label className="text-[var(--color-accent-cyan)] text-sm block mb-1">const email =</label>
                <input 
                  type="email" 
                  placeholder='"Enter your email"'
                  className="w-full bg-transparent border-b border-[#262626] focus:border-[var(--color-primary-neon)] outline-none text-[#E5E7EB] py-1 placeholder:text-[#475569] placeholder:text-sm"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label className="text-[var(--color-accent-cyan)] text-sm block mb-1">const message =</label>
                <textarea 
                  rows={4}
                  placeholder='"How can we collaborate?"'
                  className="w-full bg-[#0A0A0A]/50 border border-[#262626] focus:border-[var(--color-primary-neon)] rounded outline-none text-[#E5E7EB] p-2 mt-1 resize-none placeholder:text-[#475569] placeholder:text-sm"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-primary-neon)] text-white rounded hover:bg-opacity-80 transition-all font-sans font-medium shadow-[0_0_15px_rgba(239, 68, 68,0.4)]"
                suppressHydrationWarning
              >
                await send()
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
