export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Resolves a path that lives in /public against Vite's configured `base`
 * (e.g. "/portfolio/" on GitHub Pages, "/" locally). Accepts paths with or
 * without a leading slash so static references work in every environment.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL; // always ends with "/"
  return `${base}${path.replace(/^\/+/, "")}`;
}
