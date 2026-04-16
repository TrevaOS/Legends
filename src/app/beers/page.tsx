"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { beersData } from "@/lib/data";

// Curated Unsplash beer images matched to each beer style
const beerImages: Record<string, string> = {
  "Midnight Emperor":
    "https://images.unsplash.com/photo-1516458461665-8d099aa2f5b2?w=900&q=80&fit=crop",
  "Sky Sovereign":
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900&q=80&fit=crop",
  "Kings Frontier":
    "https://images.unsplash.com/photo-1563379091339-03246963d29a?w=900&q=80&fit=crop",
  "Knights Wit":
    "https://images.unsplash.com/photo-1527169402691-feff5539e52c?w=900&q=80&fit=crop",
  "Golden Halo":
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=900&q=80&fit=crop",
  "Orchard Queen":
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80&fit=crop",
  "Zen Empire":
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=900&q=80&fit=crop",
  "Imperial Fields":
    "https://images.unsplash.com/photo-1558642891-54be180ea339?w=900&q=80&fit=crop",
};

export default function BeersPage() {
  const [activeBeer, setActiveBeer] = useState<string | null>(null);
  const list = [...beersData];

  const selectedBeer = list.find((beer) => beer.name === activeBeer) ?? null;

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Brewed for Heroes</h1>
      <p className="mt-4 max-w-3xl text-[#d8ccb7]">
        Crafted with passion, every pint tells the story of the kingdom.
      </p>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {list.map((beer) => {
            const img = beerImages[beer.name] ?? beerImages["Golden Halo"];
            return (
              <motion.article
                key={beer.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="ornamental-border rounded-2xl overflow-hidden bg-[#1a0010]/80 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <img src={img} alt={beer.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13080a] via-transparent to-transparent" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="royal-heading text-xl text-[#f5f0e8]">{beer.name}</h3>
                  <div className="h-px bg-[#a98f63]/50 my-3" />
                  <p className="text-xs text-[#cbbca1]">
                    {[beer.style, beer.abv ? `ABV: ${beer.abv}` : null, beer.ibu ? `IBU: ${beer.ibu}` : null]
                      .filter(Boolean)
                      .join(" | ")}
                  </p>
                  <p className="text-sm mt-3 text-[#e8e0d0] flex-1">{beer.description}</p>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setActiveBeer(beer.name)}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>

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
              <img
                src={beerImages[selectedBeer.name] ?? beerImages["Golden Halo"]}
                alt={selectedBeer.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="royal-heading text-4xl text-[#f5f0e8]">{selectedBeer.name}</h2>
                <p className="mt-3 text-[#cbbca1]">
                  {[
                    `Style: ${selectedBeer.style}`,
                    selectedBeer.abv ? `ABV: ${selectedBeer.abv}` : null,
                    selectedBeer.ibu ? `IBU: ${selectedBeer.ibu}` : null,
                  ]
                    .filter(Boolean)
                    .join(" | ")}
                </p>
                <p className="mt-4 text-[#e8e0d0]">{selectedBeer.description}</p>
                {selectedBeer.pair ? (
                  <p className="mt-2 text-sm text-[#cbbca1]">
                    Best paired with: {selectedBeer.pair}
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={() => setActiveBeer(null)}
                  className="mt-6 rounded-full border border-[#a98f63] px-5 py-2 text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
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
