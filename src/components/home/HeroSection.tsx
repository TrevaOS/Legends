"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";

const DRIVE_FILE_ID = "13Fz7AKNQ0wyq0ogtmASd4TOmpGU0W-zz";
// Google Drive direct stream — works for background autoplay without controls
const VIDEO_SRC = `https://drive.google.com/uc?export=preview&id=${DRIVE_FILE_ID}`;

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      // Autoplay blocked — retry on first user interaction
      const retry = () => { v.play(); document.removeEventListener("click", retry); };
      document.addEventListener("click", retry);
    });
  }, []);

  return (
    <section className="relative flex h-screen max-h-[100dvh] items-center overflow-hidden">
      {/* Muted background video — no controls, loops silently */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover"
        style={{ pointerEvents: "none" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,2,5,0.48)_0%,rgba(10,2,5,0.60)_55%,rgba(8,4,6,0.90)_100%)]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-14 w-14 overflow-hidden rounded-full border border-[#a98f63]/40 bg-[#210811]">
            <img src={brandAssets.mainLogo} alt="Legends" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#d8b583]">Bengaluru</p>
            <p className="royal-heading text-lg text-[#f5f0e8]">Legends Microbrewery</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.5em] text-[#d8b583]"
        >
          Craft Beer · Food · Atmosphere
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="royal-heading mt-4 text-5xl leading-none text-[#f6ecdf] md:text-6xl lg:text-7xl"
        >
          Welcome to the<br />
          <span className="text-[#cbbca1]">Kingdom of Brews</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-lg text-sm leading-6 text-[#ead8c6] md:text-base"
        >
          Bengaluru&apos;s finest microbrewery. Bold craft beers, royal feasts, an atmosphere fit for legends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <RoyalButton href="/beers">Explore Our Beers</RoyalButton>
          <RoyalButton href="/reservations" variant="outline">Book a Table</RoyalButton>
        </motion.div>
      </div>
    </section>
  );
};
