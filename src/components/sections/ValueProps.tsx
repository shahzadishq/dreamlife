import { VALUE_PROPS } from "@/lib/content";
import { Section, SectionHeading } from "../ui/Section";
import { FeatureCards } from "./FeatureCards";

export function ValueProps() {
  return (
    <Section id="vorteile" tone="tint" dots>
      <SectionHeading
        eyebrow={VALUE_PROPS.eyebrow}
        title={VALUE_PROPS.title}
        intro={VALUE_PROPS.intro}
      />
      <FeatureCards />
    </Section>
  );
}
