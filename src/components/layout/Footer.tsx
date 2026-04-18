import Link from "next/link";
import { brandAssets } from "@/lib/branding";
import { venueDetails } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="bg-[#0d0b0b] border-t border-[#a98f63]/30">
      <div className="max-w-7xl mx-auto px-6 py-14 text-[#e8e0d0]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <div className="h-20 w-20 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#1d0b14]">
              <img
                src={brandAssets.mainLogo}
                alt="Legends"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="royal-heading mt-4 text-xl text-[#a98f63]">LEGENDS</p>
            <p className="text-sm text-[#cbbca1]">Kingdom of Brews</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a98f63]">Navigate</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#cbbca1]">
              <Link href="/" className="hover:text-[#a98f63] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#a98f63] transition-colors">About</Link>
              <Link href="/beers" className="hover:text-[#a98f63] transition-colors">Beers</Link>
              <Link href="/menu" className="hover:text-[#a98f63] transition-colors">Menu</Link>
              <Link href="/events" className="hover:text-[#a98f63] transition-colors">Events</Link>
              <Link href="/gallery" className="hover:text-[#a98f63] transition-colors">Gallery</Link>
              <Link href="/contact" className="hover:text-[#a98f63] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Visit */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a98f63]">Visit Us</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#cbbca1]">
              <p>{venueDetails.address}</p>
              <p>{venueDetails.hours}</p>
              <Link href="/reservations" className="hover:text-[#a98f63] transition-colors">Book a Table</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a98f63]">Connect</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#cbbca1]">
              <a href={`mailto:${venueDetails.email}`} className="flex items-start gap-2.5 hover:text-[#a98f63] transition-colors break-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 4 L12 13 L22 4" />
                </svg>
                <span>{venueDetails.email}</span>
              </a>
              <a href={`tel:${venueDetails.phone.replace(/\s/g, "")}`} className="flex items-start gap-2.5 hover:text-[#a98f63] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2z" />
                </svg>
                <span>{venueDetails.phone}</span>
              </a>
              <a
                href="https://www.instagram.com/legendsbreweryblr/"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 hover:text-[#a98f63] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mt-0.5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@legendsbreweryblr</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 h-px bg-[#a98f63]/20" />
        <p className="mt-6 text-center text-xs text-[#cbbca1]">
          © 2026 LEGENDS. Kingdom of Brews. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
