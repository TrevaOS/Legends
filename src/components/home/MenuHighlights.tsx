import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";

const dishes = ["Smoked Mutton Slider", "Truffle Mushrooms", "Legend Wings", "Royal Flatbread"];

export const MenuHighlights = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#f5f0e8] text-[#2a1310]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl text-center text-[#83043b]">Feast Like a Legend</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {dishes.map((dish, index) => (
            <article key={dish} className="rounded-xl border border-[#a98f63]/40 bg-white/70 p-4">
              <p className="text-xs text-[#a98f63] uppercase tracking-[0.1em]">Chef's Special</p>
              <p className="royal-heading text-2xl mt-3">{dish}</p>
              <p className="mt-2">INR {380 + index * 40}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><RoyalButton href="/menu">View Full Menu</RoyalButton></div>
      </div>
    </section>
  </AnimatedSection>
);
