"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/data";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"masonry" | "strips">("masonry");
  const [active, setActive] = useState<number | null>(null);
  const filters = ["All", ...new Set(galleryItems.map((item) => item.category))];
  const list = useMemo(() => galleryItems.filter((item) => filter === "All" || item.category === filter), [filter]);

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Gallery</h1>
      <p className="mt-4 max-w-3xl text-[#d8ccb7]">These are now your actual venue and food images served from the Google Drive folders you shared.</p>
      <div className="mt-6 flex flex-wrap gap-3">{filters.map((f)=><button key={f} onClick={()=>setFilter(f)} className="px-4 py-2 rounded-full border border-[#a98f63]/60">{f}</button>)}</div>
      <div className="mt-4 flex gap-3"><button onClick={()=>setView("masonry")} className="px-3 py-2 border border-[#a98f63]/60 rounded-md">Masonry</button><button onClick={()=>setView("strips")} className="px-3 py-2 border border-[#a98f63]/60 rounded-md">Strips</button></div>
      <AnimatePresence mode="popLayout">
        {view === "masonry" ? (
          <motion.div layout key="masonry" className="masonry-grid mt-8">
            {list.map((item) => <motion.button key={item.id} layout onClick={() => setActive(item.id)} className={`masonry-item w-full rounded-xl overflow-hidden border border-[#a98f63]/35 ${item.height} relative text-left`}><img src={item.image} alt={`${item.category} gallery shot`} className="h-full w-full object-cover" loading="lazy" /><span className="absolute inset-0 bg-black/20" /><Expand className="absolute right-3 bottom-3 text-[#a98f63]" /></motion.button>)}
          </motion.div>
        ) : (
          <motion.div layout key="strips" className="mt-8 space-y-4">{list.map((item) => <motion.button key={item.id} layout onClick={() => setActive(item.id)} className="w-full h-48 rounded-xl overflow-hidden border border-[#a98f63]/35"><img src={item.image} alt={`${item.category} strip shot`} className="h-full w-full object-cover" loading="lazy" /></motion.button>)}</motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>{active !== null ? <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[70] bg-black/80 grid place-items-center" onClick={() => setActive(null)}><motion.div initial={{y:30}} animate={{y:0}} exit={{y:30}} className="w-[90vw] max-w-4xl h-[70vh] rounded-2xl overflow-hidden border border-[#a98f63]/50" onClick={(event) => event.stopPropagation()}><img src={galleryItems.find((item) => item.id === active)?.image} alt="Expanded gallery" className="h-full w-full object-cover" /></motion.div></motion.div> : null}</AnimatePresence>
    </div>
  );
}
