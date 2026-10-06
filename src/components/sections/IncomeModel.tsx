import { INCOME } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function IncomeModel() {
  return (
    <Section id="einkommen" tone="cloud">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={INCOME.eyebrow}
            title={INCOME.title}
            align="left"
          />
          <Reveal className="flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-slate-body">
              {INCOME.body}
            </p>
            <blockquote className="rounded-2xl border-l-4 border-lime bg-white p-6 text-lg font-medium leading-relaxed text-ink shadow-card">
              {INCOME.highlight}
            </blockquote>
            <p className="text-sm text-slate-muted">{INCOME.footnote}</p>
          </Reveal>
        </div>

        <Reveal className="grid gap-4">
          {INCOME.stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center justify-between gap-6 rounded-2xl p-7 transition-transform duration-300 ease-premium hover:-translate-y-0.5 ${
                i === 0
                  ? "bg-ink text-white shadow-soft"
                  : "border border-ink/[0.06] bg-white shadow-card"
              }`}
            >
              <span
                className={`font-display text-3xl font-black sm:text-4xl ${
                  i === 0 ? "text-lime" : "text-ink"
                }`}
              >
                {s.value}
              </span>
              <span
                className={`max-w-[9rem] text-right text-sm font-medium ${
                  i === 0 ? "text-white/75" : "text-slate-muted"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
