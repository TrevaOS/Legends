"use client";

import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";
import { featuredAmbience } from "@/lib/data";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden">
      <img
        src={featuredAmbience[0]}
        alt="Legends ambience"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,0,16,0.45),rgba(24,4,13,0.82),rgba(11,6,8,0.96))]" />
      <div className="relative text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 relative h-28 w-28 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#210811] shadow-[0_0_40px_rgba(169,143,99,0.18)]"
        >
          <img
            src={brandAssets.mainLogo}
            alt="Legends main logo"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="royal-heading text-4xl md:text-6xl">Welcome to the</motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="royal-heading text-[#a98f63] text-6xl md:text-8xl leading-none">Kingdom</motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="royal-heading text-5xl md:text-7xl">of Brews</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="mt-6 italic text-[#e8e0d0]">Your real Legends ambience now leads the story from the first screen.</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.6 }} className="mt-10 flex flex-wrap gap-4 justify-center">
          <RoyalButton href="/beers">Explore Our Beers</RoyalButton>
          <RoyalButton href="/reservations" variant="outline">Book a Table</RoyalButton>
        </motion.div>
      </div>
    </section>
  );
};
