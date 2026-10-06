import { SUCCESS_STORIES, STORIES_META } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { ArrowRight } from "../ui/Icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function SuccessStories() {
  return (
    <Section id="erfolgsgeschichten" tone="white">
      <SectionHeading
        eyebrow={STORIES_META.eyebrow}
        title={STORIES_META.title}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SUCCESS_STORIES.map((s, i) => (
          <Reveal
            key={s.name + s.role}
            delay={(i % 3) * 70}
            className="group flex h-full flex-col gap-4 rounded-2xl border border-ink/[0.06] bg-cloud/60 p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:bg-white hover:shadow-card-hover"
          >
            <div className="flex items-center gap-3.5">
              <span
                className="grid h-12 w-12 flex-none place-items-center rounded-full bg-gradient-to-br from-ink to-indigo-brand text-sm font-extrabold text-white ring-2 ring-lime/40"
                aria-hidden
              >
                {initials(s.name)}
              </span>
              <div>
                <p className="font-display text-base font-extrabold text-ink">
                  {s.name}
                </p>
                <p className="text-xs font-medium text-slate-muted">{s.role}</p>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-slate-body">
              {s.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="max-w-2xl text-sm text-slate-muted">
          {STORIES_META.note}
        </p>
        <Button href={STORIES_META.cta.href} variant="ghost">
          {STORIES_META.cta.label}
        </Button>
      </Reveal>
    </Section>
  );
}
