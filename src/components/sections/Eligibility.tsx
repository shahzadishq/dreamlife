import Image from "next/image";
import { ELIGIBILITY, VERIFICATION } from "@/lib/content";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Check, Shield } from "../ui/Icons";
import verbraucherschutz from "../../../public/brand/badge-verbraucherschutz.webp";

export function Eligibility() {
  return (
    <Section id="passt-das" tone="cloud">
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Eligibility card */}
        <Reveal className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-card sm:p-10">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden />
            {ELIGIBILITY.eyebrow}
          </span>
          <h2 className="text-display-sm text-ink">{ELIGIBILITY.title}</h2>
          <p className="text-base leading-relaxed text-slate-body">
            {ELIGIBILITY.intro}
          </p>
          <ul className="flex flex-col gap-3">
            {ELIGIBILITY.items.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 rounded-xl bg-cloud p-4"
              >
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-lime text-ink">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] font-medium text-ink">{it}</span>
              </li>
            ))}
          </ul>
          <p className="text-[15px] font-semibold text-ink">
            {ELIGIBILITY.closing}
          </p>
          <div>
            <Button href={ELIGIBILITY.cta.href} variant="primary">
              {ELIGIBILITY.cta.label}
            </Button>
          </div>
        </Reveal>

        {/* Verification card */}
        <Reveal
          delay={90}
          className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-ink to-indigo-brand p-8 text-white shadow-soft sm:p-10"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-lime/15 text-lime ring-1 ring-lime/30">
              <Shield className="h-7 w-7" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
                {VERIFICATION.eyebrow}
              </span>
              <h2 className="font-display text-2xl font-extrabold text-white">
                {VERIFICATION.title}
              </h2>
            </div>
          </div>
          <p className="text-base leading-relaxed text-white/80">
            {VERIFICATION.body}
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
            <p className="text-sm font-semibold text-lime">
              Was das für dich konkret bedeutet
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {VERIFICATION.meaning}
            </p>
          </div>
          <div className="mt-auto flex items-center gap-4 rounded-2xl bg-white p-4">
            <Image
              src={verbraucherschutz}
              alt="Vom Verbraucherschutz geprüft"
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs font-medium text-slate-muted">
              Freiwillig geprüft – bestätigtes Serviceversprechen ohne
              versteckte Mängel.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
