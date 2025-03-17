import { useEffect, useRef } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation for heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
      });

      // Stagger reveal for text lines
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom-=50",
          end: "bottom center",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full bg-[#141211] text-white py-32">
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16"
        >
          We're a creative visionary digital agency
        </h2>
        
        <div 
          ref={textRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl text-gray-400"
        >
          <div className="space-y-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="space-y-6">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
