"use client";

import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    $: ((selector: unknown) => { turn: (...args: unknown[]) => unknown }) & { fn?: { turn?: unknown } };
  }
}

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;
const TOTAL_PAGES = 10;

export const FlipbookMenu = () => {
  const flipbookRef = useRef<HTMLDivElement | null>(null);
  const [jqueryReady, setJqueryReady] = useState(false);
  const [turnReady, setTurnReady] = useState(false);
  const [page, setPage] = useState(1);

  const size = useMemo(() => {
    if (typeof window === "undefined") return { width: BASE_WIDTH, height: BASE_HEIGHT };
    const available = Math.max(window.innerWidth - 40, 360);
    const scale = Math.min(1, available / BASE_WIDTH);
    return {
      width: Math.round(BASE_WIDTH * scale),
      height: Math.round(BASE_HEIGHT * scale),
    };
  }, []);

  useEffect(() => {
    if (!jqueryReady || !turnReady || !flipbookRef.current) return;
    const $ = window.$;
    if (!$ || !$.fn?.turn) return;

    const node = $(flipbookRef.current);
    const turnFn = (node as unknown as { turn?: (...args: unknown[]) => unknown }).turn;
    if (!turnFn) return;

    turnFn.call(node, {
      width: size.width,
      height: size.height,
      autoCenter: true,
      gradients: true,
      acceleration: true,
      elevation: 70,
      when: {
        turned: (_event: unknown, current: number) => setPage(current),
      },
    });

    return () => {
      const destroyFn = (node as unknown as { turn?: (...args: unknown[]) => unknown }).turn;
      if (destroyFn) destroyFn.call(node, "destroy");
    };
  }, [jqueryReady, turnReady, size.height, size.width]);

  const navigate = (type: "next" | "previous") => {
    const $ = window.$;
    if (!$ || !$.fn?.turn || !flipbookRef.current) return;
    const node = $(flipbookRef.current);
    const turnFn = (node as unknown as { turn?: (...args: unknown[]) => unknown }).turn;
    if (!turnFn) return;
    turnFn.call(node, type);
  };

  return (
    <section className="px-4 py-12 md:px-6 md:py-16 bg-[linear-gradient(130deg,#10040b,#2c0816,#13060f)]">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="afterInteractive" onLoad={() => setJqueryReady(true)} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/turn.js/4.1.0/turn.min.js" strategy="afterInteractive" onLoad={() => setTurnReady(true)} />

      <div className="mx-auto max-w-[1960px]">
        <div className="text-center mb-6">
          <p className="text-xs tracking-[0.35em] text-[#cbbca1] uppercase">Legends</p>
          <h1 className="royal-heading mt-2 text-4xl text-[#f5f0e8] md:text-6xl">Kingdom of Brews</h1>
        </div>

        <div className="overflow-x-auto pb-4">
          <div
            ref={flipbookRef}
            id="menu-flipbook"
            className="mx-auto"
            style={{ width: `${size.width}px`, height: `${size.height}px` }}
          >
            <div className="hard bg-[#1a0a12] text-[#f5f0e8] p-14 flex flex-col justify-center">
              <p className="text-sm tracking-[0.35em] uppercase text-[#cbbca1]">Legends</p>
              <h2 className="royal-heading mt-4 text-7xl leading-none text-[#a98f63]">Kingdom of Brews</h2>
              <p className="mt-6 text-2xl">Signature Menu</p>
              <p className="mt-3 text-lg text-[#cbbca1]">Panathur Main Road, Bengaluru</p>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Small Plates</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Truffle Mushroom Bites</span><span>INR 320</span></p>
                <p className="flex justify-between"><span>House Smoked Wings</span><span>INR 410</span></p>
                <p className="flex justify-between"><span>Loaded Hop Nachos</span><span>INR 360</span></p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Mains</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Charred Lamb Platter</span><span>INR 640</span></p>
                <p className="flex justify-between"><span>Grilled Cottage Stack</span><span>INR 520</span></p>
                <p className="flex justify-between"><span>Fire-Roast Chicken Bowl</span><span>INR 560</span></p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Signature Brews</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Kingdom Lager (ABV 4.8%)</span><span>INR 420</span></p>
                <p className="flex justify-between"><span>Crowned IPA (ABV 6.5%)</span><span>INR 460</span></p>
                <p className="flex justify-between"><span>Dark Knight Stout (ABV 7.2%)</span><span>INR 480</span></p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Seasonal Specials</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Mango Wheat Ale</span><span>INR 470</span></p>
                <p className="flex justify-between"><span>Smoked Porter Reserve</span><span>INR 520</span></p>
                <p className="flex justify-between"><span>Citrus Pale Hero</span><span>INR 450</span></p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Cocktails</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Royal Ember Sour</span><span>INR 520</span></p>
                <p className="flex justify-between"><span>Panathur Spice Smash</span><span>INR 540</span></p>
                <p className="flex justify-between"><span>Crown Citrus Fizz</span><span>INR 500</span></p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Food Pairings</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Hop Burger & Lager</span><span>INR 690</span></p>
                <p className="flex justify-between"><span>Stout Brownie & Stout</span><span>INR 620</span></p>
                <p className="flex justify-between"><span>IPA Wings Combo</span><span>INR 740</span></p>
              </div>
            </div>

            <div className="bg-[#f5f0e8] text-[#2b1511] p-14">
              <h3 className="royal-heading text-5xl text-[#3e001c]">Desserts & Coffee</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Dark Cacao Crown</span><span>INR 310</span></p>
                <p className="flex justify-between"><span>Honey Malt Pudding</span><span>INR 290</span></p>
                <p className="flex justify-between"><span>Cold Brew Tonic</span><span>INR 260</span></p>
              </div>
            </div>

            <div className="hard bg-[#1a0a12] text-[#f5f0e8] p-14 flex flex-col justify-center">
              <h3 className="royal-heading text-6xl text-[#a98f63]">Cocktails & Dessert</h3>
              <div className="mt-10 space-y-6 text-2xl">
                <p className="flex justify-between"><span>Opening Hours</span><span>12 PM - 1 AM</span></p>
                <p className="flex justify-between"><span>Reservations</span><span>+91 99999 99999</span></p>
                <p className="flex justify-between"><span>Location</span><span>Panathur, Bengaluru</span></p>
              </div>
              <p className="mt-12 text-[#cbbca1]">Legends | Kingdom of Brews</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-[#cbbca1]">
          <button onClick={() => navigate("previous")} className="rounded-full border border-[#a98f63]/60 px-4 py-2 hover:bg-[#a98f63] hover:text-[#1e0c0f]">Prev</button>
          <span>Page {page} / {TOTAL_PAGES}</span>
          <button onClick={() => navigate("next")} className="rounded-full border border-[#a98f63]/60 px-4 py-2 hover:bg-[#a98f63] hover:text-[#1e0c0f]">Next</button>
        </div>
      </div>
    </section>
  );
};
