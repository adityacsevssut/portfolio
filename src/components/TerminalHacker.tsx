"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const TerminalHacker = () => {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  const linesToType = [
    "welcome to my profile...",
    "loading developer data...",
    "identity: Aditya Nahak",
    `cout << "Welcome to my profile";`
  ];

  useEffect(() => {
    if (lineIndex >= linesToType.length) return;
    let currentText = "";
    const targetText = linesToType[lineIndex];
    let charIndex = 0;
    const interval = setInterval(() => {
      currentText += targetText[charIndex];
      setCurrentLine(currentText);
      charIndex++;
      if (charIndex >= targetText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTypedLines(prev => [...prev, targetText]);
          setCurrentLine("");
          setLineIndex(prev => prev + 1);
        }, 500);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [lineIndex]);

  const renderLine = (line: string) => {
    if (line.includes("cout <<")) {
      return (
        <>
          <span className="text-pink-400 drop-shadow-[0_0_6px_rgba(236,72,153,0.9)]">cout</span>
          <span className="text-blue-400"> &lt;&lt; </span>
          <span className="text-green-400 drop-shadow-[0_0_6px_rgba(74,222,128,0.9)]">&quot;Welcome to my profile&quot;</span>
          <span className="text-gray-500">;</span>
        </>
      );
    }
    if (line.includes("identity:")) {
      return (
        <>
          <span className="text-yellow-400">identity</span>
          <span className="text-gray-400">: </span>
          <span className="text-white font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">Aditya Nahak</span>
        </>
      );
    }
    if (line.includes("loading developer")) {
      return <span className="text-blue-400 drop-shadow-[0_0_6px_rgba(96,165,250,0.7)]">{line}</span>;
    }
    return <span className="text-red-400/80">{line}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] mb-12 z-20"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-xl border border-red-500/30 bg-[#030000] shadow-[0_0_20px_rgba(239,68,68,0.12)] overflow-hidden"
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(239,68,68,0.5) 2px, rgba(239,68,68,0.5) 4px)' }}
        />

        {/* Ambient glow pulse */}
        <motion.div
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-700 rounded-full blur-[100px] pointer-events-none z-0"
        />

        <div className="relative z-20 p-5 sm:p-6">
          {/* ── Terminal Header ── */}
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-red-900/60">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-red-400/90 tracking-[0.2em] drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]">
              whois_aditya.dev
            </span>
          </div>

          {/* ── Hacker Image ── */}
          <div className="relative w-full rounded-lg overflow-hidden mb-5">
            {/* Red tint overlay on the image for neon effect */}
            <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply z-10 pointer-events-none rounded-lg" />
            {/* Bottom gradient fade into the terminal body */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030000] to-transparent z-20 pointer-events-none" />
            {/* Corner glow accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500 z-20 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500 z-20 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500 z-20 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500 z-20 rounded-br-lg" />

            <Image
              src="/hacker.png"
              alt="Hacker"
              width={500}
              height={400}
              className="w-full object-cover rounded-lg"
              style={{ filter: 'contrast(1.1) saturate(0.85) brightness(0.9)' }}
              priority
            />
          </div>

          {/* ── Terminal typing lines ── */}
          <div className="font-mono text-xs sm:text-sm space-y-1.5 pl-1">
            {typedLines.map((line, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-red-900 select-none shrink-0">~$</span>
                <span>{renderLine(line)}</span>
              </div>
            ))}
            {lineIndex < linesToType.length && (
              <div className="flex items-center gap-3 text-red-400/80">
                <span className="text-red-900 select-none shrink-0">~$</span>
                <span>{currentLine}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="inline-block w-[7px] h-[14px] bg-red-500 shadow-[0_0_8px_#ef4444]"
                />
              </div>
            )}
            {lineIndex >= linesToType.length && (
              <div className="flex items-center gap-3 mt-1">
                <span className="text-red-900 select-none shrink-0">~$</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="inline-block w-[7px] h-[14px] bg-red-500 shadow-[0_0_8px_#ef4444]"
                />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
