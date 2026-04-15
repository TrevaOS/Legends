"use client";

import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";
import { featuredAmbience } from "@/lib/data";

// Google Drive direct video embed ID
const HERO_VIDEO_ID = "13Fz7AKNQ0wyq0ogtmASd4TOmpGU0W-zz";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster={featuredAmbience[0]}
      >
        <source
          src={`https://drive.google.com/uc?export=download&id=${HERO_VIDEO_ID}`}
          type="video/mp4"
        />
        {/* Fallback image if video doesn't load */}
        <img
          src={featuredAmbience[0]}
          alt="Legends ambience"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </video>
      {/* Dark overlay — dimmed */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,0,6,0.55),rgba(14,2,8,0.72),rgba(8,4,6,0.92))]" />
      <div className="relative text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 relative h-28 w-28 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#210811] shadow-[0_0_40px_rgba(169,143,99,0.18)]"
        >
          <img
            src={brandAssets.mainLogo}
            alt="Legends logo"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="royal-heading text-4xl md:text-6xl">Welcome to the</motion.p>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="royal-heading text-[#a98f63] text-6xl md:text-8xl leading-none">Kingdom</motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="royal-heading text-5xl md:text-7xl">of Brews</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }} className="mt-10 flex flex-wrap gap-4 justify-center">
          <RoyalButton href="/beers">Explore Our Beers</RoyalButton>
          <RoyalButton href="/reservations" variant="outline">Book a Table</RoyalButton>
        </motion.div>
      </div>
    </section>
  );
};
