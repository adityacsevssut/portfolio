"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const certificatesData = [
  {
    id: "internship-1",
    type: "Internship",
    tag: "Completion Of Internship",
    title: "Thrilled to share that I've successfully completed my Internship in Artificial Intelligence and Machine Learning from Skill Ladders in collaboration with Kshitij, IIT Kharagpur.",
    image: "/internship-cert.jpeg",
    link: "#",
    tags: ["AI & ML", "Skill Ladders"],
    footerText: "IIT Kharagpur × Kshitij 2026",
    nodeName: "Skill Ladders AI/ML"
  },
  {
    id: "course-1",
    type: "Course Completion",
    tag: "Completion Of Course AIML",
    title: "Excited to share that I've successfully completed the Training in Artificial Intelligence and Machine Learning offered by Skill Ladders.",
    image: "/course-cert.jpeg",
    link: "#",
    tags: ["AI & ML", "Skill Ladders"],
    footerText: "IIT Kharagpur × Kshitij 2026",
    nodeName: "Skill Ladders AIML"
  },
  {
    id: "course-2",
    type: "Course Completion",
    tag: "Completion Of Course DSA",
    title: "Excited to share that I've successfully completed the Program in Data Structures and Algorithms offered by Apna College.",
    image: "/Dsa-Cert.png",
    link: "#",
    tags: ["DSA", "Apna College"],
    footerText: "Apna College x DSA 2025",
    nodeName: "Apna College DSA"
  },
  {
    id: "course-3",
    type: "Course Completion",
    tag: "Completion Of Course Python",
    title: "Excited to share that I've successfully completed the Program in Python offered by Great Learning.",
    image: "/Py-Cert.jpg",
    link: "#",
    tags: ["Python", "Great Learning"],
    footerText: "Great Learning x Python 2025",
    nodeName: "Great Learning Python"
  }
];

// Group them for the Trie
const trieData = {
  name: "Certifications",
  children: [
    {
      name: "Internship",
      color: "var(--color-primary-neon)",
      children: certificatesData.filter(c => c.type === "Internship").map(c => ({
        ...c,
        name: c.nodeName,
        details: c.tag
      }))
    },
    {
      name: "Course Completion",
      color: "var(--color-accent-cyan)",
      children: certificatesData.filter(c => c.type === "Course Completion").map(c => ({
        ...c,
        name: c.nodeName,
        details: c.tag
      }))
    }
  ]
};

export function Certifications() {
  const [activeCertId, setActiveCertId] = useState<string | null>(certificatesData[0].id);

  const activeCert = activeCertId ? certificatesData.find(c => c.id === activeCertId) : null;

  return (
    <section id="certifications" className="py-20 bg-[#0A0A0A]/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-[1.3rem] xs:text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)] break-all sm:break-normal">
            <span className="text-[#F43F5E]">Trie</span><span className="text-[var(--color-text-secondary)]">.insert(</span>Certifications<span className="text-[var(--color-text-secondary)]">)</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: Trie Browser */}
          <div className="w-full lg:w-1/3 bg-[var(--color-card-bg)] backdrop-blur-sm border border-[#262626] p-6 sm:p-8 rounded-xl h-fit overflow-x-auto">
            <TrieNode 
              node={trieData} 
              isRoot={true} 
              activeId={activeCertId} 
              onSelect={setActiveCertId} 
            />
          </div>

          {/* Right Side: Certificate Viewer */}
          <AnimatePresence mode="wait">
            {activeCert && (
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                exit={{ opacity: 0, width: 0 }}
                className="w-full lg:w-2/3 bg-[var(--color-card-bg)] backdrop-blur-sm border border-[#262626] rounded-xl overflow-hidden shadow-2xl relative min-h-[500px]"
              >
                <motion.div
                  key={activeCert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="w-full h-[300px] sm:h-[400px] bg-[#121212] relative border-b border-[#262626] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
                    <img 
                      src={activeCert.image} 
                      alt={activeCert.title}
                      className="max-w-full max-h-full object-contain relative z-10 rounded shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1a1a1a/E5E7EB?text=Certificate+Image';
                      }}
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1 bg-[#050505]/80 backdrop-blur-md border border-[var(--color-accent-purple)] rounded-full text-[var(--color-accent-purple)] text-xs font-mono font-bold shadow-sm">
                        {activeCert.type}
                      </span>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 sm:p-8 flex flex-col gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      "{activeCert.title}"
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activeCert.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-[#1A1A1A] border border-[#333] rounded text-[var(--color-text-secondary)] text-sm font-mono hover:text-[var(--color-accent-cyan)] transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4">
                      <span className="font-mono text-sm text-[var(--color-text-secondary)] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary-neon)] animate-pulse"></span>
                        {activeCert.footerText}
                      </span>
                      <a 
                        href={activeCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-[var(--color-accent-cyan)] hover:text-white transition-colors"
                      >
                        View Credential <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

function TrieNode({ 
  node, 
  isRoot = false,
  activeId,
  onSelect
}: { 
  node: any; 
  isRoot?: boolean;
  activeId: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const hasChildren = node.children && node.children.length > 0;
  const isSelectable = !hasChildren && node.id;
  const isActive = isSelectable && activeId === node.id;

  return (
    <div className={cn("flex flex-col", !isRoot && "ml-4 sm:ml-6 mt-3")}>
      <div 
        className={cn(
          "flex items-center gap-2 group relative py-1",
          hasChildren ? "cursor-pointer" : (isSelectable ? "cursor-pointer" : "cursor-default")
        )}
        onClick={() => {
          if (hasChildren) {
            setIsOpen(!isOpen);
            if (isOpen) onSelect(null);
          }
          else if (isSelectable) onSelect(node.id);
        }}
      >
        {/* Connection line for children */}
        {!isRoot && (
          <div className="absolute w-4 sm:w-6 h-px bg-[#333] -ml-4 sm:-ml-6 mt-0 group-hover:bg-[var(--color-text-secondary)] transition-colors"></div>
        )}
        {!isRoot && (
          <div className="absolute w-px h-full bg-[#333] -ml-4 sm:-ml-6 -mt-3 group-hover:bg-[var(--color-text-secondary)] transition-colors" style={{ height: 'calc(100% + 0.75rem)' }}></div>
        )}

        {hasChildren ? (
          isOpen ? <ChevronDown size={16} className="text-[var(--color-text-secondary)] min-w-[16px]" /> : <ChevronRight size={16} className="text-[var(--color-text-secondary)] min-w-[16px]" />
        ) : (
          <span className={cn(
            "w-4 flex items-center justify-center font-mono text-xs min-w-[16px]",
            isActive ? "text-[var(--color-primary-neon)] font-bold" : "text-[var(--color-accent-cyan)]"
          )}>
            {isActive ? ">" : "·"}
          </span>
        )}
        
        <div 
          className={cn(
            "font-mono text-sm sm:text-base transition-colors relative flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 w-full",
            isRoot ? "text-xl sm:text-2xl font-bold text-white mb-2" : "text-[var(--color-text-primary)]",
            hasChildren && !isRoot ? "hover:text-[var(--color-accent-purple)] font-semibold" : "",
            isActive ? "text-white bg-[#262626] px-2 py-0.5 rounded -ml-2" : (isSelectable ? "hover:text-white" : "")
          )}
          style={node.color && !isActive ? { color: node.color } : {}}
        >
          <span className="whitespace-nowrap truncate max-w-[200px] sm:max-w-none">{node.name}</span>
          {node.details && (
            <span className={cn(
              "text-xs font-sans truncate",
              isActive ? "text-[#A3A3A3]" : "text-[var(--color-text-secondary)]"
            )}>
              // {node.details}
            </span>
          )}
        </div>
      </div>

      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden relative pl-1 sm:pl-2"
          >
            {node.children.map((child: any, i: number) => (
              <TrieNode 
                key={child.name + i} 
                node={child} 
                activeId={activeId}
                onSelect={onSelect}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
