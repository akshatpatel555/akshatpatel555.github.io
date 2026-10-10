"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  /**
   * Heading level. Pages whose main heading IS this component must pass "h1";
   * /projects, /resume and /contact previously had no h1 at all.
   */
  as?: "h1" | "h2";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={reduce ? { duration: 0 } : { duration: 0.5 }}
      className={cn(
        "mb-8",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="mb-2 inline-block font-mono text-base text-accent">
          {label}
        </span>
      )}
      <Heading className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
