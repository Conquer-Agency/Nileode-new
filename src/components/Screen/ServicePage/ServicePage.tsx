import { useEffect, useState } from "react";
import PageTransition from "../LoadingPage/PageTransition";
import { ServicesSection } from "./ServicesSection";
// import HeroSection from "../AboutPage/HeroSection";
import CTASection from "../HomePage/CtaSection";
import DetailedServiceSection from "./DetailedServiceSection";
import { TalentRequestSection } from "@/components/TalentRequest/TalentRequestSection";
import IndustryExpertise from "./IndustryExpertise";
import CooperationModels from "./CooperationModals";
import TechnologyStack from "./TechStack";

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
      }, 2500);
    })();
  }, []);
  return (
    <div className=" min-h-screen">
      {isLoading ? (
        <PageTransition title="Our Services" />
      ) : (
        <>
          <DetailedServiceSection />
          <ServicesSection />
          <TalentRequestSection />
          <IndustryExpertise />
          <CooperationModels />
          <TechnologyStack />
          <CTASection />
        </>
      )}
    </div>
  );
};

export default ServicePage;
