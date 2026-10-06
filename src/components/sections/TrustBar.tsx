import Image from "next/image";
import { TRUST_BADGES } from "@/lib/content";
import { asset } from "@/lib/asset";
import { Reveal } from "../ui/Reveal";

import trustpilot from "../../../public/brand/badge-trustpilot.jpeg";
import provenexpert from "../../../public/brand/badge-provenexpert.jpeg";
import meta from "../../../public/brand/badge-meta.jpeg";
import verbraucherschutz from "../../../public/brand/badge-verbraucherschutz.webp";

const imgs = [trustpilot, provenexpert, meta, verbraucherschutz];

export function TrustBar() {
  return (
    <section
      aria-label="Auszeichnungen und Prüfungen"
      className="relative z-10 border-b border-ink/5 bg-white"
    >
      <div className="container-px py-8">
        <Reveal className="flex flex-col items-center gap-6">
          <Image
            src={asset("/brand/social-proof.webp")}
            alt="Bereits über 150+ Teilnehmer haben das getestet und sind begeistert"
            width={1536}
            height={171}
            className="h-auto w-full max-w-xl"
          />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-muted">
            Geprüft, ausgezeichnet &amp; vertrauenswürdig
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 sm:gap-x-10">
            {TRUST_BADGES.map((b, i) => (
              <li
                key={b.alt}
                className="flex h-14 items-center justify-center rounded-xl bg-white px-4 ring-1 ring-ink/5 grayscale transition-all duration-300 ease-premium hover:grayscale-0 hover:ring-ink/10"
              >
                <Image
                  src={imgs[i]}
                  alt={b.alt}
                  className="h-9 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
