"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { beerImages } from "@/lib/beerImages";
import { beersData } from "@/lib/data";
import "@/styles/brewski.css";

const SESSION_KEY = "beer-award-popup-seen";

function AwardPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <motion.div
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
        className="relative rounded-2xl overflow-hidden border border-[#a98f63]/40 shadow-[0_24px_80px_rgba(0,0,0,0.8)] bg-[#0d0508] flex flex-col"
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
        <img
          src="/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.webp"
          alt="Most Innovative Beer on Tap Award"
          className="block w-full h-auto"
          style={{ maxHeight: "72vh", objectFit: "contain" }}
        />
        <div className="px-5 py-4 text-center bg-gradient-to-b from-[#1c0d10] to-[#0d0508] border-t border-[#a98f63]/20">
          <p className="text-[#a98f63] text-[10px] uppercase tracking-[0.4em]">Zen Empire · Japanese Lager</p>
          <h3 className="royal-heading text-lg text-[#f5f0e8] mt-1">Most Innovative Beer on Tap</h3>
          <div className="mx-auto w-10 h-px bg-gradient-to-r from-transparent via-[#a98f63] to-transparent mt-3" />
          <p className="text-[#a98f63]/60 text-[10px] uppercase tracking-widest mt-2">Legends Microbrewery, Bangalore</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export function BeersClient() {
  const [activeBeer, setActiveBeer] = useState<string | null>(null);
  const [awardOpen, setAwardOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      const t = setTimeout(() => setAwardOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const closeAward = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setAwardOpen(false);
  };
  const list = [...beersData];
  const selectedBeer = list.find((beer) => beer.name === activeBeer) ?? null;

  return (
    <>
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="brewski-font text-6xl md:text-7xl text-[#a98f63]">Brewed for Heroes</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {list.map((beer) => {
          const img = beerImages[beer.name] ?? beerImages["Golden Halo"];
          const stats = [
            `Style: ${beer.style}`,
            beer.abv ? `ABV: ${beer.abv}` : null,
            beer.ibu ? `IBU: ${beer.ibu}` : null,
            beer.rating ? `Rating: ${beer.rating}` : null,
          ].filter(Boolean);

          return (
            <article
              key={beer.name}
              className="ornamental-border rounded-2xl overflow-hidden bg-[#1a0010]/80 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={img}
                  alt={beer.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13080a] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b583] bg-[#13080a]/70 px-2 py-1 rounded-full" style={{ fontFamily: 'Nunito' }}>
                  {beer.style}
                </span>
                {beer.tapLogo && (
                  <div className="absolute bottom-3 right-3 h-12 w-12 flex items-center justify-center bg-[#13080a]/70 rounded-full">
                    <img
                      src={beer.tapLogo}
                      alt={`${beer.name} tap`}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-3 text-center">
                  <h2 className="brewski-font text-2xl text-[#a98f63]">
                    {beer.name}
                  </h2>
                </div>
                <div className="h-px bg-[#a98f63]/40 my-3" />
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#e8e0d0]"
                      style={{ fontFamily: 'Nunito', fontWeight: 500 }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setActiveBeer(beer.name)}
                    className="rounded-full px-5 py-2 text-sm font-semibold border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
                    style={{ fontFamily: 'Nunito', fontWeight: 600 }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedBeer ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/80 p-4 grid place-items-center"
            onClick={() => setActiveBeer(null)}
          >
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#a98f63]/40 bg-[#1a0010]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={beerImages[selectedBeer.name]}
                  alt={selectedBeer.name}
                  className="h-64 w-full object-cover"
                />
                {selectedBeer.tapLogo && (
                  <div className="absolute top-4 right-4 h-16 w-16 flex items-center justify-center bg-[#13080a]/80 rounded-full border border-[#a98f63]/40">
                    <img
                      src={selectedBeer.tapLogo}
                      alt={`${selectedBeer.name} tap`}
                      className="h-14 w-14 object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[#a98f63] text-center" style={{ fontFamily: 'Nunito', fontWeight: 600 }}>
                  {selectedBeer.style}
                </p>
                <div className="mt-4 mb-4 text-center">
                  <h2 className="brewski-font text-4xl text-[#a98f63]">
                    {selectedBeer.name}
                  </h2>
                </div>
                <div className="h-px bg-[#a98f63]/30 my-4" />
                <div className="flex flex-wrap gap-2">
                  {[
                    selectedBeer.abv ? `ABV: ${selectedBeer.abv}` : null,
                    selectedBeer.ibu ? `IBU: ${selectedBeer.ibu}` : null,
                    selectedBeer.rating ? `Rating: ${selectedBeer.rating}` : null,
                  ]
                    .filter(Boolean)
                    .map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#e8e0d0]"
                        style={{ fontFamily: 'Nunito', fontWeight: 500 }}
                      >
                        {stat}
                      </span>
                    ))}
                </div>
                <p className="mt-4 text-[#e8e0d0] leading-7" style={{ fontFamily: 'Nunito', fontWeight: 400 }}>
                  {selectedBeer.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveBeer(null)}
                  className="mt-6 rounded-full border border-[#a98f63] px-5 py-2 text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
                  style={{ fontFamily: 'Nunito', fontWeight: 600 }}
                >
                  Close
                </button>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>

    {/* Award popup — shows once per session on beers page */}
    {mounted && (
      <AnimatePresence>
        {awardOpen && <AwardPopup onClose={closeAward} />}
      </AnimatePresence>
    )}
    </>
  );
}
