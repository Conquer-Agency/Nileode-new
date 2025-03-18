import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import Magnetic from './magnetic';

interface RoundedButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // For remaining HTML attributes
}

export default function RoundedButton({ 
  children, 
  backgroundColor = "#455CE9", 
  ...attributes 
}: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { 
        top: "-25%", 
        width: "150%", 
        duration: 0.4, 
        ease: "power3.in" 
      }, "enter")
      .to(circle.current, { 
        top: "-150%", 
        width: "125%", 
        duration: 0.25 
      }, "exit");

    return () => {
      // Cleanup GSAP timeline
      if (timeline.current) {
        timeline.current.kill();
      }
      // Clear any pending timeouts
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current);
    }
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div 
        // className={styles.roundedButton} 
        style={{ overflow: "hidden" }} 
        onMouseEnter={manageMouseEnter} 
        onMouseLeave={manageMouseLeave} 
        {...attributes}
      >
        {children}
        <div 
          ref={circle} 
          style={{ backgroundColor }} 
          // className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
}