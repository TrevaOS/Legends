import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { galleryItems } from "@/lib/data";

export const GalleryPreview = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#110f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl">See the Kingdom</h2>
        <div className="masonry-grid mt-8">
          {galleryItems.slice(0, 6).map((item, idx) => (
            <div key={idx} className="masonry-item rounded-xl overflow-hidden border border-[#a98f63]/25 bg-[#200b14]">
              <div className={`${idx % 2 === 0 ? "h-64" : "h-44"} w-full overflow-hidden`}>
                <img src={item.image} alt={`Legends ${item.category} preview`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8"><RoyalButton href="/gallery">See the Kingdom</RoyalButton></div>
      </div>
    </section>
  </AnimatedSection>
);
