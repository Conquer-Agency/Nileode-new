import { useEffect, useState } from "react";
import PageTransition from "../LoadingPage/PageTransition";
import { ServicesSection } from "./ServicesSection";
// import HeroSection from "../AboutPage/HeroSection";
import MiniHeroSection from "../AboutPage/MiniHeroSection";
import CTASection from "../HomePage/CtaSection";

const ServicePage = () => {
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
    <div className=" min-h-screen">
      {isLoading && <PageTransition title="Our Services" />}
      <MiniHeroSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default ServicePage;
