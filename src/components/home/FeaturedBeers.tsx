"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BeerCard } from "@/components/ui/BeerCard";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { beersData } from "@/lib/data";

export const FeaturedBeers = () => {
  const [activeBeer, setActiveBeer] = useState<string | null>(null);
  const selectedBeer = beersData.find((b) => b.name === activeBeer) ?? null;

  return (
    <AnimatedSection>
      <section className="px-6 py-24 bg-[#18050f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="royal-heading text-4xl text-center">Our Signature Brews</h2>
          <OrnamentalDivider />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {beersData.map((b) => (
              <BeerCard
                key={b.name}
                name={b.name}
                style={b.style}
                abv={b.abv}
                description={b.description}
                ibu={b.ibu}
                price={b.price}
                pair={b.pair}
                image={b.image}
                onViewDetails={() => setActiveBeer(b.name)}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <RoyalButton href="/beers">View All Beers</RoyalButton>
          </div>
        </div>
      </section>

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
              <img src={selectedBeer.image} alt={selectedBeer.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="royal-heading text-4xl text-[#f5f0e8]">{selectedBeer.name}</h2>
                <p className="mt-3 text-[#cbbca1]">
                  {[`Style: ${selectedBeer.style}`, selectedBeer.abv ? `ABV: ${selectedBeer.abv}` : null, selectedBeer.ibu ? `IBU: ${selectedBeer.ibu}` : null]
                    .filter(Boolean)
                    .join(" | ")}
                </p>
                {selectedBeer.price ? <p className="mt-2">Price: INR {selectedBeer.price}</p> : null}
                <p className="mt-4 text-[#e8e0d0]">{selectedBeer.description}</p>
                {selectedBeer.pair ? <p className="mt-2 text-sm text-[#cbbca1]">Best paired with: {selectedBeer.pair}</p> : null}
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
    </AnimatedSection>
  );
};
