"use client";

import { useEffect, useState } from "react";
import { TRUSTMARKT_EMBED, CTA } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Shield } from "../ui/Icons";

/**
 * Real Trustmarkt case-study widget — the exact [trustmarkt] shortcode embed
 * used on dreamlifenow.de (widget.trustmarkt.de render URL).
 *
 * Trustmarkt licenses the widget to a specific domain and returns HTTP 403 for
 * any other referrer, so it only renders when served from dreamlifenow.de.
 * To avoid a broken frame on the GitHub Pages preview (or localhost), we render
 * the live widget on the production domain and a graceful fallback elsewhere.
 */
export function Trustmarkt() {
  const [canEmbed, setCanEmbed] = useState(false);
  const [height, setHeight] = useState(760);

  useEffect(() => {
    setCanEmbed(/(^|\.)dreamlifenow\.de$/i.test(window.location.hostname));

    function onMessage(e: MessageEvent) {
      let host = "";
      try {
        host = new URL(e.origin).hostname;
      } catch {
        return;
      }
      if (!/trustmarkt\.de$/.test(host)) return;
      const d = e.data as { height?: number; payload?: { height?: number } };
      const h =
        typeof d === "number"
          ? d
          : typeof d?.height === "number"
            ? d.height
            : typeof d?.payload?.height === "number"
              ? d.payload.height
              : null;
      if (h && h > 200 && h < 6000) setHeight(Math.ceil(h));
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <Section id="fallstudien" tone="white">
      <SectionHeading
        eyebrow="Trustmarkt"
        title="Weitere Fallstudien & Bewertungen"
        intro="Unabhängig dokumentiert auf Trustmarkt – echte Erfahrungen unserer Teilnehmerinnen und Teilnehmer."
      />

      {canEmbed ? (
        <Reveal className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-ink/[0.06] bg-cloud/40 shadow-card">
          <iframe
            src={TRUSTMARKT_EMBED}
            title="Trustmarkt Fallstudien und Bewertungen"
            loading="lazy"
            style={{ height }}
            className="w-full"
          />
        </Reveal>
      ) : (
        <Reveal className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-ink/[0.06] bg-cloud/50 p-10 text-center shadow-card">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lime/15 text-lime-600 ring-1 ring-lime/30">
            <Shield className="h-7 w-7" />
          </span>
          <p className="max-w-md text-[15px] leading-relaxed text-slate-body">
            Die eingebetteten Trustmarkt-Bewertungen erscheinen auf der
            Live-Domain&nbsp;
            <span className="font-semibold text-ink">dreamlifenow.de</span>.
            Die geprüften Fallstudien kannst du jederzeit direkt ansehen:
          </p>
          <Button href={CTA.caseStudies} variant="primary">
            Geprüfte Fallstudien ansehen
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
