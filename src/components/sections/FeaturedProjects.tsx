import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { featuredProjects, type FeaturedProject } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Icon } from "@/components/ui/Icon";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/motion";

function ProjectImage({ project }: { project: FeaturedProject }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <TiltCard
      glowColor={`${project.accent}33`}
      intensity={6}
      className="group w-full"
    >
      <a
        href={project.image}
        target="_blank"
        rel="noreferrer noopener"
        ref={ref}
        className="relative block aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-card sm:aspect-[5/6]"
        aria-label={`Open full ${project.title} case study`}
      >
        <motion.img
          src={project.image}
          alt={`${project.title} — ${project.tagline}`}
          loading="lazy"
          decoding="async"
          style={{ y: imageY }}
          className="absolute inset-0 h-[112%] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

        <div className="absolute bottom-5 right-5 flex translate-y-2 items-center gap-2 rounded-full border border-line bg-night/80 px-4 py-2 text-xs text-ink opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View full case study
          <Icon name="external" className="size-3.5" />
        </div>
      </a>
    </TiltCard>
  );
}

function ProjectInfo({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  return (
    <div className="flex flex-col justify-center">
      <Reveal>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted">
          <span
            className="font-display text-5xl leading-none"
            style={{ color: project.accent }}
          >
            0{index + 1}
          </span>
          <span className="h-px w-8 bg-line" />
          <span>{project.category}</span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h3 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
          {project.title}
        </h3>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted">
          {project.description}
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-6 grid max-w-xl gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2.5 text-sm text-muted"
            >
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              {feature}
            </div>
          ))}
        </div>
      </Reveal>

      {project.metrics && (
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-7 flex flex-wrap gap-6"
        >
          {project.metrics.map((m) => (
            <motion.div key={m.label} variants={fadeUp}>
              <div
                className="font-display text-2xl"
                style={{ color: project.accent }}
              >
                {m.value}
              </div>
              <div className="text-xs text-faint">{m.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <Reveal delay={0.2}>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs uppercase tracking-wider text-faint">
            Role · {project.role}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-card/50 px-3 py-1.5 font-mono text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="Featured Work"
          title="Selected projects, presented in full."
          description="A closer look at the products I'm most proud of — designed and built with care, end to end."
        />

        <div className="mt-20 space-y-28 sm:space-y-36">
          {featuredProjects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={project.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={reversed ? "lg:order-2" : ""}>
                  <ProjectImage project={project} />
                </div>
                <div className={reversed ? "lg:order-1" : ""}>
                  <ProjectInfo project={project} index={i} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
