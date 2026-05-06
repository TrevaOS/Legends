"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { beersData, menuSections } from "@/lib/data";
import { beerImages } from "@/lib/beerImages";

type MenuSection = (typeof menuSections)[number];

const MOBILE_MENU_GROUPS = [
  {
    title: "Beers",
    label: "Signature Brews",
    emoji: "🍺",
    description: "8 Craft Beers",
  },
  {
    title: "Starters",
    label: "Starters",
    emoji: "🥘",
    description: "Bar bites, sushi, wok and grills",
    sections: [
      "Salads",
      "Sushi",
      "Dimsum",
      "Bao",
      "Asian / Wok Starters",
      "Bar Bites / Appetizers",
      "South Indian Bar Bites",
      "Quick Bar Snacks",
      "Tandoor",
    ],
  },
  {
    title: "Cocktails",
    label: "Cocktails",
    emoji: "🍹",
    description: "Signature cocktails and mixers",
    sections: [
      "Cocktails",
      "Premium Gin Series",
      "Power Mix Series",
      "Mocktails",
    ],
  },
  {
    title: "Main Course",
    label: "Main Course",
    emoji: "🍽️",
    description: "Curries, rice, grills and desserts",
    sections: [
      "Indian Main Course",
      "South Special Main Course",
      "Asian Main Course",
      "Pizza & Pasta",
      "Grill",
      "Breads & Rice",
      "Burgers",
      "Desserts & Ice Cream",
    ],
  },
] as const;

function getGroupedSections(titles: readonly string[]) {
  return titles
    .map((title) => menuSections.find((section) => section.title === title))
    .filter((section): section is MenuSection => Boolean(section));
}

export const StrategicMenuView = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Beers", "Starters"]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((currentTitle) => currentTitle !== title)
        : [...prev, title]
    );
  };

  const groupedMenu = MOBILE_MENU_GROUPS.map((group) => ({
    ...group,
    items: "sections" in group ? getGroupedSections(group.sections) : [],
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c0015] via-[#1a0010] to-[#0f0e0e] px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.45em] text-[#c28a57]">Kingdom of Brews</p>
          <h1 className="royal-heading mb-3 text-4xl text-[#fff4e8] md:text-5xl">Our Menu</h1>
          <p className="mx-auto max-w-lg text-sm text-[#cbbca1]">
            Explore our craft beers, signature dishes, and exceptional flavours
          </p>
        </div>

        {groupedMenu.map((group, idx) => {
          const isExpanded = expandedSections.includes(group.title);

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleSection(group.title)}
                className="mb-3 flex w-full items-center justify-between rounded-xl border border-[#a98f63]/40 bg-[#1a0010]/80 p-4 text-left transition-colors hover:bg-[#1a0010]"
              >
                <div>
                  <h2 className="royal-heading text-2xl text-[#a98f63]">
                    {group.emoji} {group.label}
                  </h2>
                  <p className="mt-1 text-xs text-[#8b7355]">{group.description}</p>
                </div>
                <span className="text-2xl text-[#a98f63]">
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {isExpanded && group.title === "Beers" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-3"
                >
                  {beersData.map((beer) => (
                    <div
                      key={beer.name}
                      className="overflow-hidden rounded-xl border border-[#a98f63]/30 bg-[#13080a]/60 transition-colors hover:border-[#a98f63]/60"
                    >
                      <div className="flex gap-4 p-4">
                        <div className="flex-shrink-0">
                          <img
                            src={beerImages[beer.name] || beerImages["Golden Halo"]}
                            alt={beer.name}
                            className="h-24 w-24 rounded-lg border border-[#a98f63]/20 object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="mb-1 text-lg font-semibold text-[#a98f63]">
                            {beer.name}
                          </h3>
                          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8b7355]">
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
                                  className="rounded-full border border-[#a98f63]/30 bg-[#a98f63]/20 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-[#d8b583]"
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

              {isExpanded && group.title !== "Beers" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  {group.items.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-xl border border-[#a98f63]/25 bg-[#13080a]/45 p-4"
                    >
                      <h3 className="mb-3 text-sm uppercase tracking-[0.28em] text-[#d8b583]">
                        {section.title}
                      </h3>
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <div
                            key={`${section.title}-${item}`}
                            className="rounded-lg border border-[#a98f63]/15 bg-[#13080a]/55 px-3 py-2 text-sm text-[#cbbca1]"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          );
        })}

        <div className="mt-12 border-t border-[#a98f63]/20 pt-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355]">LEGENDS Microbrewery</p>
          <p className="mt-2 text-sm text-[#cbbca1]">
            Experience the Kingdom of Brews
          </p>
        </div>
      </div>
    </div>
  );
};
