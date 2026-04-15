import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { featuredAmbience, galleryItems } from "@/lib/data";

export default function AboutPage() {
  const teamMoments = [
    ["Master Brewer", featuredAmbience[1]],
    ["Chef", galleryItems[1].image],
    ["Experience Curator", featuredAmbience[2]],
    ["Cellar Captain", featuredAmbience[3]],
  ] as const;

  return (
    <div className="px-6">
      <section className="py-20 text-center"><h1 className="royal-heading text-6xl">Our Story</h1></section>
      <AnimatedSection><section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8"><article><p className="text-lg">From the moment you step in, you are not just welcomed, you are crowned. Legends is built on craftsmanship, hospitality, and heroic celebration.</p></article><div className="rounded-2xl min-h-72 overflow-hidden border border-[#a98f63]/30"><img src={featuredAmbience[0]} alt="Legends interior ambience" className="h-full w-full object-cover" loading="lazy" /></div></section></AnimatedSection>
      <OrnamentalDivider />
      <AnimatedSection><section className="max-w-6xl mx-auto py-14 grid md:grid-cols-3 gap-6">{["Craftsmanship","Quality","Heritage"].map((item)=><article key={item} className="ornamental-border rounded-xl p-6"><h3 className="royal-heading text-2xl">{item}</h3><p className="mt-2 text-sm">Brewed for heroes with uncompromising standards.</p></article>)}</section></AnimatedSection>
      <AnimatedSection><section className="max-w-6xl mx-auto py-14"><h2 className="royal-heading text-4xl">Meet the Team</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">{teamMoments.map(([role,image])=><article key={role} className="rounded-xl bg-[#200a14] p-4 border border-[#a98f63]/30"><div className="h-44 rounded-lg overflow-hidden"><img src={image} alt={role} className="h-full w-full object-cover" loading="lazy" /></div><p className="royal-heading text-2xl mt-3">{role}</p></article>)}</div></section></AnimatedSection>
      <AnimatedSection><section className="max-w-6xl mx-auto py-14"><h2 className="royal-heading text-4xl">Timeline</h2><div className="mt-6 space-y-4">{["2021 - First brew trial","2022 - Taproom opened","2024 - Kingdom of Brews milestone"].map((item)=><p key={item} className="ornamental-border rounded-lg p-4">{item}</p>)}</div></section></AnimatedSection>
      <AnimatedSection><section className="max-w-6xl mx-auto py-14"><h2 className="royal-heading text-4xl">Achievements & Awards</h2><div className="grid md:grid-cols-3 gap-5 mt-6">{["Best Craft Experience","People's Brew Choice","Top Rooftop Brewery"].map((a)=><article key={a} className="rounded-full border border-[#a98f63] py-8 text-center bg-[#a98f63]/10">{a}</article>)}</div></section></AnimatedSection>
    </div>
  );
}
