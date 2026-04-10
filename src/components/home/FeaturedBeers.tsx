import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BeerCard } from "@/components/ui/BeerCard";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";

const beers = [
  { name: "Kingdom Lager", abv: "4.8%", description: "Crisp, golden, and refreshingly royal" },
  { name: "Crowned IPA", abv: "6.5%", description: "Bitter hops, bold character, legendary finish" },
  { name: "Dark Knight Stout", abv: "7.2%", description: "Rich, roasted, worth kneeling for" },
  { name: "Wheat of Honor", abv: "4.2%", description: "Light, cloudy, brewed for the brave" },
];

export const FeaturedBeers = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#18050f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl text-center">Our Signature Brews</h2>
        <OrnamentalDivider />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">{beers.map((b) => <BeerCard key={b.name} {...b} />)}</div>
      </div>
    </section>
  </AnimatedSection>
);
