"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profileIcons = [
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/adityacsevssut/",
    icon: SiLeetcode,
    iconColor: "text-[#FFA116]",
    glowColor: "rgba(255, 161, 22, 0.24)",
    hoverBorder: "hover:border-[#FFA116]/60",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(255,161,22,0.2)]",
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/nahakadiojd4",
    icon: SiGeeksforgeeks,
    iconColor: "text-[#34D399]",
    glowColor: "rgba(47, 141, 70, 0.26)",
    hoverBorder: "hover:border-[#34D399]/60",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(52,211,153,0.2)]",
  },
  {
    name: "GitHub",
    href: "https://github.com/adityacsevssut",
    icon: FaGithub,
    iconColor: "text-[#F3F4F6]",
    glowColor: "rgba(255, 255, 255, 0.16)",
    hoverBorder: "hover:border-white/50",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(255,255,255,0.12)]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aditya-nahak-813236373",
    icon: FaLinkedin,
    iconColor: "text-[#38BDF8]",
    glowColor: "rgba(56, 189, 248, 0.24)",
    hoverBorder: "hover:border-[#38BDF8]/60",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(56,189,248,0.2)]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aditya___kumar___nahak",
    icon: FaInstagram,
    iconColor: "text-[#F472B6]",
    glowColor: "rgba(244, 114, 182, 0.24)",
    hoverBorder: "hover:border-[#F472B6]/60",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(244,114,182,0.2)]",
  },
  {
    name: "Twitter",
    href: "https://x.com/NahakAdity52540?t=T9ETFIzFu9IEwL3jLvDoBA&s=09",
    icon: FaTwitter,
    iconColor: "text-[#60A5FA]",
    glowColor: "rgba(96, 165, 250, 0.24)",
    hoverBorder: "hover:border-[#60A5FA]/60",
    hoverShadow: "hover:shadow-[0_12px_30px_rgba(96,165,250,0.2)]",
  },
];

export function HomeSocialHub() {
  return (
    <section
      id="profiles"
      aria-label="Coding and social links"
      className="relative py-10 md:py-14 px-5 sm:px-6 border-t border-white/[0.06]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-3xl mx-auto flex flex-col items-center"
      >
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-[#E5E7EB] mb-7 tracking-tight text-center">
          <span className="text-[#EF4444]">{"<"}</span>
          Connect
          <span className="text-[#EF4444]">{"/>"}</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3.5 sm:gap-4 place-items-center">
          {profileIcons.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                title={item.name}
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className={`group relative w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-2xl bg-[#090909]/90 backdrop-blur-xl border border-white/[0.09] flex items-center justify-center overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_28px_rgba(0,0,0,0.65)] transition-all duration-300 ${item.hoverBorder} ${item.hoverShadow}`}
              >
                <span
                  className="absolute inset-0 pointer-events-none opacity-35 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${item.glowColor} 0%, transparent 70%)`,
                  }}
                />
                <Icon
                  size={26}
                  className={`relative z-10 transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
                />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
