"use client";

import { useState } from "react";

const PAGES = [
  {
    type: "cover",
    content: null,
  },
  {
    type: "content",
    title: "Small Plates",
    items: [
      { name: "Truffle Mushroom Bites", price: "₹320" },
      { name: "House Smoked Wings", price: "₹410" },
      { name: "Loaded Hop Nachos", price: "₹360" },
      { name: "Royal Flatbread", price: "₹500" },
    ],
  },
  {
    type: "content",
    title: "Mains",
    items: [
      { name: "Charred Lamb Platter", price: "₹640" },
      { name: "Grilled Cottage Stack", price: "₹520" },
      { name: "Fire-Roast Chicken Bowl", price: "₹560" },
      { name: "Smoked Mutton Slider", price: "₹380" },
    ],
  },
  {
    type: "content",
    title: "Signature Brews",
    items: [
      { name: "Kingdom Lager", sub: "ABV 4.8%", price: "₹420" },
      { name: "Crowned IPA", sub: "ABV 6.5%", price: "₹460" },
      { name: "Dark Knight Stout", sub: "ABV 7.2%", price: "₹480" },
      { name: "Wheat of Honor", sub: "ABV 4.2%", price: "₹410" },
    ],
  },
  {
    type: "content",
    title: "Seasonal Specials",
    items: [
      { name: "Mango Wheat Ale", price: "₹470" },
      { name: "Smoked Porter Reserve", price: "₹520" },
      { name: "Citrus Pale Hero", price: "₹450" },
    ],
  },
  {
    type: "content",
    title: "Cocktails",
    items: [
      { name: "Royal Ember Sour", price: "₹520" },
      { name: "Panathur Spice Smash", price: "₹540" },
      { name: "Crown Citrus Fizz", price: "₹500" },
    ],
  },
  {
    type: "content",
    title: "Food Pairings",
    items: [
      { name: "Hop Burger & Lager", price: "₹690" },
      { name: "Stout Brownie & Stout", price: "₹620" },
      { name: "IPA Wings Combo", price: "₹740" },
    ],
  },
  {
    type: "content",
    title: "Desserts & Coffee",
    items: [
      { name: "Dark Cacao Crown", price: "₹310" },
      { name: "Honey Malt Pudding", price: "₹290" },
      { name: "Cold Brew Tonic", price: "₹260" },
    ],
  },
  {
    type: "backcover",
    content: null,
  },
];

type PageData = typeof PAGES[number];

function CoverPage() {
  return (
    <div className="w-full h-full bg-[#1a0a12] flex flex-col justify-center px-12 py-10">
      <p className="text-xs tracking-[0.4em] uppercase text-[#a98f63] mb-4">Legends</p>
      <h2 className="royal-heading text-6xl xl:text-7xl leading-tight text-[#a98f63]">
        Kingdom<br />of Brews
      </h2>
      <div className="mt-6 h-px w-16 bg-[#a98f63]/50" />
      <p className="mt-6 text-xl text-[#f5f0e8]">Signature Menu</p>
      <p className="mt-2 text-base text-[#cbbca1]">Panathur Main Road, Bengaluru</p>
    </div>
  );
}

function BackCoverPage() {
  return (
    <div className="w-full h-full bg-[#1a0a12] flex flex-col justify-center px-12 py-10 text-[#f5f0e8]">
      <h3 className="royal-heading text-4xl text-[#a98f63]">Visit Us</h3>
      <div className="mt-6 h-px w-16 bg-[#a98f63]/50" />
      <div className="mt-8 space-y-5 text-lg">
        <div className="flex justify-between"><span className="text-[#cbbca1]">Hours</span><span>12 PM – 1 AM</span></div>
        <div className="flex justify-between"><span className="text-[#cbbca1]">Reservations</span><span>+91 99999 99999</span></div>
        <div className="flex justify-between"><span className="text-[#cbbca1]">Location</span><span>Panathur, Bengaluru</span></div>
      </div>
      <p className="mt-14 text-xs tracking-[0.3em] uppercase text-[#a98f63]/70">Legends | Kingdom of Brews</p>
    </div>
  );
}

function ContentPage({ page, pageNum }: { page: PageData & { type: "content"; title: string; items: { name: string; sub?: string; price: string }[] }; pageNum: number }) {
  return (
    <div className="w-full h-full bg-[#f5f0e8] flex flex-col justify-center px-12 py-10">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#a98f63]/70 mb-1">Legends</p>
      <h3 className="royal-heading text-4xl xl:text-5xl text-[#3e001c]">{page.title}</h3>
      <div className="mt-3 h-px bg-[#a98f63]/30" />
      <div className="mt-6 space-y-5">
        {page.items.map((item) => (
          <div key={item.name} className="flex justify-between items-baseline gap-4">
            <span className="text-[#2b1511] text-lg xl:text-xl">
              {item.name}
              {"sub" in item && item.sub && (
                <span className="ml-2 text-xs text-[#a98f63]">{item.sub}</span>
              )}
            </span>
            <span className="text-[#a98f63] font-semibold text-lg xl:text-xl shrink-0">{item.price}</span>
          </div>
        ))}
      </div>
      <p className="mt-auto pt-6 text-[10px] tracking-widest text-[#a98f63]/40 uppercase">
        {pageNum} / {PAGES.length}
      </p>
    </div>
  );
}

function Page({ data, pageNum }: { data: PageData; pageNum: number }) {
  if (data.type === "cover") return <CoverPage />;
  if (data.type === "backcover") return <BackCoverPage />;
  return <ContentPage page={data as PageData & { type: "content"; title: string; items: { name: string; sub?: string; price: string }[] }} pageNum={pageNum} />;
}

export const FlipbookMenu = () => {
  const [current, setCurrent] = useState(0); // index into PAGES
  const [flipping, setFlipping] = useState<"next" | "prev" | null>(null);

  const goNext = () => {
    if (current >= PAGES.length - 1 || flipping) return;
    setFlipping("next");
    setTimeout(() => {
      setCurrent((c) => c + 1);
      setFlipping(null);
    }, 400);
  };

  const goPrev = () => {
    if (current <= 0 || flipping) return;
    setFlipping("prev");
    setTimeout(() => {
      setCurrent((c) => c - 1);
      setFlipping(null);
    }, 400);
  };

  const prev = current > 0 ? PAGES[current - 1] : null;
  const curr = PAGES[current];
  const next = current < PAGES.length - 1 ? PAGES[current + 1] : null;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(130deg,#10040b,#2c0816,#13060f)" }}
    >
      {/* ── Branding header ── */}
      <header className="flex flex-col items-center justify-center py-6 border-b border-[#a98f63]/25 shrink-0">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#a98f63]">Legends</p>
        <h1 className="royal-heading mt-1 text-3xl md:text-4xl text-[#f5f0e8] leading-tight text-center">
          Kingdom of Brews
        </h1>
        <p className="mt-1 text-xs text-[#cbbca1] tracking-[0.3em] uppercase">Signature Menu</p>
      </header>

      {/* ── Book area ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-6">
        {/* Book */}
        <div
          className="relative w-full shadow-2xl"
          style={{
            maxWidth: "min(960px, calc(100vw - 48px))",
            aspectRatio: "2 / 1.1",
          }}
        >
          {/* Book shadow */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(169,143,99,0.2)",
            }}
          />

          {/* Spine */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            style={{
              width: "3px",
              background: "linear-gradient(to bottom, #a98f63, #78552a, #a98f63)",
              boxShadow: "0 0 12px rgba(169,143,99,0.5)",
            }}
          />

          {/* Left page (previous page preview) */}
          <div
            className="absolute inset-y-0 left-0 rounded-l-lg overflow-hidden"
            style={{ width: "calc(50% - 1.5px)" }}
          >
            {prev ? (
              <div
                className="w-full h-full"
                style={{
                  transform: flipping === "prev" ? "rotateY(-10deg)" : "rotateY(0deg)",
                  transformOrigin: "right center",
                  transition: "transform 0.4s ease",
                  perspective: "1200px",
                }}
              >
                <Page data={prev} pageNum={current} />
              </div>
            ) : (
              <div className="w-full h-full bg-[#1a0a12]" />
            )}
          </div>

          {/* Right page (current page) */}
          <div
            className="absolute inset-y-0 right-0 rounded-r-lg overflow-hidden"
            style={{ width: "calc(50% - 1.5px)" }}
          >
            <div
              className="w-full h-full"
              style={{
                transform: flipping === "next" ? "rotateY(10deg)" : "rotateY(0deg)",
                transformOrigin: "left center",
                transition: "transform 0.4s ease",
                perspective: "1200px",
              }}
            >
              <Page data={curr} pageNum={current + 1} />
            </div>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="mt-8 flex items-center gap-6">
          <button
            onClick={goPrev}
            disabled={current <= 0 || !!flipping}
            className="rounded-full border border-[#a98f63]/60 px-7 py-2.5 text-sm text-[#cbbca1] hover:bg-[#a98f63] hover:text-[#1e0c0f] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <span className="text-xs tracking-[0.3em] text-[#cbbca1] uppercase">
            {current + 1} / {PAGES.length}
          </span>
          <button
            onClick={goNext}
            disabled={current >= PAGES.length - 1 || !!flipping}
            className="rounded-full border border-[#a98f63]/60 px-7 py-2.5 text-sm text-[#cbbca1] hover:bg-[#a98f63] hover:text-[#1e0c0f] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-4 flex gap-2">
          {PAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!flipping) setCurrent(i); }}
              className="rounded-full transition-all"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "#a98f63" : "rgba(169,143,99,0.3)",
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
