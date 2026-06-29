"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "./ErrorBoundary";
import { Suspense } from "react";

const keywords = ["DFS()", "BFS()", "push()", "pop()", "O(log n)", "O(n)", "shift()"]; // Kept for reference but not rendered for performance

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(web developer|full-stack developer|DSA in C\+\+)/gi);
  return parts.map((part, i) => {
    if (/(web developer|full-stack developer|DSA in C\+\+)/i.test(part)) {
      return <span key={i} className="text-[var(--color-primary-neon)] font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

const HeroContent = () => {
  const [text, setText] = useState("");
  const [commandText, setCommandText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paragraphText, setParagraphText] = useState("");
  const fullText = "initializing developer profile...";
  const fullCommand = "cout << WhoIsAditya ?? << endl;";
  const fullParagraph = "Hi! Everyone I'm Aditya Nahak, a passionate web developer and full-stack developer. I love building beautiful and functional web applications, with a strong foundation in DSA in C++ to solve complex problems efficiently.";

  // Title Typewriter State
  const titles = ["MERN Developer", "DSA Enthusiast", "ML Enthusiast"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleText, setTitleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;
    if (isDeleting) typingSpeed = 50;

    const currentTitle = titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && titleText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && titleText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        const nextText = isDeleting
          ? currentTitle.substring(0, titleText.length - 1)
          : currentTitle.substring(0, titleText.length + 1);
        setTitleText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [titleText, isDeleting, titleIndex]);

  useEffect(() => {
    let i = 0;
    let cmdInterval: NodeJS.Timeout;
    let paraInterval: NodeJS.Timeout;

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);

        let k = 0;
        cmdInterval = setInterval(() => {
          if (k < fullCommand.length) {
            setCommandText(fullCommand.slice(0, k + 1));
            k++;
          } else {
            clearInterval(cmdInterval);
            setIsLoading(true);

            setTimeout(() => {
              setIsLoading(false);
              let j = 0;
              paraInterval = setInterval(() => {
                if (j < fullParagraph.length) {
                  setParagraphText(fullParagraph.slice(0, j + 1));
                  j++;
                } else {
                  clearInterval(paraInterval);
                }
              }, 20); // Fast typing for paragraph
            }, 2000);
          }
        }, 50); // Fast typing for command
      }
    }, 50); // Fast typing for initial text

    return () => {
      clearInterval(typingInterval);
      if (cmdInterval) clearInterval(cmdInterval);
      if (paraInterval) clearInterval(paraInterval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl flex flex-col items-center z-10 mt-2">
      {/* Root Node */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative px-8 md:px-12 py-4 bg-[var(--color-card-bg)] backdrop-blur-sm border border-[var(--color-primary-neon)] rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.35)] inline-flex justify-center w-fit"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-[var(--color-primary-neon)] min-h-[40px] sm:min-h-[50px] md:min-h-[70px] flex items-center justify-center text-center whitespace-nowrap">
          {titleText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 md:w-1.5 h-8 sm:h-10 md:h-12 bg-[var(--color-primary-neon)] ml-1 md:ml-2 align-middle rounded-sm"
          />
        </h1>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-wrap justify-center gap-4 mt-12 z-20 relative"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-md bg-[var(--color-primary-neon)] text-white font-medium hover:bg-opacity-80 transition-all shadow-[0_0_15px_rgba(239, 68, 68,0.5)] hover:shadow-[0_0_25px_rgba(239, 68, 68,0.8)] hover:-translate-y-1 hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-md bg-transparent border border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] font-medium hover:bg-[var(--color-accent-cyan)] hover:text-white transition-all shadow-[0_0_15px_rgba(249, 115, 22,0.2)] hover:shadow-[0_0_25px_rgba(249, 115, 22,0.4)] hover:-translate-y-1 hover:scale-105"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-md bg-[var(--color-card-bg)] border border-[var(--color-text-secondary)] text-[var(--color-text-primary)] font-medium hover:bg-opacity-80 transition-all hover:border-white hover:-translate-y-1 hover:scale-105"
        >
          Resume
        </a>
      </motion.div>

      {/* Typing Effect */}
      <div className="mt-12 mb-2 max-w-2xl w-[calc(100%-2rem)] mx-auto flex flex-col items-center text-center font-sans text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-[var(--color-text-primary)]">
        <div className="mb-8 flex flex-col items-center justify-center gap-2">
          <div className="h-6 md:h-8 text-white font-mono text-base md:text-lg flex items-center justify-center">
            {text}
            {text.length < fullText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-5 md:h-6 bg-[var(--color-primary-neon)] ml-1"
              />
            )}
          </div>

          {text.length === fullText.length && (
            <div className="h-6 md:h-8 text-[var(--color-primary-neon)] font-mono text-base md:text-lg flex items-center justify-center">
              {commandText}
              {commandText.length < fullCommand.length && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1.5 h-5 md:h-6 bg-[var(--color-primary-neon)] ml-1"
                />
              )}
            </div>
          )}

          {isLoading && (
            <div className="h-6 md:h-8 flex items-center justify-center gap-3 text-[var(--color-accent-cyan)] font-mono text-base md:text-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-t-[var(--color-primary-neon)] border-r-transparent border-b-[var(--color-primary-neon)] border-l-transparent rounded-full"
              />
              <span>loading...</span>
            </div>
          )}
        </div>

        {!isLoading && commandText.length === fullCommand.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[160px] max-w-[320px] md:max-w-[650px] lg:max-w-[800px] mx-auto text-gray-300 leading-relaxed tracking-wide md:bg-[var(--color-card-bg)]/30 md:backdrop-blur-md md:px-10 md:py-8 md:rounded-2xl md:border md:border-[#262626]/50 md:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            {renderHighlightedText(paragraphText)}
            {paragraphText.length < fullParagraph.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-7 md:h-8 lg:h-9 bg-[var(--color-primary-neon)] ml-1 align-middle"
              />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative flex flex-col items-center justify-center overflow-hidden pt-20 pb-0">
      {/* Floating Keywords removed for performance optimization */}

      <HeroContent />
    </section>
  );
}


