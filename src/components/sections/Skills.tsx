import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent } from "react";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/motion";

const iconMap: Record<SkillCategory["icon"], IconName> = {
  android: "android",
  design: "design",
  code: "code",
  tools: "tools",
  palette: "palette",
  ai: "ai",
};

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.12);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.12);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x, y }}
      className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card/50 p-7 transition-colors duration-500 hover:border-accent/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex items-center justify-between">
        <span className="grid size-12 place-items-center rounded-2xl border border-line bg-night text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
          <Icon name={iconMap[category.icon]} className="size-6" />
        </span>
        <span className="font-mono text-xs text-faint">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl text-ink">{category.title}</h3>
      <p className="mt-1 text-sm text-faint">{category.caption}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-line bg-night/60 px-3.5 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-accent/50 hover:text-ink"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="A complete toolkit, from first sketch to shipped app."
          description="I move fluidly between design and development — which means fewer hand-off gaps and a more coherent final product."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid gap-5 sm:grid-cols-2"
        >
          {skillCategories.map((category, i) => (
            <SkillCard key={category.title} category={category} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
