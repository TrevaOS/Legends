"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { beersData } from "@/lib/data";

// Curated Unsplash beer images matched to each beer style
const beerImages: Record<string, string> = {
  "Midnight Emperor":
    "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
  "Sky Sovereign":
    "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
  "Kings Frontier":
    "https://images.unsplash.com/photo-1581927692308-be9e43b4d860?w=600&q=80",
  "Knights Wit":
    "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=600&q=80",
  "Golden Halo":
    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
  "Orchard Queen":
    "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&q=80",
  "Zen Empire":
    "https://images.unsplash.com/photo-1574793516766-af1e8c0e04e6?w=600&q=80",
  "Imperial Fields":
    "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=600&q=80",
};

const BeerFlipCard = ({ beer }: { beer: (typeof beersData)[number] }) => {
  const img = beerImages[beer.name] ?? beerImages["Golden Halo"];
  return (
    <div className="group h-80 [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
          <img src={img} alt={beer.name} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/90 via-[#13080a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{beer.style}</p>
            <p className="royal-heading text-2xl text-[#f5f0e8] mt-1">{beer.name}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl bg-[#1a0010] border border-[#a98f63]/40 p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{beer.style}</p>
            <p className="royal-heading text-xl text-[#f5f0e8] mt-2">{beer.name}</p>
            <div className="h-px bg-[#a98f63]/40 my-3" />
            <p className="text-sm text-[#e8e0d0] leading-relaxed">{beer.description}</p>
            {beer.abv ? (
              <p className="text-xs text-[#cbbca1] mt-3">
                <span className="text-[#a98f63]">ABV:</span> {beer.abv}
              </p>
            ) : null}
          </div>
          <a
            href="/beers"
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
