import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { brandAssets } from "@/lib/branding";
import { featuredAmbience } from "@/lib/data";

export const AboutPreview = () => (
  <AnimatedSection>
    <section className="stone-overlay royal-pattern bg-[#110f0f] px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl border border-[#a98f63]/30">
          <img
            src={featuredAmbience[1]}
            alt="Legends Microbrewery"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/60 to-transparent" />
          <div className="absolute bottom-5 left-5">
            <img
              src={brandAssets.mainLogo}
              alt="Legends"
              className="h-14 w-14 rounded-full border border-[#a98f63]/40 object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63]">Our Story</p>
          <h2 className="royal-heading mt-4 text-4xl text-[#f5f0e8] md:text-5xl">
            Built for Those Who Dare to{" "}
            <span className="text-[#a98f63]">Dream Bigger</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-[#cbbca1]">
            From the moment you step in, you are not just welcomed. You are Crowned. Legends is built on Craftsmanship, Hospitality, the Art of the Perfect Brew.
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 text-sm text-[#a98f63] border-b border-[#a98f63]/60 hover:border-[#a98f63] transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  </AnimatedSection>
);
