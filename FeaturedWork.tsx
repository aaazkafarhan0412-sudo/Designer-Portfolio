import { projects, work, type Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";

type FeaturedWorkProps = {
  onOpenProject: (project: Project) => void;
};

export function FeaturedWork({ onOpenProject }: FeaturedWorkProps) {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="relative bg-cream py-20 md:py-28 lg:py-32">
      <div className="container-luxe">
        <div className="grid gap-7 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="eyebrow text-mauve">
              <span className="h-px w-6 bg-rose" />
              {work.eyebrow}
            </p>
            <h2
              id="work-title"
              className="mt-5 max-w-[17ch] text-balance font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.03] font-light tracking-[-0.04em] text-plum"
            >
              {work.titleLead}{" "}
              <em className="font-normal italic text-rose-deep">{work.titleAccent}</em>
            </h2>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <div className="md:ml-auto md:max-w-[24rem]">
              <p className="text-[0.89rem] leading-[1.9] text-ink/60">{work.intro}</p>
              <Button href="#showcase" variant="outline" size="sm" className="mt-5" arrow="right">
                {work.viewAll}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-16">
          {featured.map((project, index) => (
            <Reveal as="article" key={project.id} delay={(index % 2) * 100}>
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                aria-label={`View the ${project.title}: ${project.subtitle} case study`}
                className="group block w-full rounded-[1.65rem] text-left focus-visible:outline-2 focus-visible:outline-offset-[10px] focus-visible:outline-rose-deep"
              >
                <div className="relative rounded-[1.6rem] border border-plum/10 bg-white/55 p-2.5 shadow-[0_24px_60px_-45px_rgba(70,37,54,.6)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:border-rose/35 group-hover:shadow-card md:p-3">
                  <div className="relative overflow-hidden rounded-[1.15rem] bg-porcelain">
                    <div className="aspect-[4/5] w-full">
                      <ProjectVisual
                        project={project}
                        className="transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                      />
                    </div>

                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-deep/65 via-plum-deep/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      aria-hidden="true"
                    />

                    <span className="absolute top-3.5 left-3.5 rounded-full border border-white/50 bg-cream/85 px-3 py-1.5 text-[0.52rem] font-semibold tracking-[0.14em] text-plum uppercase backdrop-blur-sm">
                      {project.categories[0]}
                    </span>

                    <span className="absolute top-3.5 right-3.5 grid h-10 w-10 translate-y-1 place-items-center rounded-full border border-white/40 bg-cream/90 text-plum opacity-0 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="arrow-up-right" className="h-4 w-4" strokeWidth={1.8} />
                    </span>

                    <span className="absolute bottom-4 left-4 flex translate-y-2 items-center gap-2 rounded-full bg-cream/95 px-4 py-2.5 text-[0.56rem] font-semibold tracking-[0.14em] text-plum uppercase opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View project
                      <Icon name="arrow-right" className="h-3 w-3" strokeWidth={1.9} />
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-5 px-1">
                  <div className="min-w-0">
                    <p className="text-[0.56rem] font-semibold tracking-[0.16em] text-mauve uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 flex flex-wrap items-baseline gap-x-2.5 font-display text-[1.55rem] leading-[1.1] tracking-[-0.03em] text-plum md:text-[1.8rem]">
                      {project.title}
                      <em className="font-display text-[1.12rem] font-normal italic text-rose-deep md:text-[1.2rem]">
                        {project.subtitle}
                      </em>
                    </h3>
                    <p className="mt-2.5 max-w-[34ch] text-[0.79rem] leading-[1.8] text-ink/55">
                      {project.shortDescription}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 font-display text-[0.65rem] tracking-[0.1em] text-mauve/70">
                    {project.year}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[1.4rem] border border-plum/10 bg-porcelain/55 px-6 py-5 sm:flex-row sm:px-8">
            <p className="text-center text-[0.8rem] leading-relaxed text-ink/55 sm:text-left">
              There’s more where that came from — including little experiments that never made the
              grid.
            </p>
            <Button href="#showcase" variant="ghost" size="sm" arrow="right" className="shrink-0">
              See the full showcase
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
