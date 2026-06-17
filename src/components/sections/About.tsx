import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/motion";

const philosophy = [
  {
    title: "Design first",
    body: "Every product starts in Figma. I shape the experience — user flows, wireframes, prototypes — before anything gets built, so the result is intentional, not accidental.",
  },
  {
    title: "Usability & goals",
    body: "Clean information architecture and design systems keep interfaces consistent, scalable, and aligned with real usability and business goals.",
  },
  {
    title: "Useful above all",
    body: "I create products people genuinely return to — tools that remove friction and quietly respect a person's time and attention.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Where engineering precision meets thoughtful design."
          description={profile.about.lead}
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            {profile.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty text-lg leading-relaxed text-muted">
                  {p}
                </p>
              </Reveal>
            ))}

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4"
            >
              {profile.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-line bg-card/40 p-5"
                >
                  <div className="font-display text-3xl text-ink">
                    <AnimatedCounter
                      value={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ""}
                      compact={stat.compact}
                    />
                  </div>
                  <div className="mt-1.5 text-xs leading-snug text-faint">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Floating glass philosophy cards */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-6 -top-10 size-40 rounded-full bg-accent/10 blur-[90px]"
            />
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="relative space-y-4"
            >
              {philosophy.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="glass relative overflow-hidden rounded-2xl border border-line/80 p-6"
                  style={{ marginLeft: i % 2 === 1 ? "2rem" : 0 }}
                >
                  <span className="absolute right-5 top-5 font-mono text-xs text-faint">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
