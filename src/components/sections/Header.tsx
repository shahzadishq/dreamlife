"use client";

import { useEffect, useState } from "react";
import { Logo } from "../ui/Logo";
import { NAV_LINKS, HERO } from "@/lib/content";
import { ArrowRight } from "../ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-premium ${
        scrolled
          ? "border-b border-ink/5 bg-white/85 py-2.5 shadow-[0_1px_20px_-10px_rgba(16,29,69,0.25)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="container-px flex items-center justify-between gap-6">
        <Logo
          variant={scrolled || open ? "dark" : "white"}
          priority
          className="relative z-50"
        />

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`link-underline text-sm font-medium transition-colors ${
                    scrolled ? "text-ink/80 hover:text-ink" : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={HERO.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition-all duration-300 ease-premium hover:bg-lime-300 hover:-translate-y-0.5"
          >
            {HERO.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className={`relative z-50 grid h-11 w-11 place-items-center rounded-full ring-1 transition-colors lg:hidden ${
            scrolled || open
              ? "bg-ink/[0.04] text-ink ring-ink/10"
              : "bg-white/10 text-white ring-white/25"
          }`}
        >
          <span className="sr-only">Menü</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 origin-top bg-white transition-all duration-300 ease-premium lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-px flex h-full flex-col justify-center gap-2 pt-20">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/5 py-4 text-2xl font-display font-extrabold text-ink transition-colors hover:text-lime-700"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={HERO.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-white"
          >
            {HERO.primaryCta.label}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
