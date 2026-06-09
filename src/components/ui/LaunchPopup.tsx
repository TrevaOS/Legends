"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  "/assets/images/events/slider 1.jpeg",
  "/assets/images/events/slider2.jpeg",
];

export const LaunchPopup = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const sessionKey = "event-popup-seen";

  useEffect(() => {
    const seen = sessionStorage.getItem(sessionKey);
    if (seen) return;
    const timer = setTimeout(() => setOpen(true), 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [open]);

  const dismiss = () => {
    sessionStorage.setItem(sessionKey, "1");
    setOpen(false);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {open && (
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
            className="relative w-[92vw] max-w-[400px] sm:max-w-[440px] rounded-2xl border border-[#a98f63]/40 bg-gradient-to-b from-[#1a0010] to-[#0a0005] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={dismiss}
              className="absolute top-3 right-3 z-20 rounded-full bg-black/55 p-1.5 sm:p-2 hover:bg-black/75 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Slider */}
            <div className="relative w-full overflow-hidden" style={{ height: "min(70vh, 520px)" }}>
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SLIDES[current]}
                    alt={`Event slide ${current + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient + dots */}
              <div className="absolute bottom-0 left-0 right-0 z-10 pb-4 pt-10 bg-gradient-to-t from-black/70 to-transparent flex justify-center">
                <div className="flex gap-2 items-center">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-5 h-2 bg-[#a98f63]"
                          : "w-2 h-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
