import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { featuredAmbience, galleryItems } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="px-6">
      <section className="py-20 text-center">
        <h1 className="royal-heading text-6xl">Our Story</h1>
      </section>

      <AnimatedSection>
        <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <article>
            <p className="text-lg leading-relaxed">
              From the moment you step in, you are not just welcomed, you are crowned. Legends is
              built on craftsmanship, hospitality, and heroic celebration.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#cbbca1]">
              Every brew we craft tells a story — of bold choices, of patience, of passion poured
              into every pint. Our rooftop overlooks Bengaluru&apos;s skyline as a reminder that
              great things happen when you dare to dream bigger than the city itself.
            </p>
          </article>
          <div className="rounded-2xl overflow-hidden border border-[#a98f63]/30 h-80">
            <img
              src={featuredAmbience[1]}
              alt="Legends interior ambience"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </AnimatedSection>

      <OrnamentalDivider />

      <AnimatedSection>
        <section className="max-w-6xl mx-auto py-14 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Craftsmanship",
              desc: "Every brew is made with single-minded dedication — no shortcuts, no compromises.",
            },
            {
              title: "Quality",
              desc: "From grain to glass, only the finest ingredients find their way into your pint.",
            },
            {
              title: "Heritage",
              desc: "Rooted in the art of brewing with a vision that honours both tradition and boldness.",
            },
          ].map((item) => (
            <article key={item.title} className="ornamental-border rounded-xl p-6">
              <h3 className="royal-heading text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm text-[#cbbca1]">{item.desc}</p>
            </article>
          ))}
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="max-w-6xl mx-auto py-14">
          <h2 className="royal-heading text-4xl">The Kingdom</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {[
              { image: featuredAmbience[2], label: "The Bar" },
              { image: featuredAmbience[3], label: "Rooftop Lounge" },
              { image: featuredAmbience[4], label: "The Brew Floor" },
              { image: galleryItems[1].image, label: "Kitchen Craft" },
              { image: featuredAmbience[5], label: "Private Dining" },
              { image: galleryItems[3].image, label: "Signature Bites" },
            ].map(({ image, label }) => (
              <div key={label} className="rounded-xl overflow-hidden border border-[#a98f63]/30 relative group h-52">
                <img
                  src={image}
                  alt={label}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/80 to-transparent" />
                <p className="absolute bottom-3 left-4 royal-heading text-xl text-[#f5f0e8]">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="max-w-6xl mx-auto py-14">
          <h2 className="royal-heading text-4xl">Achievements &amp; Awards</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {[
              {
                title: "Best Craft Experience",
                desc: "Recognized for delivering an unmatched craft beer experience in Bengaluru.",
                image: featuredAmbience[1],
              },
              {
                title: "People's Brew Choice",
                desc: "Voted by our patrons as the city's most beloved microbrewery destination.",
                image: featuredAmbience[2],
              },
              {
                title: "Top Rooftop Brewery",
                desc: "Awarded for our iconic rooftop ambience paired with world-class brews.",
                image: featuredAmbience[3],
              },
            ].map((award) => (
              <article
                key={award.title}
                className="rounded-2xl overflow-hidden border border-[#a98f63]/40 bg-[#1a0010]"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="royal-heading text-xl text-[#a98f63]">{award.title}</h3>
                  <p className="mt-2 text-sm text-[#cbbca1]">{award.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
