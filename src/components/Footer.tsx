export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[var(--color-primary-neon)] py-8 mt-20">
      {/* Neon Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-primary-neon)] opacity-50"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[var(--color-text-secondary)] font-mono text-xs opacity-70">
          <span className="text-[var(--color-accent-cyan)]">~</span>/aditya.dev $ <span>Dequeuing Session...</span>
        </div>
        
        <div className="text-[var(--color-text-secondary)] font-sans text-xs opacity-50">
          © {new Date().getFullYear()} Aditya.Dev. All rights reserved.
        </div>
        
        <a 
          href="#home"
          className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-neon)] font-mono text-xs transition-colors border border-transparent hover:border-[var(--color-primary-neon)] px-3 py-1 rounded"
        >
          cd /root
        </a>
      </div>
    </footer>
  );
}
