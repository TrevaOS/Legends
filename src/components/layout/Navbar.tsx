"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { brandAssets } from "@/lib/branding";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Beers", "/beers"],
  ["Menu", "/menu"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "py-2 border-b border-[#a98f63]/45 shadow-[0_8px_30px_rgba(169,143,99,0.14)]" : "py-4"} bg-[#1a0010]/80 backdrop-blur-xl`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#2a0d18] shadow-[0_0_20px_rgba(169,143,99,0.18)]">
            <img
              src={brandAssets.mainLogo}
              alt="Legends main logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-none">
            <p className="royal-heading text-lg text-[#f5f0e8]">LEGENDS</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#a98f63]">Kingdom of Brews</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(([label, href]) => (<Link key={href} href={href} className="hover:text-[#a98f63] transition-colors">{label}</Link>))}
          <a href="https://widget.reservego.co/reserveOutlets/69e43f6414d072543704f2f8?source=9" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#a98f63] to-[#cbbca1] text-[#2a1200] font-bold text-xs uppercase tracking-[0.14em]">Book a Table</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.25 }} className="md:hidden fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 bg-[#110f0f]/95 border-l border-[#a98f63]/35 p-6">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 border-b border-[#a98f63]/20 pb-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#a98f63]/40">
                  <img
                    src={brandAssets.mainLogo}
                    alt="Legends main logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="royal-heading text-lg text-[#f5f0e8]">LEGENDS</p>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#a98f63]">Kingdom of Brews</p>
                </div>
              </div>
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="text-lg">{label}</Link>
              ))}
              <a href="https://widget.reservego.co/reserveOutlets/69e43f6414d072543704f2f8?source=9" target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-2 px-4 py-3 text-center rounded-full bg-gradient-to-r from-[#a98f63] to-[#cbbca1] text-[#2a1200] font-semibold">Book a Table</a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};
