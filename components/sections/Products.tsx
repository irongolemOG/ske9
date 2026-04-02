"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import Link from "next/link";

export default function Products() {
  const categories = [
    { title: "Titanium Dioxide", count: "8+", tags: ["Rutile", "Anatase", "Imported Grade"] },
    { title: "Calcium Carbonate", count: "12+", tags: ["Vietnamese Grades"] },
    { title: "Paint Additives", count: "30+", tags: ["Dispersants", "Defoamers", "Thickeners", "Wetting Agent"] },
    { title: "Paint Emulsions (Binders)", count: "12+", tags: ["Acrylic", "Styrene Acrylic", "VAE"] },
    { title: "Organic Pigments", count: "24+", tags: ["Phthalocyanine", "Azo", "High Performance"] },
    { title: "Inorganic Pigments & Chromes", count: "18+", tags: ["Middle Chrome", "Lemon Chrome", "Scarlet Chrome", "Primerose Chrome"] }
  ];

  return (
    <section id="products" className="py-24 relative bg-white">
      {/* Decorative Grid */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(12,60,140,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-skeRed uppercase mb-3">Comprehensive Catalog</h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Product Range</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white p-1 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-skeBlue/20"
            >
              <div className="bg-slate-50 rounded-xl h-full p-8 relative overflow-hidden z-10 border border-gray-100">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-skeRed/5 to-transparent rounded-full blur-xl group-hover:bg-skeRed/10 transition-colors" />
                
                <h4 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">{cat.title}</h4>

                <div className="mt-8 flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div 
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                  className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between text-skeRed font-bold text-sm cursor-pointer group/link"
                >
                  <Link href={`/products/${cat.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 w-full text-skeRed hover:text-skeBlue transition-colors">
                    <span className="group-hover/link:underline underline-offset-4">View Category Details</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-skeRed group-hover/link:text-skeBlue transition-colors"
                    >
                      <ChevronRight size={16} />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
