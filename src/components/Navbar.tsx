"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-mono font-bold text-[#E5E7EB]"
        >
          <span className="text-[#EF4444]">{"<"}</span>
          Aditya.Dev
          <span className="text-[#EF4444]">{"/>"}</span>
        </motion.div>

        <nav className="hidden md:flex space-x-2 font-mono">
          <span className="text-[#9CA3AF] mr-2">const nav = [</span>
          {navItems.map((item, index) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <div key={item.name} className="relative flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors duration-300",
                    isActive ? "text-[#E5E7EB]" : "text-[#9CA3AF] hover:text-[#06B6D4]"
                  )}
                >
                  <span className="text-[10px] text-[#EF4444] absolute top-0 left-1">
                    {index}
                  </span>
                  <span className="ml-2">{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EF4444]"
                      style={{
                        boxShadow: "0px -2px 10px rgba(239, 68, 68, 0.8)",
                      }}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-[#9CA3AF]">,</span>
                )}
              </div>
            );
          })}
          <span className="text-[#9CA3AF] ml-2">];</span>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#EF4444] font-mono hover:text-[var(--color-accent-cyan)] transition-colors"
        >
          {isMenuOpen ? "[Close]" : "[Menu]"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#050505]/95 backdrop-blur-xl border-b border-[#262626]"
      >
        <div className="container mx-auto px-6 py-6 font-mono text-sm leading-loose">
          <div className="flex flex-wrap items-center text-[#9CA3AF]">
            <span className="mr-3">const nav = [</span>
            {navItems.map((item, index) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center transition-colors duration-300 mr-2",
                    isActive ? "text-[#E5E7EB]" : "text-[#9CA3AF] hover:text-[var(--color-accent-cyan)]"
                  )}
                >
                  <span className={cn("transition-colors", isActive ? "text-[var(--color-accent-cyan)] font-bold" : "")}>
                    "{item.name}"
                  </span>
                  {index < navItems.length - 1 && <span className="text-[#9CA3AF]">,</span>}
                </a>
              );
            })}
            <span className="ml-1">];</span>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
