import { services } from "@/data/site";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="noise relative overflow-hidden bg-plum py-20 text-cream md:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-rose/20 blur-[90px]" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-lavender/10 blur-[100px]" />
        <div className="absolute top-1/2 right-10 hidden h-52 w-52 -translate-y-1/2 rounded-full border border-cream/8 lg:block" />
        <span className="absolute top-16 right-24 hidden font-script text-6xl text-cream/10 xl:block">
          create
        </span>
      </div>

      <div className="container-luxe relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-blush/75">
              <span className="h-px w-6 bg-rose" />
              {services.eyebrow}
            </p>
            <h2
              id="services-title"
              className="mt-5 max-w-[15ch] text-balance font-display text-[clamp(2.4rem,4.8vw,4rem)] leading-[1.02] font-light tracking-[-0.04em] text-cream"
            >
              {services.titleLead}{" "}
              <em className="font-normal italic text-blush">{services.titleAccent}</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-[0.9rem] leading-[1.9] text-cream/60 lg:ml-auto">
              {services.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="group relative flex h-full flex-col rounded-[1.5rem] border border-cream/10 bg-cream/[0.035] p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-rose/45 hover:bg-cream/[0.07] md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 bg-cream/[0.06] text-blush transition-all duration-500 group-hover:border-rose/50 group-hover:bg-rose/15 group-hover:text-cream">
                    <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.4} />
                  </span>
                  <span className="font-display text-[0.65rem] tracking-[0.16em] text-cream/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[1.35rem] leading-[1.2] tracking-[-0.02em] text-cream">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.8rem] leading-[1.85] text-cream/55">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-cream/10 pt-4" aria-label={`${service.title} capabilities`}>
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center gap-1.5 text-[0.56rem] font-medium tracking-[0.1em] text-cream/45 uppercase"
                    >
                      <span className="h-1 w-1 rounded-full bg-rose/80" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col gap-7 border-t border-cream/12 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Icon name="sparkle" className="h-3.5 w-3.5 text-blush/80" />
              <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-cream/55 uppercase">
                Tools I love working with
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {services.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="group flex items-center gap-2.5 rounded-full border border-cream/12 bg-cream/[0.04] py-1.5 pr-4 pl-1.5 transition-colors duration-300 hover:border-blush/40 hover:bg-cream/[0.08]"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-cream/10 font-display text-[0.6rem] font-semibold text-blush">
                    {tool.short}
                  </span>
                  <span className="text-[0.62rem] font-medium tracking-[0.04em] text-cream/65">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
