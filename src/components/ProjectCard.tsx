"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      {/* Clean Showcase Screenshot Frame */}
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live demo`}
        className="relative block w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#080808] border border-white/[0.09] group-hover:border-[#EF4444]/55 shadow-[0_12px_32px_rgba(0,0,0,0.75)] group-hover:shadow-[0_16px_40px_rgba(255,0,51,0.16)] transition-all duration-300"
      >
        {/* Top crimson highlight line on hover */}
        <span className="absolute top-0 inset-x-6 h-px z-20 bg-gradient-to-r from-transparent via-[#EF4444]/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0C0C0C] font-mono text-sm text-[#9CA3AF]">
            {project.title}
          </div>
        )}

        {/* Subtle bottom edge vignette so screenshots blend into dark grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
      </a>

      {/* Clean Details Below Image (Website Dark/Crimson Theme) */}
      <div className="mt-3.5 px-1 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#EF4444] transition-colors duration-200 leading-snug"
          >
            {project.title}
          </a>

          <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              title="Source Code"
              className="w-8 h-8 rounded-lg bg-[#0B0B0B] border border-white/[0.08] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-200"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              title="Live Demo"
              className="h-8 px-2.5 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 flex items-center gap-1 text-xs font-mono font-medium text-[#EF4444] hover:bg-[#EF4444] hover:text-white hover:border-[#EF4444] transition-all duration-200"
            >
              <span>Live</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <p className="text-sm text-[#9CA3AF] mt-1 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A0A0A] border border-white/[0.08] font-mono text-[11px] text-[#D1D5DB]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]/85" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
