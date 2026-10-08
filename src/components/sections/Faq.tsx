"use client";

import { useRef, useState } from "react";
import { FAQ } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Plus } from "../ui/Icons";

function FaqItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        open ? "border-sky bg-white shadow-card" : "border-ink/[0.08] bg-white"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 ${
            open
              ? "bg-gradient-to-l from-sky to-[#1668a3] text-white"
              : "text-ink hover:bg-gradient-to-l hover:from-sky hover:to-[#1668a3] hover:text-white"
          }`}
        >
          <span className="font-display text-base font-extrabold sm:text-lg">
            {q}
          </span>
          <span
            className={`grid h-8 w-8 flex-none place-items-center rounded-full transition-all duration-300 ease-premium ${
              open ? "rotate-45 bg-white text-sky" : "bg-ink/[0.06] text-ink"
            }`}
            aria-hidden
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        ref={panelRef}
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
        className="grid transition-[grid-template-rows] duration-300 ease-premium"
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-5 text-[15px] leading-relaxed text-slate-body">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="white" leaf>
      <SectionHeading eyebrow={FAQ.eyebrow} title={FAQ.title} />
      <Reveal className="mx-auto mt-12 max-w-5xl columns-1 gap-4 md:columns-2 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {FAQ.items.map((it, i) => (
          <FaqItem
            key={it.q}
            index={i}
            q={it.q}
            a={it.a}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </Reveal>
    </Section>
  );
}
