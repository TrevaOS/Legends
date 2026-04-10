import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const AboutPreview = () => (
  <AnimatedSection>
    <section className="stone-overlay bg-[#110f0f] px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[140px,1fr] gap-10 items-center">
        <p className="royal-heading text-8xl text-[#a98f63]">L</p>
        <div>
          <p className="text-lg leading-relaxed">From the moment you step in, you are not just welcomed, you are crowned. Every brew honors your strength and every dish celebrates your journey through our kingdom.</p>
          <Link href="/about" className="inline-block mt-6 text-[#a98f63] border-b border-[#a98f63]/60">Our Story {"->"}</Link>
        </div>
      </div>
    </section>
  </AnimatedSection>
);
