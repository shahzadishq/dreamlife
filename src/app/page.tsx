import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsBand } from "@/components/sections/StatsBand";
import { ValueProps } from "@/components/sections/ValueProps";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Founder } from "@/components/sections/Founder";
import { IncomeModel } from "@/components/sections/IncomeModel";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trustmarkt } from "@/components/sections/Trustmarkt";
import { Eligibility } from "@/components/sections/Eligibility";
import { Press } from "@/components/sections/Press";
import { Coaches } from "@/components/sections/Coaches";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="hauptinhalt">
        <Hero />
        <TrustBar />
        <StatsBand />
        <ValueProps />
        <SuccessStories />
        <Founder />
        <IncomeModel />
        <Comparison />
        <Testimonials />
        <Trustmarkt />
        <Eligibility />
        <Press />
        <Coaches />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
