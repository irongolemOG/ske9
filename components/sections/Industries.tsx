"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

export default function Industries() {
  const industries = [
    { title: "Paints & Coatings", description: "High-performance pigments, emulsions, and additives.", image: "url('/images/paint.jpg')" },
    { title: "Printing Inks", description: "Specialized pigments and resins for various printing technologies.", image: "url('/images/ink.jpg')" },
    { title: "Pavers & Concrete Products", description: "Colorants and construction chemicals for durable concrete items.", image: "url('/images/pavers.jpg')" },
    { title: "Construction Chemicals", description: "Admixtures and waterproofing solutions for modern infrastructure.", image: "url('/images/chemicals.jpg')" }
  ];

  return (
    <section id="industries" className="py-24 relative bg-slate-50 border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-skeRed uppercase mb-3">Industries We Serve</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Powering Multiple Sectors</h3>
          </div>
          <Link href="/industries" className="hidden md:inline-flex items-center gap-2 text-skeBlue hover:text-skeRed font-semibold transition-all pb-2 group">
            <span className="group-hover:underline underline-offset-4">View All Sectors</span> 
            <ArrowUpRight size={18} className="text-skeRed group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              <motion.div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                style={{ backgroundImage: ind.image }} 
              />
              
              {/* Overlay gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C3C8C]/90 via-[#0C3C8C]/40 to-transparent transition-opacity duration-500 group-hover:opacity-80 mix-blend-multiply" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-4 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100 shadow-lg">
                  <ArrowUpRight size={24} />
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">{ind.title}</h4>
                <p className="text-white/80 font-medium transform opacity-0 -translate-y-4 group-hover:opacity-100 transition-all duration-500 delay-75 group-hover:translate-y-0">{ind.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
