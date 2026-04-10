import { Globe, Phone, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const ContactLocation = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#12050d]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        <iframe title="Legends map" className="w-full h-80 rounded-2xl border border-[#a98f63]/30" loading="lazy" src="https://www.google.com/maps?q=Panathur+Main+Road+Bengaluru&output=embed" />
        <article className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/70">
          <h3 className="royal-heading text-3xl text-[#a98f63]">Visit Legends</h3>
          <p className="mt-4 text-sm">Sy. No. 16/2, Sy. No. 17/4 and 5, Panathur Main Road, Balagere, Varthur Hobli, Bengaluru - 560087</p>
          <p className="mt-3 text-sm">Phone: +91 99999 99999</p>
          <p className="text-sm">Email: support@legendsbrewery.in</p>
          <p className="text-sm">Mon-Thu 12pm-11pm | Fri-Sun 12pm-12am</p>
          <div className="flex gap-4 mt-5 text-[#a98f63]"><Globe /><Phone /><Star /></div>
        </article>
      </div>
    </section>
  </AnimatedSection>
);
