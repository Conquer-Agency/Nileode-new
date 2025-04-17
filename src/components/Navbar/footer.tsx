import { Linkedin } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Logo from "@/assets/nileode.png";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
// import RoundedButton from "../ui/rounded-button";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    const mainContent = mainContentRef.current;

    if (!footer || !mainContent) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      gsap.set(footer, { yPercent: 100 });

      ScrollTrigger.create({
        trigger: mainContent,
        start: "center bottom",
        end: "center top",
        scrub: true,
        // markers: true,
        animation: gsap.to(footer, { yPercent: 0, ease: "none" }),
      });

      return () => {
        gsap.set(footer, { clearProps: "yPercent" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <footer
      id="page-footer"
      ref={footerRef}
      className="bg-[#0A0E17] text-white py-16 w-full relative min-h-[80vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="w-full mx-auto px-4 fixed bottom-0 min-h-[80vh] ">
        <div className="relative min-h-full md:w-[95%] mx-auto">
          <div className="space-y-8 mb-8 flex items-center justify-between flex-row">
            <h2 className="text-4xl md:text-4xl font-bold leading-snug">
              Ready to Transform Your Digital Presence?
              <br />
              Let's have a conversation about it.
            </h2>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg p-16 rounded-full w-24 h-24"
              >
                Start Project
              </Button>
            </Link>
          </div>
          <div>
            <div className="grid lg:grid-cols-4 gap-8 py-12 border-t border-gray-800">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div>
                    <Link to="/" className="flex items-center">
                      <img src={Logo} alt="logo" className="h-8 w-22" />
                    </Link>

                    <p className="text-sm text-gray-400 mt-8">
                      Nileode Technologies is the result of a shared vision
                      among skilled freelance developers who have spent over 6
                      years collaborating with international clients on diverse,
                      high-impact projects.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/service"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Custom Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      DevOps & Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Ai Powered tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Cloud Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Client Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Request Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Service Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Developer APIs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-400">
                <span>© 2025 Nileode. All rights reserved.</span>
                <div className="flex gap-6">
                  <Link to="/" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
