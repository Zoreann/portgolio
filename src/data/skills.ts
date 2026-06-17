export type SkillCategory = {
  title: string;
  caption: string;
  icon: "android" | "design" | "code" | "tools" | "palette" | "ai";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "UI/UX Design",
    caption: "From wireframe to delight",
    icon: "design",
    skills: [
      "Figma",
      "Design Systems",
      "Wireframing & Prototyping",
      "User Flows & Journeys",
      "Responsive Design",
      "Material Design",
    ],
  },
  {
    title: "Graphic Design",
    caption: "Visual craft & brand",
    icon: "palette",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Presentation Design",
      "Marketing Creatives",
      "Social Media Assets",
      "Visual Hierarchy",
    ],
  },
  {
    title: "AI-Assisted Workflow",
    caption: "Faster research & exploration",
    icon: "ai",
    skills: ["ChatGPT", "Claude", "Midjourney", "Figma AI", "Miro", "FigJam"],
  },
  {
    title: "Android & Development",
    caption: "Bringing designs to life",
    icon: "android",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "MVVM",
      "REST APIs",
      "Android Studio",
    ],
  },
];
