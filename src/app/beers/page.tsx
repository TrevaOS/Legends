"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { beerImages } from "@/lib/beerImages";
import { beersData } from "@/lib/data";

// Import Brewski font
import "@/styles/brewski.css";

export default function BeersPage() {
  const [activeBeer, setActiveBeer] = useState<string | null>(null);
  const list = [...beersData];
  const selectedBeer = list.find((beer) => beer.name === activeBeer) ?? null;

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl brewski-font">Brewed for Heroes</h1>
      <p className="mt-4 max-w-3xl text-[#d8ccb7]">
        A cleaner look at the house lineup with the key beer details first.
      </p>


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
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b583] bg-[#13080a]/70 px-2 py-1 rounded-full brewski-font">
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
                <h3 className="royal-heading text-xl text-[#f5f0e8] brewski-font">{beer.name}</h3>
                <div className="h-px bg-[#a98f63]/40 my-3" />
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#e8e0d0] brewski-font"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setActiveBeer(beer.name)}
                    className="rounded-full px-5 py-2 text-sm font-semibold border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors brewski-font"
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
                <p className="text-xs uppercase tracking-[0.35em] text-[#a98f63] brewski-font">{selectedBeer.style}</p>
                <h2 className="royal-heading text-4xl text-[#f5f0e8] mt-2 brewski-font">{selectedBeer.name}</h2>
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
                        className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#e8e0d0] brewski-font"
                      >
                        {stat}
                      </span>
                    ))}
                </div>
                <p className="mt-4 text-[#e8e0d0] leading-7 brewski-font">{selectedBeer.description}</p>
                <button
                  type="button"
                  onClick={() => setActiveBeer(null)}
                  className="mt-6 rounded-full border border-[#a98f63] px-5 py-2 text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors brewski-font"
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
