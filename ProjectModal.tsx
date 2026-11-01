import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { brand, projects, type Project } from "@/data/site";
import { cn } from "@/utils/cn";
import { ProjectVisual } from "./ProjectVisual";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { InstagramLink } from "./ui/InstagramLink";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onNavigate: (project: Project) => void;
};

export function ProjectModal({ project, onClose, onNavigate }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = project !== null;

  const currentIndex = project ? projects.findIndex((item) => item.id === project.id) : -1;
  const previousProject =
    currentIndex >= 0 ? projects[(currentIndex - 1 + projects.length) % projects.length] : null;
  const nextProject =
    currentIndex >= 0 ? projects[(currentIndex + 1) % projects.length] : null;

  /* Lock the page, remember focus and focus the close control. */
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  /* Keyboard support: close, previous and next. */
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowRight" && nextProject) onNavigate(nextProject);
      if (event.key === "ArrowLeft" && previousProject) onNavigate(previousProject);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, nextProject, previousProject, onClose, onNavigate]);

  /* Fresh scroll position when moving between case studies. */
  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [project?.id]);

  if (!project) return null;

  const handleTrapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const panel = panelRef.current;
    if (!panel) return;
    const focusable = Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.offsetParent !== null);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-5 md:p-8">
      <button
        type="button"
        aria-label="Close case study"
        onClick={onClose}
        tabIndex={-1}
        className="absolute inset-0 cursor-default bg-plum-deep/65 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onKeyDown={handleTrapFocus}
        className="relative z-10 max-h-[92vh] w-full max-w-5xl animate-fade-up overflow-y-auto rounded-t-[1.75rem] bg-cream shadow-[0_40px_120px_-30px_rgba(20,8,14,.7)] sm:rounded-[1.75rem]"
      >
        <div className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-plum/10 bg-cream/92 px-5 py-3.5 backdrop-blur-xl md:px-7">
          <p className="flex items-center gap-2.5 text-[0.55rem] font-semibold tracking-[0.18em] text-mauve uppercase">
            <Icon name="sparkle" className="h-2.5 w-2.5 text-rose" />
            Case study
            <span className="hidden h-px w-5 bg-plum/15 sm:block" />
            <span className="hidden tracking-[0.1em] text-mauve/60 sm:inline">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="grid h-9 w-9 place-items-center rounded-full border border-plum/15 text-plum transition-all duration-300 hover:rotate-90 hover:border-plum/40 hover:bg-white/60"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col bg-porcelain/70 p-4 md:p-5 lg:p-6">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/70 bg-porcelain shadow-[0_24px_50px_-38px_rgba(70,37,54,.6)]">
              <div className="aspect-[4/5] w-full">
                <ProjectVisual project={project} loading="eager" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[1rem] border border-plum/10 bg-cream/60 px-4 py-3">
              <div>
                <p className="text-[0.5rem] font-semibold tracking-[0.16em] text-mauve uppercase">Palette</p>
                <ul className="mt-2 flex items-center gap-1.5" aria-label="Project colour palette">
                  {project.palette.map((color) => (
                    <li key={color}>
                      <span
                        className="block h-5 w-5 rounded-full border border-plum/10 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                      <span className="sr-only">{color}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-right text-[0.55rem] leading-relaxed tracking-[0.06em] text-mauve">
                {project.deliverables.length} deliverables
                <br />
                <span className="text-mauve/60">Made with care, 2024–2026</span>
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <p className="text-[0.55rem] font-semibold tracking-[0.16em] text-rose-deep uppercase">
              {project.category}
            </p>
            <h2
              id="project-modal-title"
              className="mt-3 font-display text-[clamp(2.1rem,4vw,3rem)] leading-[0.98] font-light tracking-[-0.045em] text-plum"
            >
              {project.title}
              <em className="mt-1 block font-script text-[clamp(1.75rem,3.5vw,2.4rem)] leading-tight font-normal tracking-normal text-rose-deep">
                {project.subtitle}
              </em>
            </h2>

            <p className="mt-5 text-[0.87rem] leading-[1.9] text-ink/65">{project.overview}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-plum/10 py-4">
              <div>
                <dt className="text-[0.5rem] font-semibold tracking-[0.15em] text-mauve uppercase">Client</dt>
                <dd className="mt-1.5 text-[0.8rem] text-ink/75">{project.client}</dd>
              </div>
              <div>
                <dt className="text-[0.5rem] font-semibold tracking-[0.15em] text-mauve uppercase">Year</dt>
                <dd className="mt-1.5 text-[0.8rem] text-ink/75">{project.year}</dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="text-[0.5rem] font-semibold tracking-[0.15em] text-mauve uppercase">
                What I did
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-plum/12 bg-white/50 px-3 py-1.5 text-[0.58rem] font-medium tracking-[0.03em] text-ink/65"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <p className="text-[0.5rem] font-semibold tracking-[0.15em] text-mauve uppercase">
                Deliverables
              </p>
              <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.7rem] leading-relaxed text-ink/60">
                    <Icon name="check" className="mt-0.5 h-3 w-3 text-rose-deep" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cn("mt-7 flex flex-col gap-3 sm:flex-row sm:items-center")}>
              <Button
                href={`mailto:${brand.email}?subject=${encodeURIComponent(`Let’s create something like ${project.title}`)}`}
                onClick={onClose}
                size="sm"
                arrow="up-right"
              >
                Start a similar project
              </Button>
              <InstagramLink size="sm" showHandle={false} label="Ask me about it" />
            </div>

            <div className="mt-8 flex items-center justify-between gap-3 border-t border-plum/10 pt-5">
              <button
                type="button"
                onClick={() => previousProject && onNavigate(previousProject)}
                className="group inline-flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.11em] text-mauve uppercase transition-colors hover:text-plum"
              >
                <Icon
                  name="arrow-left"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                />
                Previous
              </button>
              <span className="font-script text-lg text-rose-deep/70">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => nextProject && onNavigate(nextProject)}
                className="group inline-flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.11em] text-mauve uppercase transition-colors hover:text-plum"
              >
                Next
                <Icon
                  name="arrow-right"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
