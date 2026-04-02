import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-skeRed/30 selection:text-skeBlue pt-32">
      <Navbar />
      <div className="container mx-auto px-6 max-w-7xl py-20 pb-32 min-h-[60vh]">
        <h1 className="text-5xl font-black text-gray-900 mb-6">All Sectors & Industries</h1>
        <p className="text-gray-600 max-w-2xl text-lg mb-12 font-medium">
          Explore the wide variety of industries we empower with high-grade chemical solutions, built for performance and sustainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {['Paints & Coatings', 'Printing Inks', 'Pavers & Concrete', 'Construction Chemicals', 'Textiles', 'Adhesives'].map((ind) => (
             <div key={ind} className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-skeBlue/40 transition-all shadow-sm hover:shadow-xl group cursor-pointer">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-skeBlue transition-colors">{ind}</h3>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  Comprehensive chemical support and raw materials tailored specifically for the {ind.toLowerCase()} sector.
                </p>
             </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
