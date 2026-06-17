# Nazar — Portfolio

A premium personal portfolio for **Nazar**, an Android Developer & UI/UX Designer.
Built to feel professional, elegant, timeless, and modern — a classic portfolio
structure paired with refined, performant motion.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (build tooling + lazy-loaded sections)
- **Tailwind CSS v4** (CSS-first theming via `@theme`)
- **Framer Motion** (scroll reveals, parallax, magnetic + tilt interactions)

## Sections

1. **Hero** — character-by-character title reveal, parallax background, mouse-following glow, scroll indicator
2. **About** — philosophy, animated counters, floating glassmorphism cards
3. **Skills** — magnetic, hover-reactive category cards (no progress bars)
4. **Featured Projects** — alternating layouts, 3D tilt, image zoom, scroll reveal
5. **Other Projects** — responsive grid of compact cards with a screenshot lightbox
6. **Journey** — scroll-drawn timeline
7. **Contact** — premium contact cards (Email, GitHub, LinkedIn, Telegram)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Skills, FeaturedProjects, OtherProjects, Timeline, Contact
    ui/          Reusable primitives (Reveal, TiltCard, MagneticButton, AnimatedCounter, Lightbox, Icon, ...)
  data/          Typed content (profile, skills, projects, timeline)
  hooks/         usePrefersReducedMotion, useScrollSpy
  lib/           motion variants + helpers
  index.css      Tailwind theme + global styles
public/
  assets/        Project imagery (featured + other)
  Nazar-CV.pdf   Placeholder résumé — replace with the real file
```

## Design tokens

| Token            | Value     |
| ---------------- | --------- |
| Background       | `#0B0B0B` |
| Surface          | `#121212` |
| Card             | `#181818` |
| Text             | `#F5F5F5` |
| Secondary text   | `#A0A0A0` |
| Accent           | `#4FD1C5` |
| Accent (hover)   | `#6EE7E0` |

## Notes & customisation

- **Résumé:** replace `public/Nazar-CV.pdf` with the real CV (the current file is a placeholder).
- **Contact links:** update emails/handles in `src/data/profile.ts`.
- **Featured project images** open the full case-study PNG in a new tab on click.
- **Accessibility:** honours `prefers-reduced-motion`, uses semantic landmarks,
  focus-visible states, alt text, and keyboard-navigable lightbox.
