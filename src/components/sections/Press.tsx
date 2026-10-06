import Image from "next/image";
import { PRESS } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ArrowRight } from "../ui/Icons";

export function Press() {
  const [lead, ...rest] = PRESS.items;
  return (
    <Section id="presse" tone="cloud">
      <SectionHeading eyebrow={PRESS.eyebrow} title={PRESS.title} intro={PRESS.intro} />

      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {/* Lead article */}
        <Reveal className="lg:col-span-7">
          <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/[0.06] bg-white shadow-card transition-all duration-300 ease-premium hover:shadow-card-hover">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={asset(lead.image)}
                alt={lead.headline}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                {lead.outlet}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="max-w-xl font-display text-xl font-extrabold leading-snug text-white sm:text-2xl">
                  {lead.headline}
                </h3>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                  Artikel lesen
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Secondary list */}
        <div className="grid gap-5 lg:col-span-5">
          {rest.slice(0, 3).map((p, i) => (
            <Reveal key={p.headline} delay={i * 70}>
              <article className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-ink/[0.06] bg-white p-3 pr-5 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-card-hover">
                <div className="relative h-20 w-28 flex-none overflow-hidden rounded-xl">
                  <Image
                    src={asset(p.image)}
                    alt={p.headline}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-lime-700">
                    {p.outlet}
                  </span>
                  <p className="mt-1 line-clamp-3 text-sm font-medium leading-snug text-ink">
                    {p.headline}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Remaining full-width-ish cards */}
        {rest.slice(3).map((p, i) => (
          <Reveal key={p.headline} delay={i * 70} className="lg:col-span-6">
            <article className="group flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-ink/[0.06] bg-white p-3 pr-6 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-card-hover">
              <div className="relative h-24 w-32 flex-none overflow-hidden rounded-xl">
                <Image
                  src={asset(p.image)}
                  alt={p.headline}
                  fill
                  sizes="128px"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wide text-lime-700">
                  {p.outlet}
                </span>
                <p className="mt-1 text-sm font-medium leading-snug text-ink">
                  {p.headline}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
