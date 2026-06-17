import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  compact?: boolean;
  className?: string;
};

function format(value: number, decimals: number, compact?: boolean): string {
  if (compact && value >= 1000) {
    return `${Math.round(value / 1000)}K`;
  }
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = "",
  compact = false,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 55,
    damping: 18,
    mass: 1,
  });
  const display = useTransform(spring, (latest) =>
    format(latest, decimals, compact),
  );

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
