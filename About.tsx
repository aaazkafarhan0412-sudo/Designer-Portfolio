import { about, brand } from "@/data/site";
import { Artwork } from "@/components/artwork";
import { Icon } from "./ui/Icon";
import { Logo } from "./ui/Logo";
import { MediaFrame } from "./ui/MediaFrame";
import { Reveal } from "./ui/Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-cream py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-lavender/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-luxe">
        <div className="grid gap-7 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <p className="eyebrow text-mauve">
              <span className="h-px w-6 bg-rose" />
              {about.eyebrow}
            </p>
            <h2
              id="about-title"
              className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(2.35rem,4.5vw,3.85rem)] leading-[1.04] font-light tracking-[-0.04em] text-plum"
            >
              {about.titleLead}{" "}
              <em className="font-normal italic text-rose-deep">{about.titleAccent}</em>
            </h2>
          </Reveal>

          <Reveal delay={120} className="md:col-span-4 md:justify-self-end">
            <ul className="flex flex-wrap gap-2 md:justify-end" aria-label="Studio values">
              {about.values.map((value) => (
                <li
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-plum/12 bg-white/50 px-3.5 py-2 text-[0.6rem] font-semibold tracking-[0.14em] text-mauve uppercase"
                >
                  <Icon name="sparkle" className="h-2 w-2 text-rose" />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* replaceable studio image */}
          <Reveal className="relative lg:col-span-5" delay={60}>
            <div className="relative mx-auto w-full max-w-[26rem]">
              <div
                className="absolute -inset-3 -z-10 rotate-2 rounded-[16rem_16rem_2rem_2rem] border border-rose/25"
                aria-hidden="true"
              />
              <div className="absolute -bottom-6 left-7 -z-10 h-40 w-40 rounded-full bg-blush/80" aria-hidden="true" />

              <MediaFrame
                src={about.image || brand.profileImage}
                alt={about.imageAlt}
                className="arch aspect-[4/5] border-[10px] border-white bg-porcelain shadow-soft"
              >
                <Artwork artwork="collection" />
              </MediaFrame>

              <div className="absolute -top-4 -right-3 grid h-20 w-20 rotate-6 place-items-center rounded-full border border-plum/10 bg-cream text-center shadow-sm sm:-right-6 sm:h-24 sm:w-24">
                <div>
                  <Icon name="sparkle" className="mx-auto h-3 w-3 text-rose" />
                  <p className="mt-1.5 text-[0.49rem] font-semibold tracking-[0.14em] text-plum uppercase">
                    Made
                    <br />
                    with soul
                  </p>
                </div>
              </div>

              <div className="absolute -right-2 -bottom-7 left-6 rounded-[1.2rem] border border-white/80 bg-white/90 p-4 shadow-card backdrop-blur sm:-right-7">
                <p className="font-script text-[1.5rem] leading-none text-plum">designing from the heart</p>
                <div className="mt-3 flex items-center justify-between gap-6 border-t border-plum/10 pt-3">
                  <span className="text-[0.53rem] font-semibold tracking-[0.16em] text-mauve uppercase">
                    {about.imageCaption}
                  </span>
                  <Icon name="arrow-up-right" className="h-3.5 w-3.5 text-rose-deep" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={140}>
            <div className="max-w-[38rem] lg:ml-4 xl:ml-10">
              <div className="space-y-5">
                {about.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "text-[1.02rem] leading-[1.85] text-ink/75 md:text-[1.08rem]"
                        : "text-[0.92rem] leading-[1.9] text-ink/58"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-9 grid grid-cols-3 gap-3 border-y border-plum/12 py-6 sm:gap-6">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-[1.9rem] leading-none font-light tracking-[-0.03em] text-plum sm:text-[2.4rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[0.57rem] font-semibold tracking-[0.13em] text-mauve uppercase sm:text-[0.61rem]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Logo showTagline />
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-medium text-mauve transition-colors hover:text-rose-deep"
                  >
                    <Icon name="instagram" className="h-3.5 w-3.5" />
                    {brand.handle}
                    <Icon name="arrow-up-right" className="h-3 w-3" />
                  </a>
                </div>
                <div className="text-right">
                  <p className="font-script text-4xl leading-none text-plum">{brand.designer}</p>
                  <p className="mt-1.5 text-[0.52rem] font-semibold tracking-[0.18em] text-mauve uppercase">
                    Founder & designer
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
