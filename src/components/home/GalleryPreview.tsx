import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { galleryItems } from "@/lib/data";

export const GalleryPreview = () => {
  const ambienceItems = galleryItems.filter((i) => i.category === "Ambience").slice(0, 6);

  return (
    <AnimatedSection>
      <section className="bg-[#110f0f] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63]">Gallery Preview</p>
              <h2 className="royal-heading mt-3 text-4xl text-[#f5f0e8] md:text-5xl">
                Inside the Kingdom
              </h2>
            </div>
            <RoyalButton href="/gallery">View Full Gallery</RoyalButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {ambienceItems.map((item, index) => (
              <div
                key={item.id}
                className={`overflow-hidden rounded-[1.25rem] border border-[#a98f63]/20 ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <img
                  src={item.image}
                  alt={`Legends gallery ${index + 1}`}
                  className="h-52 w-full object-cover hover:scale-105 transition-transform duration-500"
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
