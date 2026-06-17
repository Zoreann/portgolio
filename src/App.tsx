import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";

// Heavier, image-rich sections are lazy-loaded to keep the hero paint fast.
const FeaturedProjects = lazy(() =>
  import("@/components/sections/FeaturedProjects").then((m) => ({
    default: m.FeaturedProjects,
  })),
);
const OtherProjects = lazy(() =>
  import("@/components/sections/OtherProjects").then((m) => ({
    default: m.OtherProjects,
  })),
);
const Timeline = lazy(() =>
  import("@/components/sections/Timeline").then((m) => ({
    default: m.Timeline,
  })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({
    default: m.Contact,
  })),
);

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  return (
    <div className="grain relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionFallback />}>
          <FeaturedProjects />
          <OtherProjects />
          <Timeline />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
