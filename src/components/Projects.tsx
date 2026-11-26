"use client";

import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Spotify Web Page",
    image: "/spotify.jpg",
    description: "A clone of the Spotify web interface.",
    tech: ["HTML5", "CSS", "JS"],
    demo: "https://adorable-palmier-999ef2.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#1DB954" // Spotify Green
  },
  {
    id: 2,
    title: "Animated Portfolio",
    image: "/portfolio pic.png",
    description: "Animated Portfolio Website Using Figma.",
    tech: ["HTML", "CSS", "AOS"],
    demo: "https://voluble-griffin-77d1a9.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#8b5cf6" // Purple
  },
  {
    id: 3,
    title: "Swiggy Landing Page",
    image: "/Swiggy.jpg",
    description: "Food delivery landing page design.",
    tech: ["HTML5", "CSS"],
    demo: "https://verdant-concha-e07365.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#f97316" // Swiggy Orange
  },
  {
    id: 4,
    title: "Amazon Clone",
    image: "/amazon.png",
    description: "E-commerce interface replica.",
    tech: ["HTML5", "CSS"],
    demo: "https://guileless-profiterole-fcff80.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#eab308" // Amazon Yellow
  },
  {
    id: 5,
    title: "Simon Says Game",
    image: "/simonsays.jpeg",
    description: "Classic memory game logic.",
    tech: ["JavaScript", "DOM"],
    demo: "https://endearing-mousse-45c3dd.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#ef4444" // Red
  },
  {
    id: 6,
    title: "Guess The Number",
    image: "/guess.jpg",
    description: "Logic based number guessing game.",
    tech: ["JS", "Logic"],
    demo: "https://amazing-bombolone-d15c64.netlify.app/",
    github: "https://github.com/adityacsevssut",
    color: "#06b6d4" // Cyan
  },
  {
    id: 7,
    title: "Jan-Mitram",
    image: "/Gemini_Generated_Image_6az4r76az4r76az4.png",
    description: "Public issue tracking system (SIH 2025).",
    tech: ["MERN", "React", "Node"],
    demo: "https://prm-ninja.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "#10b981" // Emerald
  },
  {
    id: 8,
    title: "Myntra Clone UI",
    image: "/myntra.jpg",
    description: "A clone Interface Of Myntra Web Application.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://myntra-ui-rose.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "#d946ef" // Fuchsia
  },
  {
    id: 9,
    title: "To-Do Manager",
    image: "/todo.png",
    description: "Organise Your Day With To Do Manager.",
    tech: ["React", "LocalStorage"],
    demo: "https://to-do-web-amber.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "#3b82f6" // Blue
  },
  {
    id: 10,
    title: "Dynamic Calculator",
    image: "/calulator.jpg",
    description: "A Simple calculator Using Css Java Script And Html.",
    tech: ["Html", "CSS", "Java SCript"],
    demo: "https://calculator-three-chi-76.vercel.app/",
    github: "https://github.com/adityacsevssut",
    color: "#84cc16" // Lime
  },
  {
    id: 11,
    title: "CourseCraft",
    description: "A comprehensive full-stack LMS platform.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "Clerk"],
    image: "/photo.jpg",
    demo: "https://coursecraft-fs.onrender.com/",
    github: "https://github.com/adityacsevssut",
    color: "#f43f5e" // Rose
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative min-h-[calc(100vh-12rem)] pt-10 md:pt-14 pb-16 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-white flex flex-wrap justify-center items-center gap-x-3 md:gap-x-4">
            <span className="text-[var(--color-accent-cyan)] opacity-70">{"</>"}</span>
            <span><span className="text-[var(--color-accent-purple)]">const</span> myProjects</span>
            <span><span className="text-[var(--color-primary-neon)]">=</span> <span className="text-[var(--color-text-secondary)]">[]</span></span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 font-mono max-w-2xl mx-auto">
            {"// Click on a project card to flip and view links"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
