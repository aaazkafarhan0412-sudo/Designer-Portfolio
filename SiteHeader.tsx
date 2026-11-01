import { useEffect, useState } from "react";
import { brand, navLinks } from "@/data/site";
import { cn } from "@/utils/cn";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { InstagramLink } from "./ui/InstagramLink";
import { Logo } from "./ui/Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500",
          scrolled
            ? "border-b border-plum/10 bg-cream/90 shadow-[0_10px_35px_-30px_rgba(45,20,32,.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream/70 backdrop-blur-md"
        )}
      >
        <div className="container-luxe flex h-20 items-center justify-between gap-6 md:h-[86px]">
          <a
            href="#top"
            className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-8"
            aria-label="made.byazka — back to top"
          >
            <Logo />
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative rounded-full px-4 py-2.5 text-[0.72rem] font-semibold tracking-[0.12em] uppercase transition-colors duration-300",
                        isActive ? "text-plum" : "text-ink/55 hover:text-rose-deep"
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-rose transition-transform duration-500",
                          isActive ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <InstagramLink size="sm" label="Instagram" className="hidden xl:inline-flex" />
            <Button href="#contact" size="sm" arrow="up-right" className="hidden sm:inline-flex">
              Let’s talk
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="grid h-11 w-11 place-items-center rounded-full border border-plum/15 text-plum transition-colors hover:border-plum/40 hover:bg-white/60 lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[90] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className="absolute inset-0 animate-fade-in bg-plum-deep/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-[24rem] animate-fade-up flex-col overflow-y-auto bg-cream px-6 pt-5 pb-8 shadow-2xl sm:px-8">
            <div className="flex items-center justify-between">
              <Logo showTagline />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-plum/15 text-plum transition hover:bg-blush"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-10 flex-1">
              <ul className="border-t border-plum/10">
                {navLinks.map((link, index) => (
                  <li key={link.href} className="border-b border-plum/10">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[1.9rem] leading-none tracking-[-0.03em] text-plum transition-colors group-hover:text-rose-deep">
                        {link.label}
                      </span>
                      <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-mauve">
                        0{index + 1}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-5">
                <InstagramLink onDark={false} className="w-full" label="Follow the studio" />
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-3 text-sm text-ink/70 hover:text-rose-deep"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-plum/15">
                    <Icon name="mail" className="h-4 w-4" />
                  </span>
                  {brand.email}
                </a>
                <Button href="#contact" onClick={() => setOpen(false)} className="w-full" arrow="up-right">
                  Start a project
                </Button>
              </div>
            </nav>

            <div className="mt-10 border-t border-plum/10 pt-5">
              <p className="text-[0.6rem] font-semibold tracking-[0.18em] text-mauve uppercase">
                {brand.location}
              </p>
              <p className="mt-1 font-script text-2xl text-rose-deep">{brand.availability}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
