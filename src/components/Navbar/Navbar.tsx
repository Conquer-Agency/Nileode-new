import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "@/assets/nileode.png";
export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | undefined>(undefined);
  const hoverElements = useRef<NodeListOf<Element> | undefined>(undefined);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      // Initial animation
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Hover animations for nav items
      const setupHoverEffects = () => {
        hoverElements.current = document.querySelectorAll("[data-nav-hover]");

        hoverElements.current.forEach((element) => {
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              opacity: 0.7,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      };

      // Special animation for the CTA button
      const ctaButton = document.querySelector("[data-nav-cta]");
      if (ctaButton) {
        ctaButton.addEventListener("mouseenter", () => {
          gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        ctaButton.addEventListener("mouseleave", () => {
          gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      setupHoverEffects();
    }, navRef); // Scope selector

    // Cleanup function
    return () => {
      // Remove all hover effects
      hoverElements.current?.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });

      // Kill context animations
      ctx.current?.revert();
    };
  }, []);

  return (
    <div ref={navRef} className="fixed top-0 left-0 w-full z-30 px-8 py-6 backdrop-blur-2xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={Logo} alt="logo" className="h-8 w-22" />
          </a>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className=" rounded-md px-4 py-2 bg-black text-white" data-nav-cta>
            Home
          </a>
          <a href="#about" className=" rounded-md opacity-100" data-nav-hover>
            About
          </a>
          <a href="#services" className=" rounded-md opacity-100" data-nav-hover>
            Services
          </a>
          <a href="#products" className=" rounded-md opacity-100" data-nav-hover>
            Products
          </a>
          <a href="#consultation" className=" rounded-md opacity-100" data-nav-hover>
            Book Consultation
          </a>
        </div>

        <div>
          <a
            href="#contact"
            className=" rounded-full border border-black px-6 py-2 opacity-100 transition-colors"
            data-nav-hover
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}
