"use client";

import { motion } from "framer-motion";

export function Achievements() {
  return (
    <section className="py-20 flex flex-col items-center overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold font-mono">
          <span className="text-[#EF4444]">MaxHeap</span>
          <span className="text-[#9CA3AF]">&lt;</span>
          <span className="text-white">Achievements</span>
          <span className="text-[#9CA3AF]">&gt;</span>
        </h2>
      </div>

      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* SVG Connections */}
        <svg className="absolute top-[60px] w-full h-[150px] pointer-events-none hidden md:block z-0">
          <motion.path
            d="M 50% 0 L 30% 100"
            stroke="var(--color-primary-neon)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M 50% 0 L 70% 100"
            stroke="var(--color-primary-neon)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </svg>

        {/* Root Node (Max Element) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
          className="relative z-10 bg-[var(--color-card-bg)] backdrop-blur-md border border-[var(--color-primary-neon)] p-6 rounded-xl shadow-[0_0_20px_rgba(239, 68, 68,0.3)] text-center w-64"
        >
          <div className="text-[var(--color-accent-cyan)] font-mono text-sm mb-2">index: 0</div>
          <h3 className="font-bold text-white mb-2">ICPC Regional Finalist</h3>
          <p className="text-xs text-[var(--color-text-secondary)]">Top 50 among 1000+ teams.</p>
        </motion.div>

        {/* Level 1 Nodes */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 mt-12 md:mt-24 w-full justify-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[var(--color-card-bg)] backdrop-blur-md border border-[#262626] hover:border-[var(--color-accent-cyan)] transition-colors p-6 rounded-xl w-64 mx-auto md:mx-0"
          >
            <div className="text-[var(--color-accent-cyan)] font-mono text-sm mb-2">index: 1</div>
            <h3 className="font-bold text-white mb-2">Hackathon Winner</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">1st place at Global Hack.</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-[var(--color-card-bg)] backdrop-blur-md border border-[#262626] hover:border-[var(--color-accent-cyan)] transition-colors p-6 rounded-xl w-64 mx-auto md:mx-0"
          >
            <div className="text-[var(--color-accent-cyan)] font-mono text-sm mb-2">index: 2</div>
            <h3 className="font-bold text-white mb-2">LeetCode Knight</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Max Rating: 2100+.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
