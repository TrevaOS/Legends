import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";

export const GalleryPreview = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#110f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="royal-heading text-4xl">See the Kingdom</h2>
        <div className="masonry-grid mt-8">
          {[
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
          ].map((image, idx) => (
            <div key={idx} className="masonry-item rounded-xl overflow-hidden border border-[#a98f63]/25 bg-[#200b14]">
              <div className={`${idx % 2 === 0 ? "h-64" : "h-44"} w-full overflow-hidden`}>
                <img src={image} alt="Legends gallery preview" className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8"><RoyalButton href="/gallery">See the Kingdom</RoyalButton></div>
      </div>
    </section>
  </AnimatedSection>
);
