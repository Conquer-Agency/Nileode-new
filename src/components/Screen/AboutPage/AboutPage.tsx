import { TapeSection } from "@/components/Tape"
import AboutSection from "../HomePage/AboutSection"
import CostSaving from "../HomePage/CostSaving"
import CTASection from "../HomePage/CtaSection"
import MiniHeroSection from "./MiniHeroSection"

const AboutPage = () => {
  return (
    <main>
        <MiniHeroSection />
        <AboutSection />
        <CostSaving />
        <TapeSection />
        <CTASection />
    </main>
  )
}

export default AboutPage