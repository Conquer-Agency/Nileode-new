import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dot } from "lucide-react";

const greetingVariants = {
  initial: { opacity: 0, y: -20 }, 
  animate: { opacity: 1, y: 0 }, 
  exit: { opacity: 0, y: 20 }, 
};

export default function PageTransition({ title }: { title: string }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1200 : 800); // Increased durations

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }, // Updated duration to 1 second
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }, // Updated duration to 1 second
    },
  };

  const slideDown = {
    initial: { y: "-100%" }, // Start above the screen
    animate: { y: "0%" }, // Slide into view
    exit: { y: "100%" }, // Slide out below the screen
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }, // Updated duration to 1 second
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slideDown} // Use slideDown animation
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[99] bg-blue-400"
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute z-10 flex items-center text-white text-[42px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={title}
                variants={greetingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center"
              >
                <Dot className="w-2.5 h-2.5 mr-2.5 bg-white rounded-full" />
                {title}
              </motion.div>
            </AnimatePresence>
          </div>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ fill: "#60a5fa" }}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}