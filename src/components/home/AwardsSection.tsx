"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const award = {
  image: "/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.jpeg",
  title: "Most Innovative Beer on Tap",
  beer: "Zen Empire · Japanese Lager",
  body: "Legends Microbrewery's Zen Empire Japanese Lager has been honoured with the award for Most Innovative Beer on Tap, a testament to our relentless pursuit of extraordinary craft brewing.",
};

export const AwardsSection = () => {
  const [popup, setPopup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setPopup(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popup ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [popup]);

  const close = () => setPopup(false);

  return (
    <>
      <section id="awards" ref={sectionRef} className="royal-pattern px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63] mb-3">
              Accolades &amp; Recognition
            </p>
            <h2 className="royal-heading text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
              Awards &amp; Honours
            </h2>
            <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />
          </div>

          {/* Award Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="ornamental-border rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c0d10] to-[#110f0f] shadow-[0_8px_48px_rgba(0,0,0,0.45)]"
          >
            <div className="flex flex-col md:flex-row">

              {/* Image */}
              <button
                type="button"
                onClick={() => setPopup(true)}
                className="relative md:w-72 lg:w-80 shrink-0 cursor-zoom-in text-left"
              >
                <div className="aspect-[3/4] md:aspect-auto md:h-full min-h-[320px]">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#110f0f]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c0d10]/50 pointer-events-none" />
                <span className="absolute bottom-3 right-3 bg-black/55 text-[#a98f63] text-[10px] uppercase tracking-widest px-2 py-1 rounded-full">
                  View Award
                </span>
              </button>

              {/* Details */}
              <div className="flex flex-col justify-center px-7 py-8 md:py-10 gap-5">
                <div>
                  <p className="text-[#a98f63] text-xs uppercase tracking-[0.35em] mb-2">
                    {award.beer}
                  </p>
                  <h3 className="royal-heading text-2xl md:text-3xl text-[#f5f0e8] leading-snug">
                    {award.title}
                  </h3>
                </div>

                <p className="text-[#c4b49a] text-sm md:text-base leading-relaxed max-w-prose">
                  {award.body}
                </p>

                <div className="h-px w-16 bg-gradient-to-r from-[#a98f63] to-transparent" />

                <p className="text-[#a98f63]/70 text-xs italic">
                  Legends Microbrewery, Bangalore
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Award Popup */}
      {mounted && createPortal(
        <AnimatePresence>
          {popup && (
            <motion.div
              key="award-popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[95] bg-black/85 flex items-center justify-center p-3"
              onClick={close}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 22, stiffness: 250 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[92vw] max-w-[360px] sm:max-w-[400px] rounded-2xl overflow-hidden border border-[#a98f63]/35 shadow-[0_24px_80px_rgba(0,0,0,0.7)] bg-[#0d0508] flex flex-col"
                style={{ maxHeight: "92vh" }}
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={close}
                  className="absolute top-3 right-3 z-20 rounded-full bg-black/70 p-1.5 hover:bg-black/90 transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Full image */}
                <div className="w-full overflow-hidden" style={{ flex: "0 0 auto" }}>
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-auto block"
                    style={{ maxHeight: "62vh", objectFit: "contain", objectPosition: "center" }}
                  />
                </div>

                {/* Caption */}
                <div className="px-5 py-4 text-center space-y-2 bg-gradient-to-b from-[#1c0d10] to-[#0d0508] border-t border-[#a98f63]/20">
                  <p className="text-[#a98f63] text-[10px] uppercase tracking-[0.4em]">
                    {award.beer}
                  </p>
                  <h3 className="royal-heading text-lg sm:text-xl text-[#f5f0e8] leading-snug">
                    {award.title}
                  </h3>
                  <div className="mx-auto w-10 h-px bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />
                  <p className="text-[#a98f63]/60 text-[10px] uppercase tracking-widest pt-0.5">
                    Legends Microbrewery, Bangalore
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
