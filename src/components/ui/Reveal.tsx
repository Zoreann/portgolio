import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_PREMIUM, VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-triggered fade + lift. Honours reduced-motion through the global
 * CSS reset (transition durations collapse), and only animates once.
 */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.75,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE_PREMIUM, delay }}
    >
      {children}
    </MotionTag>
  );
}
