import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dot } from "lucide-react";
import { slideDown } from './anim';

// Animation for sliding down

export default function PageTransition({ title }: { title: string }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;


  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideDown}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[99] bg-blue-400"
    >
      {dimension.width > 0 && (
        <>
          <div className="absolute z-10 flex items-center text-white text-[42px]">
            <div className="flex items-center">
              <Dot className="w-2.5 h-2.5 mr-2.5 bg-white rounded-full" />
              {title}
            </div>
          </div>
          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              style={{ fill: "#60a5fa" }}
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}