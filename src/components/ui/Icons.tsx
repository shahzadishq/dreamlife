/* Lightweight inline icon set — single stroke style, no external deps. */
type P = { className?: string };
const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Plus({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Trending({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

export function Repeat({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

export function Live({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <circle cx="12" cy="12" r="3" />
      <path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8M8.1 8.1a5.5 5.5 0 0 0 0 7.8M15.9 8.1a5.5 5.5 0 0 1 0 7.8" />
    </svg>
  );
}

export function Network({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
      <path d="M12 7.2v4.3M10.4 12.8 6.6 17M13.6 12.8 17.4 17" />
    </svg>
  );
}

export function Globe({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </svg>
  );
}

export function Chat({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M21 11.5a8 8 0 0 1-11.5 7.2L3 20l1.3-4A8 8 0 1 1 21 11.5Z" />
    </svg>
  );
}

export function Shield({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Quote({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M9.5 6C6.5 7.3 5 9.8 5 13.5V18h5v-5H7.8c0-2.2.9-3.6 2.7-4.3L9.5 6Zm9 0c-3 1.3-4.5 3.8-4.5 7.5V18h5v-5h-2.2c0-2.2.9-3.6 2.7-4.3L18.5 6Z" />
    </svg>
  );
}

export function Clock({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MapPin({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...s}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const map = {
  trending: Trending,
  repeat: Repeat,
  live: Live,
  network: Network,
  globe: Globe,
  chat: Chat,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = map[name];
  return <C className={className} />;
}
