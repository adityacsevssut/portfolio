"use client";

/**
 * ScrollTypewriter — reusable text-write-in components
 *
 * Usage:
 *   <TypewriterOnScroll text="Hello world" />
 *   <TypewriterHeading text="Section Title" tag="h2" />
 *   <TypewriterParagraph text="Long body text..." />
 *   <TypewriterWords text="Animate word by word" />
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

/* ─────────────────────────────────────
   Core hook
───────────────────────────────────── */
function useTypewriterInView(text: string, speed = 18, startDelay = 0) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "50px 0px -20px 0px" });
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const delay = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(id);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [isInView, text, speed, startDelay]);

  return { ref, displayed, done };
}

/* ─────────────────────────────────────
   Blinking cursor
───────────────────────────────────── */
const Cursor = ({ hide }: { hide: boolean }) => (
  <motion.span
    animate={{ opacity: hide ? 0 : [1, 0] }}
    transition={hide ? { duration: 0 } : { duration: 0.6, repeat: Infinity }}
    className="inline-block w-[2px] h-[0.85em] bg-current ml-[2px] align-middle"
  />
);

/* ─────────────────────────────────────
   TypewriterOnScroll — inline span
   For simple short text, any element
───────────────────────────────────── */
export function TypewriterOnScroll({
  text,
  speed = 28,
  startDelay = 0,
  className = "",
  showCursor = true,
  tag: Tag = "span",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
  tag?: keyof React.JSX.IntrinsicElements;
}) {
  const { ref, displayed, done } = useTypewriterInView(text, speed, startDelay);
  return (
    // @ts-expect-error – dynamic tag
    <Tag ref={ref} className={className}>
      {displayed}
      {showCursor && <Cursor hide={done} />}
    </Tag>
  );
}

/* ─────────────────────────────────────
   TypewriterHeading — h2 / h3 etc.
   Uses stagger per word for large text
───────────────────────────────────── */
export function TypewriterHeading({
  text,
  tag: Tag = "h2",
  className = "",
  speed = 18,
  startDelay = 0,
}: {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px 0px -20px 0px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.45,
              delay: startDelay / 1000 + wi * (speed / 1000) * 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────
   TypewriterParagraph — char-by-char
   Best for medium-length body text
───────────────────────────────────── */
export function TypewriterParagraph({
  text,
  speed = 14,
  startDelay = 0,
  className = "",
  showCursor = false,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
}) {
  const { ref, displayed, done } = useTypewriterInView(text, speed, startDelay);
  return (
    <p ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
      {displayed}
      {showCursor && <Cursor hide={done} />}
    </p>
  );
}

/* ─────────────────────────────────────
   TypewriterWords — word by word fade
   Great for section description lines
───────────────────────────────────── */
export function TypewriterWords({
  text,
  className = "",
  startDelay = 0,
  speed = 50,
}: {
  text: string;
  className?: string;
  startDelay?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px 0px -20px 0px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: startDelay / 1000 + i * (speed / 1000),
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

/* ─────────────────────────────────────
   TypewriterLine — single line
   Instant-appear with reveal clip
───────────────────────────────────── */
export function TypewriterLine({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ x: "-101%" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
