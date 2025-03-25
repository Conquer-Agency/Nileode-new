import { TapeSection } from "@/components/Tape";
import CTASection from "../HomePage/CtaSection";
import FAQSection from "../HomePage/FaqSection";
import { TestimonialsSection } from "../HomePage/TestimonialSection";
import ProductsSection from "./ProductsSection";

const ProductsPage = () => {
  return (
    <div>
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
      <TapeSection />
      <FAQSection />
    </div>
  );
};

export default ProductsPage;
