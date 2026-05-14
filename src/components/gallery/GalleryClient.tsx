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

export function GalleryClient() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const filters = ["All", ...new Set(galleryItems.map((item) => item.category))];
  const list = useMemo(
    () => galleryItems.filter((item) => filter === "All" || item.category === filter),
    [filter]
  );

  const activeItem = active !== null ? list[active] : null;

  return (
    <>
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="royal-heading text-6xl">Gallery</h1>

        <div className="flex flex-wrap gap-2 mt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setActive(null);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === f
                  ? "bg-[#a98f63] text-[#1a0010]"
                  : "border border-[#a98f63] text-[#a98f63] hover:bg-[#a98f63] hover:text-[#1a0010]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 auto-rows-[200px] md:auto-rows-[250px]">
          {list.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-[#a98f63]/20 ${
                mixedLayout[idx % mixedLayout.length]
              }`}
              onClick={() => setActive(idx)}
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-8 h-8 text-white mb-2" />
                <p className="text-white text-sm font-medium text-center px-3">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 p-4 flex items-center justify-center"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeItem.image}
                alt={activeItem.category}
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-white hover:text-[#a98f63] transition-colors"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <p className="text-white mt-4 text-center text-lg">{activeItem.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
