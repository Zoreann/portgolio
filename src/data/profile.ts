import { asset } from "@/lib/utils";

export type Stat = {
  value: number;
  label: string;
  suffix?: string;
  decimals?: number;
  compact?: boolean;
};

export const profile = {
  name: "Nazar Kasianov",
  firstName: "Nazar",
  roles: ["Android Developer", "UI/UX Designer"],
  tagline: "Android Developer & UI/UX Designer",
  location: "Available worldwide · Remote",
  intro:
    "I'm a UI/UX & graphic designer who also builds. I design refined mobile and web products in Figma — from user flows to polished interfaces — and care about the details that make an experience feel effortless.",
  about: {
    lead: "I design digital products end to end — shaping the experience in Figma, then helping bring it to life.",
    paragraphs: [
      "My work lives at the intersection of design and development. I take a product from concept to implementation — user flows, wireframes, prototypes, and design systems — until the interaction feels natural and the visual rhythm feels calm.",
      "I lean on modern AI tools — ChatGPT, Claude, Midjourney, and Figma AI — to accelerate research, content, and design exploration, so I can spend more time on the decisions that actually shape the experience.",
      "Whether it's a mindful screen-time tracker, a food-delivery flow, or a real-time monitoring dashboard, my focus stays the same: create useful, user-centered products that people genuinely enjoy returning to.",
    ],
  },
  stats: [
    { value: 10, suffix: "+", label: "Projects shipped" },
    { value: 3, suffix: "+", label: "Years designing" },
    { value: 6, suffix: "+", label: "Design & AI tools" },
    { value: 100, suffix: "%", label: "End-to-end ownership" },
  ] as Stat[],
  resumeUrl: asset("/Nazar_Kasianov_Designer_Resume.pdf"),
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: "email" | "github" | "linkedin" | "telegram";
};

export const socials: SocialLink[] = [
  {
    label: "Email",
    handle: "nazarkasianow@gmail.com",
    href: "mailto:nazarkasianow@gmail.com",
    icon: "email",
  },
  {
    label: "GitHub",
    handle: "@Zoreann",
    href: "https://github.com/Zoreann",
    icon: "github",
  },
  {
    label: "LinkedIn",
    handle: "in/nazar-kasianow",
    href: "https://www.linkedin.com/in/nazar-kasianow-347760271/",
    icon: "linkedin",
  },
  {
    label: "Telegram",
    handle: "@yen_fox",
    href: "https://t.me/yen_fox",
    icon: "telegram",
  },
];
