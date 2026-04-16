"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/data";

const mixedLayout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const filters = ["All", ...new Set(galleryItems.map((item) => item.category))];
  const list = useMemo(
    () => galleryItems.filter((item) => filter === "All" || item.category === filter),
    [filter]
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.45em] text-[#a98f63]">Gallery</p>
      <h1 className="royal-heading mt-4 text-5xl text-[#f5f0e8] md:text-6xl">
        Inside the Kingdom
      </h1>

      <div className="mt-6 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === f
                ? "border-[#a98f63] bg-[#a98f63] text-[#24090d]"
                : "border-[#a98f63]/60 text-[#f5f0e8] hover:border-[#a98f63]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          key={filter}
          className="mt-10 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]"
        >
          {list.map((item, index) => (
            <motion.button
              key={item.id}
              layout
              type="button"
              onClick={() => setActive(item.id)}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-[#a98f63]/30 text-left ${mixedLayout[index % mixedLayout.length]}`}
            >
              <img
                src={item.image}
                alt={`${item.category} gallery shot`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.35))]" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#f5f0e8]">
                {item.category}
              </span>
              <Expand className="absolute bottom-4 right-4 text-[#f3c98a]" />
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: 30 }}
              className="h-[70vh] w-[90vw] max-w-4xl overflow-hidden rounded-2xl border border-[#a98f63]/50"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={galleryItems.find((item) => item.id === active)?.image}
                alt="Expanded gallery"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
