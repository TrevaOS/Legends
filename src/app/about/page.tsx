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
              LEGENDS was born from a singular vision: to create a space where every guest feels
              like royalty. We set out to build not just a brewery but a kingdom where bold flavours,
              warm hospitality, an unforgettable atmosphere come together under one roof.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#cbbca1]">
              Every pint we pour carries the weight of meticulous craft. From the grain selection
              to the final pour, our brewmasters treat each batch as a signature work. We believe
              that great beer deserves great company, great food, a setting that elevates every sip.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#cbbca1]">
              Rooted in Bengaluru with a spirit that reaches far beyond the city, LEGENDS stands as
              a celebration of courage, creativity, the relentless pursuit of excellence.
            </p>
          </article>
          <div className="rounded-2xl overflow-hidden border border-[#a98f63]/30 h-80">
            <img
              src={featuredAmbience[2]}
              alt="Legends interior"
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
              desc: "Every brew is made with single-minded dedication. No shortcuts. No compromises. Only the finest.",
            },
            {
              title: "Quality",
              desc: "From grain to glass, only the finest ingredients find their way into your pint at LEGENDS.",
            },
            {
              title: "Heritage",
              desc: "Rooted in the art of brewing with a vision that honours both tradition and bold innovation.",
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
              { image: featuredAmbience[3], label: "The Lounge" },
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
    </div>
  );
}
