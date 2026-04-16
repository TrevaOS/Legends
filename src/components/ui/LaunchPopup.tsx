"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { launchEventDetails } from "@/lib/data";

export const LaunchPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay on first visit
    const dismissed = sessionStorage.getItem("launch-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("launch-popup-dismissed", "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/75 grid place-items-center p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 32 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#a98f63]/60 bg-[#160009] shadow-[0_0_60px_rgba(169,143,99,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pattern stripe at top */}
            <div
              className="h-16 w-full opacity-30"
              style={{
                backgroundImage: "url('/assets/patterns/royal-pattern.png')",
                backgroundSize: "200px",
              }}
            />
            <div className="px-8 pb-8 pt-2 text-center">
              <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full border border-[#a98f63]/50 bg-[#210811]">
                <img
                  src="/assets/logos/Legends_Logo_Variations_page-0001.jpg"
                  alt="Legends logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-xs text-[#a98f63] uppercase tracking-[0.45em]">You are invited</p>
              <h2 className="royal-heading text-4xl text-[#f5f0e8] mt-3">
                Indulge in<br />
                <span className="text-[#a98f63]">Grandeur</span>
              </h2>

              <div className="h-px bg-[#a98f63]/40 my-5" />

              <p className="text-[#cbbca1] text-sm leading-relaxed">
                Join us for the <strong className="text-[#f5f0e8]">Grand Launch</strong> of<br />
                <strong className="text-[#a98f63] royal-heading text-lg">Legends Microbrewery</strong>
              </p>
              <p className="text-[#cbbca1] text-xs mt-2">
                A celebration of passion, craftsmanship, timeless grandeur.
              </p>

              <div className="mt-5 ornamental-border rounded-xl p-4">
                <p className="royal-heading text-2xl text-[#a98f63]">{launchEventDetails.dateLabel}</p>
                <p className="text-[#e8e0d0] text-sm mt-1">{launchEventDetails.timeLabel}</p>
              </div>

              <p className="text-xs text-[#cbbca1] mt-3">
                {launchEventDetails.tagline}
              </p>

              <a
                href="/events"
                onClick={dismiss}
                className="mt-5 inline-flex items-center justify-center w-full rounded-full bg-[#a98f63] text-[#200b0f] font-semibold py-3 hover:bg-[#cbbca1] transition-colors"
              >
                See Event Details
              </a>

              <button
                type="button"
                onClick={dismiss}
                className="mt-3 text-xs text-[#cbbca1] hover:text-[#e8e0d0] transition-colors underline"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
