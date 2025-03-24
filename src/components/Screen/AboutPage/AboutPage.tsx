import { TapeSection } from "@/components/Tape"
import AboutSection from "../HomePage/AboutSection"
import CostSaving from "../HomePage/CostSaving"
import CTASection from "../HomePage/CtaSection"
import MiniHeroSection from "./MiniHeroSection"
import PageTransition from "../LoadingPage/PageTransition"
import { useEffect, useState } from "react"

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
    <main>
      {isLoading && <PageTransition title="About us" />}
      {/* <PageTransition title="About us" /> */}
      <MiniHeroSection />
      <AboutSection />
      <CostSaving />
      <TapeSection />
      <CTASection />
    </main>
  );
}

export default AboutPage