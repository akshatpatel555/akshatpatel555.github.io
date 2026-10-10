"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Reduced-motion variant: content still appears, it just never travels or
 * fades. Both states are fully opaque, so nothing can be left invisible if an
 * animation is interrupted or never triggers.
 *
 * These wrappers are used by almost every section on the site, so honouring
 * prefers-reduced-motion here is what actually makes the site respect the
 * setting — GlitchText already handled it individually.
 */
const noMotion: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerContainerReduced: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reduce ? noMotion : fadeInUp}
      transition={reduce ? { duration: 0 } : { duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
}

export function Stagger({ children, className }: StaggerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reduce ? staggerContainerReduced : staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? noMotion : fadeInUp}
      transition={reduce ? { duration: 0 } : { duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
