"use client";

import { useEffect, useState } from "react";

export function OffersClient() {
  const [seconds, setSeconds] = useState(3600);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="royal-heading text-6xl">Royal Rewards</h1>
      <section className="mt-8 ornamental-border rounded-2xl p-8 bg-[#1a0010]/80"><p className="royal-heading text-3xl text-[#a98f63]">Happy Hour Throne</p><p className="mt-3">4 PM - 7 PM | Countdown {hh}:{mm}:{ss}</p></section>
      <section className="grid md:grid-cols-3 gap-5 mt-8">{["2+1 Craft Pour","Hero Platter Combo","Weekend Crown Feast"].map((deal)=><article key={deal} className="ornamental-border rounded-2xl p-6 bg-[#2c0e1b]">{deal}</article>)}</section>
      <section className="grid md:grid-cols-3 gap-5 mt-8">{["25% Off Stouts","Ladies Night Offer","Corporate Brew Deal"].map((offer)=><article key={offer} className="[perspective:1000px] h-44"><div className="relative h-full w-full rounded-2xl border border-[#a98f63]/45 bg-gradient-to-br from-[#83043b] to-[#a98f63] p-5 text-[#1e0b0a]">{offer}</div></article>)}</section>
    </div>
  );
}
