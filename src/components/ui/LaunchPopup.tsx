"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LaunchPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const dismiss = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="event-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] bg-black/80 flex items-center justify-center p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 250 }}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] border border-[#a98f63]/30"
            style={{ maxHeight: "90vh", maxWidth: "min(92vw, 380px)" }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={dismiss}
              className="absolute top-3 right-3 z-20 rounded-full bg-black/70 p-1.5 hover:bg-black/90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Event poster — full image, no cropping */}
            <picture>
              <source srcSet="/assets/images/events/image.webp" type="image/webp" />
              <img
                src="/assets/images/events/image.png"
                alt="IPL 2026 Finals Live Screening at Legends Microbrewery"
                className="block w-full h-auto"
                style={{ maxHeight: "90vh", objectFit: "contain" }}
              />
            </picture>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
