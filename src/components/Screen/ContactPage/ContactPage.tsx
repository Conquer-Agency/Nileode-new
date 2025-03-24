import { TapeSection } from "@/components/Tape";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FAQSection from "../HomePage/FaqSection";
import MiniHeroSection from "../AboutPage/MiniHeroSection";

const ContactPage = () => {
  return (
    <div>
      <MiniHeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 my-8 w-11/12 mx-auto font-poppins">
        <ContactInfo />
        <ContactForm />
      </div>
      <TapeSection />
      <FAQSection />
      <TapeSection rotate="rotate-3" />
    </div>
  );
}

export default ContactPage