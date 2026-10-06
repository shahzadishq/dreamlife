import { COACHES } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Coaches() {
  return (
    <Section id="coaches" tone="tint">
      <SectionHeading eyebrow={COACHES.eyebrow} title={COACHES.title} />
      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {COACHES.people.map((c, i) => (
          <Reveal
            key={c.name}
            delay={(i % 6) * 60}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-ink/[0.06] bg-white p-6 text-center shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span
              className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-ink to-indigo-brand font-display text-lg font-black text-white ring-2 ring-lime/40 transition-transform duration-300 group-hover:scale-105"
              aria-hidden
            >
              {initials(c.name)}
            </span>
            <div>
              <p className="font-display text-sm font-extrabold text-ink">
                {c.name}
              </p>
              <p className="mt-0.5 text-xs text-slate-muted">{c.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
