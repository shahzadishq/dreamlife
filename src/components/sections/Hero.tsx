"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import heroImg from "../../../public/brand/hero-island.jpg";
import { HERO } from "@/lib/content";
import { ArrowRight, Check } from "../ui/Icons";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Parallax: background drifts down slower than the page; content lifts gently.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduce ? 1.08 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.35]);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* Background image (parallax) */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY, scale: bgScale }}>
        <Image
          src={heroImg}
          alt="Tropischer Strand mit Palmen – ortsunabhängig arbeiten"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[60%_center] motion-safe:animate-[float-slow_18s_ease-in-out_infinite]"
        />
        {/* Brand overlays for legibility + mood */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/92 via-ink/70 to-indigo-brand/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div
          className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-lime/20 blur-[100px]"
          aria-hidden
        />
        <div
          className="absolute -left-16 bottom-10 h-72 w-72 rounded-full bg-sky/20 blur-[110px]"
          aria-hidden
        />
      </motion.div>

      <div className="container-px w-full pb-20 pt-32 sm:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
            </span>
            {HERO.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-display-xl text-white"
          >
            {HERO.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl"
          >
            Und mach die ersten Schritte zu{" "}
            <span className="relative inline-block whitespace-nowrap text-lime">
              5.000 €+
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 300 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 11C60 4 180 3 297 8"
                  stroke="#5AC8FA"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            pro Monat
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.ul
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3"
          >
            {HERO.bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2.5 text-sm font-medium text-white/90"
              >
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-lime/20 text-lime">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={HERO.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-4 text-base font-semibold text-ink shadow-glow transition-all duration-300 ease-premium hover:bg-indigo-brand hover:text-white hover:-translate-y-0.5"
            >
              {HERO.primaryCta.label}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={HERO.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 ease-premium hover:bg-white/10"
            >
              {HERO.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-sm text-white/60"
          >
            Kostenlos & unverbindlich · Über 150 Teilnehmer · 100 % remote
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="h-2 w-1 rounded-full bg-white/60 motion-safe:animate-[float-slow_2.2s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
