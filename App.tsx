import { useCallback, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero, Marquee } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProjectModal } from "@/components/ProjectModal";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { Project } from "@/data/site";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openProject = useCallback((project: Project) => setActiveProject(project), []);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#main"
        className="sr-only z-[120] rounded-full bg-plum px-5 py-3 text-xs font-semibold tracking-[0.12em] text-cream uppercase focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <FeaturedWork onOpenProject={openProject} />
        <Showcase onOpenProject={openProject} />
        <Process />
        <Contact />
      </main>

      <SiteFooter />

      <ProjectModal project={activeProject} onClose={closeProject} onNavigate={openProject} />
    </div>
  );
}
