"use client";

import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";
import { featuredAmbience } from "@/lib/data";

const HERO_VIDEO_ID = "13Fz7AKNQ0wyq0ogtmASd4TOmpGU0W-zz";
const HERO_VIDEO_URL = `https://drive.google.com/uc?export=download&id=${HERO_VIDEO_ID}`;

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={featuredAmbience[0]}
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="Legends hero video"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,143,99,0.18),transparent_28%),linear-gradient(180deg,rgba(12,2,6,0.38),rgba(12,2,6,0.64),rgba(8,4,6,0.9))]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-end gap-10 py-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-28">
        <div className="max-w-4xl">
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
            A proper home screen with video, mood, and room to breathe.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-7 text-[#ead8c6] md:text-lg"
          >
            Legends brings together bold house brews, a rich food menu, and a cinematic brewery setting in one clear first impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <RoyalButton href="/beers">Explore Our Beers</RoyalButton>
            <RoyalButton href="/gallery" variant="outline">See the Space</RoyalButton>
            <RoyalButton href="/reservations" variant="outline">Book a Table</RoyalButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden rounded-[2rem] border border-[#a98f63]/35 bg-[linear-gradient(180deg,rgba(22,8,15,0.82),rgba(15,8,11,0.7))] p-6 text-[#f5f0e8] shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:block"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#d8b583]">Now Playing</p>
          <p className="royal-heading mt-4 text-3xl text-[#f5f0e8]">Legends on screen</p>
          <p className="mt-4 text-sm leading-7 text-[#d9c5b2]">
            Your shared video now anchors the home page so visitors immediately see the venue instead of a heavy static block.
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-[#a98f63]/25 bg-black/20 p-4">
            <p className="text-sm text-[#f5f0e8]">Video source</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#d8b583]">Google Drive embed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
