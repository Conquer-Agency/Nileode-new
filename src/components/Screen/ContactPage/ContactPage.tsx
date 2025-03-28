import { TapeSection } from "@/components/Tape";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FAQSection from "../HomePage/FaqSection";

const ContactPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-8 pt-16 w-11/12 mx-auto font-poppins">
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