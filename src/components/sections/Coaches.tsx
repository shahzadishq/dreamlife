import Image from "next/image";
import { COACHES } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

type Person = (typeof COACHES.people)[number];

function PersonCard({ p, delay = 0 }: { p: Person; delay?: number }) {
  const founder = p.role === "Founder" || p.role === "Co-Founder";
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-[15px] border border-ink/[0.06] bg-ink shadow-card ring-0 ring-sky/50 transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover hover:ring-2"
    >
      {/* Uniform image frame for every team member */}
      <div className="relative aspect-[4/5]">
        <Image
          src={asset(p.image)}
          alt={`${p.name} – ${p.role}`}
          fill
          loading="eager"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
          className="object-cover object-top transition-transform duration-[900ms] ease-premium group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        {founder && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
            {p.role === "Founder" ? "Gründer" : "Co-Gründerin"}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-xl font-black leading-tight text-white sm:text-2xl">
            {p.name}
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="h-px w-5 flex-none bg-lime" />
            <p className="text-xs font-semibold uppercase tracking-wide text-lime">
              {p.role}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Coaches() {
  return (
    <Section id="coaches" tone="tint">
      <SectionHeading
        eyebrow={COACHES.eyebrow}
        title={COACHES.title}
        intro="Ein eingespieltes Team aus Gründern, Marketing-Experten und persönlichem Support – an deiner Seite auf dem ganzen Weg."
      />

      {/* Uniform grid – every card the same width, height and size */}
      <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3">
        {COACHES.people.map((p, i) => (
          <PersonCard key={p.name} p={p} delay={(i % 3) * 80} />
        ))}
      </div>
    </Section>
  );
}
