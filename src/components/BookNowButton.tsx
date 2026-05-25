"use client";

import { useState } from "react";
import Link from "next/link";

export function BookNowButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Button Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu Items */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white shadow-lg rounded-lg overflow-hidden mb-2 animate-in fade-in zoom-in-95 duration-200">
            <Link
              href="/reservations"
              className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-[#f5f0e8] whitespace-nowrap border-b"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Table
            </Link>
            <Link
              href="/corporate-booking"
              className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-[#f5f0e8] whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              Corporate Booking
            </Link>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#83043b] hover:bg-[#6d032f] text-white font-semibold py-3 px-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#83043b] focus:ring-offset-2 w-14 h-14 flex items-center justify-center"
          aria-label="Book Now Menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
          </svg>
        </button>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
