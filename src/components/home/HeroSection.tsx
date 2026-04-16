"use client";

import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";

const HERO_VIDEO_ID = "13Fz7AKNQ0wyq0ogtmASd4TOmpGU0W-zz";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden">
      {/* Background video via Google Drive direct stream */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source
          src={`https://drive.google.com/uc?export=preview&id=${HERO_VIDEO_ID}`}
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,2,5,0.45)_0%,rgba(10,2,5,0.6)_60%,rgba(8,4,6,0.88)_100%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-20 w-20 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#210811] shadow-[0_0_40px_rgba(169,143,99,0.18)] md:h-24 md:w-24">
            <img
              src={brandAssets.mainLogo}
              alt="Legends"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#d8b583]">Bengaluru</p>
            <p className="royal-heading mt-1 text-2xl text-[#f5f0e8] md:text-3xl">Legends Microbrewery</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xs uppercase tracking-[0.5em] text-[#d8b583]"
        >
          Craft Beer · Food · Atmosphere
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="royal-heading mt-5 max-w-3xl text-5xl leading-none text-[#f6ecdf] md:text-7xl lg:text-8xl"
        >
          Welcome to the Kingdom of Brews
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 max-w-xl text-base leading-7 text-[#ead8c6] md:text-lg"
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
