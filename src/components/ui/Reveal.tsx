"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger delay in ms */
  delay?: number;
  /** trigger once and stay visible (default true) */
  once?: boolean;
};

/**
 * Scroll-reveal wrapper. Adds the `reveal` class (which the stylesheet only
 * arms when `.js-ready` is present) and toggles `is-visible` via
 * IntersectionObserver. Content is fully visible if JS or the observer is
 * unavailable, and prefers-reduced-motion disables the motion in CSS.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
