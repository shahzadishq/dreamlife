import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  tone = "white",
  dots = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "cloud" | "ink" | "tint";
  /** render a dotted-grid background + soft floating orbs */
  dots?: boolean;
}) {
  const tones = {
    white: "bg-white",
    cloud: "bg-cloud",
    tint: "bg-gradient-to-b from-white to-cloud",
    ink: "bg-ink text-white",
  };
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-[var(--section-y)] ${tones[tone]} ${
        dots ? "relative isolate overflow-hidden" : ""
      } ${className}`}
    >
      {dots && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <span className="dot-grid" />
          <span className="absolute -left-32 -top-28 h-96 w-96 rounded-full bg-sky/15 blur-[90px] motion-safe:animate-drift" />
          <span className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-brand/10 blur-[100px] motion-safe:animate-drift [animation-delay:-6s]" />
        </div>
      )}
      <div className="container-px">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const alignCls =
    align === "center" ? "mx-auto max-w-3xl text-center items-center" : "max-w-2xl";
  const titleCls = tone === "light" ? "text-white" : "text-ink";
  const introCls = tone === "light" ? "text-white/70" : "text-slate-body";
  return (
    <Reveal
      as="header"
      className={`flex flex-col gap-4 ${alignCls} ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow ${tone === "light" ? "text-lime" : ""}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-display-md ${titleCls}`}>{title}</h2>
      {intro && (
        <p className={`text-lg leading-relaxed ${introCls}`}>{intro}</p>
      )}
    </Reveal>
  );
}
