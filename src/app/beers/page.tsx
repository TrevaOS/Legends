"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { beersData } from "@/lib/data";

// Direct Unsplash image IDs from the provided URLs
const beerImages: Record<string, string> = {
  // https://unsplash.com/photos/a-glass-of-beer-on-the-table-COR0PuNzRP0
  "Midnight Emperor":
    "https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/two-glasses-of-beer-and-a-plate-of-chips-emxnsiKpqAE
  "Sky Sovereign":
    "https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/a-glass-of-beer-sitting-on-top-of-a-wooden-table-AJ73tDEX4nQ
  "Kings Frontier":
    "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/cold-mug-of-beer--0IhYpOOJNo
  "Knights Wit":
    "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/a-mug-of-beer-sitting-next-to-a-bottle-of-beer-aHYbkatsW98
  "Golden Halo":
    "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/two-glasses-of-tea-sit-on-a-tray-JcjI16vSBgM
  "Orchard Queen":
    "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/a-mug-of-beer-on-a-bar-vexrSwTropM
  "Zen Empire":
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80&fit=crop",
  // https://unsplash.com/photos/two-mugs-of-beer-sitting-on-a-table-9rEeUcKHcoI
  "Imperial Fields":
    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&q=80&fit=crop",
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {list.map((beer) => {
          const img = beerImages[beer.name];
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
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-[#d8b583] bg-[#13080a]/70 px-2 py-1 rounded-full">
                  {beer.style}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="royal-heading text-xl text-[#f5f0e8]">{beer.name}</h3>
                <div className="h-px bg-[#a98f63]/40 my-3" />
                <p className="text-sm text-[#e8e0d0] flex-1 leading-6">{beer.description}</p>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setActiveBeer(beer.name)}
                    className="rounded-full px-5 py-2 text-sm font-semibold border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
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
              <img
                src={beerImages[selectedBeer.name]}
                alt={selectedBeer.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[#a98f63]">{selectedBeer.style}</p>
                <h2 className="royal-heading text-4xl text-[#f5f0e8] mt-2">{selectedBeer.name}</h2>
                <div className="h-px bg-[#a98f63]/30 my-4" />
                <p className="text-[#e8e0d0] leading-7">{selectedBeer.description}</p>
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
