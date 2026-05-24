"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LaunchPopup = () => {
  const [open, setOpen] = useState(false);
  const sessionKey = "offer-popup-seen";

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
            className="relative w-[92vw] max-w-[360px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] overflow-hidden rounded-2xl border border-[#a98f63]/40 bg-[#12070d]"
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
            <img
              src="/assets/images/events/RCB.png"
              alt="LEGENDS 15 percent off offer"
              className="w-full h-auto max-h-[78vh] sm:max-h-[80vh] object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
