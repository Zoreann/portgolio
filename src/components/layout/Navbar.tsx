import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "more", label: "More" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(["hero", ...sectionIds]);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function go(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2.5 transition-all duration-500",
          scrolled
            ? "glass border border-line/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]"
            : "border border-transparent",
        )}
      >
        <button
          onClick={() => go("hero")}
          className="group ml-3 flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-line bg-card font-display text-accent transition-colors group-hover:border-accent/50">
            N
          </span>
          <span className="font-display text-lg tracking-tight text-ink">
            Nazar
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active === link.id
                    ? "text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-card-hi"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() => go("contact")}
            className="mr-1 rounded-full bg-accent px-5 py-2 text-sm font-medium text-night transition-colors hover:bg-accent-hi"
          >
            Let's talk
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="mr-2 grid size-9 place-items-center rounded-full border border-line text-ink md:hidden"
        >
          <Icon name={menuOpen ? "close" : "arrow-down"} className="size-4" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 -z-10 flex flex-col items-center justify-center gap-2 bg-night/95 backdrop-blur-xl md:hidden"
          >
            {["hero", ...sectionIds].map((id, i) => {
              const label =
                id === "hero"
                  ? "Home"
                  : links.find((l) => l.id === id)?.label ?? id;
              return (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => go(id)}
                  className="font-display text-3xl text-ink/90 transition-colors hover:text-accent"
                >
                  {label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
