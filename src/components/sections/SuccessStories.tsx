"use client";

import { useState } from "react";
import Image from "next/image";
import { SUCCESS_STORIES, STORIES_META, type Story } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { VideoLightbox } from "../ui/VideoLightbox";

function PlayBadge({ size = "md" }: { size?: "md" | "lg" }) {
  const dim = size === "lg" ? "h-20 w-20" : "h-14 w-14";
  const icon = size === "lg" ? "h-8 w-8" : "h-6 w-6";
  return (
    <span
      className={`relative grid ${dim} place-items-center rounded-full bg-white/95 text-ink shadow-glow transition-transform duration-300 ease-premium group-hover:scale-110`}
    >
      <span className="absolute inset-0 rounded-full bg-lime/50 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      <svg viewBox="0 0 24 24" className={`relative ${icon} translate-x-0.5`} fill="currentColor" aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function SuccessStories() {
  const [active, setActive] = useState<Story | null>(null);
  const [featured, ...rest] = SUCCESS_STORIES;

  return (
    <Section id="erfolgsgeschichten" tone="white">
      <SectionHeading eyebrow={STORIES_META.eyebrow} title={STORIES_META.title} />

      {/* Featured story */}
      <Reveal className="mt-14 overflow-hidden rounded-[15px] border border-ink/[0.06] bg-cloud/50 shadow-card lg:grid lg:grid-cols-2">
        <button
          type="button"
          onClick={() => setActive(featured)}
          aria-label={`Video von ${featured.name} abspielen`}
          className="group relative block aspect-video w-full overflow-hidden lg:aspect-auto lg:h-full"
        >
          <Image
            src={asset(featured.thumb)}
            alt={`${featured.name} – ${featured.headline}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
          <span className="absolute inset-0 grid place-items-center">
            <PlayBadge size="lg" />
          </span>
        </button>
        <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-lime/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-lime-700">
            Erfolgsgeschichte
          </span>
          <h3 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            {featured.headline}
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-body">
            {featured.body}
          </p>
          <div className="mt-1 flex items-center gap-3">
            <span className="h-9 w-1 rounded-full bg-lime" />
            <div>
              <p className="font-display text-sm font-extrabold text-ink">
                {featured.name}
              </p>
              <p className="text-xs text-slate-muted">{featured.role}</p>
            </div>
            <button
              type="button"
              onClick={() => setActive(featured)}
              className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-lime-700 link-underline"
            >
              Video ansehen
            </button>
          </div>
        </div>
      </Reveal>

      {/* Grid of remaining stories */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((s, i) => (
          <Reveal key={s.video} delay={(i % 3) * 70}>
            <button
              type="button"
              onClick={() => setActive(s)}
              aria-label={`Video von ${s.name} abspielen`}
              className="group block w-full overflow-hidden rounded-[15px] border border-ink/[0.06] bg-white text-left shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="relative block aspect-video overflow-hidden">
                <Image
                  src={asset(s.thumb)}
                  alt={`${s.name} – ${s.headline}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                <span className="absolute inset-0 grid place-items-center">
                  <PlayBadge />
                </span>
              </span>
              <span className="flex items-center gap-3 p-5">
                <span className="h-8 w-1 flex-none rounded-full bg-lime" />
                <span className="min-w-0">
                  <span className="block truncate font-display text-sm font-extrabold text-ink">
                    {s.name}
                  </span>
                  <span className="block truncate text-xs text-slate-muted">
                    {s.role}
                  </span>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
        <p className="max-w-2xl text-sm text-slate-muted">{STORIES_META.note}</p>
        <Button href={STORIES_META.cta.href} variant="ghost">
          {STORIES_META.cta.label}
        </Button>
      </Reveal>

      <VideoLightbox
        videoId={active?.video ?? null}
        title={active ? `${active.name} – ${active.headline}` : undefined}
        onClose={() => setActive(null)}
      />
    </Section>
  );
}
