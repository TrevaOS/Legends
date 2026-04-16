"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const quotes = [
  "Legendary places run on honest opinions andLegends serves both flavor and soul.",
  "From the first pour to the final toast, every detail feels royal.",
  "Brewed for Heroes is not just a line, it is the full experience.",
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((v) => (v + 1) % quotes.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection>
      <section className="px-6 py-24 bg-[#83043b]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#a98f63] text-7xl royal-heading">&ldquo;</p>
          <AnimatePresence mode="wait">
            <motion.p key={quotes[index]} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-xl leading-relaxed min-h-24">{quotes[index]}</motion.p>
          </AnimatePresence>
          <p className="mt-4 text-[#cbbca1]">Guest at Legends</p>
        </div>
      </section>
    </AnimatedSection>
  );
};
