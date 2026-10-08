import Image from "next/image";
import { FINAL_CTA } from "@/lib/content";
import { Reveal } from "../ui/Reveal";
import { ArrowRight, Check } from "../ui/Icons";
import { GrowthChart } from "../ui/GrowthChart";
import { PalmLeaf } from "../ui/PalmLeaf";
import heroImg from "../../../public/brand/hero-island.jpg";

const PERKS = [
  "Kostenlos & unverbindlich",
  "Persönliche Standortbestimmung",
  "Klarer Fahrplan für deine nächsten Schritte",
];

export function FinalCta() {
  return (
    <section
      id="strategiegespraech"
      className="scroll-mt-24 bg-white px-5 pb-[var(--section-y)] sm:px-8"
    >
      <div className="container-px px-0">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-14 sm:px-12 sm:py-16 lg:py-20">
          <div className="absolute inset-0 -z-10 opacity-20">
            <Image src={heroImg} alt="" fill sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/95 via-ink/88 to-indigo-brand/80" />
          <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-lime/20 blur-[90px]" aria-hidden />
          <div className="absolute -bottom-16 -left-10 -z-10 h-64 w-64 rounded-full bg-sky/20 blur-[100px]" aria-hidden />
          <PalmLeaf className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 rotate-[20deg] text-lime/15 motion-safe:animate-float-slow" />
          <PalmLeaf className="pointer-events-none absolute -bottom-10 -left-8 h-48 w-48 -scale-x-100 rotate-[200deg] text-sky/15 motion-safe:animate-float-slow [animation-delay:-4s]" />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Copy + CTAs */}
            <div className="flex flex-col gap-5">
              <span className="eyebrow text-lime">🚀 {FINAL_CTA.eyebrow}</span>
              <h2 className="max-w-xl text-display-md text-white">{FINAL_CTA.title}</h2>
              <p className="max-w-lg text-lg leading-relaxed text-white/80">
                {FINAL_CTA.body}
              </p>

              <ul className="flex flex-col gap-2.5">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-lime/20 text-lime">
                      <Check className="h-3 w-3" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-row">
                <a
                  href={FINAL_CTA.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold"
                >
                  {FINAL_CTA.primaryCta.label}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Growth chart */}
            <Reveal delay={120}>
              <GrowthChart />
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
