"use client";

import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Code, BookOpen, Gamepad2, Coffee, User } from "lucide-react";

const HOBBIES = [
  { id: "coding", name: "Coding", icon: Code, color: "var(--color-primary-neon)", initialPos: { x: -150, y: -100 } },
  { id: "reading", name: "Reading", icon: BookOpen, color: "var(--color-accent-cyan)", initialPos: { x: 150, y: -100 } },
  { id: "gaming", name: "Gaming", icon: Gamepad2, color: "var(--color-accent-purple)", initialPos: { x: -150, y: 100 } },
  { id: "coffee", name: "Coffee", icon: Coffee, color: "#F59E0B", initialPos: { x: 150, y: 100 } },
];

export function Hobbies() {
  
  // Create motion values for each hobby to track coordinates for the dynamic SVG lines
  const motionValues = HOBBIES.map(h => {
    // Hook rules: useMotionValue can be called inside a map because HOBBIES is a static array
    return {
      ...h,
      mvX: useMotionValue(h.initialPos.x),
      mvY: useMotionValue(h.initialPos.y),
    };
  });

  // Adjust initial positions on mobile devices
  useEffect(() => {
    if (window.innerWidth < 768) {
       motionValues[0].mvX.set(-80); motionValues[0].mvY.set(-120);
       motionValues[1].mvX.set(80);  motionValues[1].mvY.set(-120);
       motionValues[2].mvX.set(-80); motionValues[2].mvY.set(120);
       motionValues[3].mvX.set(80);  motionValues[3].mvY.set(120);
    }
  }, []);

  return (
    <section className="pt-20 pb-10 flex flex-col items-center bg-[#050505] overflow-hidden">
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)]">
          <span className="text-[#F43F5E]">Graph</span><span className="text-[var(--color-text-secondary)]">&lt;</span>Hobbies<span className="text-[var(--color-text-secondary)]">&gt;</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] mt-4 font-mono text-sm animate-pulse">
          // Drag the nodes around
        </p>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
        
        {/* Dynamic SVG Lines connecting the nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: "visible" }}>
          {/* Shift SVG coordinate system to exactly center */}
          <g style={{ transform: "translate(50%, 50%)" }}>
            {motionValues.map((hobby) => (
              <motion.line
                key={`line-${hobby.id}`}
                x1={0}
                y1={0}
                x2={hobby.mvX}
                y2={hobby.mvY}
                stroke={hobby.color}
                strokeWidth="2"
                strokeOpacity="0.4"
                strokeDasharray="4 4"
              />
            ))}
          </g>
        </svg>

        {/* Center Node (ME) */}
        <div 
          className="absolute z-10 w-20 h-20 bg-[#121212] backdrop-blur-xl border-2 border-[#262626] rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)] text-white font-mono font-bold"
        >
          <User size={24} className="mb-1 text-[var(--color-text-secondary)]" />
          <span className="text-xs">ME</span>
        </div>

        {/* Draggable Hobby Nodes */}
        {motionValues.map((hobby) => (
          <motion.div
            key={hobby.id}
            drag
            dragMomentum={false}
            style={{ x: hobby.mvX, y: hobby.mvY }}
            whileHover={{ scale: 1.1, zIndex: 30 }}
            whileDrag={{ scale: 1.1, zIndex: 30 }}
            className="absolute z-20 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
            initial={false}
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0A0A0A] border-2 transition-colors duration-300 shadow-lg"
              style={{ 
                borderColor: hobby.color,
                color: hobby.color,
                boxShadow: `0 0 15px ${hobby.color}40`
              }}
            >
              <hobby.icon size={24} />
            </div>
            <span 
              className="mt-3 font-mono text-sm font-bold bg-[#050505] px-2 py-1 rounded border border-[#262626]"
              style={{ color: hobby.color }}
            >
              {hobby.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
