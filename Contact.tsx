import { useEffect, useRef, useState } from "react";
import { brand, contact, socials } from "@/data/site";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { InstagramLink } from "./ui/InstagramLink";
import { Reveal } from "./ui/Reveal";

type CopyStatus = "idle" | "copied" | "error";

function CopyEmailButton() {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(brand.email);
      } else {
        const field = document.createElement("textarea");
        field.value = brand.email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        document.execCommand("copy");
        document.body.removeChild(field);
      }
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 2400);
  };

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${brand.email} to clipboard`}
        className="inline-flex items-center gap-2 rounded-full border border-cream/18 px-3.5 py-2 text-[0.56rem] font-semibold tracking-[0.12em] text-cream/65 uppercase transition-colors hover:border-cream/40 hover:text-cream"
      >
        <Icon name={status === "copied" ? "check" : "copy"} className="h-3 w-3" strokeWidth={1.8} />
        {status === "copied" ? "Copied" : "Copy"}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === "copied"
          ? "Email address copied to clipboard."
          : status === "error"
            ? `Could not copy automatically. Please email ${brand.email}.`
            : ""}
      </span>
      {status === "error" && (
        <span className="text-[0.6rem] text-blush">Please use the link to email.</span>
      )}
    </span>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="noise relative overflow-hidden bg-plum-deep py-20 text-cream md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 15% 15%, rgba(189,132,145,0.26) 0%, transparent 70%), radial-gradient(ellipse 55% 60% at 88% 90%, rgba(226,214,226,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="absolute -top-24 right-[-4rem] h-80 w-80 rounded-full border border-cream/8" />
        <div className="absolute top-10 right-10 h-44 w-44 rounded-full border border-cream/6" />
        <span className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-script text-[12rem] leading-none text-cream/[0.035] lg:block">
          hello
        </span>
      </div>

      <div className="container-luxe relative">
        <div className="mx-auto max-w-[54rem] text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/15 bg-cream/[0.05] px-4 py-2 text-[0.58rem] font-semibold tracking-[0.17em] text-blush uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blush animate-pulse-dot" />
              {brand.availability}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow mt-7 justify-center text-blush/60">
              <Icon name="sparkle" className="h-2.5 w-2.5 text-rose" />
              {contact.eyebrow}
            </p>
            <h2
              id="contact-title"
              className="mt-5 text-balance font-display text-[clamp(2.65rem,6.2vw,5.2rem)] leading-[0.98] font-light tracking-[-0.045em] text-cream"
            >
              <span className="block">{contact.titleTop}</span>
              <em className="mt-1 block font-normal italic text-blush">{contact.titleAccent}</em>
            </h2>
            <p className="mx-auto mt-6 max-w-[36rem] text-[0.93rem] leading-[1.9] text-cream/60">
              {contact.intro}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={contact.primaryCta.href}
                variant="rose"
                size="lg"
                arrow="up-right"
                className="w-full sm:w-auto"
              >
                {contact.primaryCta.label}
              </Button>
              <Button
                href={contact.secondaryCta.href}
                variant="outline-light"
                size="lg"
                arrow="up-right"
                className="w-full sm:w-auto"
              >
                Message me on Instagram
              </Button>
            </div>
            <div className="mt-5 flex items-center justify-center gap-2 text-[0.62rem] tracking-[0.03em] text-cream/35">
              <Icon name="sparkle" className="h-2 w-2 text-rose/70" />
              {contact.responseNote}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mx-auto mt-14 grid max-w-[62rem] gap-px overflow-hidden rounded-[1.5rem] border border-cream/12 bg-cream/12 md:grid-cols-3">
            <div className="bg-plum-deep/85 p-6 backdrop-blur md:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.54rem] font-semibold tracking-[0.18em] text-cream/40 uppercase">
                  {contact.emailLabel}
                </span>
                <CopyEmailButton />
              </div>
              <a
                href={`mailto:${brand.email}`}
                className="mt-4 inline-block font-display text-[1.25rem] leading-tight tracking-[-0.02em] break-all text-cream transition-colors hover:text-blush md:text-[1.4rem]"
              >
                {brand.email}
              </a>
              <p className="mt-3 text-[0.68rem] leading-relaxed text-cream/35">
                For projects, collaborations and lovely hellos.
              </p>
            </div>

            <div className="bg-plum-deep/85 p-6 backdrop-blur md:p-7">
              <span className="text-[0.54rem] font-semibold tracking-[0.18em] text-cream/40 uppercase">
                Instagram
              </span>
              <InstagramLink onDark className="mt-4" showHandle />
              <p className="mt-3 text-[0.68rem] leading-relaxed text-cream/35">
                Behind the scenes & the best place to see the studio in real time.
              </p>
            </div>

            <div className="bg-plum-deep/85 p-6 backdrop-blur md:p-7">
              <span className="text-[0.54rem] font-semibold tracking-[0.18em] text-cream/40 uppercase">
                The studio
              </span>
              <p className="mt-4 font-display text-[1.25rem] leading-tight tracking-[-0.02em] text-cream">
                {brand.location}
              </p>
              <p className="mt-2 text-[0.68rem] leading-relaxed text-cream/40">
                {brand.workingNote}
              </p>
              <p className="mt-4 text-[0.61rem] leading-relaxed text-cream/35">{contact.note}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mx-auto mt-10 flex max-w-[62rem] flex-col items-center justify-between gap-5 border-t border-cream/10 pt-7 sm:flex-row">
            <p className="text-center text-[0.65rem] tracking-[0.02em] text-cream/35 sm:text-left">
              More ways to say hello
            </p>
            <ul className="flex items-center gap-2" aria-label="Social profiles">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — ${brand.handle} (opens in a new tab)`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-blush/60 hover:bg-cream/5 hover:text-cream"
                  >
                    <Icon name={social.icon} className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
