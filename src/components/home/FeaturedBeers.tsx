"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { beersData } from "@/lib/data";
import { beerImages } from "@/lib/beerImages";
import "@/styles/brewski.css";

const AWARD_IMAGE = "/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.webp";
const AWARD_IMAGE_FALLBACK = "/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.jpeg";

const BeerFlipCard = ({ beer, onFlip }: { beer: (typeof beersData)[number]; onFlip: () => void }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const img = beerImages[beer.name] ?? beerImages["Golden Halo"];
  const stats = [
    beer.abv ? `ABV ${beer.abv}` : null,
    beer.ibu ? `IBU ${beer.ibu}` : null,
    beer.rating ? `Rating ${beer.rating}` : null,
  ].filter(Boolean);

  const handleFlip = () => {
    const next = !isFlipped;
    setIsFlipped(next);
    if (next) onFlip();
  };

  return (
    <div
      className="group h-[22rem] md:h-80 cursor-pointer [perspective:1000px]"
      role="button"
      tabIndex={0}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleFlip(); }
      }}
    >
      <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}>
        {/* Front */}
        <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
          <img src={img} alt={beer.name} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/90 via-[#13080a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{beer.style}</p>
            <p className="brewski-font text-2xl text-[#a98f63] mt-1">{beer.name}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#cbbca1] md:hidden">Tap to flip</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl bg-[#1a0010] border border-[#a98f63]/40 p-4 md:p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{beer.style}</p>
            <p className="brewski-font text-xl text-[#a98f63] mt-2">{beer.name}</p>
            <div className="h-px bg-[#a98f63]/40 my-3" />
            <div className="flex flex-wrap gap-2">
              {stats.length ? (
                stats.map((stat) => (
                  <span key={stat} className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#e8e0d0]">{stat}</span>
                ))
              ) : (
                <span className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#e8e0d0]">House Pour</span>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#f5f0e8]">{beer.description}</p>
            {beer.pair ? (
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#cbbca1]">Pairs well with {beer.pair}</p>
            ) : null}
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#cbbca1] md:hidden">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
};

const AwardPopup = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="beer-award-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[95] bg-black/85 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 250 }}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-2xl overflow-hidden border border-[#a98f63]/35 shadow-[0_24px_80px_rgba(0,0,0,0.8)] bg-[#0d0508] flex flex-col"
            style={{ maxHeight: "90vh", maxWidth: "min(92vw, 380px)" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 z-20 rounded-full bg-black/70 p-1.5 hover:bg-black/90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <picture>
              <source srcSet={AWARD_IMAGE} type="image/webp" />
              <img
                src={AWARD_IMAGE_FALLBACK}
                alt="Most Innovative Beer on Tap Award"
                className="block w-full h-auto"
                style={{ maxHeight: "82vh", objectFit: "contain" }}
              />
            </picture>

            <div className="px-5 py-4 text-center bg-gradient-to-b from-[#1c0d10] to-[#0d0508] border-t border-[#a98f63]/20">
              <p className="text-[#a98f63] text-[10px] uppercase tracking-[0.4em]">Zen Empire · Japanese Lager</p>
              <h3 className="royal-heading text-lg text-[#f5f0e8] mt-1">Most Innovative Beer on Tap</h3>
              <div className="mx-auto w-10 h-px bg-gradient-to-r from-transparent via-[#a98f63] to-transparent mt-3" />
              <p className="text-[#a98f63]/60 text-[10px] uppercase tracking-widest mt-2">Legends Microbrewery, Bangalore</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export const FeaturedBeers = () => {
  const [awardOpen, setAwardOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggered = useRef(false);

  useEffect(() => { setMounted(true); }, []);

  const handleCardFlip = () => {
    if (!triggered.current) {
      triggered.current = true;
      setTimeout(() => setAwardOpen(true), 500);
    }
  };

  return (
    <>
      <AnimatedSection>
        <section className="px-6 py-24 bg-[#18050f]">
          <div className="max-w-6xl mx-auto">
            <h2 className="royal-heading text-4xl text-center">Our Signature Brews</h2>
            <OrnamentalDivider />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {beersData.map((b) => (
                <BeerFlipCard key={b.name} beer={b} onFlip={handleCardFlip} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <RoyalButton href="/beers">View All Beers</RoyalButton>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {mounted && <AwardPopup open={awardOpen} onClose={() => setAwardOpen(false)} />}
    </>
  );
};
