export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2018 – 2022",
    title: "Foundations at college",
    description:
      "Studied at Cherkasy Polytechnic Professional College, taking my first steps into digital craft and the fundamentals of design and technology.",
    tags: ["Education", "Fundamentals"],
  },
  {
    period: "Design craft",
    title: "Diving into UI/UX",
    description:
      "Picked up Figma and design-systems thinking to design before building. Wireframes, prototypes, user flows, and visual hierarchy became part of every project from day one.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    period: "Visual design",
    title: "Graphic & brand work",
    description:
      "Expanded into graphic design with Photoshop and Illustrator — presentation decks, marketing creatives, and social assets that carry a consistent visual identity.",
    tags: ["Photoshop", "Illustrator", "Branding"],
  },
  {
    period: "Building",
    title: "Bringing designs to life",
    description:
      "Learned to implement my own designs — building mobile and web interfaces with Kotlin, Jetpack Compose, Material 3, and responsive layouts so the final product matches the vision.",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
  },
  {
    period: "Today",
    title: "AI-accelerated product design",
    description:
      "Designing and shipping user-centered products end to end, using AI tools like ChatGPT, Claude, Midjourney, and Figma AI to speed up research, exploration, and delivery.",
    tags: ["AI Workflow", "Product Design", "End-to-end"],
  },
];
