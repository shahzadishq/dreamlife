import Image from "next/image";
import { FOUNDER } from "@/lib/content";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { CTA } from "@/lib/content";
import heroImg from "../../../public/brand/hero-island.jpg";

export function Founder() {
  return (
    <section
      id="ueber-uns"
      className="scroll-mt-24 overflow-hidden bg-ink py-[var(--section-y)] text-white"
    >
      <div className="container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={heroImg}
              alt="Ortsunabhängig arbeiten – Freiheit leben"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[55%_center] transition-transform duration-[1.2s] ease-premium hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:left-auto sm:right-6 sm:max-w-[260px]">
            <p className="font-display text-3xl font-black text-lime">6–8 Wochen</p>
            <p className="mt-1 text-sm text-white/75">
              bis zur Grundlage für deine Unabhängigkeit
            </p>
          </div>
        </Reveal>

        {/* Text side */}
        <Reveal className="flex flex-col gap-6">
          <span className="eyebrow text-lime">
            <span className="h-px w-6 bg-current opacity-60" aria-hidden />
            {FOUNDER.eyebrow}
          </span>
          <h2 className="text-display-md text-white">{FOUNDER.title}</h2>
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-white/75">
            {FOUNDER.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <ul className="mt-2 grid gap-4 sm:grid-cols-3">
            {FOUNDER.pillars.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="font-display text-base font-extrabold text-lime">
                  {p.title}
                </p>
                <p className="mt-1 text-sm text-white/70">{p.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <Button href={CTA.strategy} variant="secondary" size="lg">
              Jetzt dein freies Leben starten
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
