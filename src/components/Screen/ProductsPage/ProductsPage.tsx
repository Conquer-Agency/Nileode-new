import { TapeSection } from "@/components/Tape";
import CTASection from "../HomePage/CtaSection";
import FAQSection from "../HomePage/FaqSection";
import { TestimonialsSection } from "../HomePage/TestimonialSection";
import ProductsSection from "./ProductsSection";
import { useEffect, useState } from "react";
import PageTransition from "../LoadingPage/PageTransition";
// import { AnimatePresence } from "framer-motion";

const ProductsPage = () => {
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
    <div className="min-h-screen">
      {isLoading ? (
        <PageTransition title="Products" />
      ) : (
        <>
          <ProductsSection />
          <TestimonialsSection />
          <CTASection />
          <TapeSection />
          <FAQSection />
        </>
      )}
    </div>
  );
};

export default ProductsPage;
