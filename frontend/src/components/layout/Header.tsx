"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99] w-full flex items-center transition-all duration-300 shadow-[0_0px_4px_2px_rgba(0,0,0,0.2)] backdrop-blur-[5px] backdrop-saturate-75 text-white ${
        isScrolled 
          ? "bg-[rgba(173,111,16,0.8)] h-[90px]" 
          : "bg-[rgba(173,111,16,0.5)] h-[110px]"
      }`}
    >
      <Container className="flex items-center justify-between w-full">
        {/* 1. Logo (Home) */}
        <Link href="/" className="flex flex-col text-white">
          <span className="text-2xl font-bold tracking-widest leading-none">PRESTIGE FLOOR</span>
          <span className="text-[10px] tracking-widest uppercase mt-1 font-medium">Home of the best floors</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center">
          {/* Base Nav Link Class: text-[20px] font-light uppercase text-white hover:font-bold transition-all px-[10px] py-[5px] mx-[3px] rounded-[25px] */}
          
          <Link href="/flooring" className="text-[16px] md:text-[20px] font-light uppercase px-[10px] py-[5px] mx-[3px] rounded-[25px] hover:font-bold transition-all flex items-center gap-1">Flooring</Link>
          
          <Link href="/prestige-oak" className="text-[16px] md:text-[20px] font-light uppercase px-[10px] py-[5px] mx-[3px] rounded-[25px] hover:font-bold transition-all flex items-center gap-1">Prestige Oak</Link>
          
          <Link href="/carpet" className="text-[16px] md:text-[20px] font-light uppercase px-[10px] py-[5px] mx-[3px] rounded-[25px] hover:font-bold transition-all flex items-center gap-1">Carpet</Link>
          
          <Link href="/trade-services" className="text-[16px] md:text-[20px] font-light uppercase px-[10px] py-[5px] mx-[3px] rounded-[25px] hover:font-bold transition-all flex items-center gap-1">Trade Services</Link>
          
          <Link href="/rugs" className="text-[16px] md:text-[20px] font-light uppercase px-[10px] py-[5px] mx-[3px] rounded-[25px] hover:font-bold transition-all flex items-center gap-1">Rugs</Link>
          
          <button aria-label="Search" className="hover:text-gray-200 transition-colors ml-2 px-[10px] py-[5px] mx-[3px]">
            <Search size={22} />
          </button>

          {/* Quick Quote */}
          <Link href="/quote" className="bg-[#cc8b65] text-white px-6 py-2.5 rounded text-[16px] md:text-[20px] font-bold uppercase tracking-wider hover:bg-[#b07554] transition-colors shadow-sm ml-2">
            Quick Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="xl:hidden z-50 relative text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu - Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[rgba(173,111,16,0.95)] shadow-xl py-4 px-4 flex flex-col gap-4 xl:hidden border-t border-white/20"
            >
              <div className="flex flex-col gap-4 text-[20px] font-light uppercase p-2 text-white">
                <Link onClick={() => setMobileMenuOpen(false)} href="/flooring" className="border-b border-white/20 pb-3 hover:font-bold">Flooring</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/prestige-oak" className="border-b border-white/20 pb-3 hover:font-bold">Prestige Oak</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/carpet" className="border-b border-white/20 pb-3 hover:font-bold">Carpet</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/trade-services" className="border-b border-white/20 pb-3 hover:font-bold">Trade Services</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/rugs" className="border-b border-white/20 pb-3 hover:font-bold">Rugs</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/quote" className="bg-[#cc8b65] text-white font-bold px-5 py-3 mt-4 rounded text-center w-full hover:bg-[#b07554]">
                  Quick Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
