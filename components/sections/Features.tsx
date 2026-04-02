"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CalendarCheck, MapPin, Award, Gem, Truck } from "lucide-react";
import Image from "next/image";

export default function Features() {
  const features = [
    { title: "Established 1990", description: "Over 3 decades of excellence in specialty chemical supply.", icon: <CalendarCheck size={32} /> },
    { title: "Authorized Distributor", description: "Official distributor for Tier-1 chemical manufacturers.", icon: <Award size={32} /> },
    { title: "Strong Supply Chain", description: "Robust distribution network across South India.", icon: <Truck size={32} /> },
    { title: "Technical Expertise", description: "Expert technical support and deep product knowledge.", icon: <Gem size={32} /> },
    { title: "Quality Assurance", description: "Consistent quality control and timely delivery.", icon: <ShieldCheck size={32} /> },
    { title: "Trusted Partner", description: "Long-term partnerships with leading manufacturers.", icon: <MapPin size={32} /> }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* About Us Content & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-skeRed uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Excellence in <br />
              <span className="text-skeBlue">Chemical Supply</span>
            </h3>
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                Sri Kartikeya Enterprises has been a cornerstone in the specialty chemical supply chain for over three decades. Our commitment to quality, reliability, and technical expertise has made us a trusted partner for manufacturers across South India.
              </p>
              <p>
                We specialize in providing high-quality sustainable chemicals and specialty raw materials to the Paints & Coatings, Printing Inks, Pavers, and Construction Chemicals industries, backed by strong partnerships with leading manufacturers.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl glass border border-gray-200"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('/images/industry.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-skeBlue/30 to-transparent mix-blend-multiply" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-2xl overflow-hidden border border-gray-100 hover:border-skeBlue/30 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-skeRed group-hover:bg-skeBlue group-hover:text-white transition-colors duration-300 border border-gray-100 shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
