// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useRef, ReactElement } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactElement;
}

export default function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    xTo.current = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    yTo.current = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetic.current) return;

      const { clientX, clientY } = e;
      const rect = magnetic.current.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);

      xTo.current?.(x * 0.35);
      yTo.current?.(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo.current?.(0);
      yTo.current?.(0);
    };

    const element = magnetic.current;
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      // xTo.current?.kill();
      // yTo.current?.kill();
    };
  }, []);

  return React.cloneElement(children, {
    ref: magnetic,
    style: { ...children.props.style, position: "relative" },
  });
}
