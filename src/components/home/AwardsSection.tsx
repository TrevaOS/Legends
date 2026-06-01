"use client";

import { motion } from "framer-motion";

const award = {
  image: "/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.webp",
  title: "Most Innovative Beer on Tap",
  beer: "Zen Empire · Japanese Lager",
  body: "Legends Microbrewery's Zen Empire Japanese Lager has been honoured with the award for Most Innovative Beer on Tap, a testament to our relentless pursuit of extraordinary craft brewing.",
};

export const AwardsSection = () => {
  return (
    <section id="awards" className="royal-pattern px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63] mb-3">
            Accolades &amp; Recognition
          </p>
          <h2 className="royal-heading text-4xl md:text-5xl text-[#f5f0e8] leading-tight">
            Awards &amp; Honours
          </h2>
          <div className="mt-5 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-[#a98f63] to-transparent" />
        </div>

        {/* Award Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="ornamental-border rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c0d10] to-[#110f0f] shadow-[0_8px_48px_rgba(0,0,0,0.45)]"
        >
          <div className="flex flex-col md:flex-row">

            {/* Image — faces visible */}
            <div className="relative md:w-[380px] lg:w-[420px] shrink-0">
              <div className="w-full h-[380px] md:h-full min-h-[420px]">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 35%" }}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1c0d10] hidden md:block pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c0d10] via-transparent to-transparent md:hidden pointer-events-none" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center px-7 py-8 md:py-12 gap-5">
              <div className="inline-flex items-center gap-2 self-start">
                <div className="w-1 h-8 bg-gradient-to-b from-[#a98f63] to-[#ccad44] rounded-full" />
                <span className="text-[#ccad44] text-xs font-semibold uppercase tracking-[0.35em]">
                  First Award Win
                </span>
              </div>

              <div>
                <p className="text-[#a98f63] text-xs uppercase tracking-[0.4em] mb-3">
                  {award.beer}
                </p>
                <h3 className="royal-heading text-3xl md:text-4xl text-[#f5f0e8] leading-tight">
                  Most Innovative<br />Beer on Tap
                </h3>
              </div>

              <div className="h-px w-14 bg-gradient-to-r from-[#a98f63] to-transparent" />

              <p className="text-[#c4b49a] text-sm md:text-base leading-relaxed max-w-md">
                {award.body}
              </p>

              <div className="h-px w-14 bg-gradient-to-r from-[#a98f63] to-transparent" />

              <p className="text-[#a98f63]/70 text-xs italic">
                Legends Microbrewery, Bangalore
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
