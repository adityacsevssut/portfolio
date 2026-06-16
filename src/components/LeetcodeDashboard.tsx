"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Flame, Target } from "lucide-react";

export function LeetcodeDashboard() {
  // Real User Data
  const stats = {
    totalSolved: 148,
    totalQuestions: 3962,
    easy: { solved: 67, total: 950, color: "#00b8a3" },
    medium: { solved: 74, total: 2069, color: "#ffc01e" },
    hard: { solved: 7, total: 943, color: "#ff375f" },
    globalRank: "1,091,442",
    contestRating: "N/A",
    acceptanceRate: "70.2%",
    streak: 0,
  };

  return (
    <section className="py-20 bg-[#0A0A0A]/50 border-t border-[#262626] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-white flex items-center gap-3">
              <span className="text-[#FFA116]">{"{ }"}</span>
              LeetCode
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-2 font-mono text-sm">
              // DSA Problem Solving & Competitions
            </p>
          </div>
          <a 
            href="https://leetcode.com/u/adityacsevssut/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFA116]/10 text-[#FFA116] border border-[#FFA116]/30 hover:bg-[#FFA116]/20 transition-colors font-mono font-bold text-sm shadow-[0_0_15px_rgba(255,161,22,0.15)]"
          >
            View Profile <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Ring Chart Panel */}
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-6 shadow-xl flex flex-col sm:flex-row items-center gap-8 hover:border-[#333] transition-colors">
            
            {/* SVG Donut Chart */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Track */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#262626" strokeWidth="6" />
                
                {/* Hard (Red) */}
                <circle 
                  cx="50" cy="50" r="40" fill="transparent" stroke={stats.hard.color} strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - (stats.easy.solved + stats.medium.solved + stats.hard.solved) / stats.totalQuestions)}`}
                  className="transition-all duration-1000 ease-out"
                />
                
                {/* Medium (Yellow) */}
                <circle 
                  cx="50" cy="50" r="40" fill="transparent" stroke={stats.medium.color} strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - (stats.easy.solved + stats.medium.solved) / stats.totalQuestions)}`}
                  className="transition-all duration-1000 ease-out"
                />

                {/* Easy (Teal) */}
                <circle 
                  cx="50" cy="50" r="40" fill="transparent" stroke={stats.easy.color} strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - stats.easy.solved / stats.totalQuestions)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-white leading-none">{stats.totalSolved}</span>
                <span className="text-[10px] text-[var(--color-text-secondary)] font-mono mt-1 mb-1">/ {stats.totalQuestions}</span>
                <span className="text-xs text-[var(--color-text-secondary)] font-mono">Solved</span>
              </div>
            </div>

            {/* Problem Breakdown */}
            <div className="flex-1 w-full flex flex-col gap-3">
              {[
                { label: "Easy", solved: stats.easy.solved, total: stats.easy.total, color: stats.easy.color },
                { label: "Medium", solved: stats.medium.solved, total: stats.medium.total, color: stats.medium.color },
                { label: "Hard", solved: stats.hard.solved, total: stats.hard.total, color: stats.hard.color }
              ].map(level => (
                <div key={level.label} className="flex flex-col gap-1 w-full">
                  <div className="flex justify-between text-xs font-mono">
                    <span style={{ color: level.color }}>{level.label}</span>
                    <span className="text-white font-bold">{level.solved} <span className="text-[#666] font-normal">/ {level.total}</span></span>
                  </div>
                  <div className="w-full bg-[#262626] h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(level.solved / level.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: level.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Panel */}
          <div className="bg-[#121212] border border-[#262626] rounded-xl p-6 shadow-xl flex flex-col justify-center gap-6 lg:col-span-1 hover:border-[#333] transition-colors">
            <div className="bg-[#050505] border border-[#262626] rounded-lg p-6 flex flex-col items-center justify-center text-center flex-1">
              <Trophy size={24} className="text-[#FFA116] mb-3" />
              <span className="text-[var(--color-text-secondary)] text-sm font-mono mb-2">Global Rank</span>
              <span className="text-3xl font-bold text-white">{stats.globalRank}</span>
            </div>
            
            <div className="bg-[#050505] border border-[#262626] rounded-lg p-6 flex flex-col items-center justify-center text-center flex-1">
              <Target size={24} className="text-[#00b8a3] mb-3" />
              <span className="text-[var(--color-text-secondary)] text-sm font-mono mb-2">Acceptance Rate</span>
              <span className="text-3xl font-bold text-white">{stats.acceptanceRate}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
