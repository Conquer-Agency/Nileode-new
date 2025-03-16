import React, { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
  type?: "chars" | "words" | "lines";
  delay?: number;
  stagger?: number;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  trigger?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className,
  type = "chars",
  delay = 0,
  stagger = 0.02,
  from = { y: 50, opacity: 0 },
  to = { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
  trigger = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    splitRef.current = new SplitType(textRef.current, {
      types: [type],
      tagName: "span",
    });

    const elements = splitRef.current[type as keyof SplitType];

    if (elements) {
      const animation = gsap.fromTo(elements, from, {
        ...to,
        stagger: stagger,
        delay: delay,
        scrollTrigger: trigger
          ? {
              trigger: textRef.current,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            }
          : undefined,
      });

      return () => {
        animation.kill();
        splitRef.current?.revert();
      };
    }
  }, [children, type, delay, stagger, from, to, trigger]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default SplitText;
