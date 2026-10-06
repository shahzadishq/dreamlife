import { PRESS } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function Press() {
  return (
    <Section id="presse" tone="white">
      <SectionHeading eyebrow={PRESS.eyebrow} title={PRESS.title} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRESS.items.map((p, i) => (
          <Reveal
            key={p.headline}
            delay={(i % 3) * 70}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-ink/[0.06] bg-cloud/50 p-6 transition-all duration-300 ease-premium hover:-translate-y-1 hover:bg-white hover:shadow-card"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-ink/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/70">
              {p.outlet}
            </span>
            <p className="text-[15px] font-medium leading-snug text-ink">
              {p.headline}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
