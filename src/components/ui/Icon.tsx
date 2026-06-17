import type { SVGProps } from "react";

export type IconName =
  | "android"
  | "design"
  | "code"
  | "tools"
  | "palette"
  | "ai"
  | "email"
  | "github"
  | "linkedin"
  | "telegram"
  | "arrow-up-right"
  | "arrow-down"
  | "arrow-right"
  | "external"
  | "download"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "sparkle";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, React.ReactNode> = {
  android: (
    <>
      <path d="M6 18V10a6 6 0 0 1 12 0v8" />
      <path d="M4 18h16" />
      <path d="M8 7 6.5 4.8M16 7l1.5-2.2" />
      <path d="M9.5 10.5h.01M14.5 10.5h.01" />
      <path d="M6 18v2.5M18 18v2.5" />
    </>
  ),
  design: (
    <>
      <path d="M12 3l2.4 5 5.6.6-4 4 1.1 5.4L12 20l-5.1 2 1.1-5.4-4-4L9.6 8z" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m13 7-2 10" />
    </>
  ),
  tools: (
    <>
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.9 4.4L4 15.5 8.5 20l5.6-5.6a3.5 3.5 0 0 0 4.4-4.9l-2.5 2.5-2-2z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.1 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-3.9-4-7-9-7z" />
      <path d="M7.5 11.5h.01M10 7.5h.01M14 7.5h.01M16.5 11h.01" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3.5 13.6 8l4.4 1.6L13.6 11 12 15.5 10.4 11 6 9.6 10.4 8z" />
      <path d="M18 15.5 18.7 17l1.3.6-1.3.6L18 19.6 17.4 18l-1.4-.4 1.4-.6z" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1.5-4-2-6-2.5m12 4.5v-3.6c0-1 .1-1.4-.5-2 2.3-.3 4.5-1.2 4.5-5a3.9 3.9 0 0 0-1.1-2.7 3.6 3.6 0 0 0-.1-2.7s-.9-.3-2.9 1.1a9.9 9.9 0 0 0-5 0C7.9 3.7 7 4 7 4a3.6 3.6 0 0 0-.1 2.7A3.9 3.9 0 0 0 5.8 9.4c0 3.7 2.2 4.6 4.5 5-.6.6-.6 1.1-.5 2v3.6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
    </>
  ),
  telegram: (
    <>
      <path d="M21 4 3 11l5 2 2 6 3-4 5 4z" />
      <path d="m8 13 8-6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  "arrow-down": (
    <>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  external: (
    <>
      <path d="M14 5h5v5" />
      <path d="M19 5 10 14" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  "chevron-left": <path d="m15 6-6 6 6 6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  sparkle: (
    <>
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4" />
      <path d="m7 7 2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
