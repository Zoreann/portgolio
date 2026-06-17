import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent } from "react";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Particles } from "@/components/ui/Particles";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { EASE_PREMIUM } from "@/lib/motion";

const title = "Nazar";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 220]);

  // Mouse-following glow
  const glowX = useSpring(useMotionValue(50), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useMotionValue(40), { stiffness: 60, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(79,209,197,0.14), transparent 65%)`;

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      ref={ref}
      onPointerMove={handleMove}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Layered background */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 -z-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#141414_0%,#0b0b0b_55%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]" />
      </motion.div>

      <motion.div aria-hidden style={{ background: glow }} className="absolute inset-0 -z-10" />
      <Particles count={22} />

      {/* Glow orbs */}
      <div
        aria-hidden
        className="absolute left-[12%] top-[22%] -z-10 size-72 rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute bottom-[14%] right-[14%] -z-10 size-80 rounded-full bg-accent/5 blur-[140px]"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px mx-auto w-full max-w-6xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.3 }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-accent"
        >
          <span className="inline-block size-2 animate-pulse rounded-full bg-accent" />
          {profile.location}
        </motion.p>

        <h1 className="mt-7 font-display text-[clamp(3.5rem,14vw,11rem)] leading-[0.92] text-ink">
          <span className="sr-only">{title}</span>
          <span aria-hidden className="flex flex-wrap">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "0.5em", rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE_PREMIUM,
                  delay: 0.45 + i * 0.07,
                }}
                className="inline-block origin-bottom [transform-style:preserve-3d]"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.9 }}
          className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-xl text-ink sm:text-2xl">
              Android Developer{" "}
              <span className="text-faint">&</span> UI/UX Designer
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted">
              {profile.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              variant="primary"
              icon="arrow-down"
              onClick={() => scrollTo("work")}
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download
              variant="secondary"
              icon="download"
            >
              Download CV
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              icon="arrow-up-right"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-accent sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-line">
          <motion.span
            className="mt-1.5 h-2 w-1 rounded-full bg-accent"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
