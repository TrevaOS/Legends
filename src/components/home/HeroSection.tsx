"use client";

import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1a0010,#3e001c)]" />
      <div className="relative text-center max-w-4xl">
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="royal-heading text-4xl md:text-6xl">Welcome to the</motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="royal-heading text-[#a98f63] text-6xl md:text-8xl leading-none">Kingdom</motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="royal-heading text-5xl md:text-7xl">of Brews</motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }} className="mt-6 italic text-[#e8e0d0]">You are the hero of our story</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.6 }} className="mt-10 flex flex-wrap gap-4 justify-center">
          <RoyalButton href="/beers">Explore Our Beers</RoyalButton>
          <RoyalButton href="/reservations" variant="outline">Book a Table</RoyalButton>
        </motion.div>
      </div>
    </section>
  );
};
