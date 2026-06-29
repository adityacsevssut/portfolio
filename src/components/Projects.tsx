"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Spotify Web Page",
    image: "/spotify.jpg",
    description: "A clone of the Spotify web interface.",
    tech: ["HTML5", "CSS", "JS"],
    demo: "https://adorable-palmier-999ef2.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-primary-neon)"
  },
  {
    id: 2,
    title: "Animated Portfolio",
    image: "/portfolio pic.png",
    description: "Animated Portfolio Website Using Figma.",
    tech: ["HTML", "CSS", "AOS"],
    demo: "https://voluble-griffin-77d1a9.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-accent-cyan)"
  },
  {
    id: 3,
    title: "Swiggy Landing Page",
    image: "/Swiggy.jpg",
    description: "Food delivery landing page design.",
    tech: ["HTML5", "CSS"],
    demo: "https://verdant-concha-e07365.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-accent-purple)"
  },
  {
    id: 4,
    title: "Amazon Clone",
    image: "/amazon.png",
    description: "E-commerce interface replica.",
    tech: ["HTML5", "CSS"],
    demo: "https://guileless-profiterole-fcff80.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#10B981"
  },
  {
    id: 5,
    title: "Simon Says Game",
    image: "/simonsays.jpeg",
    description: "Classic memory game logic.",
    tech: ["JavaScript", "DOM"],
    demo: "https://endearing-mousse-45c3dd.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#F59E0B"
  },
  {
    id: 6,
    title: "Guess The Number",
    image: "/guess.jpg",
    description: "Logic based number guessing game.",
    tech: ["JS", "Logic"],
    demo: "https://amazing-bombolone-d15c64.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-primary-neon)"
  },
  {
    id: 7,
    title: "Jan-Mitram",
    image: "/Gemini_Generated_Image_6az4r76az4r76az4.png",
    description: "Public issue tracking system (SIH 2025).",
    tech: ["MERN", "React", "Node"],
    demo: "https://prm-ninja.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-accent-cyan)"
  },
  {
    id: 8,
    title: "Myntra Clone UI",
    image: "/myntra.jpg",
    description: "A clone Interface Of Myntra Web Application.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://myntra-ui-rose.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-accent-purple)"
  },
  {
    id: 9,
    title: "To-Do Manager",
    image: "/todo.png",
    description: "Organise Your Day With To Do Manager.",
    tech: ["React", "LocalStorage"],
    demo: "https://to-do-web-amber.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "#10B981"
  },
  {
    id: 10,
    title: "Dynamic Calculator",
    image: "/calulator.jpg",
    description: "A Simple calculator Using Css Java Script And Html.",
    tech: ["Html", "CSS", "Java SCript"],
    demo: "https://calculator-three-chi-76.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "#F59E0B"
  },
  {
    id: 11,
    title: "CourseCraft",
    description: "A comprehensive full-stack LMS platform.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Clerk"],
    image: "/photo.jpg",
    demo: "https://coursecraft-fs.onrender.com/",
    github: "https://github.com/adityacsevssut",
    color: "var(--color-primary-neon)"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const current = projects[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="projects" className="relative min-h-[90vh] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-white flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4">
            <span className="text-[var(--color-accent-cyan)] opacity-70">{"</>"}</span>
            <span><span className="text-[var(--color-accent-purple)]">const</span> myProjects</span>
            <span><span className="text-[var(--color-primary-neon)]">=</span> <span className="text-[var(--color-text-secondary)]">[]</span></span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 font-mono max-w-2xl mx-auto">
            {"// Navigate horizontally through the portfolio"}
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center">

          {/* Navigation Buttons (Desktop) */}
          <button
            suppressHydrationWarning
            onClick={prevProject}
            className="hidden md:flex absolute -left-6 lg:-left-12 z-20 p-4 bg-[#121212] hover:bg-[#262626] border border-[#262626] rounded-full text-white transition-all hover:scale-110 shadow-lg"
            aria-label="Previous Project"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            suppressHydrationWarning
            onClick={nextProject}
            className="hidden md:flex absolute -right-6 lg:-right-12 z-20 p-4 bg-[#121212] hover:bg-[#262626] border border-[#262626] rounded-full text-white transition-all hover:scale-110 shadow-lg"
            aria-label="Next Project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div className="w-full h-[380px] sm:h-[400px] md:h-[360px] overflow-visible relative rounded-2xl group">

            {/* Background Glow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`glow-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 blur-[100px] rounded-full z-0"
                style={{ backgroundColor: projects[currentIndex].color }}
              />
            </AnimatePresence>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 }
                }}
                className="absolute inset-0 flex flex-col md:flex-row bg-[#121212]/80 backdrop-blur-xl border border-[#333] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)] z-10"
                style={{ borderTop: `4px solid ${current.color}` }}
              >

                {/* Left Side: Image Content */}
                <div className="w-full md:w-1/2 h-36 sm:h-40 md:h-full relative border-b md:border-b-0 md:border-r border-[#333] overflow-hidden flex-shrink-0 group-hover:scale-[1.02] transition-transform duration-500 origin-left">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10 md:bg-gradient-to-r md:from-transparent md:to-[#121212]/80 pointer-events-none" />
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/121212/E5E7EB?text=Project+Image';
                    }}
                  />
                  {/* Overlay counter */}
                  <div className="absolute top-4 left-4 z-20 bg-[#050505]/80 backdrop-blur-md border border-[#262626] px-3 py-1 rounded-full font-mono text-xs text-[var(--color-text-secondary)]">
                    {currentIndex + 1} / {projects.length}
                  </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-start md:justify-center gap-4 overflow-y-auto custom-scrollbar bg-gradient-to-br from-transparent to-[#050505]/40">
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3" style={{ color: current.color, textShadow: `0 0 20px ${current.color}40` }}>
                      {current.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-sans">
                      {current.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {current.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-[#0A0A0A] border border-[#262626] rounded text-[#E5E7EB] font-mono text-xs sm:text-sm shadow-sm transition-colors hover:border-[var(--color-accent-cyan)]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white transition-all bg-[#1A1A1A] hover:bg-[#262626] border border-[#333] hover:border-[var(--color-accent-cyan)] rounded-lg px-5 py-2.5 shadow-lg hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] font-mono text-sm sm:text-base font-bold"
                    >
                      <FaGithub size={18} />
                      Code
                    </a>
                    <a
                      href={current.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#050505] transition-all rounded-lg px-5 py-2.5 shadow-lg hover:opacity-90 font-mono text-sm sm:text-base font-bold"
                      style={{ backgroundColor: current.color, boxShadow: `0 0 15px ${current.color}60` }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Buttons (Mobile) */}
          <div className="flex md:hidden justify-center items-center gap-6 mt-8 w-full z-20">
            <button
              suppressHydrationWarning
              onClick={prevProject}
              className="p-4 bg-[#121212] hover:bg-[#262626] border border-[#262626] rounded-full text-white transition-all shadow-lg active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="font-mono text-sm text-[var(--color-text-secondary)]">
              Slide to explore
            </div>
            <button
              suppressHydrationWarning
              onClick={nextProject}
              className="p-4 bg-[#121212] hover:bg-[#262626] border border-[#262626] rounded-full text-white transition-all shadow-lg active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
