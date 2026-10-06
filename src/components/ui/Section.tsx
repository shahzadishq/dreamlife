import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  tone = "white",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "cloud" | "ink" | "tint";
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
      className={`scroll-mt-24 py-[var(--section-y)] ${tones[tone]} ${className}`}
    >
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
          <span className="h-px w-6 bg-current opacity-60" aria-hidden />
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
