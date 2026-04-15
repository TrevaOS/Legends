import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { galleryItems } from "@/lib/data";

export const GalleryPreview = () => {
  const items = galleryItems.slice(0, 5);

  return (
    <AnimatedSection>
      <section className="bg-[#110f0f] px-6 py-18 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63]">Gallery Preview</p>
            <h2 className="royal-heading mt-4 text-4xl text-[#f5f0e8] md:text-5xl">
              A lighter home gallery that feels curated.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#cbbca1]">
              The home screen now shows a compact preview instead of a tall, heavy wall of images.
            </p>
            <div className="mt-8">
              <RoyalButton href="/gallery">Open Full Gallery</RoyalButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="col-span-2 overflow-hidden rounded-[1.5rem] border border-[#a98f63]/20">
              <img
                src={items[0].image}
                alt="Legends interior preview"
                className="h-64 w-full object-cover md:h-72"
                loading="lazy"
              />
            </div>
            {items.slice(1).map((item, index) => (
              <div key={item.id} className="overflow-hidden rounded-[1.25rem] border border-[#a98f63]/20">
                <img
                  src={item.image}
                  alt={`Legends gallery preview ${index + 2}`}
                  className="h-32 w-full object-cover md:h-36"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
