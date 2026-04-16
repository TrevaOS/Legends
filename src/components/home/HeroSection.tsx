"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RoyalButton } from "@/components/ui/RoyalButton";
import { brandAssets } from "@/lib/branding";
import { featuredAmbience } from "@/lib/data";

const DRIVE_FILE_ID = "13Fz7AKNQ0wyq0ogtmASd4TOmpGU0W-zz";
const driveVideoSources = [
  `https://drive.usercontent.google.com/download?id=${DRIVE_FILE_ID}&export=view&authuser=0`,
  `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`,
] as const;

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      void video.play().then(() => setLoaded(true)).catch(() => {
        setLoaded(false);
      });
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <section className="relative flex h-screen max-h-[100dvh] items-center overflow-hidden">
      <img
        src={featuredAmbience[0]}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-0" : "opacity-100"}`}
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={featuredAmbience[0]}
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        onCanPlay={() => setLoaded(true)}
        onLoadedData={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      >
        {driveVideoSources.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,2,5,0.45)_0%,rgba(10,2,5,0.58)_55%,rgba(8,4,6,0.92)_100%)]" />
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
