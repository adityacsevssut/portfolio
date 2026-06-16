"use client";

import { motion } from "framer-motion";

const profileData = [
  { key: "name", value: '"Aditya Nahak"' },
  { key: "role", value: '"Full Stack Developer"' },
  { key: "passion", value: '"Ml And DSA"' },
  { key: "mindset", value: '"Learn like Your Never Learn"' },
  { key: "location", value: '"odisha , Talcher"' },
  { key: "status", value: '200 /* OK */', isStatus: true }
];

export function About() {
  return (
    <section id="about" className="py-10 md:py-12 relative flex flex-col items-center justify-center px-4 md:px-6">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white flex flex-wrap justify-center gap-x-2 md:gap-x-3">
          <span><span className="text-[var(--color-accent-purple)]">const</span> aboutMe</span>
          <span><span className="text-[var(--color-accent-cyan)]">=</span> require(<span className="text-green-400">"./profile"</span>);</span>
        </h2>
        <div className="mt-4 text-[#9CA3AF] font-mono text-xs sm:text-sm md:text-base">
          {"//"} fetching developer profile data...
        </div>
      </motion.div>

      <div className="w-full max-w-3xl bg-[#121212]/90 backdrop-blur-xl border border-[#262626] rounded-xl shadow-2xl overflow-hidden z-10">

        {/* VS Code Style Header */}
        <div className="bg-[#121212] flex items-center border-b border-[#262626] select-none">
          {/* Active Tab */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0A0A] border-t-2 border-t-[var(--color-accent-purple)] border-r border-r-[#262626] min-w-[140px]">
            <span className="text-yellow-400 font-mono text-xs font-bold">{"{ }"}</span>
            <span className="text-[#E5E7EB] font-mono text-xs">about.json</span>
          </div>
          {/* Inactive Tab */}
          <div className="hidden md:flex items-center gap-2 px-4 py-3 text-[#9CA3AF] border-r border-r-[#262626] opacity-50 hover:opacity-100 transition-opacity cursor-default">
            <span className="text-blue-400 font-mono text-xs font-bold">TS</span>
            <span className="font-mono text-xs">developer.ts</span>
          </div>

          <div className="flex-1"></div>

          {/* Window Controls (VS Code style right actions) */}
          <div className="hidden md:flex space-x-4 px-4 text-[#9CA3AF] opacity-50">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M14 1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm-1 12H3V3h10v10z" /></svg>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M3 4h10v2H3zM3 7h10v2H3zM3 10h10v2H3z" /></svg>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 md:p-6 font-mono text-sm md:text-base">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#FB7185] text-lg md:text-xl mb-3"
          >
            {"{"}
          </motion.div>

          <div className="flex flex-col gap-2 pl-2 md:pl-3 border-l border-[#262626]/30 ml-1 py-1">
            {profileData.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="bg-[#0A0A0A] border border-[#262626] rounded-lg p-2 md:p-3 shadow-sm hover:border-[var(--color-accent-cyan)]/40 transition-colors"
              >
                <div className="text-[var(--color-accent-cyan)] font-medium mb-0.5 text-xs md:text-sm">{item.key}</div>
                <div className={`text-sm md:text-base ${item.isStatus ? "text-[#E5E7EB]" : "text-[#C084FC]"}`}>
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: profileData.length * 0.15 }}
            className="text-[#FB7185] text-lg md:text-xl mt-3"
          >
            {"};"}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
