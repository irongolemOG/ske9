"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Management", href: "/management" },
    { name: "Products", href: "/#products" },
    { name: "Industries", href: "/#industries" },
    { name: "Principals", href: "/#principals" },
    { name: "Awards and Recognition", href: "/awards" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <img 
                src="/images/ske.png" 
                alt="SKE Logo" 
                className="h-24 md:h-28 w-auto rounded object-contain transform origin-left transition-transform hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-1 rounded-full px-2 py-1 ${scrolled ? 'bg-slate-50 border border-gray-100' : 'bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-semibold text-gray-600 hover:text-skeBlue transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-skeBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="bg-skeRed hover:bg-skeRed/90 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg shadow-skeRed/20"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-36 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-gray-800 hover:text-skeBlue py-2 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-skeRed text-white px-6 py-3 rounded-full font-bold text-center shadow-lg shadow-skeRed/20"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
