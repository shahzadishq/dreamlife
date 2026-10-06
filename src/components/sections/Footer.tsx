import { FOOTER } from "@/lib/content";
import { Logo } from "../ui/Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      {/* Moving background circles */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <span className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-sky/15 blur-[90px] motion-safe:animate-drift" />
        <span className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-lime/10 blur-[100px] motion-safe:animate-drift [animation-delay:-6s]" />
        <span className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-indigo-brand/40 blur-[90px] motion-safe:animate-drift [animation-delay:-11s]" />
        <span className="absolute -right-10 bottom-10 h-40 w-40 rounded-full border border-white/5 motion-safe:animate-float-slow" />
        <span className="absolute left-10 top-1/2 h-24 w-24 rounded-full border border-white/5 motion-safe:animate-float-slow [animation-delay:-3s]" />
      </div>
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-5">
            <Logo variant="white" />
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              {FOOTER.tagline}
            </p>
            <div className="mt-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Newsletter
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Link columns */}
          {FOOTER.columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => {
                  const ext = /^https?:\/\//.test(l.href) || l.href.startsWith("mailto:");
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(ext && !l.href.startsWith("mailto:")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="link-underline text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}

          {/* Contact + socials */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Kontakt
            </p>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              {FOOTER.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <a
                href={`mailto:${FOOTER.email}`}
                className="mt-2 inline-block font-medium text-lime link-underline"
              >
                {FOOTER.email}
              </a>
            </address>
            <ul className="mt-2 flex flex-wrap gap-2">
              {FOOTER.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-lime/50 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} DreamLife Now. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER.legal.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 transition-colors hover:text-white link-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
