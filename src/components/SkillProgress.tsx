"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type StackItem = {
  name: string;
  level?: number;
};

type StackCategory = {
  title: string;
  items: StackItem[];
  color: string;
};

const stacks: StackCategory[] = [
  {
    title: "Core Stack",
    items: [
      { name: "DSA", level: 60 },
      { name: "OOPS", level: 90 },
      { name: "DBMS", level: 80 },
      { name: "CN", level: 80 },
      { name: "Algorithm", level: 60 }
    ],
    color: "var(--color-primary-neon)"
  },
  {
    title: "Frontend Stack",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JS", level: 80 },
      { name: "React", level: 80 },
      { name: "Redux", level: 70 },
      { name: "TailwindCSS", level: 80 }
    ],
    color: "var(--color-accent-cyan)"
  },
  {
    title: "Backend Stack",
    items: [
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "Supabase", level: 60 },
      { name: "Cloudinary", level: 60 }
    ],
    color: "var(--color-accent-purple)"
  },
  {
    title: "Data Analysis Stack",
    items: [
      { name: "Python", level: 90 },
      { name: "NumPy", level: 95 },
      { name: "Pandas", level: 70 },
      { name: "Matplot & Seaborn", level: 73 },
      { name: "Excel", level: 78 },
      { name: "MySQL", level: 80 },
      { name: "Power BI", level: 50 }
    ],
    color: "#10B981"
  }
];

export function SkillProgress() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStack = () => setCurrentIndex((prev) => (prev + 1) % stacks.length);
  const prevStack = () => setCurrentIndex((prev) => (prev - 1 + stacks.length) % stacks.length);

  const currentStack = stacks[currentIndex];

  return (
    <section className="relative pt-4 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)]">
            <span className="text-[#F43F5E]">Stack</span><span className="text-[var(--color-text-secondary)]">&lt;</span>Skill<span className="text-[var(--color-text-secondary)]">&gt;</span> proficiency;
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Header with Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              onClick={prevStack} 
              className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary-neon)] transition-colors rounded-full hover:bg-[#262626]/50"
              suppressHydrationWarning
            >
              <ChevronLeft size={24} />
            </button>
            <h3 className="text-xl font-mono text-[var(--color-text-secondary)] w-56 text-center">
              {currentStack.title}.push()
            </h3>
            <button 
              onClick={nextStack} 
              className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary-neon)] transition-colors rounded-full hover:bg-[#262626]/50"
              suppressHydrationWarning
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-64"
            >
              {/* Stack Container Outline */}
              <div className="absolute inset-0 border-x-2 border-b-2 border-[#262626] rounded-b-lg -m-2 pointer-events-none"></div>
              
              <div className="flex flex-col-reverse gap-3">
                {currentStack.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15,
                      delay: index * 0.15 
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full h-20 md:h-24 px-6 bg-[var(--color-card-bg)] backdrop-blur-md border border-[#262626] rounded flex flex-col items-center justify-center text-center text-[var(--color-text-primary)] font-medium relative group overflow-hidden"
                    style={{ 
                      boxShadow: `0 4px 20px ${currentStack.color}15`,
                    }}
                  >
                    {item.level && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 opacity-[0.35] border-r-2"
                        style={{ backgroundColor: currentStack.color, borderColor: currentStack.color }}
                      />
                    )}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundColor: currentStack.color }}></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity" style={{ backgroundColor: currentStack.color }}></div>
                    <div className="absolute top-1 left-2 text-[10px] text-[var(--color-text-secondary)] font-mono z-10">
                      [{index}]
                    </div>
                    {item.level && (
                      <div className="absolute top-1 right-2 text-[10px] text-[var(--color-text-secondary)] font-mono z-10">
                        {item.level}%
                      </div>
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Stack bottom glow */}
              <div className="h-4 w-full mt-4 bg-gradient-to-t from-[#262626] to-transparent rounded-b-lg opacity-50"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
