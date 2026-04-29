"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { beersData } from "@/lib/data";
import { beerImages } from "@/lib/beerImages";

const BeerFlipCard = ({ beer }: { beer: (typeof beersData)[number] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const img = beerImages[beer.name] ?? beerImages["Golden Halo"];
  const stats = [
    beer.abv ? `ABV ${beer.abv}` : null,
    beer.ibu ? `IBU ${beer.ibu}` : null,
    beer.rating ? `Rating ${beer.rating}` : null,
  ].filter(Boolean);

  return (
    <div
      className="group h-80 cursor-pointer [perspective:1000px]"
      role="button"
      tabIndex={0}
      onClick={() => setIsFlipped((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsFlipped((current) => !current);
        }
      }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
          <img src={img} alt={beer.name} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/90 via-[#13080a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{beer.style}</p>
            <p className="royal-heading text-2xl text-[#f5f0e8] mt-1">{beer.name}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[#cbbca1] md:hidden">Tap to flip</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl bg-[#1a0010] border border-[#a98f63]/40 p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{beer.style}</p>
            <p className="royal-heading text-xl text-[#f5f0e8] mt-2">{beer.name}</p>
            <div className="h-px bg-[#a98f63]/40 my-3" />
            <div className="flex flex-wrap gap-2">
              {stats.length ? (
                stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#e8e0d0]"
                  >
                    {stat}
                  </span>
                ))
              ) : (
                <span className="rounded-full border border-[#a98f63]/35 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#e8e0d0]">
                  House Pour
                </span>
              )}
            </div>
          </div>
          <a
            href="/beers"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export const FeaturedBeers = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#18050f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl text-center">Our Signature Brews</h2>
        <OrnamentalDivider />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {beersData.map((b) => (
            <BeerFlipCard key={b.name} beer={b} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <RoyalButton href="/beers">View All Beers</RoyalButton>
        </div>
      </div>
    </section>
  </AnimatedSection>
);
