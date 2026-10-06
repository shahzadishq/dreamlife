import Image from "next/image";
import { FINAL_CTA } from "@/lib/content";
import { Reveal } from "../ui/Reveal";
import { ArrowRight } from "../ui/Icons";
import heroImg from "../../../public/brand/hero-island.jpg";

export function FinalCta() {
  return (
    <section id="strategiegespraech" className="scroll-mt-24 bg-white px-5 pb-[var(--section-y)] sm:px-8">
      <div className="container-px px-0">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="absolute inset-0 -z-10 opacity-25">
            <Image
              src={heroImg}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/95 via-ink/85 to-indigo-brand/80" />
          <div
            className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-lime/20 blur-[90px]"
            aria-hidden
          />

          <span className="eyebrow mx-auto text-lime">
            🚀 {FINAL_CTA.eyebrow}
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-display-md text-white">
            {FINAL_CTA.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {FINAL_CTA.body}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={FINAL_CTA.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-4 text-base font-semibold text-ink shadow-glow transition-all duration-300 ease-premium hover:bg-lime-300 hover:-translate-y-0.5"
            >
              {FINAL_CTA.primaryCta.label}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={FINAL_CTA.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 ease-premium hover:bg-white/10"
            >
              {FINAL_CTA.secondaryCta.label}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Kostenlos &amp; unverbindlich – du entscheidest, ob es passt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
