import Link from "next/link";
import { brandAssets } from "@/lib/branding";

export const Footer = () => {
  return (
    <footer className="bg-[#110f0f] border-t border-[#a98f63]/40 mt-16">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-12 text-[#e8e0d0]">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          {/* Logo left aligned */}
          <div className="flex-shrink-0 flex flex-col items-start">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#1d0b14] shadow-[0_0_30px_rgba(169,143,99,0.14)]">
              <img
                src={brandAssets.mainLogo}
                alt="Legends logo"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="royal-heading mt-3 text-xl text-[#a98f63]">LEGENDS</p>
            <p className="text-sm text-[#cbbca1]">Kingdom of Brews</p>
          </div>

          {/* Links */}
          <div className="flex-1 grid sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-semibold text-[#a98f63]">Quick Links</p>
              <div className="mt-2 flex flex-col gap-2 text-[#cbbca1]">
                <Link href="/" className="hover:text-[#a98f63] transition-colors">Home</Link>
                <Link href="/about" className="hover:text-[#a98f63] transition-colors">About</Link>
                <Link href="/beers" className="hover:text-[#a98f63] transition-colors">Beers</Link>
                <Link href="/menu" className="hover:text-[#a98f63] transition-colors">Menu</Link>
                <Link href="/events" className="hover:text-[#a98f63] transition-colors">Events</Link>
                <Link href="/gallery" className="hover:text-[#a98f63] transition-colors">Gallery</Link>
                <Link href="/contact" className="hover:text-[#a98f63] transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#a98f63]">Visit Us</p>
              <div className="mt-2 flex flex-col gap-2 text-[#cbbca1]">
                <p>Bengaluru, Karnataka</p>
                <p>Mon-Thu 12pm-11pm</p>
                <p>Fri-Sun 12pm-12am</p>
                <Link href="/reservations" className="hover:text-[#a98f63] transition-colors">Book a Table</Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#a98f63]">Connect</p>
              <div className="mt-2 flex flex-col gap-2 text-[#cbbca1]">
                <p>support@legendsbrewery.in</p>
                <p>+91 99999 99999</p>
                <a
                  href="https://www.instagram.com/legendsbreweryblr/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a98f63] transition-colors flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @legendsbreweryblr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#a98f63]/20 mt-10" />
        <p className="text-center text-xs mt-6 text-[#cbbca1]">
          Copyright 2026 Legends. Kingdom of Brews. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
