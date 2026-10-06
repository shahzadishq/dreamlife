import { COMPARISON } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Check, Clock, MapPin } from "../ui/Icons";

export function Comparison() {
  return (
    <Section id="vergleich" tone="white" dots>
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
                {col.rows.map((r) => {
                  const isNet = r.k === "Netto";
                  return (
                    <li
                      key={r.k}
                      className={`flex items-center justify-between gap-4 py-3.5 ${
                        isNet
                          ? brand
                            ? "-mx-3 my-1 rounded-xl bg-lime/15 px-3"
                            : "-mx-3 my-1 rounded-xl bg-ink/[0.04] px-3"
                          : ""
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          isNet
                            ? brand
                              ? "font-semibold text-lime"
                              : "font-semibold text-ink"
                            : brand
                              ? "text-white/70"
                              : "text-slate-muted"
                        }`}
                      >
                        {r.k}
                      </span>
                      <span
                        className={`flex items-center gap-2 text-right font-semibold ${
                          isNet ? "text-base" : "text-sm"
                        } ${brand ? "text-white" : "text-ink"}`}
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
                  );
                })}
              </ul>

              {/* Freedom / net / workload meters */}
              <div className="mt-6 flex flex-col gap-3 border-t border-current/10 pt-5">
                {(
                  [
                    ["Freiheit", (brand ? COMPARISON.meters.nomad : COMPARISON.meters.attorney).freedom],
                    ["Netto-Anteil", (brand ? COMPARISON.meters.nomad : COMPARISON.meters.attorney).net],
                    ["Zeitaufwand", (brand ? COMPARISON.meters.nomad : COMPARISON.meters.attorney).time],
                  ] as const
                ).map(([label, val]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className={`w-28 flex-none text-xs ${brand ? "text-white/60" : "text-slate-muted"}`}>
                      {label}
                    </span>
                    <span className={`h-2 flex-1 overflow-hidden rounded-full ${brand ? "bg-white/15" : "bg-ink/10"}`}>
                      <span
                        className={`block h-full rounded-full ${brand ? "bg-lime" : "bg-slate-muted/70"}`}
                        style={{ width: `${val}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
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
