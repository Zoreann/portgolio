import { socials } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line/70 bg-surface/40">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-card font-display text-accent">
            N
          </span>
          <div className="text-sm">
            <p className="text-ink">Nazar Kasianov</p>
            <p className="text-faint">Android Developer & UI/UX Designer</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === "email" ? undefined : "_blank"}
              rel="noreferrer noopener"
              aria-label={s.label}
              className="grid size-10 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
            >
              <Icon name={s.icon} className="size-[18px]" />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-faint">
          © {year} · Designed & built by Nazar Kasianov
        </p>
      </div>
    </footer>
  );
}
