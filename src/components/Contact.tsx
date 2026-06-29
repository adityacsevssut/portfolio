"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Contact() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "github", icon: FaGithub, label: "GitHub", href: "#", angle: -45 },
    { id: "linkedin", icon: FaLinkedin, label: "LinkedIn", href: "#", angle: -15 },
    { id: "twitter", icon: FaTwitter, label: "Twitter", href: "#", angle: 15 },
    { id: "email", icon: Mail, label: "Email", href: "#", angle: 45 },
  ];

  return (
    <section id="contact" className="pt-0 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        
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
