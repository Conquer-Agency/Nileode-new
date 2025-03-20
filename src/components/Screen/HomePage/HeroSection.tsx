import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import circle from "@/assets/circle.png";
import gsap from "gsap";
import SplitText from "@/components/SplitText";

export default function HeroSection({ isLoading }: { isLoading: boolean }) {
  const heroRef = useRef(null);
  const imageRef = useRef<HTMLImageElement>(null); // Typed as HTMLImageElement
  const contentRef = useRef(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main content
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Animate the 3D image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -45,
        duration: 1.5,
        ease: "back.out(1.7)",
      });

      // Animate stats
      if (statsRef.current?.children) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        });
      }
    }, heroRef);

    // Add parallax effect on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate the percentage of cursor position relative to the screen
      const xPercent = (clientX / innerWidth - 0.5) * 20; // Adjust multiplier for sensitivity
      const yPercent = (clientY / innerHeight - 0.5) * 20;

      // Animate the image position
      gsap.to(imageRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Attach mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove); // Cleanup
    };
  }, [isLoading]);

  return (
      <div
        ref={heroRef}
        className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-stretch overflow-clip pt-28 relative"
      >
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))]">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className={`grid-item relative ${i % 5 === 0 ? "bg-blue-500/5" : i % 7 === 0 ? "bg-indigo-500/5" : "bg-transparent"} border border-blue-200/20`}
            >
              {i % 11 === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-400/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        <div className="container w-11/12 mx-auto min-h-full flex justify-cente gap-12 items-center flex-col md:flex-row ">
          <div
            ref={contentRef}
            className=" m-2 md:w-2/3 h-full flex items-start justify-center flex-col gap-8"
          >
            <SplitText className="text-4xl md:text-6xl font-bold leading-tight">
              Elevate Your Business
              <br />
              <span className="text-blue-500">Cut the Costs</span>
            </SplitText>

            <p className="texst-gray-600 text-lg max-w-2xl">
              We provide cutting-edge IT outsourcing services to help your
              business grow, innovate, and stay ahead of the competition.
            </p>

            <div className="flex gap-4 relative">
              <div className="absolute inset-0 -top-12  rounded-2xl bg-gradient-to-br from-purple-500/50 to-indigo-500/50 blur-3xl" />
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/4 ">
            {/* <div className="flex items-end justify-between flex-col relative overflow-y-clip"> */}
            <div ref={imageRef}>
              <img
                src={circle}
                alt="3D Abstract Shape"
                // style={{ width: "900px", maxWidth: "none" }}
                className="max-w-none w-[450px] md:w-[900px] block mx-auto transform  transition-transform duration-500 rotate-45"
              />
              <div className="absolute inset-0 -top-12  bg-gradient-to-tl from-purple-300/50 to-indigo-300/50 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
  );
}
