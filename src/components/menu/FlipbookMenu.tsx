"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { beersData, menuSections } from "@/lib/data";
import { brandAssets } from "@/lib/branding";

type Page =
  | { kind: "cover" }
  | { kind: "section"; title: string; items: readonly string[] }
  | { kind: "beer" };

export const FlipbookMenu = () => {
  const pages = useMemo<Page[]>(() => [
    { kind: "cover" },
    ...menuSections.map((s) => ({ kind: "section" as const, title: s.title, items: s.items })),
    { kind: "beer" },
  ], []);

  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    if (next < 0 || next >= pages.length) return;
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  };

  const goToSection = (title: string) => {
    const index = pages.findIndex((p) => p.kind === "section" && p.title === title);
    if (index !== -1) go(index);
  };

  const page = pages[current];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <div className="menu-book-shell min-h-screen px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Left Sidebar - Category Filter (Desktop Only) */}
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-20">
            <p className="text-xs uppercase tracking-[0.35em] text-[#a98f63] font-semibold mb-4">Categories</p>
            <div className="flex flex-col gap-2">
              {menuSections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => goToSection(section.title)}
                  className={`text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                    page.kind === "section" && page.title === section.title
                      ? "bg-[#a98f63] text-[#2a1200] font-semibold"
                      : "text-[#cbbca1] hover:text-[#a98f63] hover:bg-[#a98f63]/10"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-3">

          {/* Header */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.45em] text-[#c28a57]">Kingdom of Brews</p>
            <h1 className="royal-heading mt-2 text-4xl text-[#fff4e8] md:text-5xl">Our Menu</h1>
          </div>

        {/* Page counter + nav */}
        <div className="mb-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => go(current - 1)}
            disabled={current === 0}
            className="rounded-full border border-[#d2a871]/50 px-5 py-2 text-sm text-[#fff4e8] disabled:opacity-30 hover:border-[#d2a871] transition-colors"
          >
            Prev
          </button>
          <p className="text-xs uppercase tracking-[0.35em] text-[#caa17b]">
            {current + 1} / {pages.length}
          </p>
          <button
            type="button"
            onClick={() => go(current + 1)}
            disabled={current === pages.length - 1}
            className="rounded-full border border-[#d2a871]/50 px-5 py-2 text-sm text-[#fff4e8] disabled:opacity-30 hover:border-[#d2a871] transition-colors"
          >
            Next
          </button>
        </div>

        {/* Page area */}
        <div className="relative overflow-hidden rounded-2xl border border-[#e3caa8] bg-[#fffaf4] shadow-[0_20px_60px_rgba(0,0,0,0.4)]" style={{ minHeight: 520 }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              {/* COVER */}
              {page.kind === "cover" && (
                <div className="relative flex flex-col justify-between p-8 md:p-12" style={{ minHeight: 520 }}>
                  <div>
                    <img src={brandAssets.mainLogo} alt="LEGENDS Microbrewery" className="h-16 w-16 rounded-full border border-[#e3caa8] object-cover mb-6" />
                    <p className="text-xs uppercase tracking-[0.5em] text-[#9d5a3d]">Kingdom of Brews</p>
                    <h2 className="royal-heading mt-4 text-5xl text-[#5d1e2a] leading-tight">LEGENDS<br/>Microbrewery</h2>
                    <p className="mt-4 text-sm leading-7 text-[#7a4a3a] max-w-sm">
                      Craft beers, signature dishes, royal flavours. All in one place.
                    </p>
                  </div>
                  <div className="mt-8 rounded-2xl border border-[#deb17c]/50 bg-[#fdf0e0] p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#8d3a46]">Today&apos;s highlights</p>
                    <p className="royal-heading mt-2 text-xl text-[#5d1e2a]">Bar Bites, Grills, Biryani, Burgers, Desserts</p>
                  </div>
                </div>
              )}

              {/* SECTION */}
              {page.kind === "section" && (
                <div className="p-8 md:p-10" style={{ minHeight: 520 }}>
                  <h2 className="royal-heading text-3xl text-[#7f2438]">{page.title}</h2>
                  <div className="mt-4 h-px bg-[linear-gradient(90deg,#b78b54,transparent)]" />
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                    {page.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-[#e3caa8] bg-white px-4 py-2.5 text-sm text-[#55352f] leading-5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-right text-xs uppercase tracking-[0.28em] text-[#c8a87a]">LEGENDS</p>
                </div>
              )}

              {/* BEERS */}
              {page.kind === "beer" && (
                <div className="p-8 md:p-10" style={{ minHeight: 520 }}>
                  <h2 className="royal-heading text-3xl text-[#7f2438]">Signature Brews</h2>
                  <div className="mt-4 h-px bg-[linear-gradient(90deg,#b78b54,transparent)]" />
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    {beersData.map((beer) => (
                      <div key={beer.name} className="rounded-xl border border-[#e3caa8] bg-white p-4">
                        <p className="royal-heading text-lg text-[#5d1e2a]">{beer.name}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a2643a] mt-0.5">{beer.style}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {[
                            beer.abv ? `ABV ${beer.abv}` : null,
                            beer.ibu ? `IBU ${beer.ibu}` : null,
                            beer.rating ? `Rating ${beer.rating}` : null,
                          ]
                            .filter(Boolean)
                            .map((stat) => (
                              <span
                                key={stat}
                                className="rounded-full border border-[#d7bb95] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#5f4037]"
                              >
                                {stat}
                              </span>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-5 flex justify-center gap-1.5">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[#d2a871]" : "w-1.5 bg-[#d2a871]/30"}`}
            />
          ))}
        </div>

        </div>
      </div>
    </div>
  );
};
