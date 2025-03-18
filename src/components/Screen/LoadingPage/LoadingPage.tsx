import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Dot } from "lucide-react";

export default function LoadingScreen() {
  const greetingRef = useRef<HTMLDivElement>(null);
  const loader1Ref = useRef<HTMLDivElement>(null);
  const loader2Ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loadingScreenRef = useRef<HTMLDivElement>(null);
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);

  const greetings = [
    "Hello",
    "ሰላም",
    "Hola",
    "안녕하세요",
    "Bonjour",
    // "Ciao",
    // "你好",
    "Xin chào",
    // "Hallo",
    // "Olá",
    // "नमस्ते",
    // "こんにちは",
    // "Merhaba",
    // "Здравствуйте",
    // "السّلام",
    // "Sawubona",
    // "Aloha",
    // "שָׁלוֹם",
    // "Szia",
    // "Hej",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      let currentIndex = 0;

      const animateNextGreeting = () => {
        if (currentIndex >= greetings.length || !greetingRef.current) return;

        gsap.to(greetingRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.1, // Faster fade-out
          onComplete: () => {
            setCurrentGreeting(currentIndex);
            gsap.fromTo(
              greetingRef.current,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.1, // Faster fade-in
                onComplete: () => {
                  currentIndex++;
                  if (currentIndex < greetings.length) {
                    const id = setTimeout(animateNextGreeting, 150); // Faster delay between greetings
                    timeoutIds.current.push(id);
                  }
                },
              }
            );
          },
        });
      };

      // Start immediately
      animateNextGreeting();

      // Loader animations (shorter duration)
      if (loader1Ref.current) {
        gsap.from(loader1Ref.current, {
          width: 0,
          duration: 2, // Reduced from 6s to 2s
          ease: "expo.inOut",
        });
      }

      if (loader2Ref.current) {
        gsap.from(loader2Ref.current, {
          width: 0,
          duration: 2, // Reduced from 6s to 2s
          delay: 0.5, // Reduced from 1.9s to 0.5s
          ease: "expo.inOut",
        });
      }

      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          background: "none",
          delay: 2.5, // Reduced from 6s to 2.5s
          duration: 0.1,
        });
      }

      if (loader1Ref.current) {
        gsap.to(loader1Ref.current, {
          rotate: 90,
          y: -50,
          duration: 0.5,
          delay: 2.5, // Reduced from 6s to 2.5s
        });
      }

      if (loader2Ref.current) {
        gsap.to(loader2Ref.current, {
          x: -75,
          y: 75,
          duration: 0.5,
          delay: 2.5, // Reduced from 6s to 2.5s
        });
      }

      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          scale: 40,
          duration: 1,
          delay: 3, // Reduced from 7s to 3s
          ease: "expo.inOut",
        });

        gsap.to(loaderRef.current, {
          rotate: 45,
          y: 500,
          x: 2000,
          duration: 1,
          delay: 3, // Reduced from 7s to 3s
          ease: "expo.inOut",
        });
      }

      // Exit animation (shorter delay)
      if (loadingScreenRef.current) {
        gsap.to(loadingScreenRef.current, {
          yPercent: -100,
          duration: 1,
          delay: 3.5, // Reduced from 7.5s to 3.5s
          ease: "expo.inOut",
          opacity: 1, // Keep visible
        });
      }
    });

    return () => {
      ctx.revert();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeoutIds.current.forEach((id) => clearTimeout(id));
    };
  }, [greetings.length]);

  return (
    <div
      ref={loadingScreenRef}
      className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-blue-500 pointer-events-none font-montreal z-[999] overflow-visible flex items-center justify-center"
    >
      <div
        ref={greetingRef}
        className="greeting-item text-center text-white text-5xl md:text-7xl "
      >
        <Dot className="size-8 font-semibold" />
        {greetings[currentGreeting]}
      </div>
    </div>
  );
}
