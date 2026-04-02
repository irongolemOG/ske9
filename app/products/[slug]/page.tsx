import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download } from "lucide-react";

const pdfMap: Record<string, {name: string, file: string}[]> = {
  "titanium-dioxide": [
    { name: "KMML RC800PG+ Technical Data", file: "/pdfs/Titanium Dioxide/KMML RC800PG+.pdf" },
    { name: "KMML RC822 Technical Data", file: "/pdfs/Titanium Dioxide/KMML RC822.pdf" }
  ],
  "calcium-carbonate": [
    { name: "Calcium Carbonate TDS", file: "/pdfs/Calcium Carbonate/Calcium Carbonate TDS.pdf" },
    { name: "Calcium Grades", file: "/pdfs/Calcium Carbonate/Calcium Grades.pdf" }
  ],
  "paint-additives": [
    { name: "Mowilith LDM 7030", file: "/pdfs/Paint Additves/Mowilith-LDM-7030.pdf" },
    { name: "Mowiplus XW 330", file: "/pdfs/Paint Additves/Mowiplus XW 330.pdf" },
    { name: "Mowiplus NIW 147", file: "/pdfs/Paint Additves/Mowiplus-NIW-147.pdf" },
    { name: "Mowiplus D TDS", file: "/pdfs/Paint Additves/TDS Mowiplus D.pdf" },
    { name: "Mowiplus DA 45 TDS", file: "/pdfs/Paint Additves/TDS Mowiplus DA 45.pdf" }
  ],
  "paint-emulsions-(binders)": [
    { name: "Mowilith 727 M", file: "/pdfs/Paint emulsions/Mowilith 727 M.pdf" },
    { name: "Mowilith LDM 6481", file: "/pdfs/Paint emulsions/Mowilith LDM 6481.pdf" },
    { name: "Mowilith LDM 6400 TDS", file: "/pdfs/Paint emulsions/TDS Of Mowilith LDM 6400.pdf" }
  ],
  "inorganic-pigments-&-chromes": [
    { name: "Lemon Chrome L-21", file: "/pdfs/Inorganic Pigments/ANUANG_Lemon_Chrome_L-21_Rev_01.pdf" },
    { name: "Middle Chrome M-11", file: "/pdfs/Inorganic Pigments/ANURANG_Middle_Chrome_M-11_Rev_01.pdf" },
    { name: "Primrose Chrome P-31", file: "/pdfs/Inorganic Pigments/ANURANG_Primrose_Chrome_P-31_Rev_01.pdf" },
    { name: "Scarlet Chrome S-41", file: "/pdfs/Inorganic Pigments/ANURANG_Scarlet_Chrome__S-41_Rev_01.pdf" }
  ]
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const formattedTitle = decodedSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const resources = pdfMap[params.slug] || [];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-skeRed/30 selection:text-skeBlue pt-32">
      <Navbar />
      <div className="container mx-auto px-6 max-w-7xl py-20 pb-32 min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white mb-8 border border-gray-200 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-skeRed animate-pulse" />
          <span className="text-sm font-bold tracking-wide text-skeBlue uppercase">Product Category Details</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 break-words px-2">{formattedTitle}</h1>
        <p className="text-gray-600 max-w-2xl text-lg mb-12 leading-relaxed font-medium px-4">
          Deep dive into our robust selection of {formattedTitle.toLowerCase()}. We provide industrial-grade, certified materials to ensure maximum performance for your specific applications.
        </p>

        {resources.length > 0 ? (
          <div className="w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">Downloadable Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {resources.map((res, i) => (
                <a 
                  key={i} 
                  href={encodeURI(res.file).replace(/\+/g, '%2B')} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-skeBlue/5 hover:border-skeBlue/30 transition-all duration-300 group"
                >
                  <span className="font-semibold text-slate-700 group-hover:text-skeBlue transition-colors">{res.name}</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-2 shadow-sm border border-slate-100 group-hover:border-skeBlue/50 group-hover:bg-skeBlue group-hover:text-white transition-all text-skeRed">
                    <Download size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a href="/#contact" className="px-8 py-4 bg-skeRed text-white rounded-full font-bold transition-all hover:scale-105 shadow-md shadow-skeRed/30 hover:shadow-lg hover:shadow-skeRed/40">
            Request Technical Data Sheet
          </a>
        )}
      </div>
      <Footer />
    </main>
  );
}
