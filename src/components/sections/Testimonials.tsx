import { TESTIMONIALS, TESTIMONIALS_META } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Quote } from "../ui/Icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Testimonials() {
  return (
    <Section id="bewertungen" tone="tint">
      <SectionHeading
        eyebrow={TESTIMONIALS_META.eyebrow}
        title={TESTIMONIALS_META.title}
      />

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name + t.meta}
            delay={(i % 3) * 70}
            className="break-inside-avoid rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover"
          >
            <Quote className="h-7 w-7 text-lime" />
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
              <span
                className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gradient-to-br from-ink to-indigo-brand text-xs font-extrabold text-white"
                aria-hidden
              >
                {initials(t.name)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-ink">{t.name}</p>
                <p className="truncate text-xs text-slate-muted">{t.meta}</p>
              </div>
              {t.link && (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs font-semibold text-sky-600 link-underline"
                >
                  Instagram
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Button href={TESTIMONIALS_META.cta.href} variant="ghost">
          {TESTIMONIALS_META.cta.label}
        </Button>
      </Reveal>
    </Section>
  );
}
