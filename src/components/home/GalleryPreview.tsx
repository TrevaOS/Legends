import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { galleryItems } from "@/lib/data";

export const GalleryPreview = () => {
  // Use all 12 gallery items for a rich layout
  const items = galleryItems;

  return (
    <AnimatedSection>
      <section className="px-6 py-24 bg-[#110f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="royal-heading text-4xl">See the Kingdom</h2>
          <p className="text-[#cbbca1] mt-2 mb-8">A glimpse into the world of Legends</p>

          {/* Creative mixed layout: large hero + grid + strips */}
          <div className="grid gap-3">
            {/* Row 1: 1 large + 2 medium */}
            <div className="grid grid-cols-3 gap-3 h-72">
              <div className="col-span-2 rounded-xl overflow-hidden border border-[#a98f63]/20 relative group">
                <img src={items[0].image} alt="Legends ambience" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/60 to-transparent" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex-1 rounded-xl overflow-hidden border border-[#a98f63]/20 group">
                  <img src={items[1].image} alt="Legends food" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-[#a98f63]/20 group">
                  <img src={items[2].image} alt="Legends space" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Row 2: 3 equal squares */}
            <div className="grid grid-cols-3 gap-3 h-52">
              {[items[3], items[4], items[5]].map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[#a98f63]/20 group">
                  <img src={item.image} alt={`Gallery ${i + 4}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>

            {/* Row 3: strip style — 4 equal landscape */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-44">
              {[items[6], items[7], items[8], items[9]].map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[#a98f63]/20 group">
                  <img src={item.image} alt={`Gallery ${i + 7}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>

            {/* Row 4: 2 medium + 1 large (mirrored first row) */}
            <div className="grid grid-cols-3 gap-3 h-64">
              <div className="flex flex-col gap-3">
                <div className="flex-1 rounded-xl overflow-hidden border border-[#a98f63]/20 group">
                  <img src={items[10].image} alt="Gallery 11" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-[#a98f63]/20 group">
                  <img src={items[11].image} alt="Gallery 12" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              </div>
              <div className="col-span-2 rounded-xl overflow-hidden border border-[#a98f63]/20 relative group">
                <img src={items[0].image} alt="Legends venue hero" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="royal-heading text-2xl text-[#f5f0e8]">The Kingdom</p>
                  <p className="text-sm text-[#a98f63]">Legends Microbrewery</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <RoyalButton href="/gallery">See Full Gallery</RoyalButton>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
