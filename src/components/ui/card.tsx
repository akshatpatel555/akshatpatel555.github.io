"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    const reduce = useReducedMotion();

    if (hover) {
      return (
        <motion.div
          ref={ref}
          whileHover={reduce ? undefined : { y: -2 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "rounded-xl border border-border bg-card p-7 transition-colors hover:border-accent/30",
            className
          )}
          {...(props as React.ComponentProps<typeof motion.div>)}
        >
          {children}
        </motion.div>
      );
    }
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-7",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
