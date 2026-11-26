"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────
   Blinking cursor
───────────────────────────────────────── */
const Cursor = ({ dim }: { dim?: boolean }) => (
  <motion.span
    animate={{ opacity: dim ? 0 : [1, 0] }}
    transition={dim ? { duration: 0 } : { duration: 0.6, repeat: Infinity }}
    className="inline-block w-[2px] h-[0.75em] bg-current ml-[2px] align-middle"
  />
);

/* ─────────────────────────────────────────
   Sequential hero typewriter state machine
   phase 0 → greeting
   phase 1 → "I'm Aditya Nahak"
   phase 2 → role typewriter (continuous)
   phase 3 → bio
   phase 4 → show buttons + stats
───────────────────────────────────────── */
const greeting   = "Hello Everyone,";
const nameStr    = "I'm Aditya Nahak";
const bioStr     = "I build fast, clean web applications and enjoy solving hard algorithmic problems. Currently focused on full-stack development with the MERN stack and competitive programming in C++.";
const titles     = ["MERN Developer", "DSA Enthusiast", "ML Enthusiast"];

function useSequentialTypewriter() {
  const [phase, setPhase]         = useState(0);
  const [greet, setGreet]         = useState("");
  const [name, setName]           = useState("");
  const [bio, setBio]             = useState("");
  const [bioDone, setBioDone]     = useState(false);
  // role typewriter
  const [roleIdx, setRoleIdx]     = useState(0);
  const [roleText, setRoleText]   = useState("");
  const [deleting, setDeleting]   = useState(false);

  // Phase 0 — greeting (one-time)
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setGreet(greeting.slice(0, i));
      if (i >= greeting.length) {
        clearInterval(id);
        setPhase(1);
      }
    }, 45);
    return () => clearInterval(id);
  }, []);

  // Phase 1 — name (one-time, slower & deliberate)
  useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setName(nameStr.slice(0, i));
      if (i >= nameStr.length) {
        clearInterval(id);
        setPhase(2);
      }
    }, 70);
    return () => clearInterval(id);
  }, [phase]);

  // Phase 2 — role (looping typewriter, runs continuously)
  useEffect(() => {
    if (phase < 2) return;
    const current = titles[roleIdx];
    const delay = !deleting && roleText === current ? 1200 : deleting ? 35 : 70;
    const timer = setTimeout(() => {
      if (!deleting && roleText === current) {
        setDeleting(true);
      } else if (deleting && roleText === "") {
        setDeleting(false);
        setRoleIdx(p => (p + 1) % titles.length);
      } else {
        setRoleText(deleting ? current.slice(0, roleText.length - 1) : current.slice(0, roleText.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [phase, roleText, deleting, roleIdx]);

  // Phase 2 — bio (one-time, comfortable reading speed)
  useEffect(() => {
    if (phase !== 2) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setBio(bioStr.slice(0, i));
      if (i >= bioStr.length) {
        clearInterval(id);
        setBioDone(true);
      }
    }, 32);
    return () => clearInterval(id);
  }, [phase]);

  return { phase, greet, name, roleText, bio, bioDone };
}

/* ─────────────────────────────────────────
   3-D tilt card
───────────────────────────────────────── */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx  = useMotionValue(0);
  const my  = useMotionValue(0);
  const sp  = { stiffness: 120, damping: 18 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), sp);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), sp);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  }, [mx, my]);

  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} style={{ perspective: "900px" }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Minimal background
───────────────────────────────────────── */
const Background = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute -left-40 top-1/4 w-[520px] h-[520px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,0,51,0.055) 0%, transparent 70%)" }}
    />
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 60% 50%, transparent 55%, rgba(0,0,0,0.6) 100%)" }}
    />
  </div>
);

/* ─────────────────────────────────────────
   Hero
───────────────────────────────────────── */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const { phase, greet, name, roleText, bio, bioDone } = useSequentialTypewriter();

  if (!mounted) {
    return <section id="home" className="min-h-[calc(100vh-5rem)]" />;
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[calc(100vh-5rem)] overflow-hidden pt-6 pb-12 md:py-12"
      style={{ isolation: "isolate" }}
    >
      <Background />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

        {/* ── LEFT: sequential typewriter text ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

          {/* Phase 0 → greeting */}
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] font-normal mb-3 tracking-wide min-h-[1.6em]">
            {greet}
            {phase === 0 && <Cursor />}
          </p>

          {/* Phase 1 → name (we split "I'm " and "Aditya Nahak" for colour) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-4 min-h-[2.5em]">
            {(() => {
              const full = name;
              const split = "I'm ";
              if (full.length <= split.length) {
                return (
                  <>
                    <span className="text-white">{full}</span>
                    {phase === 1 && <Cursor />}
                  </>
                );
              }
              const rest = full.slice(split.length); // "Aditya Nahak"
              const aditya = "Aditya";
              const space  = " ";
              return (
                <>
                  <span className="text-white">{split}</span>
                  {rest.length <= aditya.length
                    ? <span className="text-[var(--color-primary-neon)]">{rest}</span>
                    : <>
                        <span className="text-[var(--color-primary-neon)]">{aditya}</span>
                        <br />
                        <span className="text-white">{rest.slice(aditya.length + space.length)}</span>
                      </>
                  }
                  {phase === 1 && <Cursor />}
                </>
              );
            })()}
          </h1>

          {/* Thin red underline — appears after name is done */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="h-[3px] w-16 bg-[var(--color-primary-neon)] rounded-full mb-5 self-center md:self-start"
          />

          {/* Phase 2 → role typewriter */}
          <div className="text-xl md:text-2xl font-medium mb-5 h-9 md:h-10 flex items-center text-[var(--color-text-secondary)]">
            {phase >= 2 && (
              <span>
                <span className="text-[var(--color-primary-neon)]">{roleText}</span>
                <Cursor dim={false} />
              </span>
            )}
          </div>

          {/* Phase 2 → bio typewriter (one-time) */}
          <p className="text-[var(--color-text-secondary)] text-base leading-7 mb-8 max-w-[420px] min-h-[7rem]">
            {bio}
            {phase === 2 && !bioDone && <Cursor />}
          </p>

          {/* Buttons appear as bio types */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Link href="/projects">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-2.5 rounded-md text-sm font-semibold text-white"
                style={{ background: "var(--color-primary-neon)" }}
              >
                View Projects
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-6 py-2.5 rounded-md text-sm font-semibold"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--color-text-primary)" }}
              >
                Contact Me
              </motion.span>
            </Link>
            <motion.a
              href="/Aditya%20Kumar%20Nahak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-md text-sm font-semibold"
              style={{ border: "1px solid rgba(255,255,255,0.1)", color: "var(--color-text-secondary)" }}
            >
              Resume ↗
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={phase >= 2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-10 mt-10 pt-8 border-t border-white/[0.06]"
          >
            {[
              { value: "15+",   label: "Projects built" },
              { value: "500+",  label: "DSA problems"   },
              { value: "2 yrs", label: "Experience"     },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="text-xs text-[var(--color-text-secondary)]">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: photo (person only, transparent background) ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center md:justify-center"
        >
          <TiltCard>
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-4 rounded-full pointer-events-none blur-3xl opacity-35"
                style={{ background: "radial-gradient(circle, rgba(255,0,51,0.38) 0%, transparent 70%)" }}
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src="/hero-aditya.webp"
                  alt="Aditya Nahak — Developer"
                  width={1054}
                  height={1024}
                  priority
                  className="w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px] h-auto object-contain select-none"
                  style={{ filter: "drop-shadow(0 24px 36px rgba(0,0,0,0.85)) contrast(1.03)" }}
                />
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>

      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))" }}
      />
    </section>
  );
}
