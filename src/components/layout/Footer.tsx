import Link from "next/link";
import { brandAssets } from "@/lib/branding";

export const Footer = () => {
  return (
    <footer className="bg-[#110f0f] border-t border-[#a98f63]/40 mt-16">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-12 text-[#e8e0d0]">
        <div className="mx-auto flex w-fit flex-col items-center">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[#a98f63]/30 bg-[#1d0b14] shadow-[0_0_30px_rgba(169,143,99,0.14)]">
            <img
              src={brandAssets.footerLogo}
              alt="Legends footer logo"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="royal-heading mt-4 text-center text-2xl text-[#a98f63]">LEGENDS</p>
          <p className="text-center mt-1 text-[#cbbca1]">Kingdom of Brews</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-10 text-sm">
          <div>
            <p className="font-semibold text-[#a98f63]">Quick Links</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#a98f63]">Menu</p>
            <div className="mt-2 flex flex-col gap-1 text-[#cbbca1]">
              <a href={brandAssets.menuReference} target="_blank" rel="noreferrer">Food Menu 9</a>
              <a href={brandAssets.finalFoodMenu} target="_blank" rel="noreferrer">Legends Final Food Menu</a>
              <Link href="/beers">Craft Beer Lineup</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#a98f63]">Connect</p>
            <p className="mt-2">support@legendsbrewery.in | +91 99999 99999</p>
          </div>
        </div>
        <p className="text-center text-xs mt-10 text-[#cbbca1]">Copyright 2026 Legends. Kingdom of Brews.</p>
      </div>
    </footer>
  );
};
