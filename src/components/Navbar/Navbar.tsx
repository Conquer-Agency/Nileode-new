import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "@/assets/nileode.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | undefined>(undefined);
  const hoverElements = useRef<NodeListOf<Element> | undefined>(undefined);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

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
    }, navRef);

    return () => {
      hoverElements.current?.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
      ctx.current?.revert();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-30 px-4 sm:px-8 py-4 backdrop-blur-2xl bg-white/10"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-8 w-22" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <Button variant="ghost" data-nav-hover>
              <a href="/" className="text-base">
                Home
              </a>
            </Button>
            <Button variant="ghost" data-nav-hover>
              <a href="#about" className="text-base">
                About
              </a>
            </Button>
            <Button variant="ghost" data-nav-hover>
              <a href="#services" className="text-base">
                Services
              </a>
            </Button>
            <Button variant="ghost" data-nav-hover>
              <a href="#products" className="text-base">
                Products
              </a>
            </Button>
          </nav>

          <Button variant="default" data-nav-cta>
            <a href="#consultation" className="text-base">
              Book Consultation
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full pt-10">
                <nav className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start">
                      <a href="/" className="text-base">
                        Home
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start">
                      <a href="#about" className="text-base">
                        About
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start">
                      <a href="#services" className="text-base">
                        Services
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" className="justify-start">
                      <a href="#products" className="text-base">
                        Products
                      </a>
                    </Button>
                  </SheetClose>
                </nav>

                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Button className="w-full">
                      <a href="#consultation">Book Consultation</a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
