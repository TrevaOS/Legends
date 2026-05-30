"use client";

import { motion } from "framer-motion";

const award = {
  image: "/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.jpeg",
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

            {/* Image */}
            <div className="relative md:w-72 lg:w-80 shrink-0">
              <div className="aspect-[3/4] md:aspect-auto md:h-full min-h-[320px]">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#110f0f]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#1c0d10]/50 pointer-events-none" />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center px-7 py-8 md:py-10 gap-5">
              <div>
                <p className="text-[#a98f63] text-xs uppercase tracking-[0.35em] mb-2">
                  {award.beer}
                </p>
                <h3 className="royal-heading text-2xl md:text-3xl text-[#f5f0e8] leading-snug">
                  {award.title}
                </h3>
              </div>

              <p className="text-[#c4b49a] text-sm md:text-base leading-relaxed max-w-prose">
                {award.body}
              </p>

              <div className="h-px w-16 bg-gradient-to-r from-[#a98f63] to-transparent" />

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
