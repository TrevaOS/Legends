"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { menuData } from "@/lib/data";

const FlipCard = ({ item }: { item: typeof menuData[number] }) => (
  <div className="group h-80 [perspective:1000px]">
    <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="absolute inset-0 rounded-xl overflow-hidden [backface-visibility:hidden]">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/90 via-[#13080a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{item.category}</p>
          <p className="royal-heading text-2xl text-[#f5f0e8] mt-1">{item.name}</p>
          <p className="text-[#cbbca1] text-sm mt-1">INR {item.price}</p>
        </div>
      </div>

      {/* Back */}
      <div className="absolute inset-0 rounded-xl bg-[#1a0010] border border-[#a98f63]/40 p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div>
          <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">{item.category}</p>
          <p className="royal-heading text-xl text-[#f5f0e8] mt-2">{item.name}</p>
          <div className="h-px bg-[#a98f63]/40 my-3" />
          <p className="text-sm text-[#e8e0d0] leading-relaxed">{item.description}</p>
          <p className="text-xs text-[#cbbca1] mt-3"><span className="text-[#a98f63]">Ingredients:</span> {item.ingredients}</p>
          <p className="text-xs text-[#cbbca1] mt-1"><span className="text-[#a98f63]">Spice level:</span> {item.spice}</p>
        </div>
        <p className="royal-heading text-2xl text-[#a98f63]">INR {item.price}</p>
      </div>
    </div>
  </div>
);

export const MenuHighlights = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#f5f0e8] text-[#2a1310]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl text-center text-[#83043b]">Feast Like a Legend</h2>
        <p className="text-center text-[#5a3a30] mt-3 mb-10">Hover over a dish to discover more</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menuData.map((dish) => (
            <FlipCard key={dish.name} item={dish} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <RoyalButton href="/menu">View Full Menu</RoyalButton>
        </div>
      </div>
    </section>
  </AnimatedSection>
);
