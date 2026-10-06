import { COMPARISON } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Check, Clock, MapPin } from "../ui/Icons";

export function Comparison() {
  return (
    <Section id="vergleich" tone="white">
      <SectionHeading
        eyebrow={COMPARISON.eyebrow}
        title={COMPARISON.title}
        intro={COMPARISON.intro}
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
        {COMPARISON.columns.map((col, i) => {
          const brand = col.tone === "brand";
          return (
            <Reveal
              key={col.label}
              delay={i * 90}
              className={`relative flex flex-col overflow-hidden rounded-3xl p-8 ${
                brand
                  ? "bg-gradient-to-br from-ink to-indigo-brand text-white shadow-soft ring-2 ring-lime/40"
                  : "border border-ink/[0.08] bg-cloud text-ink"
              }`}
            >
              {brand && (
                <span className="absolute right-5 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                  Empfohlen
                </span>
              )}
              <h3
                className={`font-display text-2xl font-extrabold ${
                  brand ? "text-white" : "text-ink"
                }`}
              >
                {col.label}
              </h3>
              {col.sub && (
                <p className={`mt-1 text-sm ${brand ? "text-lime" : "text-slate-muted"}`}>
                  {col.sub}
                </p>
              )}
              <ul className="mt-6 flex flex-col divide-y divide-current/10">
                {col.rows.map((r) => (
                  <li
                    key={r.k}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span
                      className={`text-sm ${brand ? "text-white/70" : "text-slate-muted"}`}
                    >
                      {r.k}
                    </span>
                    <span
                      className={`flex items-center gap-2 text-right text-sm font-semibold ${
                        brand ? "text-white" : "text-ink"
                      }`}
                    >
                      {brand && r.k === "Ortsunabhängig" && (
                        <MapPin className="h-4 w-4 text-lime" />
                      )}
                      {brand && r.k === "Arbeitszeit" && (
                        <Clock className="h-4 w-4 text-lime" />
                      )}
                      {brand && r.k === "Flexibilität" && (
                        <Check className="h-4 w-4 text-lime" />
                      )}
                      {r.v}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-base leading-relaxed text-slate-body">
          {COMPARISON.conclusion}
        </p>
        <p className="mt-4 font-display text-xl font-extrabold text-ink">
          {COMPARISON.kicker}
        </p>
      </Reveal>
    </Section>
  );
}
