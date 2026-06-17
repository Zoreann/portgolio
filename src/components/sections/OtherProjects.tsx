import { useState } from "react";
import { motion } from "framer-motion";
import { otherProjects, type OtherProject } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Lightbox } from "@/components/ui/Lightbox";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/motion";

function OtherCard({
  project,
  onOpen,
}: {
  project: OtherProject;
  onOpen: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={onOpen}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative flex break-inside-avoid flex-col overflow-hidden rounded-3xl border border-line bg-card/50 text-left transition-colors duration-500 hover:border-accent/40"
    >
      <div className="relative aspect-[2/1] overflow-hidden">
        <img
          src={project.banner}
          alt={`${project.title} banner`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <span
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-line bg-night/70 text-muted opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100"
          style={{ color: project.accent }}
        >
          <Icon name="arrow-up-right" className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <img
            src={project.icon}
            alt={`${project.title} icon`}
            loading="lazy"
            className="size-11 rounded-xl border border-line object-cover"
          />
          <div>
            <h3 className="font-display text-lg text-ink">{project.title}</h3>
            <p className="text-xs uppercase tracking-wider text-faint">
              {project.category}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-night/50 px-2.5 py-1 font-mono text-[11px] text-faint"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-muted">
          <span
            className="inline-block size-1.5 rounded-full"
            style={{ backgroundColor: project.accent }}
          />
          {project.screens.length} screens · tap to preview
        </div>
      </div>
    </motion.button>
  );
}

export function OtherProjects() {
  const [active, setActive] = useState<OtherProject | null>(null);

  return (
    <section id="more" className="relative scroll-mt-24 py-28 sm:py-36">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-line to-transparent"
      />
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="More Projects"
          title="Additional apps from the workshop."
          description="Smaller builds and experiments — each one a chance to refine an idea, learn a new pattern, and ship something useful."
        />

        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <OtherCard
              key={project.id}
              project={project}
              onOpen={() => setActive(project)}
            />
          ))}
        </motion.div>
      </div>

      {active && (
        <Lightbox
          images={active.screens}
          startIndex={0}
          title={active.title}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
