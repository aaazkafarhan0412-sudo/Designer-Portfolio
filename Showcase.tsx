import { useState } from "react";
import { projects, showcase, type Project } from "@/data/site";
import { cn } from "@/utils/cn";
import { ProjectVisual } from "./ProjectVisual";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";

const layouts = [
  { span: "lg:col-span-7", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-7", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-6", ratio: "aspect-[4/5]" },
  { span: "lg:col-span-6", ratio: "aspect-[4/5]" },
];

const layoutFor = (index: number) =>
  layouts[index] ?? { span: "lg:col-span-6", ratio: "aspect-[4/5]" };

type ShowcaseProps = {
  onOpenProject: (project: Project) => void;
};

export function Showcase({ onOpenProject }: ShowcaseProps) {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter));

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-title"
      className="relative overflow-hidden bg-porcelain py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blush/50 blur-[90px]" />
        <div className="absolute right-4 bottom-10 hidden font-script text-[10rem] leading-none text-rose/8 lg:block">
          belle
        </div>
      </div>

      <div className="container-luxe relative">
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-mauve">
              <span className="h-px w-6 bg-rose" />
              {showcase.eyebrow}
            </p>
            <h2
              id="showcase-title"
              className="mt-5 font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.03] font-light tracking-[-0.04em] text-plum"
            >
              {showcase.titleLead}{" "}
              <em className="font-normal italic text-rose-deep">{showcase.titleAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.89rem] leading-[1.9] text-ink/60 lg:text-right">{showcase.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-col justify-between gap-4 border-y border-plum/10 py-4 sm:flex-row sm:items-center">
            <div role="group" aria-label="Filter projects by discipline" className="flex flex-wrap gap-2">
              {showcase.filters.map((option) => {
                const active = filter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-[0.59rem] font-semibold tracking-[0.13em] uppercase transition-all duration-300",
                      active
                        ? "border-plum bg-plum text-cream shadow-sm"
                        : "border-plum/15 bg-white/30 text-ink/55 hover:border-rose/50 hover:text-rose-deep"
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-mauve uppercase">
              {String(visible.length).padStart(2, "0")} {visible.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {filter === "All" ? "projects" : `${filter} projects`}.
        </p>

        <div key={filter} className="mt-8 grid grid-cols-1 items-start gap-x-5 gap-y-9 sm:grid-cols-2 lg:mt-10 lg:auto-rows-auto lg:grid-cols-12 lg:gap-x-7 lg:gap-y-12">
          {visible.map((project, index) => {
            const layout = layoutFor(index);
            return (
            <article
              key={`${filter}-${project.id}`}
              className={cn("animate-fade-up group min-w-0 self-start", layout.span)}
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                aria-label={`Open ${project.title}: ${project.subtitle}`}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[8px] focus-visible:outline-rose-deep"
              >
                <div className={cn("relative w-full overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/40 p-2 shadow-[0_20px_50px_-38px_rgba(70,37,54,.55)] transition-all duration-700 group-hover:-translate-y-1 group-hover:shadow-card", layout.ratio)}>
                  <div className="relative h-full overflow-hidden rounded-[1.05rem]">
                    <ProjectVisual
                      project={project}
                      className="transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-plum-deep/0 transition-colors duration-500 group-hover:bg-plum-deep/15"
                      aria-hidden="true"
                    />
                    <span className="absolute top-3 left-3 rounded-full border border-white/50 bg-cream/85 px-3 py-1.5 text-[0.5rem] font-semibold tracking-[0.14em] text-plum uppercase backdrop-blur">
                      {project.categories[0]}
                    </span>
                    <span className="absolute right-3 bottom-3 grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-cream text-plum opacity-0 shadow-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="arrow-up-right" className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4 px-1">
                  <div className="min-w-0">
                    <p className="text-[0.54rem] font-semibold tracking-[0.15em] text-mauve uppercase">
                      {project.categories.slice(0, 2).join(" · ")}
                    </p>
                    <h3 className="mt-1.5 truncate font-display text-[1.25rem] leading-tight tracking-[-0.02em] text-plum">
                      {project.title}
                      <span className="ml-2 font-script text-[1.15rem] font-normal text-rose-deep">
                        {project.subtitle}
                      </span>
                    </h3>
                  </div>
                  <span className="shrink-0 pt-4 font-display text-[0.6rem] tracking-[0.08em] text-mauve/70">
                    {project.year}
                  </span>
                </div>
              </button>
            </article>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 rounded-2xl border border-plum/10 bg-cream/60 p-8 text-center text-sm text-ink/60">
            Nothing here just yet — the next piece might be yours.
          </p>
        )}
      </div>
    </section>
  );
}
