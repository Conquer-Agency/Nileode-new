import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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
    "Ciao",
    "你好",
    "नमस्ते",
    "こんにちは",
    "Merhaba",
    "Здравствуйте",
    "السّلام",
    "Sawubona",
    "Hallo",
    "Aloha",
    "שָׁלוֹם",
    "Szia",
    "Olá",
    "Hej",
    "Xin chào",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      let currentIndex = 0;

      const animateNextGreeting = () => {
        if (currentIndex >= greetings.length || !greetingRef.current) return;

        gsap.to(greetingRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          onComplete: () => {
            setCurrentGreeting(currentIndex);
            gsap.fromTo(
              greetingRef.current,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.2,
                onComplete: () => {
                  currentIndex++;
                  if (currentIndex < greetings.length && currentIndex < 15) {
                    const id = setTimeout(animateNextGreeting, 300);
                    timeoutIds.current.push(id);
                  }
                },
              }
            );
          },
        });
      };

      const initialTimeoutId = setTimeout(() => {
        animateNextGreeting();
      }, 100);
      timeoutIds.current.push(initialTimeoutId);

      // Loader animations
      if (loader1Ref.current) {
        gsap.from(loader1Ref.current, {
          width: 0,
          duration: 6,
          ease: "expo.inOut",
        });
      }

      if (loader2Ref.current) {
        gsap.from(loader2Ref.current, {
          width: 0,
          duration: 6,
          delay: 1.9,
          ease: "expo.inOut",
        });
      }

      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          background: "none",
          delay: 6,
          duration: 0.1,
        });
      }

      if (loader1Ref.current) {
        gsap.to(loader1Ref.current, {
          rotate: 90,
          y: -50,
          duration: 0.5,
          delay: 6,
        });
      }

      if (loader2Ref.current) {
        gsap.to(loader2Ref.current, {
          x: -75,
          y: 75,
          duration: 0.5,
          delay: 6,
        });
      }

      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          scale: 40,
          duration: 1,
          delay: 7,
          ease: "expo.inOut",
        });

        gsap.to(loaderRef.current, {
          rotate: 45,
          y: 500,
          x: 2000,
          duration: 1,
          delay: 7,
          ease: "expo.inOut",
        });
      }

      if (loadingScreenRef.current) {
        gsap.to(loadingScreenRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 7.5,
          ease: "power1.inOut",
        });
      }

      gsap.to(".greeting-container", {
        y: -150,
        opacity: 0,
        delay: 6,
        duration: 1,
        ease: "power4.inOut",
      });
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
      className="fixed top-0 left-0 bottom-0 right-0 w-full h-full  bg-white pointer-events-none font-montreal z-[999] overflow-clip"
    >
      {/* <div
        ref={loaderRef}
        className="absolute top-1/2 left-1/2 w-[300px] h-[40px] -translate-x-1/2 -translate-y-1/2 flex "
      >
        <div ref={loader1Ref} className="relative bg-indigo-500 w-[200px] h-[40px]"></div>
        <div ref={loader2Ref} className="relative bg-indigo-500 w-[100px] h-[40px]"></div>
      </div> */}

      <div className="greeting-container absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div ref={greetingRef} className="greeting-item text-center text-indigo-600 ">
          {greetings[currentGreeting]}
        </div>
      </div>
    </div>
  );
}
