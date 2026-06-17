import { motion } from "framer-motion";
import { socials, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { Particles } from "@/components/ui/Particles";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <Particles count={14} />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 size-[28rem] -translate-x-1/2 rounded-full bg-accent/5 blur-[140px]"
      />

      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something worth keeping."
          description="Have a product in mind, a role to fill, or just want to talk Android and design? My inbox is always open."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              as="a"
              href={socials[0].href}
              variant="primary"
              icon="arrow-up-right"
              className="px-8 py-4 text-base"
            >
              {socials[0].handle}
            </MagneticButton>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              variants={fadeUp}
              href={s.href}
              target={s.icon === "email" ? undefined : "_blank"}
              rel="noreferrer noopener"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-card/50 p-6 transition-colors duration-500 hover:border-accent/50"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="grid size-12 place-items-center rounded-xl border border-line bg-night text-muted transition-all duration-500 group-hover:scale-110 group-hover:text-accent">
                <Icon name={s.icon} className="size-5" />
              </span>
              <div className="min-w-0 pr-6">
                <p className="text-xs uppercase tracking-wider text-faint">
                  {s.label}
                </p>
                <p className="mt-1 break-all text-sm text-ink transition-colors group-hover:text-accent sm:text-base">
                  {s.handle}
                </p>
              </div>
              <Icon
                name="arrow-up-right"
                className="absolute right-5 top-5 size-4 text-faint opacity-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </motion.a>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-display text-2xl text-muted sm:text-3xl">
            Currently open to new opportunities.
          </p>
          <p className="mt-2 text-center text-sm text-faint">
            {profile.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
