"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Core",
    nodes: ["C-Programming", "C++", "Java Script", "Python", "DSA"],
    color: "var(--color-primary-neon)"
  },
  {
    title: "Frontend",
    nodes: ["HTML5", "CSS 3", "React", "", "TailwindCSS"],
    color: "#3B82F6"
  },
  {
    title: "Backend",
    nodes: ["Node JS", "Express JS", "EJS", "Axios"],
    color: "var(--color-accent-purple)"
  },
  {
    title: "Databases",
    nodes: ["Relational", "Linear DB", "PostGreSQL", "MySQL", "MongoDB"],
    color: "#10B981"
  },
  {
    title: "Data & Design",
    nodes: ["NumPy", "Graphic Design", "MatplotLib", "Pandas", "Canva", "Adobe"],
    color: "#F59E0B"
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-[#050505] border-t border-b border-[#262626] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)]">
            Skills<span className="text-[var(--color-primary-neon)]">.BinaryTree()</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 font-mono max-w-2xl mx-auto">
            {"// Hierarchical mapping of technical expertise"}
          </p>
        </div>

        <div className="flex flex-col gap-24 max-w-5xl mx-auto items-center">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
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
                    {/* Root to Node 0 (L) */}
                    <motion.line x1="50%" y1="15%" x2="25%" y2="55%" stroke={category.color} strokeWidth="1.5" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />

                    {/* Root to Node 1 (R) */}
                    <motion.line x1="50%" y1="15%" x2="75%" y2="55%" stroke={category.color} strokeWidth="1.5" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} />

                    {/* Node 0 to Node 2 (L) */}
                    {category.nodes[2] && (
                      <motion.line x1="25%" y1="55%" x2={category.nodes[2] && category.nodes[3] ? "12.5%" : "25%"} y2="90%" stroke={category.color} strokeWidth="1.5" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                    )}

                    {/* Node 0 to Node 3 (R) */}
                    {category.nodes[3] && (
                      <motion.line x1="25%" y1="55%" x2={category.nodes[2] && category.nodes[3] ? "37.5%" : "25%"} y2="90%" stroke={category.color} strokeWidth="1.5" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                    )}

                    {/* Node 1 to Node 4 (L) */}
                    {category.nodes[4] && (
                      <motion.line x1="75%" y1="55%" x2={category.nodes[4] && category.nodes[5] ? "62.5%" : "75%"} y2="90%" stroke={category.color} strokeWidth="1.5" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                    )}

                    {/* Node 1 to Node 5 (R) */}
                    {category.nodes[5] && (
                      <motion.line x1="75%" y1="55%" x2={category.nodes[4] && category.nodes[5] ? "87.5%" : "75%"} y2="90%" stroke={category.color} strokeWidth="1.5" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} />
                    )}
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
          ))}
        </div>
      </div>
    </section>
  );
}

function RootNode({ title, color }: { title: string, color: string }) {
  return (
    <div
      className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#121212] border-2 shadow-lg flex flex-col items-center justify-center font-mono"
      style={{ borderColor: color, boxShadow: `0 0 20px ${color}40` }}
    >
      <span className="text-[var(--color-text-secondary)] text-[10px] md:text-xs mb-1">struct TreeNode</span>
      <span style={{ color }} className="text-sm md:text-lg font-bold text-center">{title}</span>
    </div>
  );
}

function SkillNode({ skill, color }: { skill: string, color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${color}40` }}
      className="flex flex-col items-center w-full md:w-auto bg-[var(--color-card-bg)] rounded-lg overflow-hidden group cursor-default transition-colors z-10 shadow-md"
      style={{ border: `2px solid ${color}` }}
    >
      <div className="flex-1 w-full px-1 md:px-6 py-3 md:py-4 font-medium text-[9px] sm:text-[10px] md:text-base text-[var(--color-text-primary)] group-hover:text-white transition-colors text-center whitespace-normal break-words leading-tight flex items-center justify-center min-h-[40px] md:min-h-[50px]">
        {skill}
      </div>
    </motion.div>
  );
}


