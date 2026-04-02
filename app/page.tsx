import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Industries from "@/components/sections/Industries";
import Products from "@/components/sections/Products";
import Principals from "@/components/sections/Principals";
import Contact from "@/components/sections/Contact";
import Intro3D from "@/components/sections/Intro3D";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-skeRed/30 selection:text-skeBlue">
      <Intro3D />
      <Navbar />
      <Hero />
      <Features />
      <Industries />
      <Products />
      <Principals />
      <Contact />
      <Footer />
    </main>
  );
}
