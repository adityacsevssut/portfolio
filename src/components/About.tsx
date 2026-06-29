"use client";

import { motion } from "framer-motion";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="pt-0 pb-10 md:pb-12 relative flex flex-col items-center justify-center px-4 md:px-6">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 leading-tight">
          <span className="flex items-center gap-2 md:gap-3">
            <span className="text-[var(--color-accent-purple)]">const</span>
            <span>aboutMe</span>
          </span>
          <span className="flex items-center gap-2 md:gap-3">
            <span className="text-[var(--color-accent-cyan)]">=</span>
            <span>require(<span className="text-green-400">"./profile"</span>);</span>
          </span>
        </h2>
        <div className="mt-4 text-[#9CA3AF] font-mono text-xs sm:text-sm md:text-base">
          {"//"} fetching developer profile data...
        </div>
      </motion.div>

      <div className="w-full max-w-3xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#262626] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden z-10">

        {/* VS Code Style Header */}
        <div className="bg-[#121212] flex items-center border-b border-[#262626] select-none">
          {/* Active Tab */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#050505] border-t-2 border-t-[var(--color-accent-purple)] border-r border-r-[#262626] min-w-[140px]">
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

        {/* Card Body - Now with the new code layout */}
        <div className="p-4 md:p-6 lg:p-8 font-mono text-sm sm:text-base md:text-lg overflow-x-auto relative bg-[#050505]">
          
          <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             className="leading-relaxed min-w-[500px]"
          >
            <motion.div variants={lineVariants} className="flex gap-2 mb-4">
               <span className="text-[#c678dd] font-bold">const</span>
               <span className="text-[#61afef]">developer</span>
               <span className="text-[#abb2bf]">=</span>
               <span className="text-[#abb2bf]">{"{"}</span>
            </motion.div>
            
            <div className="pl-6 md:pl-8 flex flex-col gap-1 sm:gap-2">
              <motion.div variants={lineVariants}>
                <span className="text-[#e06c75]">"role"</span><span className="text-[#abb2bf]">: </span>
                <span className="text-[#98c379]">"Computer Science Student"</span><span className="text-[#abb2bf]">,</span>
              </motion.div>
              
              <motion.div variants={lineVariants} className="mt-2">
                <span className="text-[#e06c75]">"expertise"</span><span className="text-[#abb2bf]">: [</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6 text-[#98c379]">
                "Full-Stack Development"<span className="text-[#abb2bf]">,</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6 text-[#98c379]">
                "DSA Problem Solving"<span className="text-[#abb2bf]">,</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6 text-[#98c379]">
                "UI Design"
              </motion.div>
              <motion.div variants={lineVariants}>
                <span className="text-[#abb2bf]">],</span>
              </motion.div>

              <motion.div variants={lineVariants} className="mt-2">
                <span className="text-[#e06c75]">"stack"</span><span className="text-[#abb2bf]">: [</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6">
                <span className="text-[#98c379]">"Node.js"</span><span className="text-[#abb2bf]">, </span>
                <span className="text-[#98c379]">"Express.js"</span><span className="text-[#abb2bf]">,</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6">
                <span className="text-[#98c379]">"MongoDB"</span><span className="text-[#abb2bf]">, </span>
                <span className="text-[#98c379]">"React"</span>
              </motion.div>
              <motion.div variants={lineVariants}>
                <span className="text-[#abb2bf]">],</span>
              </motion.div>

              <motion.div variants={lineVariants} className="mt-2">
                <span className="text-[#e06c75]">"Hobbies"</span><span className="text-[#abb2bf]">: [</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6">
                <span className="text-[#98c379]">"Video Game"</span><span className="text-[#abb2bf]">, </span>
                <span className="text-[#98c379]">"Coding"</span><span className="text-[#abb2bf]">,</span>
              </motion.div>
              <motion.div variants={lineVariants} className="pl-6">
                <span className="text-[#98c379]">"Editing"</span><span className="text-[#abb2bf]">, </span>
                <span className="text-[#98c379]">"Exploring New Ideas"</span>
              </motion.div>
              <motion.div variants={lineVariants}>
                <span className="text-[#abb2bf]">]</span>
              </motion.div>
            </div>
            
            <motion.div variants={lineVariants} className="mt-4 text-[#abb2bf]">
              {"};"}
            </motion.div>

            <motion.div variants={lineVariants} className="mt-8 text-[#5c6370] italic">
              {"// Passionate about building clean,"}
              <br />
              {"// responsive, real-world applications."}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
