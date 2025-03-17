import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Dot } from "lucide-react";

export default function LoadingScreen() {
  const greetingRef = useRef<HTMLDivElement>(null);
  const loader1Ref = useRef<HTMLDivElement>(null);
  // const loader2Ref = useRef<HTMLDivElement>(null);
  // const loaderRef = useRef<HTMLDivElement>(null);
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
                if (currentIndex < greetings.length && currentIndex < 20) {
                  const id = setTimeout(animateNextGreeting, 75); // Shorter delay between greetings
                  timeoutIds.current.push(id);
                }
              },
            }
          );
        },
      });
    };

    // Start immediately (removed initial 100ms delay)
    animateNextGreeting();

    // Keep the rest of your loader animations the same
    if (loader1Ref.current) {
      gsap.from(loader1Ref.current, {
        width: 0,
        duration: 6,
        ease: "expo.inOut",
      });
    }

    // ... (rest of your existing loader animations)

    // Modified exit animation (keep visible during movement)
    if (loadingScreenRef.current) {
      gsap.to(loadingScreenRef.current, {
        yPercent: -100,
        duration: 1.5,
        delay: 7,
        ease: "expo.inOut",
        opacity: 1, // Keep fully visible
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
      className="fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-gray-100 pointer-events-none font-montreal z-[999] overflow-visible flex items-center justify-center"
    >
      {/* <div
        ref={loaderRef}
        className="absolute top-1/2 left-1/2 w-[300px] h-[40px] -translate-x-1/2 -translate-y-1/2 flex "
      >
        <div ref={loader1Ref} className="relative bg-indigo-500 w-[200px] h-[40px]"></div>
        <div ref={loader2Ref} className="relative bg-indigo-500 w-[100px] h-[40px]"></div>
      </div> */}

      {/* <div className="greeting-container absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"> */}
      <div
        ref={greetingRef}
        className="greeting-item text-center text-indigo-600 "
      >
        <Dot className="size-8 font-semibold" />
        {greetings[currentGreeting]}
      </div>
      {/* </div> */}
    </div>
  );
}
