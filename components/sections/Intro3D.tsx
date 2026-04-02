"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro3D() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the intro after the animation completes
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated 3D-like typography */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 45 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotateX: 0,
              transition: { duration: 1.2, ease: "easeOut" }
            }}
            exit={{ 
              scale: 1.1, 
              opacity: 0,
              transition: { duration: 0.5, ease: "easeIn" }
            }}
            className="perspective-[1000px] flex items-center justify-center transform-style-3d"
          >
            <h1 
              className="text-8xl md:text-[12rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-skeBlue via-skeBlue to-skeRed"
              style={{
                textShadow: "0 20px 40px rgba(12, 60, 140, 0.2), 0 10px 10px rgba(230, 57, 70, 0.1)",
                WebkitTextStroke: "1px rgba(12, 60, 140, 0.1)"
              }}
            >
              SKE
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.8, duration: 1 }
            }}
            exit={{ opacity: 0 }}
            className="mt-8 relative"
          >
            <div className="text-skeRed font-bold tracking-[0.3em] uppercase text-sm md:text-base text-center">
              Sri Kartikeya Enterprises
            </div>
            
            {/* Loading Bar */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-[3px] bg-slate-100 overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="w-full h-full bg-gradient-to-r from-skeBlue to-skeRed"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
