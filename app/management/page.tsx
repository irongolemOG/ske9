import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ManagementPage() {
  const leaders = [
    {
      name: "MAHESH BALDWA",
      role: "Managing Director",
      image: "/images/mahesh baldwa.jpeg",
      bio: "A self-made entrepreneur and visionary founder, Mr. Baldwa has transformed Sri Kartikeya Group into a trusted industry name through dedication and leadership. Beyond Chemicals, he's established a strong presence in Pharmaceuticals, Jewellery and Real Estate Sector, driving growth and innovation. As Chairman of the Mahesh Bhagwati Baldwa Foundation, he champions quality education for underprivileged communities and social welfare initiatives.",
    },
    {
      name: "RAGHAV BALDWA",
      role: "Director",
      image: "/images/raghav baldwa.jpeg",
      bio: "After graduating in Commerce and working in Finance industry, Raghav Joined Sri Kartikeya Group in 2021, driving company growth and diversification. Under his leadership, the company has modernized facilities and broadened its product portfolio.",
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 font-sans">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Our <span className="text-skeRed">Management</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving Sri Kartikeya Enterprises towards new horizons of innovation, quality, and community impact.
            </p>
          </div>

          <div className="space-y-16">
            {leaders.map((leader, index) => (
              <div 
                key={leader.name} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-shadow duration-300`}
              >
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <div className="relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="w-full md:w-3/5 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-2 uppercase tracking-wide">
                      {leader.name}
                    </h2>
                    <p className="text-skeRed font-bold text-xl uppercase tracking-wider">{leader.role}</p>
                  </div>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-skeBlue to-skeRed rounded-full" />
                  
                  <p className="text-slate-600 text-lg leading-relaxed text-justify">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
