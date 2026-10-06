import { VALUE_PROPS } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Icon, type IconName } from "../ui/Icons";

export function ValueProps() {
  return (
    <Section id="vorteile" tone="tint">
      <SectionHeading
        eyebrow={VALUE_PROPS.eyebrow}
        title={VALUE_PROPS.title}
        intro={VALUE_PROPS.intro}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VALUE_PROPS.items.map((it, i) => (
          <Reveal
            key={it.title}
            delay={(i % 3) * 80}
            className="group relative flex flex-col gap-4 rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-lime/40 hover:shadow-card-hover"
          >
            <span
              className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-lime ring-1 ring-ink/10 transition-colors duration-300 group-hover:bg-lime group-hover:text-ink"
              aria-hidden
            >
              <Icon name={it.icon as IconName} className="h-6 w-6" />
            </span>
            <h3 className="text-xl font-extrabold text-ink">{it.title}</h3>
            <p className="text-[15px] leading-relaxed text-slate-body">
              {it.body}
            </p>
            <span
              className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-lime to-transparent transition-transform duration-500 ease-premium group-hover:scale-x-100"
              aria-hidden
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
