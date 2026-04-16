import { Music2, Building2, Beer } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const ExperienceSection = () => {
  const items = [
    { icon: Music2, title: "Live Music Nights", description: "Curated nights with legendary soundscapes." },
    { icon: Building2, title: "Royal Ambience", description: "Bengaluru skyline, warm lights, royal pours." },
    { icon: Beer, title: "Craft Brewing Tours", description: "Walk through the brewhouse with our masters." },
  ];

  return (
    <AnimatedSection>
      <section className="px-6 py-24 bg-[#13362c] royal-pattern">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <article key={title} className="ornamental-border rounded-2xl p-6 bg-[#1f4d3f]/30 backdrop-blur-md">
              <Icon className="text-[#a98f63] h-8 w-8" />
              <h3 className="royal-heading text-2xl mt-4">{title}</h3>
              <p className="mt-2 text-sm text-[#e8e0d0]">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};
