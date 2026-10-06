import Image from "next/image";
import { COACHES } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

type Person = (typeof COACHES.people)[number];

function PersonCard({
  p,
  featured = false,
  delay = 0,
}: {
  p: Person;
  featured?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-3xl border border-ink/[0.06] bg-ink shadow-card transition-all duration-300 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover"
    >
      <div className={`relative ${featured ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        <Image
          src={asset(p.image)}
          alt={`${p.name} – ${p.role}`}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 420px" : "(max-width: 768px) 50vw, 300px"}
          className="object-cover object-top transition-transform duration-[900ms] ease-premium group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        {featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
            {p.role === "Founder" ? "Gründer" : "Co-Gründerin"}
          </span>
        )}
        <div className={`absolute inset-x-0 bottom-0 ${featured ? "p-5" : "p-4"}`}>
          <p className={`font-display font-black leading-tight text-white ${featured ? "text-2xl" : "text-base"}`}>
            {p.name}
          </p>
          <div className="mt-1.5 flex items-center gap-1.5">
            {featured && <span className="h-px w-4 flex-none bg-lime" />}
            <p className={`font-semibold uppercase text-lime ${featured ? "text-xs tracking-wide" : "text-[10px] tracking-normal"}`}>
              {p.role}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Coaches() {
  const founders = COACHES.people.slice(0, 2);
  const team = COACHES.people.slice(2);

  return (
    <Section id="coaches" tone="tint">
      <SectionHeading
        eyebrow={COACHES.eyebrow}
        title={COACHES.title}
        intro="Ein eingespieltes Team aus Gründern, Marketing-Experten und persönlichem Support – an deiner Seite auf dem ganzen Weg."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        {/* Founders featured */}
        <div className="grid grid-cols-2 gap-5 lg:col-span-5">
          {founders.map((p, i) => (
            <PersonCard key={p.name} p={p} featured delay={i * 90} />
          ))}
        </div>
        {/* Team */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:col-span-7">
          {team.map((p, i) => (
            <PersonCard key={p.name} p={p} delay={i * 70} />
          ))}
        </div>
      </div>
    </Section>
  );
}
