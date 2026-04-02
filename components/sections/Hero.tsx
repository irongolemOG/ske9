"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 bg-white">
        {/* We can use the generated hero image here as a background */}
        <div className="absolute inset-0 bg-[url('https://customer-assets.emergentagent.com/job_97758360-a63e-401a-aaba-0a69f522cd22/artifacts/7z3hxn4d_IMG_1849.jpeg')] bg-cover bg-center opacity-[0.03] blur-xl scale-125" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-skeRed/15 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-skeBlue/15 blur-[120px] rounded-full mix-blend-multiply pointer-events-none" />
        
        {/* Elegant Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0C3C8C08_1px,transparent_1px),linear-gradient(to_bottom,#0C3C8C08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-60" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-skeRed animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-skeBlue uppercase">Trusted since 1990</span>
          </motion.div>

          {/* Headline Reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Specialty{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skeBlue to-skeRed inline-block">
              Chemical
            </span>{" "}
            <br className="hidden md:block" />
            Solutions
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Empowering industries with high-performance pigments, emulsions, and additives engineered for excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-skeRed text-white rounded-full font-bold shadow-lg shadow-skeRed/30 overflow-hidden transition-all hover:scale-105 hover:shadow-skeRed/50"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Explore Products</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-skeBlue bg-white shadow-md hover:bg-gray-50 border border-skeBlue/10 transition-all"
            >
              Contact Directory
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 inset-x-0 w-full flex flex-col items-center justify-center text-gray-500 animate-bounce cursor-pointer gap-2"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-skeBlue select-none">Discover</span>
        <ChevronDown size={20} className="text-skeBlue" />
      </motion.div>
    </section>
  );
}
