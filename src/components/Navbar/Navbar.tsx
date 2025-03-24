import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/assets/nileode.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const ctx = useRef<gsap.Context | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.current?.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-30 py-6 backdrop-blur-2xl "
    >
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-8 w-22" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/products", label: "Products" },
            { href: "/consultation", label: "Book Consultation" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-xs px-2 py-2 opacity-100 transition-all hover:opacity-70 hover:bg-black hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block rounded-full border border-black px-6 py-2 opacity-100 transition-transform hover:scale-105"
        >
          Let's Talk
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 p-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#services", label: "Services" },
                  { href: "#products", label: "Products" },
                  { href: "#consultation", label: "Book Consultation" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-full border border-black px-6 py-2 opacity-100 transition-transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
