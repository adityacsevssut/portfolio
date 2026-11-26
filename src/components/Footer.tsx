import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/adityacsevssut",
      icon: <FaGithub size={22} />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aditya-nahak-813236373",
      icon: <FaLinkedin size={22} />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aditya___kumar___nahak",
      icon: <FaInstagram size={22} />
    },
    {
      name: "Twitter",
      url: "https://x.com/NahakAdity52540?t=T9ETFIzFu9IEwL3jLvDoBA&s=09",
      icon: <FaTwitter size={22} />
    }
  ];

  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[var(--color-primary-neon)] pt-10 pb-24 md:pb-10 mt-12 md:mt-20">
      {/* Neon Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-primary-neon)] opacity-50 shadow-[0_0_15px_var(--color-primary-neon)]"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        
        {/* Terminal exit sequence */}
        <div className="text-[var(--color-text-secondary)] font-mono text-xs opacity-70 w-full md:w-auto text-center md:text-left">
          <span className="text-[var(--color-accent-cyan)]">~</span>/aditya.dev $ <span>Dequeuing Session...</span>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-neon)] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright & Navigation */}
        <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
          <div className="text-[var(--color-text-secondary)] font-sans text-xs opacity-50">
            © {new Date().getFullYear()} Aditya Nahak. All rights reserved.
          </div>
          <Link 
            href="/"
            className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-neon)] font-mono text-[10px] transition-colors border border-transparent hover:border-[var(--color-primary-neon)] px-2 py-0.5 rounded opacity-70"
          >
            cd /root
          </Link>
        </div>
        
      </div>
    </footer>
  );
}
