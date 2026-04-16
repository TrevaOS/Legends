"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { beersData } from "@/lib/data";

// Beer glass/pint photos matched to each style
const beerImages: Record<string, string> = {
  // Stout – dark pint glass
  "Midnight Emperor":
    "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=900&q=80&fit=crop",
  // NEIPA – hazy golden pint
  "Sky Sovereign":
    "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=900&q=80&fit=crop",
  // West Coast IPA – amber hoppy pint
  "Kings Frontier":
    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=900&q=80&fit=crop",
  // Belgian Wit – cloudy wheat glass
  "Knights Wit":
    "https://images.unsplash.com/photo-1558642891-54be180ea339?w=900&q=80&fit=crop",
  // Hefeweizen – tall wheat beer glass
  "Golden Halo":
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=900&q=80&fit=crop",
  // Apple Cider – golden cider glass
  "Orchard Queen":
    "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=900&q=80&fit=crop",
  // Japanese Lager – crisp clear lager
  "Zen Empire":
    "https://images.unsplash.com/photo-1574793516766-af1e8c0e04e6?w=900&q=80&fit=crop",
  // Maize Lager – pale golden lager
  "Imperial Fields":
    "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=900&q=80&fit=crop",
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
