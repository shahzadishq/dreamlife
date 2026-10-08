import Image from "next/image";
import { asset } from "@/lib/asset";
import { Reveal } from "../ui/Reveal";

export function TrustBar() {
  return (
    <section
      aria-label="Soziale Bestätigung"
      className="relative z-10 border-b border-ink/5 bg-white"
    >
      <div className="container-px py-8">
        <Reveal className="flex flex-col items-center">
          <Image
            src={asset("/brand/social-proof.webp")}
            alt="Bereits über 150+ Teilnehmer haben das getestet und sind begeistert"
            width={1536}
            height={171}
            className="h-auto w-full max-w-xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
