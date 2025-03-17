import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Cpu, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ isLoading }: { isLoading: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      animationFrame.current = requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.9) * 100;
        const y = (clientY / innerHeight - 0.9) * 100;
        setMousePosition({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ctx = gsap.context(() => {
      gsap.from([...(contentRef.current?.children || [])], {
        opacity: 0,
        y: 20,
        duration: 1.6,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.to(".floating-image-1", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: "-20%", // Increased from -10%
        x: "-30%", // Increased from -15%
        rotation: -10, // More rotation
      });

      gsap.to(".floating-image-2", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: "-40%", // More movement
        x: "25%",
        rotation: 10,
      });

      gsap.to(".floating-image-3", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
        y: "30%", // Increased from 15%
        x: "-25%",
        rotation: -12,
      });

      gsap.to(".floating-image-4", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.7,
        },
        y: "35%", // Increased from 20%
        x: "30%",
        rotation: 20,
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      ctx.revert();
    };
  }, [isLoading]);

  // Amplify movement effect on mousemove
  const getImageStyle = useMemo(
    () => (index: number) => {
      const baseStrength = isHeaderHovered ? 10 : 20; // Lower values = faster movement
      const strength = baseStrength + (isHeaderHovered ? index * 1.5 : 0);
      const scale = isHeaderHovered ? 1.1 : 1; // Slightly bigger on hover

      return {
        transform: `translate(${mousePosition.x / strength}px, ${
          mousePosition.y / strength
        }px) scale(${scale})`,
        transition: `transform ${0.3 + index * 0.05}s cubic-bezier(0.2, 0.8, 0.2, 1)`,
      };
    },
    [mousePosition, isHeaderHovered]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] w-full flex flex-col items-center justify-center bg-[#141211] overflow-hidden text-[#f0f0f0]"
    >
      <div ref={contentRef} className="w-full px-8">
        <div className="flex items-center justify-center mb-20 relative">
          {/* Floating Images */}
          <div className="absolute w-full h-full">
            <div
              className="floating-image floating-image-1 absolute -top-12 left-4"
              style={getImageStyle(0)}
            >
              <div className="rounded-lg transform -rotate-12 bg-black text-white p-4 shadow-md text-center font-robot">
                <Users className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">15+</h1>
                <p className="font-medium">Expert Developers</p>
              </div>
            </div>

            <div
              className="floating-image floating-image-2 absolute -top-12 -right-0"
              style={getImageStyle(1)}
            >
              <div className="rounded-lg transform rotate-12 bg-black text-white p-4 shadow-md text-center font-robot">
                <Code className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">40+</h1>
                <p className="font-medium">Projects Delivered</p>
              </div>
            </div>

            <div
              className="floating-image floating-image-3 absolute -bottom-48 left-10"
              style={getImageStyle(2)}
            >
              <div className="rounded-lg transform -rotate-12 bg-black text-white p-4 shadow-md text-center font-robot">
                <Globe className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">5+</h1>
                <p className="font-medium">Global Clients</p>
              </div>
            </div>

            <div
              className="floating-image floating-image-4 absolute -bottom-48 right-0"
              style={getImageStyle(3)}
            >
              <div className="rounded-lg transform rotate-12 bg-black text-white p-4 shadow-md text-center font-robot">
                <Cpu className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">99%</h1>
                <p className="font-medium">Success Rate</p>
              </div>
            </div>
          </div>

          <h1
            className="text-[11vw] leading-none font-semibold relative z-10 transition-transform duration-300 hover:scale-105 font-poppins"
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
          >
            Nileode
          </h1>
        </div>

        {/* Center tagline */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-railway italic">
            We provide cutting-edge IT outsourcing services to help your business grow, innovate,
            and stay ahead of the competition.
          </h2>
          <div className="flex items-center justify-center gap-6 mt-6">  
            <Button variant="outline" className=" bg-blue-400 py-3" size="lg">Contact us</Button>
            <Button variant="ghost">Products</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
