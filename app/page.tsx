import { CapacitySplit } from "./_components/CapacitySplit";
import { Faq } from "./_components/Faq";
import { Features } from "./_components/Features";
import { Hero } from "./_components/Hero";
import { InstallCta } from "./_components/InstallCta";
import { Origin } from "./_components/Origin";
import { Pricing } from "./_components/Pricing";
import { Roadmap } from "./_components/Roadmap";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { StatsBand } from "./_components/StatsBand";

export default function MarketingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <Features />
        <CapacitySplit />
        <Pricing />
        {/* The design gates this section behind a showRoadmap prop; it ships on. */}
        <Roadmap />
        <Origin />
        <Faq />
        <InstallCta />
      </main>
      <SiteFooter />
    </>
  );
}
