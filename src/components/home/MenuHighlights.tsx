"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { menuData } from "@/lib/data";

const FlipCard = ({ item }: { item: typeof menuData[number] }) => {
  return (
    <div className="h-80 rounded-xl overflow-hidden">
      <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
};

export const MenuHighlights = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#f5f0e8] text-[#2a1310]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl text-center text-[#83043b]">Feast Like a Legend</h2>
        <p className="text-center text-[#5a3a30] mt-3 mb-10">
          Signature dishes from our kitchen
        </p>
        {/* 3 columns x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
