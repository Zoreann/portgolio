import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ParticlesProps = {
  count?: number;
  className?: string;
};

/**
 * Lightweight floating particles rendered with transforms only (cheap to
 * animate). Disabled entirely for reduced-motion users.
 */
export function Particles({ count = 18, className }: ParticlesProps) {
  const reduced = usePrefersReducedMotion();

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * -20,
        drift: Math.random() * 30 - 15,
        opacity: Math.random() * 0.4 + 0.15,
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
          animate={{ y: [0, -40, 0], x: [0, dot.drift, 0] }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
