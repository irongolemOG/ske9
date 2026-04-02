import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AwardsPage() {
  const awards = [
    { src: "/images/award 1.jpeg", alt: "Award 1" },
    { src: "/images/award 2.jpeg", alt: "Award 2" },
    { src: "/images/award 3.jpeg", alt: "Award 3" },
    { src: "/images/award 4.jpeg", alt: "Award 4" },
    { src: "/images/award 5.jpeg", alt: "Award 5" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 font-sans border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Awards & <span className="text-skeRed">Recognition</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized across the industry. Here are some of our proudest moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex items-center justify-center aspect-[4/3] overflow-hidden cursor-zoom-in"
              >
                <img 
                  src={award.src} 
                  alt={award.alt} 
                  className="w-full h-full object-contain rounded-xl transform origin-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 pointer-events-none rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
