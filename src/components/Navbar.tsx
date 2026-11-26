"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code2 },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5 md:py-4"
            : "bg-[#050505]/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-4 md:py-6"
        )}
      >
        <div className="container mx-auto px-5 md:px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-lg sm:text-xl font-mono font-bold text-[#E5E7EB] flex items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-[#EF4444]">{"<"}</span>
              Aditya.Dev
              <span className="text-[#EF4444]">{"/>"}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2 font-mono">
            <span className="hidden lg:inline text-[#9CA3AF] mr-2">const nav = [</span>
            {navItems.map((item, index) => {
              const isActive = isRouteActive(item.href);
              return (
                <div key={item.name} className="relative flex items-center">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-2.5 lg:px-3 py-2 text-xs lg:text-sm transition-colors duration-300",
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
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="hidden lg:inline text-[#9CA3AF]">,</span>
                  )}
                </div>
              );
            })}
            <span className="hidden lg:inline text-[#9CA3AF] ml-2">];</span>
          </nav>

          {/* Mobile current-route indicator pill */}
          <div className="md:hidden flex items-center gap-2 font-mono text-xs text-[#9CA3AF] bg-[#0D0D0D]/90 border border-[#262626] px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
            <span>{pathname === "/" ? "~/home" : `~${pathname}`}</span>
          </div>
        </div>
      </header>

      {/* Classic Fixed Bottom Mobile Navigation Bar */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070707]/95 backdrop-blur-xl border-t border-[#262626] shadow-[0_-8px_30px_rgba(0,0,0,0.85)] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EF4444]/40 to-transparent pointer-events-none" />

        <div className="grid grid-cols-6 items-stretch h-16 max-w-lg mx-auto px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = isRouteActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1 px-0.5 transition-colors duration-200 select-none active:scale-95",
                  isActive
                    ? "text-[#F8F8F8]"
                    : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobileActiveTab"
                    className="absolute top-0 left-2 right-2 h-[2px] rounded-b-full bg-[#EF4444]"
                    style={{
                      boxShadow: "0 2px 10px rgba(239, 68, 68, 0.9)",
                    }}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={cn(
                    "flex items-center justify-center w-9 h-7 rounded-full transition-colors duration-200",
                    isActive ? "bg-[#EF4444]/15 text-[#EF4444]" : "text-current"
                  )}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.25 : 1.75} />
                </span>

                <span
                  className={cn(
                    "text-[10px] leading-none font-medium tracking-tight truncate max-w-full",
                    isActive ? "text-white font-semibold" : "text-[#9CA3AF]"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
