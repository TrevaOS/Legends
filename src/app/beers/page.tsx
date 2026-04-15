"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { BeerCard } from "@/components/ui/BeerCard";
import { beersData } from "@/lib/data";

export default function BeersPage() {
  const filters = useMemo(() => ["All", ...new Set(beersData.map((beer) => beer.style))], []);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("A to Z");
  const [activeBeer, setActiveBeer] = useState<string | null>(null);

  const list = useMemo(() => {
    let data = [...beersData];
    if (filter !== "All") data = data.filter((b) => b.style === filter);
    if (sortBy === "A to Z") data.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "Style") data.sort((a, b) => a.style.localeCompare(b.style));
    return data;
  }, [filter, sortBy]);

  const selectedBeer = list.find((beer) => beer.name === activeBeer) ?? null;

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Brewed for Heroes</h1>
      <p className="mt-4 max-w-3xl text-[#d8ccb7]">
        This lineup now comes from your `Beer lineup .pdf`, with the original beer names,
        styles, and tasting notes mapped into the site.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">{filters.map((f)=><button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full border ${filter===f?"bg-[#a98f63] text-[#200b0f]":"border-[#a98f63]"}`}>{f}</button>)}</div>
      <div className="mt-5"><select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="bg-[#1a0010] border border-[#a98f63]/50 rounded-md px-3 py-2"><option>A to Z</option><option>Style</option></select></div>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {list.map((beer) => (
            <motion.div key={beer.name} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <BeerCard
                name={beer.name}
                style={beer.style}
                abv={beer.abv}
                description={beer.description}
                ibu={beer.ibu}
                price={beer.price}
                pair={beer.pair}
                image={beer.image}
                onViewDetails={() => setActiveBeer(beer.name)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {selectedBeer ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-black/80 p-4 grid place-items-center" onClick={() => setActiveBeer(null)}>
            <motion.article initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#a98f63]/40 bg-[#1a0010]" onClick={(event) => event.stopPropagation()}>
              <img src={selectedBeer.image} alt={selectedBeer.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="royal-heading text-4xl text-[#f5f0e8]">{selectedBeer.name}</h2>
                <p className="mt-3 text-[#cbbca1]">
                  {[`Style: ${selectedBeer.style}`, selectedBeer.abv ? `ABV: ${selectedBeer.abv}` : null, selectedBeer.ibu ? `IBU: ${selectedBeer.ibu}` : null]
                    .filter(Boolean)
                    .join(" | ")}
                </p>
                {selectedBeer.price ? <p className="mt-2">Price: INR {selectedBeer.price}</p> : null}
                <p className="mt-4 text-[#e8e0d0]">{selectedBeer.description}</p>
                {selectedBeer.pair ? <p className="mt-2 text-sm text-[#cbbca1]">Best paired with: {selectedBeer.pair}</p> : null}
                <button type="button" onClick={() => setActiveBeer(null)} className="mt-6 rounded-full border border-[#a98f63] px-5 py-2 text-[#a98f63] hover:bg-[#a98f63] hover:text-[#24090d] transition-colors">
                  Close
                </button>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
