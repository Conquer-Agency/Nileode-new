import { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/Screen/HomePage/AboutSection";
import HeroSection from "./components/Screen/HomePage/HeroSection";
import LoadingScreen from "./components/Screen/LoadingPage/LoadingPage";
import Footer from "./components/Navbar/footer";
import { AnimatePresence } from "framer-motion";
import ProjectsSection from "./components/Screen/HomePage/ProjectsSection";
import { TapeSection } from "./components/Tape";
import FAQSection from "./components/Screen/HomePage/FaqSection";
import CTASection from "./components/Screen/HomePage/CtaSection";
import TeamSection from "./components/Screen/HomePage/TeamSection";
import { TestimonialsSection } from "./components/Screen/HomePage/TestimonialSection";
import CostSaving from "./components/Screen/HomePage/CostSaving";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
          console.log(locomotiveScroll);
          
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 3000)
      }
    )()
  }, [])
  
  return (
    // mix-blend-difference
    <main className="">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading-screen" />}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />
      <HeroSection isLoading={isLoading} />
      <AboutSection />
      <CostSaving />
      <TeamSection />
      <ProjectsSection />
      <CTASection />
      <TapeSection />
      <FAQSection />
      <TapeSection rotate="rotate-3" />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
