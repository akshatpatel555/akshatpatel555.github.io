"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  return (
    // The live region stays mounted and empty. Inserting a region and its text
    // in the same tick is the classic reason an announcement is missed — the
    // region has to exist before the content arrives.
    <div role="status" aria-live="polite" aria-atomic="true">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed bottom-6 left-1/2 z-50 -translate-x-1/2",
              "flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 shadow-lg"
            )}
          >
            <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">
              {message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
