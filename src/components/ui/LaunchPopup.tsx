"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LaunchPopup = () => {
  const [open, setOpen] = useState(false);
  const sessionKey = "book-popup-seen";

  useEffect(() => {
    const seenInSession = sessionStorage.getItem(sessionKey);
    if (seenInSession) {
      return;
    }

    const timer = setTimeout(() => setOpen(true), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dismiss = () => {
    sessionStorage.setItem(sessionKey, "1");
    setOpen(false);
  };

  const handleBooking = () => {
    window.open("https://widget.reservego.co/reserveOutlets/69e43f6414d072543704f2f8?source=9", "_blank");
    dismiss();
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/75 grid place-items-center p-3 md:p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 32 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-[92vw] max-w-[380px] sm:max-w-[420px] overflow-hidden rounded-2xl border border-[#a98f63]/40 bg-gradient-to-b from-[#1a0010] to-[#0a0005] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={dismiss}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/55 p-1.5 sm:p-2 hover:bg-black/75 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#a98f63]/10 border border-[#a98f63]/30 mx-auto mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 10h10M7 14h10M5 6h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2z"/>
                </svg>
              </div>

              <div>
                <h2 className="royal-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-2">Book a Table</h2>
                <p className="text-sm text-[#a98f63]">LEGENDS MICROBREWERY</p>
              </div>

              <p className="text-[#d4c4a8] text-sm leading-relaxed">
                Experience our signature brews, royal feasts, and exceptional atmosphere. Reserve your table now for an unforgettable evening.
              </p>

              <div className="pt-2 space-y-3">
                <button
                  onClick={handleBooking}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#a98f63] to-[#cbbca1] text-[#2a1200] font-bold text-sm uppercase tracking-[0.08em] hover:from-[#b39d73] hover:to-[#d5c5ab] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Reserve Now
                </button>
                <button
                  onClick={dismiss}
                  className="w-full px-6 py-2 rounded-full border border-[#a98f63]/40 text-[#a98f63] font-semibold text-sm hover:bg-[#a98f63]/5 transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
