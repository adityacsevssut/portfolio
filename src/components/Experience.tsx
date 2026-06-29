"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const experience = [
  {
    role: "MERN Stack Intern",
    company: "Alfido Tech",
    date: "May 2026 - Jun 2026",
    description: "Developed and maintained full-stack web applications utilizing MongoDB, Express.js, React, and Node.js. Built responsive, user-centric interfaces and integrated robust RESTful APIs to ensure seamless data flow.",
  },
  {
    role: "Backend Intern",
    company: "WheelStrix",
    date: "Jun 2026 - Present (Aug 2026)",
    description: "Engineering scalable backend microservices and optimizing complex database queries to significantly reduce API latency. Implementing secure authentication and authorization flows to protect sensitive user data.",
  },
  {
    role: "ML Intern",
    company: "Skill Ladder",
    date: "Nov 2025 - Jan 2026",
    description: "Assisted in developing predictive machine learning models and conducted in-depth exploratory data analysis. Utilized Python, Pandas, and NumPy to preprocess large datasets and visualize actionable trends.",
  }
];

export function Experience() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-[var(--color-text-primary)] leading-tight">
            <span className="text-[var(--color-primary-neon)]">Queue</span>
            <wbr />.enqueue(
            <wbr />Experience
            <wbr />);
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical Queue Track */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#262626] to-transparent transform md:-translate-x-1/2" />

          <div className="flex flex-col gap-8 relative z-10">
            {experience.map((item, index) => (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-center group relative"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex flex-1 justify-end pr-8 text-right">
                  <div className="text-[var(--color-text-secondary)] font-mono text-sm mt-2">
                    {item.date}
                  </div>
                </div>

                <div className="absolute left-4 top-8 md:top-auto md:relative md:left-0 w-4 h-4 rounded-full bg-[var(--color-card-bg)] border-2 border-[var(--color-accent-purple)] shadow-[0_0_20px_rgba(139,92,246,0.5)] z-20 group-hover:scale-150 transition-transform transform md:-translate-x-1/2 ml-[-7px] md:ml-0" />

                <div className="flex-1 pl-10 md:pl-8 pr-5 md:pr-[30px] w-full">
                  <div className="bg-[var(--color-card-bg)] backdrop-blur-md border border-[#262626] p-6 rounded-lg hover:border-[var(--color-accent-purple)] transition-colors shadow-lg group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <div className="text-[var(--color-accent-cyan)] font-mono text-sm mb-4">{item.company}</div>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Mobile Date */}
                <div className="md:hidden w-full pl-10 mt-2 text-[var(--color-text-secondary)] font-mono text-xs">
                  {item.date}
                </div>
              </motion.div>
            ))}
            
            {/* Dequeue Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: experience.length * 0.2 + 0.5 }}
              className="flex flex-col items-start md:items-center mt-4 text-[var(--color-text-secondary)]"
            >
              <div className="ml-[5px] md:ml-0">
                <ArrowDown className="text-[var(--color-primary-neon)]" size={24} />
              </div>
              <span className="font-mono text-xs mt-2 pl-10 md:pl-0">dequeue() next opportunity...</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
