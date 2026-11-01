import { brand, footer, socials } from "@/data/site";
import { Icon } from "./ui/Icon";
import { InstagramLink } from "./ui/InstagramLink";
import { Logo } from "./ui/Logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-plum/10 bg-cream">
      <div className="container-luxe pt-14 md:pt-20">
        <div className="grid gap-11 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <a
              href="#top"
              aria-label="made.byazka — back to top"
              className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-8"
            >
              <Logo showTagline />
            </a>
            <p className="mt-5 max-w-[22rem] text-[0.82rem] leading-[1.9] text-ink/55">
              {footer.blurb}
            </p>
            <InstagramLink className="mt-6" label="Follow the studio" />
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="md:col-span-2 lg:col-span-2">
              <h2 className="text-[0.57rem] font-semibold tracking-[0.19em] text-mauve uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[0.78rem] text-ink/60 transition-colors duration-300 hover:text-rose-deep"
                    >
                      {link.label}
                      <Icon
                        name="arrow-up-right"
                        className="h-2.5 w-2.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-3 lg:col-span-4">
            <h2 className="text-[0.57rem] font-semibold tracking-[0.19em] text-mauve uppercase">
              Say hello
            </h2>
            <a
              href={`mailto:${brand.email}`}
              className="mt-5 inline-flex items-center gap-2 font-display text-[1.15rem] tracking-[-0.02em] break-all text-plum transition-colors hover:text-rose-deep"
            >
              {brand.email}
              <Icon name="arrow-up-right" className="h-3.5 w-3.5 shrink-0 text-rose-deep" />
            </a>
            <p className="mt-3 max-w-[17rem] text-[0.72rem] leading-relaxed text-ink/45">
              {brand.location} · {brand.workingNote}
            </p>

            <ul className="mt-5 flex items-center gap-2" aria-label="Social profiles">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} — ${brand.handle}`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-plum/15 text-ink/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose hover:bg-blush/40 hover:text-plum"
                  >
                    <Icon name={social.icon} className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-plum/10 py-6 sm:flex-row">
          <p className="order-2 text-center text-[0.63rem] tracking-[0.01em] text-ink/40 sm:order-1 sm:text-left">
            {footer.copyright}
          </p>
          <p className="order-3 hidden text-[0.6rem] italic text-mauve/70 sm:order-2 sm:block">
            {footer.credit}
          </p>
          <a
            href="#top"
            className="group order-1 inline-flex items-center gap-2 text-[0.58rem] font-semibold tracking-[0.14em] text-mauve uppercase transition-colors hover:text-plum sm:order-3"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-plum/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-plum/40">
              <Icon name="arrow-right" className="h-3 w-3 -rotate-90" strokeWidth={1.8} />
            </span>
          </a>
        </div>

        <div aria-hidden="true" className="pointer-events-none -mb-1 select-none overflow-hidden">
          <p className="whitespace-nowrap text-center font-display text-[clamp(3.3rem,14vw,11rem)] leading-[0.75] font-light tracking-[-0.06em] text-plum/[0.07]">
            made.byazka
          </p>
        </div>
      </div>
    </footer>
  );
}
