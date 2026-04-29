"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { beersData, menuSections } from "@/lib/data";
import { beerImages } from "@/lib/beerImages";

const STRATEGIC_ORDER = ["Beers", "Starters", "Cocktails", "Main Course"];

export const StrategicMenuView = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Beers"]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  // Reorder sections strategically
  const orderedSections = STRATEGIC_ORDER.map((title) =>
    menuSections.find((s) => s.title === title)
  ).filter(Boolean) as typeof menuSections;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c0015] via-[#1a0010] to-[#0f0e0e] px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-[#c28a57] mb-2">Kingdom of Brews</p>
          <h1 className="royal-heading text-4xl md:text-5xl text-[#fff4e8] mb-3">Our Menu</h1>
          <p className="text-sm text-[#cbbca1] max-w-lg mx-auto">
            Explore our craft beers, signature dishes, and exceptional flavours
          </p>
        </div>

        {/* Beer Section (Always Prominent) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => toggleSection("Beers")}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-[#a98f63]/40 bg-[#1a0010]/80 hover:bg-[#1a0010] transition-colors mb-4"
          >
            <div className="text-left">
              <h2 className="royal-heading text-2xl text-[#a98f63]">🍺 Signature Brews</h2>
              <p className="text-xs text-[#8b7355] mt-1">8 Craft Beers</p>
            </div>
            <span className="text-2xl text-[#a98f63]">
              {expandedSections.includes("Beers") ? "−" : "+"}
            </span>
          </button>

          {expandedSections.includes("Beers") && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              {beersData.map((beer) => (
                <div
                  key={beer.name}
                  className="rounded-xl border border-[#a98f63]/30 bg-[#13080a]/60 overflow-hidden hover:border-[#a98f63]/60 transition-colors"
                >
                  <div className="flex gap-4 p-4">
                    {/* Beer Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={beerImages[beer.name] || beerImages["Golden Halo"]}
                        alt={beer.name}
                        className="h-24 w-24 rounded-lg object-cover border border-[#a98f63]/20"
                      />
                    </div>

                    {/* Beer Info */}
                    <div className="flex-1">
                      <h3 className="text-lg text-[#a98f63] font-semibold mb-1">
                        {beer.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#8b7355] mb-2">
                        {beer.style}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          beer.abv ? `ABV ${beer.abv}` : null,
                          beer.ibu ? `IBU ${beer.ibu}` : null,
                          beer.rating ? `⭐ ${beer.rating}` : null,
                        ]
                          .filter(Boolean)
                          .map((stat) => (
                            <span
                              key={stat}
                              className="text-[10px] uppercase tracking-[0.16em] text-[#d8b583] bg-[#a98f63]/20 px-2 py-1 rounded-full border border-[#a98f63]/30"
                            >
                              {stat}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Other Sections */}
        {orderedSections.slice(1).map((section, idx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx + 1) * 0.1 }}
            className="mb-6"
          >
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-[#a98f63]/40 bg-[#1a0010]/80 hover:bg-[#1a0010] transition-colors mb-3"
            >
              <h3 className="royal-heading text-xl text-[#a98f63]">
                {section.title === "Starters" && "🥘"}
                {section.title === "Cocktails" && "🍹"}
                {section.title === "Main Course" && "🍽️"}
                {` ${section.title}`}
              </h3>
              <span className="text-2xl text-[#a98f63]">
                {expandedSections.includes(section.title) ? "−" : "+"}
              </span>
            </button>

            {expandedSections.includes(section.title) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#a98f63]/25 bg-[#13080a]/40 p-3 text-sm text-[#cbbca1] hover:bg-[#13080a]/60 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Footer */}
        <div className="mt-12 text-center pt-8 border-t border-[#a98f63]/20">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355]">LEGENDS Microbrewery</p>
          <p className="text-sm text-[#cbbca1] mt-2">
            Experience the Kingdom of Brews
          </p>
        </div>
      </div>
    </div>
  );
};
