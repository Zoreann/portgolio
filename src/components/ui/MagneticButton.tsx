import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: IconName;
  className?: string;
  strength?: number;
};

type ButtonProps = CommonProps & {
  as?: "button";
  onClick?: () => void;
  type?: "button" | "submit";
};

type AnchorProps = CommonProps & {
  as: "a";
  href: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
};

type MagneticButtonProps = ButtonProps | AnchorProps;

const variantClasses: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-accent text-night font-medium hover:bg-accent-hi shadow-[0_8px_30px_-12px_rgba(79,209,197,0.6)]",
  secondary:
    "border border-line bg-card/40 text-ink hover:border-accent/60 hover:text-accent",
  ghost: "text-muted hover:text-ink",
};

export function MagneticButton(props: MagneticButtonProps) {
  const {
    children,
    variant = "primary",
    icon,
    className,
    strength = 0.35,
  } = props;
  const reduced = usePrefersReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  function handleMove(event: PointerEvent<HTMLElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm tracking-wide transition-colors duration-300",
    variantClasses[variant],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (props.as === "a") {
    const { href, download, target, rel } = props;
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        style={{ x, y }}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        className={sharedClassName}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={sharedClassName}
    >
      {inner}
    </motion.button>
  );
}
