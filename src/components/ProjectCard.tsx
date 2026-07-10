"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

interface Project {
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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="card-container" 
      style={{ '--project-color': project.color } as React.CSSProperties}
    >
      <div className={`card-content ${isFlipped ? 'flipped' : ''}`}>
        
        {/* Front Face (Initial View) */}
        <div className="card-front" onClick={() => setIsFlipped(true)} style={{ cursor: 'pointer' }}>
          <div className="card-front-content">
            <div className="card-header">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className="click-indicator">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
              <span>Click to flip</span>
            </div>
          </div>
        </div>

        {/* Back Face (Revealed on Click) */}
        <div className="card-back">
          <img 
            src={project.image} 
            alt={project.title} 
            className="card-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/121212/E5E7EB?text=Project+Image';
            }}
          />
          <div 
            className="card-back-content" 
            onClick={() => setIsFlipped(false)}
          >
            {/* Links moved outside 3D context to fix hit testing */}
          </div>
        </div>

      </div>

      {/* RENDER LINKS OUTSIDE THE 3D CONTEXT! */}
      {isFlipped && (
        <div 
          className="absolute inset-0 flex flex-col justify-center items-center gap-[20px] z-[100]" 
          onClick={() => setIsFlipped(false)}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn github"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={18} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn demo"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: `0 0 15px ${project.color}60` }}
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      )}
    </div>
  );
}
