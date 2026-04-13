"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jQuery: any;
  }
}

// turn.js is a jQuery plugin — returns a jQuery-wrapped element or null if not ready
function getTurn(el: HTMLElement) {
  if (typeof window === "undefined" || !window.$ || !window.$.fn?.turn) return null;
  return window.$(el);
}

const TOTAL_PAGES = 11;

export const FlipbookMenu = () => {
  const flipbookRef = useRef<HTMLDivElement | null>(null);
  const [scriptsReady, setScriptsReady] = useState({ jquery: false, turn: false });
  const [page, setPage] = useState(1);
  const initialized = useRef(false);

  // Size the book to fill the viewport (minus navbar ~72px), constrained to 16:9
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function compute() {
      const vw = window.innerWidth;
      // reserve: navbar ~64px + menu header ~110px + nav controls ~56px + padding ~20px
      const reserved = 250;
      const availH = window.innerHeight - reserved;
      const availW = vw - 32;
      // book is two pages side-by-side → 16:9 total (each page is 8:9)
      const byHeight = { h: availH, w: availH * (16 / 9) };
      const byWidth  = { w: availW, h: availW * (9 / 16) };
      const { w, h } = byHeight.w <= availW ? byHeight : byWidth;
      setSize({ width: Math.floor(w), height: Math.floor(h) });
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  // Initialise turn.js once both scripts are loaded and size is known
  useEffect(() => {
    if (!scriptsReady.jquery || !scriptsReady.turn) return;
    if (!flipbookRef.current || size.width === 0) return;
    if (initialized.current) return;

    const $el = getTurn(flipbookRef.current);
    if (!$el) return;

    $el.turn({
      width: size.width,
      height: size.height,
      autoCenter: true,
      gradients: true,
      acceleration: true,
      elevation: 50,
      when: {
        turned: (_e: unknown, current: number) => setPage(current),
      },
    });

    initialized.current = true;

    return () => {
      try { $el.turn("destroy"); } catch { /* ignore */ }
      initialized.current = false;
    };
  }, [scriptsReady, size]);

  const navigate = (dir: "next" | "previous") => {
    if (!flipbookRef.current) return;
    const $el = getTurn(flipbookRef.current);
    if (!$el) return;
    $el.turn(dir);
  };

  const pageStyle = "bg-[#f5f0e8] text-[#2b1511] flex flex-col justify-center px-14 py-10";
  const h3Style   = "royal-heading text-4xl md:text-5xl text-[#3e001c] border-b border-[#a98f63]/40 pb-4 mb-8";
  const rowStyle  = "flex justify-between items-baseline text-lg md:text-2xl";

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(130deg,#10040b,#2c0816,#13060f)]">
      {/* ── Header ── */}
      <header className="flex flex-col items-center justify-center py-5 border-b border-[#a98f63]/30">
        <p className="text-xs tracking-[0.4em] uppercase text-[#a98f63]">Legends</p>
        <h1 className="royal-heading mt-1 text-3xl md:text-5xl text-[#f5f0e8] leading-tight">
          Kingdom of Brews
        </h1>
        <p className="mt-1 text-sm text-[#cbbca1] tracking-widest uppercase">Signature Menu</p>
      </header>

      {/* ── Flipbook ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-4">
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          strategy="afterInteractive"
          onLoad={() => setScriptsReady(s => ({ ...s, jquery: true }))}
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.js"
          strategy="afterInteractive"
          onLoad={() => setScriptsReady(s => ({ ...s, turn: true }))}
        />

        {size.width > 0 && (
          <div
            ref={flipbookRef}
            id="menu-flipbook"
            style={{ width: size.width, height: size.height }}
          >
            {/* Page 1 – Cover (hard) */}
            <div className="hard bg-[#1a0a12] text-[#f5f0e8] flex flex-col justify-center px-14">
              <p className="text-sm tracking-[0.4em] uppercase text-[#a98f63]">Legends</p>
              <h2 className="royal-heading mt-4 text-5xl md:text-7xl leading-none text-[#a98f63]">
                Kingdom<br />of Brews
              </h2>
              <p className="mt-6 text-xl md:text-2xl">Signature Menu</p>
              <p className="mt-3 text-base md:text-lg text-[#cbbca1]">Panathur Main Road, Bengaluru</p>
            </div>

            {/* Page 2 – back of cover (hard) */}
            <div className="hard bg-[#f5f0e8]" />

            {/* Page 3 – Small Plates */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Small Plates</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Truffle Mushroom Bites</span><span className="text-[#a98f63]">₹320</span></p>
                <p className={rowStyle}><span>House Smoked Wings</span><span className="text-[#a98f63]">₹410</span></p>
                <p className={rowStyle}><span>Loaded Hop Nachos</span><span className="text-[#a98f63]">₹360</span></p>
                <p className={rowStyle}><span>Royal Flatbread</span><span className="text-[#a98f63]">₹500</span></p>
              </div>
            </div>

            {/* Page 4 – Mains */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Mains</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Charred Lamb Platter</span><span className="text-[#a98f63]">₹640</span></p>
                <p className={rowStyle}><span>Grilled Cottage Stack</span><span className="text-[#a98f63]">₹520</span></p>
                <p className={rowStyle}><span>Fire-Roast Chicken Bowl</span><span className="text-[#a98f63]">₹560</span></p>
                <p className={rowStyle}><span>Smoked Mutton Slider</span><span className="text-[#a98f63]">₹380</span></p>
              </div>
            </div>

            {/* Page 5 – Signature Brews */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Signature Brews</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Kingdom Lager <span className="text-sm text-[#78552a]">ABV 4.8%</span></span><span className="text-[#a98f63]">₹420</span></p>
                <p className={rowStyle}><span>Crowned IPA <span className="text-sm text-[#78552a]">ABV 6.5%</span></span><span className="text-[#a98f63]">₹460</span></p>
                <p className={rowStyle}><span>Dark Knight Stout <span className="text-sm text-[#78552a]">ABV 7.2%</span></span><span className="text-[#a98f63]">₹480</span></p>
                <p className={rowStyle}><span>Wheat of Honor <span className="text-sm text-[#78552a]">ABV 4.2%</span></span><span className="text-[#a98f63]">₹410</span></p>
              </div>
            </div>

            {/* Page 6 – Seasonal Specials */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Seasonal Specials</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Mango Wheat Ale</span><span className="text-[#a98f63]">₹470</span></p>
                <p className={rowStyle}><span>Smoked Porter Reserve</span><span className="text-[#a98f63]">₹520</span></p>
                <p className={rowStyle}><span>Citrus Pale Hero</span><span className="text-[#a98f63]">₹450</span></p>
              </div>
            </div>

            {/* Page 7 – Cocktails */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Cocktails</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Royal Ember Sour</span><span className="text-[#a98f63]">₹520</span></p>
                <p className={rowStyle}><span>Panathur Spice Smash</span><span className="text-[#a98f63]">₹540</span></p>
                <p className={rowStyle}><span>Crown Citrus Fizz</span><span className="text-[#a98f63]">₹500</span></p>
              </div>
            </div>

            {/* Page 8 – Food Pairings */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Food Pairings</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Hop Burger &amp; Lager</span><span className="text-[#a98f63]">₹690</span></p>
                <p className={rowStyle}><span>Stout Brownie &amp; Stout</span><span className="text-[#a98f63]">₹620</span></p>
                <p className={rowStyle}><span>IPA Wings Combo</span><span className="text-[#a98f63]">₹740</span></p>
              </div>
            </div>

            {/* Page 9 – Desserts & Coffee */}
            <div className={pageStyle}>
              <h3 className={h3Style}>Desserts &amp; Coffee</h3>
              <div className="space-y-5">
                <p className={rowStyle}><span>Dark Cacao Crown</span><span className="text-[#a98f63]">₹310</span></p>
                <p className={rowStyle}><span>Honey Malt Pudding</span><span className="text-[#a98f63]">₹290</span></p>
                <p className={rowStyle}><span>Cold Brew Tonic</span><span className="text-[#a98f63]">₹260</span></p>
              </div>
            </div>

            {/* Page 10 – Back cover (hard) */}
            <div className="hard bg-[#1a0a12] text-[#f5f0e8] flex flex-col justify-center px-14">
              <h3 className="royal-heading text-4xl md:text-5xl text-[#a98f63]">Visit Us</h3>
              <div className="mt-8 space-y-5 text-lg md:text-xl">
                <p className="flex justify-between"><span>Hours</span><span>12 PM – 1 AM</span></p>
                <p className="flex justify-between"><span>Reservations</span><span>+91 99999 99999</span></p>
                <p className="flex justify-between"><span>Location</span><span>Panathur, Bengaluru</span></p>
              </div>
              <p className="mt-12 text-[#cbbca1] text-sm tracking-widest uppercase">Legends | Kingdom of Brews</p>
            </div>

            {/* Page 11 – hard back */}
            <div className="hard bg-[#1a0a12]" />
          </div>
        )}

        {/* ── Navigation ── */}
        <div className="mt-5 flex items-center gap-6 text-sm text-[#cbbca1]">
          <button
            onClick={() => navigate("previous")}
            className="rounded-full border border-[#a98f63]/60 px-6 py-2 hover:bg-[#a98f63] hover:text-[#1e0c0f] transition-colors"
          >
            ← Prev
          </button>
          <span className="tracking-widest">Page {page} / {TOTAL_PAGES}</span>
          <button
            onClick={() => navigate("next")}
            className="rounded-full border border-[#a98f63]/60 px-6 py-2 hover:bg-[#a98f63] hover:text-[#1e0c0f] transition-colors"
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
};
