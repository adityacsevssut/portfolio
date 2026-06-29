"use client";

import { motion } from "framer-motion";
import React from "react";

const skillCategories = [
  {
    title: "Languages & Core",
    methodName: "languagesAndCoreStack",
    nodes: ["C-Programming", "C++", "Java Script", "Python", "DSA"],
    color: "var(--color-primary-neon)"
  },
  {
    title: "Frontend",
    methodName: "frontendStack",
    nodes: ["HTML5", "CSS 3", "React", "", "TailwindCSS"],
    color: "#3B82F6"
  },
  {
    title: "Backend",
    methodName: "backendStack",
    nodes: ["Node JS", "Express JS", "EJS", "Axios"],
    color: "var(--color-accent-purple)"
  },
  {
    title: "Databases",
    methodName: "databaseStack",
    nodes: ["Relational", "Linear DB", "PostGreSQL", "MySQL", "MongoDB"],
    color: "#10B981"
  },
  {
    title: "Data & Design",
    methodName: "dataAndDesignStack",
    nodes: ["NumPy", "Graphic Design", "MatplotLib", "Pandas", "Canva", "Adobe"],
    color: "#F59E0B"
  },
  {
    title: "Data Analytics",
    methodName: "dataAnalyticsStack",
    nodes: ["Python", "MySQL & Excel", "NumPy", "Pandas", "Matplot & Seaborn", "Power BI"],
    color: "#06B6D4"
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative pt-20 pb-10 border-t border-[#262626] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)]">
            Skills<span className="text-[var(--color-primary-neon)]">.BinaryTree()</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 font-mono max-w-2xl mx-auto">
            {"// Hierarchical mapping of technical expertise"}
          </p>
        </div>

        <div className="flex flex-col gap-10 md:gap-16 max-w-5xl mx-auto items-center">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="w-full relative flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="mb-4 text-center font-mono text-lg md:text-2xl font-bold tracking-wider"
              >
                <span className="text-gray-400">skills.</span>
                <span style={{ color: category.color }}>{category.methodName}</span>
                <span className="text-gray-400">();</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative w-full bg-[#050505] border border-[#262626] rounded-2xl p-6 md:p-12 shadow-2xl group transition-all duration-500 hover:border-[color:var(--category-color)] overflow-hidden"
                style={{
                  "--category-color": category.color,
                  boxShadow: `0 0 30px ${category.color}10`
                } as React.CSSProperties}
              >

                {/* Tree Container without horizontal scroll for mobile */}
                <div className="relative w-full py-2 md:py-4 z-10">
                  <div className="relative w-full h-[280px] md:h-[400px] mx-auto">

                    {/* SVG Lines */}
                    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ overflow: 'visible' }}>
                      <Edge x1="50%" y1="15%" x2="25%" y2="55%" color={category.color} delay={0} />
                      <Edge x1="50%" y1="15%" x2="75%" y2="55%" color={category.color} delay={0} />
                      
                      {category.nodes[2] && <Edge x1="25%" y1="55%" x2={category.nodes[2] && category.nodes[3] ? "12.5%" : "25%"} y2="90%" color={category.color} delay={0.3} />}
                      {category.nodes[3] && <Edge x1="25%" y1="55%" x2={category.nodes[2] && category.nodes[3] ? "37.5%" : "25%"} y2="90%" color={category.color} delay={0.3} />}
                      
                      {category.nodes[4] && <Edge x1="75%" y1="55%" x2={category.nodes[4] && category.nodes[5] ? "62.5%" : "75%"} y2="90%" color={category.color} delay={0.3} />}
                      {category.nodes[5] && <Edge x1="75%" y1="55%" x2={category.nodes[4] && category.nodes[5] ? "87.5%" : "75%"} y2="90%" color={category.color} delay={0.3} />}
                    </svg>

                    {/* Nodes Overlay (z-10) */}
                    <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <RootNode title={category.title} color={category.color} />
                    </div>

                    <div className="absolute top-[55%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <SkillNode skill={category.nodes[0]} color={category.color} />
                    </div>
                    <div className="absolute top-[55%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <SkillNode skill={category.nodes[1]} color={category.color} />
                    </div>

                    {/* Node 2 */}
                    {category.nodes[2] && (
                      <div className={`absolute top-[90%] ${category.nodes[3] ? 'left-[12.5%] w-[calc(25%-3px)] md:w-max' : 'left-[25%] w-max'} transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center`}>
                        <SkillNode skill={category.nodes[2]} color={category.color} />
                      </div>
                    )}
                    {/* Node 3 */}
                    {category.nodes[3] && (
                      <div className="absolute top-[90%] left-[37.5%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-[calc(25%-3px)] md:w-max flex justify-center">
                        <SkillNode skill={category.nodes[3]} color={category.color} />
                      </div>
                    )}

                    {/* Node 4 */}
                    {category.nodes[4] && (
                      <div className={`absolute top-[90%] ${category.nodes[5] ? 'left-[62.5%] w-[calc(25%-3px)] md:w-max' : 'left-[75%] w-max'} transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center`}>
                        <SkillNode skill={category.nodes[4]} color={category.color} />
                      </div>
                    )}
                    {/* Node 5 */}
                    {category.nodes[5] && (
                      <div className="absolute top-[90%] left-[87.5%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-[calc(25%-3px)] md:w-max flex justify-center">
                        <SkillNode skill={category.nodes[5]} color={category.color} />
                      </div>
                    )}

                  </div>
                </div>

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RootNode({ title, color }: { title: string, color: string }) {
  return (
    <div
      className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#121212] border-2 shadow-lg flex flex-col items-center justify-center font-mono whitespace-pre-wrap md:whitespace-normal"
      style={{ borderColor: color, boxShadow: `0 0 20px ${color}40` }}
    >
      <span className="text-[var(--color-text-secondary)] text-[10px] md:text-xs mb-1">struct TreeNode</span>
      <span style={{ color }} className="text-sm md:text-lg font-bold text-center leading-tight">
        {title.replace(" & ", " &\n")}
      </span>
    </div>
  );
}

const getSkillLogo = (skill: string) => {
  const logos: Record<string, string> = {
    "C-Programming": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "Java Script": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "DSA": "https://cdn.simpleicons.org/leetcode/FFA116",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS 3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Node JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express JS": "https://cdn.simpleicons.org/express/white",
    "EJS": "https://cdn.simpleicons.org/ejs/B4CA65",
    "Axios": "https://cdn.simpleicons.org/axios/5A29E4",
    "Relational": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    "Linear DB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    "PostGreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    "Graphic Design": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "MatplotLib": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    "Canva": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    "Adobe": "https://api.iconify.design/logos/adobe-icon.svg",
    "MySQL & Excel": "/excel.svg",
    "Matplot & Seaborn": "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg",
    "Power BI": "https://api.iconify.design/logos/microsoft-power-bi.svg"
  };
  return logos[skill];
};

function SkillNode({ skill, color }: { skill: string, color: string }) {
  const [imgError, setImgError] = React.useState(false);
  
  if (!skill) return null;
  const logoUrl = getSkillLogo(skill);

  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${color}40` }}
      title={skill}
      className="flex flex-col items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#121212] rounded-xl overflow-hidden group cursor-default transition-colors z-10 shadow-lg relative"
      style={{ border: `2px solid ${color}` }}
    >
      {logoUrl && !imgError ? (
        <img 
          src={logoUrl} 
          alt={skill} 
          onError={() => setImgError(true)}
          className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" 
        />
      ) : (
        <div className="flex-1 w-full px-1 py-3 font-medium text-[9px] sm:text-[10px] md:text-xs text-[var(--color-text-primary)] group-hover:text-white transition-colors text-center whitespace-normal break-words leading-tight flex items-center justify-center">
          {skill}
        </div>
      )}
    </motion.div>
  );
}

function Edge({ x1, y1, x2, y2, color, delay }: { x1: string, y1: string, x2: string, y2: string, color: string, delay: number }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
      <motion.line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={color} strokeWidth="3"
        strokeDasharray="8 12"
        initial={{ opacity: 1 }}
        animate={{ strokeDashoffset: [100, 0], opacity: 1 }}
        transition={{ duration: 1.5, delay, repeat: Infinity, ease: "linear" }}
        style={{ filter: `drop-shadow(0px 0px 5px ${color})` }}
      />
    </g>
  );
}
