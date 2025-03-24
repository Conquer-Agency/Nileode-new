import { TapeSection } from "@/components/Tape"
// import AboutSection from "../HomePage/AboutSection"
// import CostSaving from "../HomePage/CostSaving"
import CTASection from "../HomePage/CtaSection"
import PageTransition from "../LoadingPage/PageTransition"
import { useEffect, useState } from "react"
import HeroSection from "./HeroSection"
import OurExpertiseSection from "./OurExpertiseSection"
import TeamSection from "./TeamSection"
import FAQSection from "../HomePage/FaqSection"
import StatsSection from "./StatsSection"

const AboutPage = () => {

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
        console.log(locomotiveScroll);
  
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        }, 1200);
      })();
    }, []);

  return (
    <main className="">
      {isLoading && <PageTransition title="About us" />}
      {/* <PageTransition title="About us" /> */}
      <HeroSection />
      <OurExpertiseSection />
      {/* <AboutSection /> */}
      <TapeSection />
      <StatsSection />
      <TeamSection />
      {/* <CostSaving /> */}
      <CTASection />
      <FAQSection />
    </main>
  );
}

export default AboutPage