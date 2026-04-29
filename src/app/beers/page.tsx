"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { beerImages } from "@/lib/beerImages";
import { beersData } from "@/lib/data";
import { CurvedHeading } from "@/components/ui/CurvedHeading";

// Import Brewski font
import "@/styles/brewski.css";

const beerFontImages: Record<string, string> = {
  "Midnight Emperor": "/assets/font/22372334 (1).png",
  "Sky Sovereign": "/assets/font/22372334 (2).png",
  "Kings Frontier": "/assets/font/22372334 (3).png",
  "Knights Wit": "/assets/font/22372334 (4).png",
  "Golden Halo": "/assets/font/22372334 (5).png",
  "Orchard Queen": "/assets/font/22372334 (6).png",
  "Zen Empire": "/assets/font/22372334 (7).png",
  "Imperial Fields": "/assets/font/22372334 (8).png",
};

export default function BeersPage() {
  const [activeBeer, setActiveBeer] = useState<string | null>(null);
  const list = [...beersData];
  const selectedBeer = list.find((beer) => beer.name === activeBeer) ?? null;

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl h-32 flex items-center justify-center overflow-hidden rounded-lg" style={{ backgroundImage: 'linear-gradient(135deg, #d4af79 0%, #18050f 100%)' }}>
            <img
              src="/assets/font/22372334.png"
              alt="Brewed for Heroes"
              className="h-20 w-auto relative z-10"
            />
          </div>
        </div>
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
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b583] bg-[#13080a]/70 px-2 py-1 rounded-full" style={{ fontFamily: "Nunito" }}>
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
              <div className="p-5 flex flex-col flex-1 bg-[#d4af79]">
                <div className="h-10 mb-3 flex justify-center">
                  <img
                    src={beerFontImages[beer.name]}
                    alt={beer.name}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="h-px bg-[#5a3b1a]/40 my-2" />
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-[#5a3b1a]/35 px-2 py-1 text-[9px] uppercase tracking-[0.08em] text-[#5a3b1a]"
                      style={{ fontFamily: "Nunito" }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setActiveBeer(beer.name)}
                    className="w-full rounded-full px-4 py-2 text-xs font-semibold border border-[#5a3b1a] text-[#5a3b1a] hover:bg-[#5a3b1a] hover:text-[#d4af79] transition-colors"
                    style={{ fontFamily: "Nunito" }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Detail modal */}
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
                <p className="text-xs uppercase tracking-[0.35em] text-[#a98f63] text-center" style={{ fontFamily: "Nunito" }}>{selectedBeer.style}</p>
                <div className="h-12 mt-3 mb-3 flex justify-center">
                  <img
                    src={beerFontImages[selectedBeer.name]}
                    alt={selectedBeer.name}
                    className="h-full w-auto object-contain"
                  />
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
                        style={{ fontFamily: "Nunito" }}
                      >
                        {stat}
                      </span>
                    ))}
                </div>
                <p className="mt-4 text-[#e8e0d0] leading-7" style={{ fontFamily: "Nunito" }}>{selectedBeer.description}</p>
                <button
                  type="button"
                  onClick={() => setActiveBeer(null)}
                  className="mt-6 rounded-full border border-[#a98f63] px-5 py-2 text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
                  style={{ fontFamily: "Nunito" }}
                >
                  Close
                </button>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
