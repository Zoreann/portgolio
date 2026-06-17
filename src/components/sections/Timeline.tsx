import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function TimelineNode({
  entry,
  index,
}: {
  entry: (typeof timeline)[number];
  index: number;
}) {
  return (
    <div className="relative pl-16 sm:pl-24">
      {/* Node marker */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[18px] top-1.5 z-10 grid size-5 place-items-center rounded-full border border-accent/50 bg-night sm:left-[34px]"
      >
        <span className="size-2 rounded-full bg-accent" />
      </motion.span>

      <Reveal delay={index * 0.04}>
        <div className="rounded-2xl border border-line bg-card/40 p-6 transition-colors duration-500 hover:border-accent/30">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {entry.period}
          </span>
          <h3 className="mt-2 font-display text-2xl text-ink">{entry.title}</h3>
          <p className="mt-2.5 text-pretty leading-relaxed text-muted">
            {entry.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-night/60 px-3 py-1 font-mono text-[11px] text-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="The Journey"
          title="From first lines of Kotlin to shipped products."
          description="A development journey built one concept, one architecture decision, and one shipped app at a time."
        />

        <div ref={ref} className="relative mt-16 max-w-3xl">
          {/* Track */}
          <div className="absolute left-[26px] top-0 h-full w-px bg-line sm:left-[42px]" />
          {/* Animated progress line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[26px] top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent to-accent/30 sm:left-[42px]"
          />

          <div className="space-y-8">
            {timeline.map((entry, i) => (
              <TimelineNode key={entry.title} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
