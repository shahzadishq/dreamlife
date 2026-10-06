"use client";

import { VALUE_PROPS } from "@/lib/content";
import { Reveal } from "../ui/Reveal";
import { Icon, type IconName } from "../ui/Icons";

function onMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export function FeatureCards() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {VALUE_PROPS.items.map((it, i) => (
        <Reveal key={it.title} delay={(i % 3) * 80}>
          <article
            onMouseMove={onMove}
            className="feat-card group flex h-full flex-col rounded-[15px] border border-ink/[0.06] bg-white p-7 shadow-card hover:-translate-y-2 hover:shadow-card-hover"
          >
            <div className="mb-6 flex items-center justify-between">
              <span
                className="grid h-16 w-16 place-items-center rounded-[18px] bg-sky/10 text-sky ring-1 ring-sky/30 transition-all duration-500 ease-premium group-hover:-rotate-[8deg] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-sky group-hover:to-ink-700 group-hover:text-white group-hover:shadow-[0_12px_26px_-8px_rgba(26,111,181,0.55)] group-hover:ring-transparent"
                aria-hidden
              >
                <Icon name={it.icon as IconName} className="h-7 w-7" />
              </span>
              <span className="feat-num font-display text-5xl font-black leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-ink">{it.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-body">
              {it.body}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
