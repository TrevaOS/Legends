"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useMemo, useState } from "react";

const items = [
  { id: 0, category: "Ambience", h: "h-80", image: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=2000&q=80" },
  { id: 1, category: "Food", h: "h-56", image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=2000&q=80" },
  { id: 2, category: "Drinks", h: "h-80", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=80" },
  { id: 3, category: "Events", h: "h-56", image: "https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=2000&q=80" },
  { id: 4, category: "Ambience", h: "h-80", image: "https://images.unsplash.com/photo-1514361892635-eae31ec32f97?auto=format&fit=crop&w=2000&q=80" },
  { id: 5, category: "Food", h: "h-56", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=2000&q=80" },
  { id: 6, category: "Drinks", h: "h-80", image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?auto=format&fit=crop&w=2000&q=80" },
  { id: 7, category: "Events", h: "h-56", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80" },
  { id: 8, category: "Ambience", h: "h-80", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=2000&q=80" },
  { id: 9, category: "Food", h: "h-56", image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=2000&q=80" },
  { id: 10, category: "Drinks", h: "h-80", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=2000&q=80" },
  { id: 11, category: "Events", h: "h-56", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=80" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"masonry" | "strips">("masonry");
  const [active, setActive] = useState<number | null>(null);
  const list = useMemo(() => items.filter((item) => filter === "All" || item.category === filter), [filter]);

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Gallery</h1>
      <div className="mt-6 flex flex-wrap gap-3">{["All","Ambience","Food","Drinks","Events"].map((f)=><button key={f} onClick={()=>setFilter(f)} className="px-4 py-2 rounded-full border border-[#a98f63]/60">{f}</button>)}</div>
      <div className="mt-4 flex gap-3"><button onClick={()=>setView("masonry")} className="px-3 py-2 border border-[#a98f63]/60 rounded-md">Masonry</button><button onClick={()=>setView("strips")} className="px-3 py-2 border border-[#a98f63]/60 rounded-md">Strips</button></div>
      <AnimatePresence mode="popLayout">
        {view === "masonry" ? (
          <motion.div layout key="masonry" className="masonry-grid mt-8">
            {list.map((item) => <motion.button key={item.id} layout onClick={() => setActive(item.id)} className={`masonry-item w-full rounded-xl overflow-hidden border border-[#a98f63]/35 ${item.h} relative text-left`}><img src={item.image} alt={`${item.category} gallery shot`} className="h-full w-full object-cover" loading="lazy" /><span className="absolute inset-0 bg-black/20" /><Expand className="absolute right-3 bottom-3 text-[#a98f63]" /></motion.button>)}
          </motion.div>
        ) : (
          <motion.div layout key="strips" className="mt-8 space-y-4">{list.map((item) => <motion.button key={item.id} layout onClick={() => setActive(item.id)} className="w-full h-48 rounded-xl overflow-hidden border border-[#a98f63]/35"><img src={item.image} alt={`${item.category} strip shot`} className="h-full w-full object-cover" loading="lazy" /></motion.button>)}</motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>{active !== null ? <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[70] bg-black/80 grid place-items-center" onClick={() => setActive(null)}><motion.div initial={{y:30}} animate={{y:0}} exit={{y:30}} className="w-[90vw] max-w-4xl h-[70vh] rounded-2xl overflow-hidden border border-[#a98f63]/50" onClick={(event) => event.stopPropagation()}><img src={items.find((item) => item.id === active)?.image} alt="Expanded gallery" className="h-full w-full object-cover" /></motion.div></motion.div> : null}</AnimatePresence>
    </div>
  );
}
