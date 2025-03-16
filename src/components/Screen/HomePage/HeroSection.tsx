import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (headingRefs.current.length) {
      gsap.to(headingRefs.current, {
        duration: 1.5,
        delay: 7,
        y: -80,
        ease: "power4.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    }
  }, []);

  return (
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-gray-900/20 ">
      <div className="relative w-max h-max">
        <div className="flex  ">
          <h1
            ref={(el) => {headingRefs.current[0] = el}}
            className="text-[80px] text-center relative top-[80px] mx-[10px] uppercase font-normal"
          >
            SUIIIII
          </h1>
          {/* <h1
            ref={(el) => {
              headingRefs.current[1] = el;
            }}
            className="text-[80px] text-center relative top-[80px] mx-[10px] uppercase font-normal"
          >
            III
          </h1> */}
        </div>
        {/* <div className="absolute top-0 w-full h-full after:content-[''] after:absolute after:left-0 after:w-[105%] after:h-[110%] after:bg-red-900 after:top-[80px]"></div> */}
      </div>
    </div>
  );
}
