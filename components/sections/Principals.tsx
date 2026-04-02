"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Principals() {
  const partners = [
    { 
      name: "KMML", 
      role: "Titanium Dioxide (TiO2)",
      logo: "/images/kmml.jpg",
      link: "https://www.kmml.com/"
    },
    { 
      name: "Archroma", 
      role: "Binders and Speciality Additives",
      logo: "/images/archrome.jpg",
      link: "https://www.archroma.com/"
    },
    { 
      name: "DCW Ltd", 
      role: "Iron Oxides and Utox",
      logo: "/images/dcw.jpg",
      link: "https://dcwltd.com/"
    },
  ];

  return (
    <section id="principals" className="py-24 relative bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-skeRed/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-skeRed uppercase mb-3">Our Principals</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Trusted Supply Network</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">We collaborate with industry-leading manufacturers to ensure consistent, premium-grade chemical supply for our partners.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="w-full md:w-[calc(33.333%-2rem)] max-w-sm"
            >
              <Link href={partner.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <div className="bg-white p-8 rounded-2xl h-full shadow-sm hover:shadow-xl border border-gray-100 group-hover:border-skeBlue/30 transition-all flex flex-col items-center text-center justify-center min-h-[280px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-skeBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Logo Container */}
                  <div className="w-full h-24 relative mb-6 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-2 relative z-10 transition-colors group-hover:text-skeBlue">{partner.name}</h4>
                  <p className="text-skeRed font-semibold tracking-wide relative z-10 text-sm">{partner.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
