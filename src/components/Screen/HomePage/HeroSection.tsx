import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import circle from "@/assets/circle.png"
import gsap from 'gsap';
import SplitText from '@/components/SplitText';

export default function HeroSection({isLoading} : {isLoading :boolean}) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main content
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });

      // Animate the 3D image
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -45,
        duration: 1.5,
        ease: "back.out(1.7)"
      });

      // Animate stats
      if (statsRef.current?.children) {
        gsap.from(statsRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out"
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isLoading]);

  return (
    <div
      ref={heroRef}
      className=" min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="space-y-8">
            <SplitText className="text-6xl font-bold leading-tight">
              Elevate Your Business Cut the Costs
            </SplitText>

            <p className="text-gray-600 text-lg max-w-2xl">
              We provide cutting-edge IT outsourcing services to help your
              business grow, innovate, and stay ahead of the competition.
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Contact us
              </Button>
            </div>
          </div>
          <div className="flex items-end justify-between flex-col relative overflow-y-clip">
          {/* <div className="absolute bg-blue-300 left-2/4 -top-24  rounded-2xl rotate-45 w-[700px] h-[700px] mr-2 " /> */}
          {/* <div className="absolute bg-blue-500 left-2/4 -top-24  rounded-2xl rotate-45 w-[700px] h-[700px] ml-2 " /> */}

          <div ref={imageRef} className="">
          <img
            src={circle}
            alt="3D Abstract Shape"
            style={{ width: "900px", maxWidth: "none" }} // ✅ Ensures it grows
            className="block mx-auto transform hover:scale-105 transition-transform duration-500 rotate-45"
          />

          </div>
          {/* <div
              className=" flex items-center justify-between flex-row gap-6"
              ref={statsRef}
            >
              <div className="rounded-lg transform   p-4 shadow-inner bg-white text-center font-robot">
                <Users className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">15+</h1>
                <p className="font-medium">Expert Developers</p>
              </div>
              <div className="rounded-lg transform   p-4 shadow-inner bg-white text-center font-robot">
                <Users className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">15+</h1>
                <p className="font-medium">Expert Developers</p>
              </div>{" "}
              <div className="rounded-lg transform   p-4 shadow-inner bg-white text-center font-robot">
                <Users className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">15+</h1>
                <p className="font-medium">Expert Developers</p>
              </div>{" "}
              <div className="rounded-lg transform   p-4 shadow-inner bg-white text-center font-robot">
                <Users className="size-8 text-center w-full text-blue-500 mb-3" />
                <h1 className="font-semibold text-2xl tracking-wider">15+</h1>
                <p className="font-medium">Expert Developers</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}