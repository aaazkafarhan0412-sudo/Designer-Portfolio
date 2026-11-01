import { brand, hero, marqueeItems } from "@/data/site";
import { Artwork } from "@/components/artwork";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { InstagramLink } from "./ui/InstagramLink";
import { MediaFrame } from "./ui/MediaFrame";
import { RotatingSeal } from "./ui/RotatingSeal";

function ProfilePortrait() {
  return (
    <MediaFrame
      src={brand.profileImage}
      alt={brand.profileImageAlt}
      className="h-11 w-11 shrink-0 rounded-full ring-2 ring-white"
      loading="eager"
    >
      <div className="grid h-full w-full place-items-center bg-blush">
        <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
          <g transform="translate(20 20)">
            {[0, 72, 144, 216, 288].map((rotation) => (
              <ellipse key={rotation} rx="3.6" ry="7.2" cy="-5.2" transform={`rotate(${rotation})`} fill="#462536" />
            ))}
            <circle r="2.4" fill="#BD8491" />
          </g>
        </svg>
      </div>
    </MediaFrame>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-cream pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24"
    >
      {/* soft atmospheric background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 82% 28%, rgba(239,216,211,0.72) 0%, rgba(250,246,240,0) 68%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: "radial-gradient(rgba(70,37,54,0.13) 1px, transparent 1px)",
            backgroundSize: "27px 27px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-24 -left-24 h-72 w-72 rounded-full bg-lavender/25 blur-3xl" />
      </div>

      <div className="container-luxe">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          {/* Introduction */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-6">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-plum/10 bg-white/55 px-4 py-2 text-[0.6rem] font-semibold tracking-[0.16em] text-plum uppercase shadow-[0_8px_30px_-22px_rgba(70,37,54,.5)] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse-dot" />
                {brand.availability}
              </span>
            </div>

            <p
              className="eyebrow mt-6 text-mauve animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <Icon name="sparkle" className="h-2.5 w-2.5 text-rose" />
              {hero.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="mt-5 animate-fade-up font-display text-[clamp(2.85rem,6.1vw,5.25rem)] leading-[0.98] font-light tracking-[-0.045em] text-plum"
              style={{ animationDelay: "150ms" }}
            >
              <span className="block">{hero.headlineTop}</span>
              <span className="block">{hero.headlineMiddle}</span>
              <span className="relative inline-block pr-2">
                <em className="font-display font-normal italic text-rose-deep">
                  {hero.headlineAccent}
                </em>
                <svg
                  viewBox="0 0 210 16"
                  className="absolute -bottom-1 left-0 h-3 w-[92%] overflow-visible text-rose/70 sm:-bottom-2"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11C43 4 101 2 151 5c21 1 38 3 55 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p
              className="mt-7 max-w-[34rem] animate-fade-up text-[0.94rem] leading-[1.85] text-ink/68 md:text-[1rem]"
              style={{ animationDelay: "230ms" }}
            >
              {hero.intro}
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "310ms" }}
            >
              <Button href={hero.primaryCta.href} size="lg" arrow="right">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg" arrow="up-right">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div
              className="mt-10 flex max-w-[35rem] animate-fade-up flex-col gap-5 border-t border-plum/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
              style={{ animationDelay: "390ms" }}
            >
              <InstagramLink label={hero.instagramLabel} />
              <span className="flex items-center gap-2.5 text-[0.65rem] leading-relaxed tracking-[0.02em] text-ink/45">
                <span className="grid h-7 w-7 place-items-center rounded-full border border-plum/12">
                  <Icon name="sparkle" className="h-2.5 w-2.5 text-rose" />
                </span>
                <span>
                  {brand.location}
                  <br />
                  {brand.workingNote}
                </span>
              </span>
            </div>
          </div>

          {/* Artwork composition */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[29rem] animate-fade-in pb-8 sm:max-w-[34rem] sm:pb-6 lg:max-w-none">
              <div
                className="absolute inset-x-3 top-6 bottom-10 -z-10 rounded-[50%] bg-blush/55 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 -z-10 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-rose/35"
                aria-hidden="true"
              />

              <span
                className="absolute top-1 right-2 z-20 animate-twinkle text-rose-deep sm:top-2 sm:right-8"
                aria-hidden="true"
              >
                <Icon name="sparkle" className="h-6 w-6" />
              </span>
              <span
                className="absolute bottom-28 -left-1 z-20 animate-twinkle text-mauve/70"
                style={{ animationDelay: "1.4s" }}
                aria-hidden="true"
              >
                <Icon name="sparkle" className="h-4 w-4" />
              </span>

              <div className="flex flex-col items-center px-2">
                <div className="relative w-[66%] max-w-[19rem] animate-float sm:max-w-[21rem]">
                  <div className="arch relative overflow-hidden border-[9px] border-white bg-lavender shadow-float">
                    <div className="aspect-[4/5] w-full">
                      <MediaFrame
                        src={brand.profileImage}
                        alt={brand.profileImageAlt}
                        className="h-full w-full"
                        loading="eager"
                      >
                        <Artwork artwork="purpleReverie" />
                      </MediaFrame>
                    </div>
                  </div>
                  <span className="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 rounded-full border border-plum/10 bg-cream/90 px-3 py-1.5 text-[0.5rem] font-semibold tracking-[0.18em] text-mauve uppercase shadow-sm backdrop-blur">
                    The studio, lately
                  </span>
                </div>

                <div className="relative z-20 -mt-5 ml-[4%] flex w-fit items-center gap-3 rounded-full border border-white/80 bg-white/85 py-2 pr-5 pl-2 shadow-[0_18px_45px_-22px_rgba(70,37,54,.45)] backdrop-blur-md">
                  <ProfilePortrait />
                  <div>
                    <p className="font-display text-[1.02rem] leading-none font-medium tracking-[-0.02em] text-plum">
                      Hello, I’m {brand.designer}
                    </p>
                    <p className="mt-1.5 text-[0.52rem] font-semibold tracking-[0.16em] text-mauve uppercase">
                      Graphic designer & illustrator
                    </p>
                  </div>
                </div>
              </div>

              {/* small artwork cards */}
              <div className="absolute top-[9%] -left-1 z-20 w-[27%] max-w-[8.5rem] -rotate-[8deg] sm:left-0 sm:w-[25%]">
                <div className="overflow-hidden rounded-[1.15rem] border-[5px] border-white bg-white shadow-card transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:rotate-1">
                  <div className="aspect-[3/4]">
                    <Artwork artwork="be" />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-[21%] z-20 w-[29%] max-w-[9rem] rotate-[7deg] sm:w-[27%]">
                <div className="overflow-hidden rounded-[1.15rem] border-[5px] border-white bg-white shadow-card transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-2 hover:rotate-2">
                  <div className="aspect-[3/4]">
                    <Artwork artwork="desi" />
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 -bottom-9 z-30 sm:right-2 sm:-bottom-7">
                <RotatingSeal className="h-[4.9rem] w-[4.9rem] sm:h-[5.6rem] sm:w-[5.6rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const group = (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-7 font-display text-xl tracking-[-0.01em] text-plum/80 md:px-9 md:text-2xl">
            {item}
          </span>
          <Icon name="sparkle" className="h-2.5 w-2.5 text-rose" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Design services"
      className="overflow-hidden border-y border-plum/10 bg-blush-soft py-4 md:py-5"
    >
      <div className="marquee-track">
        {group}
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {group}
        </div>
      </div>
    </section>
  );
}
