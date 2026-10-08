import { Reveal } from "../ui/Reveal";
import { CountUp } from "../ui/CountUp";
import { PalmLeaf } from "../ui/PalmLeaf";

const STATS = [
  { to: 150, suffix: "+", label: "Teilnehmer" },
  { to: 250, suffix: "", label: "Stunden Live-Coaching" },
  { to: 500, suffix: "+", label: "Videolektionen" },
  { to: 100, suffix: " %", label: "ortsunabhängig" },
];

export function StatsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-14 text-white sm:py-16">
      {/* Tropical palm decorations */}
      <PalmLeaf
        className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 text-lime/10 motion-safe:animate-float-slow"
      />
      <PalmLeaf
        className="pointer-events-none absolute -bottom-12 -right-8 h-52 w-52 -scale-x-100 rotate-[200deg] text-sky/10 motion-safe:animate-float-slow [animation-delay:-3s]"
      />
      <div className="container-px">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 90}
              className="flex flex-col items-center gap-2 text-center"
            >
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="font-display text-4xl font-black text-lime sm:text-5xl"
              />
              <span className="text-sm font-medium text-white/65">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
