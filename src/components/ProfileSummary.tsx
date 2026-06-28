"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const lines = [
  "> system boot - aditya.dev os v1.0.0",
  "> loading kernel modules...",
  "> mounting filesystem [OK]",
  "> initializing developer entity...",
  "> status: 200 OK",
  "> ",
  "> // PROFILE LOADED",
  "> passion: Building scalable systems & intuitive UIs.",
  "> current_status: Open to new opportunities.",
  "> type 'help' for available commands."
];

const getLineColor = (line: string) => {
  if (line.includes("[OK]") || line.includes("200 OK") || line.includes("current_status")) return "text-green-400";
  if (line.includes("boot") || line.includes("loading") || line.includes("initializing") || line.includes("passion") || line.includes("help")) return "text-yellow-400";
  return "text-[#EF4444]";
};

export function ProfileSummary() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    if (currentLineIndex < lines.length) {
      const line = lines[currentLineIndex];
      
      // Some lines appear instantly, others type out
      if (line.startsWith("> //") || line === "> ") {
        setDisplayedLines(prev => [...prev, line]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      } else {
        const timeout = setTimeout(() => {
          if (currentCharIndex < line.length) {
            setDisplayedLines(prev => {
              const newLines = [...prev];
              if (newLines[currentLineIndex] === undefined) {
                newLines[currentLineIndex] = "";
              }
              newLines[currentLineIndex] = line.substring(0, currentCharIndex + 1);
              return newLines;
            });
            setCurrentCharIndex(prev => prev + 1);
          } else {
            setCurrentLineIndex(prev => prev + 1);
            setCurrentCharIndex(0);
          }
        }, 30); // typing speed
        
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, currentCharIndex, isInView]);

  return (
    <section className="pb-20 pt-4 relative flex justify-center px-6">
      <div 
        ref={ref}
        className="w-full max-w-3xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#262626] rounded-lg overflow-hidden shadow-2xl relative"
      >
        {/* Terminal Header */}
        <div className="bg-[#121212] px-4 py-2 flex items-center border-b border-[#262626]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-[#9CA3AF] text-xs font-mono">user@aditya.dev: ~</div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base text-[var(--color-accent-cyan)] min-h-[300px] relative">
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-20"></div>
          
          <div className="space-y-2 relative z-20 text-[#E5E7EB]">
            {displayedLines.map((line, i) => (
              <div key={i} className={getLineColor(line)}>
                {line}
              </div>
            ))}
            
            {/* Blinking cursor */}
            {currentLineIndex >= lines.length && (
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2.5 h-5 bg-[var(--color-text-primary)] align-middle ml-1"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
