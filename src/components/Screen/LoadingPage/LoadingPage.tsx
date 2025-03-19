import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Dot } from "lucide-react";
import { slideUp } from './anim';

const greetings = [
  "Hello",
  "ሰላም",
  "Hola",
  "안녕하세요",
  "Bonjour",
  "Xin chào",
];



// New animation variants
const greetingVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function LoadingScreen() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight});
    }, []);

    useEffect(() => {
        if(index === greetings.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1200 : 800); // Increased durations
        
        return () => clearTimeout(timeout); // Cleanup timeout
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    return (
      <motion.div
        initial="initial"
        exit="exit"
        variants={slideUp}
        className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[99] bg-blue-400"
      >
        {dimension.width > 0 && (
          <>
            <div className="absolute z-10 flex items-center text-white text-[42px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  variants={greetingVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center"
                >
                  <Dot className="w-2.5 h-2.5 mr-2.5 bg-white rounded-full" />
                  {greetings[index]}
                </motion.div>
              </AnimatePresence>
            </div>
            <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
              <motion.path
                variants={curve}
                initial="initial"
                exit="exit"
                style={{ fill: "#60a5fa " }}
              />
            </svg>
          </>
        )}
      </motion.div>
    );
}