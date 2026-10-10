"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>/\\|{}[]~^";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: "span" | "div" | "h1" | "h2" | "p";
}

export function GlitchText({
  text,
  className,
  delay = 0,
  speed = 30,
  as: Tag = "span",
}: GlitchTextProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const revealed = useRef(0);
  const rafRef = useRef<number>(0);
  const lastTime = useRef(0);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (revealed.current >= text.length) {
        setDisplay(text);
        return;
      }

      // Throttle updates to `speed` interval using rAF
      if (timestamp - lastTime.current < speed) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime.current = timestamp;

      const locked = text.slice(0, revealed.current);
      const remaining = text.length - revealed.current;
      const scrambled = Array.from({ length: Math.min(remaining, 4) }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
      ).join("");

      setDisplay(locked + scrambled);
      revealed.current += 1;
      rafRef.current = requestAnimationFrame(animate);
    },
    [text, speed]
  );

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    // Skip animation entirely for reduced-motion users
    if (prefersReduced) {
      setDisplay(text);
      return;
    }

    revealed.current = 0;
    lastTime.current = 0;
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, animate, prefersReduced, text]);

  return (
    <Tag className={cn("font-mono", className)}>
      {/* The animated characters are decorative — aria-label on a bare span is
          not reliably exposed, and this renders inside the h1, so without this
          split the heading's accessible name was scrambled glyphs. */}
      <span aria-hidden="true">
        {started ? display || "\u00A0" : "\u00A0"}
      </span>
      <span className="sr-only">{text}</span>
    </Tag>
  );
}
