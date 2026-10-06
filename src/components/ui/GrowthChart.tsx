"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Illustrative income-growth curve for the final CTA (single brand-blue series
 * on a dark surface). Animates a draw-on-reveal; respects reduced motion by
 * rendering the final state. Clearly labelled as an example, not real data.
 */
const POINTS = [
  { x: 24, y: 206, m: "M1" },
  { x: 99, y: 182, m: "M2" },
  { x: 174, y: 150, m: "M3" },
  { x: 249, y: 112, m: "M4" },
  { x: 324, y: 78, m: "M5" },
  { x: 399, y: 42, m: "M6" },
];
const BASE = 232;

// Smooth path (Catmull-Rom -> cubic bezier) through the points.
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function GrowthChart() {
  const ref = useRef<SVGSVGElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const line = smoothPath(POINTS);
  const area = `${line} L ${POINTS[POINTS.length - 1].x} ${BASE} L ${POINTS[0].x} ${BASE} Z`;

  return (
    <figure className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6">
      <figcaption className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
          Beispielhafter Verlauf
        </span>
        <span className="rounded-full bg-lime/15 px-2.5 py-1 text-xs font-bold text-lime">
          6–8 Wochen
        </span>
      </figcaption>

      <svg ref={ref} viewBox="0 0 420 250" className="w-full" role="img" aria-label="Beispielhafter Einkommensverlauf über sechs Monate – steigend bis über 5.000 € pro Monat">
        <defs>
          <linearGradient id="gc-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5AC8FA" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#5AC8FA" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gc-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5AC8FA" />
            <stop offset="100%" stopColor="#86d5fc" />
          </linearGradient>
        </defs>

        {/* baseline grid */}
        {[42, 112, 182, 232].map((y) => (
          <line key={y} x1="24" y1={y} x2="399" y2={y} stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
        ))}

        {/* area */}
        <path
          d={area}
          fill="url(#gc-fill)"
          opacity={shown ? 1 : 0}
          style={{ transition: "opacity 0.9s ease 0.4s" }}
        />

        {/* line with draw animation */}
        <path
          d={line}
          fill="none"
          stroke="url(#gc-line)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: shown ? 0 : 1,
            transition: "stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        />

        {/* end marker */}
        <circle
          cx={POINTS[POINTS.length - 1].x}
          cy={POINTS[POINTS.length - 1].y}
          r="6"
          fill="#5AC8FA"
          stroke="#fff"
          strokeWidth="2.5"
          opacity={shown ? 1 : 0}
          style={{ transition: "opacity 0.4s ease 1.2s" }}
        />

        {/* month labels */}
        {POINTS.map((p) => (
          <text key={p.m} x={p.x} y={246} textAnchor="middle" fontSize="11" fill="#ffffff" fillOpacity="0.5">
            {p.m}
          </text>
        ))}
      </svg>

      {/* peak callout */}
      <div className="pointer-events-none absolute right-5 top-14 text-right sm:right-7">
        <p className="font-display text-2xl font-black text-white">5.000 €+</p>
        <p className="text-[11px] font-medium text-lime">pro Monat</p>
      </div>
    </figure>
  );
}
