import { process } from "@/data/site";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { Reveal } from "./ui/Reveal";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden bg-blush-soft py-20 md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 8% 20%, rgba(250,246,240,0.85) 0%, rgba(248,234,229,0) 70%)",
          }}
        />
        <span className="absolute top-20 right-10 hidden font-script text-[8rem] leading-none text-rose/10 xl:block">
          slowly
        </span>
      </div>

      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-mauve">
                <span className="h-px w-6 bg-rose" />
                {process.eyebrow}
              </p>
              <h2
                id="process-title"
                className="mt-5 max-w-[12ch] text-balance font-display text-[clamp(2.4rem,4.5vw,3.7rem)] leading-[1.02] font-light tracking-[-0.04em] text-plum"
              >
                {process.titleLead}{" "}
                <em className="font-normal italic text-rose-deep">{process.titleAccent}</em>
              </h2>
              <p className="mt-5 max-w-[28rem] text-[0.89rem] leading-[1.9] text-ink/60">
                {process.intro}
              </p>

              <div className="mt-8 max-w-[26rem] rounded-[1.4rem] border border-white/80 bg-white/55 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2.5">
                  <Icon name="sparkle" className="h-3 w-3 text-rose-deep" />
                  <p className="text-[0.56rem] font-semibold tracking-[0.17em] text-mauve uppercase">
                    A little promise
                  </p>
                </div>
                <p className="mt-4 font-script text-[1.85rem] leading-[1.15] text-plum">
                  {process.note}
                </p>
                <p className="mt-3 text-[0.76rem] leading-relaxed text-ink/55">{process.footerNote}</p>
                <Button href="#contact" size="sm" className="mt-5" arrow="up-right">
                  Begin a project
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-plum/15">
              {process.steps.map((step, index) => (
                <Reveal as="li" key={step.number} delay={index * 75}>
                  <div className="group relative border-b border-plum/15">
                    <div className="grid grid-cols-[auto_1fr] gap-4 py-6 transition-all duration-500 sm:grid-cols-[auto_1fr_auto] sm:gap-7 sm:py-7 md:py-8">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-plum/20 bg-cream/45 font-display text-[0.82rem] tracking-[0.03em] text-rose-deep transition-all duration-500 group-hover:border-plum group-hover:bg-plum group-hover:text-cream sm:h-12 sm:w-12">
                        {step.number}
                      </span>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          <p className="text-[0.53rem] font-semibold tracking-[0.18em] text-mauve uppercase">
                            {step.tag}
                          </p>
                          <span className="hidden h-px w-6 bg-plum/20 sm:block" />
                        </div>
                        <h3 className="mt-2 font-display text-[1.45rem] leading-[1.15] tracking-[-0.025em] text-plum md:text-[1.7rem]">
                          {step.title}
                        </h3>
                        <p className="mt-2.5 max-w-[36rem] text-[0.8rem] leading-[1.85] text-ink/55">
                          {step.description}
                        </p>
                      </div>

                      <span className="col-start-2 mt-1 grid h-9 w-9 place-items-center justify-self-start rounded-full border border-plum/12 text-rose-deep transition-all duration-500 group-hover:border-rose/40 group-hover:bg-white/60 sm:col-start-auto sm:self-center">
                        <Icon
                          name="arrow-up-right"
                          className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={120}>
              <div className="mt-7 flex items-center gap-3 text-[0.66rem] tracking-[0.03em] text-mauve">
                <Icon name="sparkle" className="h-2.5 w-2.5 text-rose" />
                <span>Thoughtful collaboration, start to finish.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
