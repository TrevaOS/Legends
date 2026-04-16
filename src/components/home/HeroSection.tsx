"use client";

import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";
import { featuredAmbience } from "@/lib/data";

const HERO_VIDEO_ID = "13Fz7AKNQ0wyq0ogtmASd4TOmpGU0W-zz";
const HERO_VIDEO_URL = `https://drive.google.com/file/d/${HERO_VIDEO_ID}/preview`;

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6">
      <iframe
        src={HERO_VIDEO_URL}
        allow="autoplay"
        className="absolute inset-0 h-full w-full scale-[1.05] border-0"
        aria-label="Legends hero video"
        style={{ pointerEvents: "none" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,143,99,0.18),transparent_28%),linear-gradient(180deg,rgba(12,2,6,0.38),rgba(12,2,6,0.64),rgba(8,4,6,0.9))]" />

      <div className="relative mx-auto w-full max-w-6xl py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#210811] shadow-[0_0_40px_rgba(169,143,99,0.18)] md:h-24 md:w-24">
            <img
              src={brandAssets.mainLogo}
              alt="Legends logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#d8b583]">Bengaluru</p>
            <p className="royal-heading mt-2 text-2xl text-[#f5f0e8] md:text-3xl">Legends Microbrewery</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xs uppercase tracking-[0.5em] text-[#d8b583]"
        >
          Craft Beer. Food. Atmosphere.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="royal-heading mt-5 max-w-4xl text-5xl leading-none text-[#f6ecdf] md:text-7xl lg:text-8xl"
        >
          Welcome to the Kingdom of Brews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 max-w-2xl text-base leading-7 text-[#ead8c6] md:text-lg"
        >
          Bengaluru&apos;s finest microbrewery. Bold craft beers, royal feasts, and an atmosphere fit for legends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <RoyalButton href="/beers">Explore Our Beers</RoyalButton>
          <RoyalButton href="/reservations" variant="outline">Book a Table</RoyalButton>
        </motion.div>
      </div>
    </section>
  );
};
