import type { Metadata } from "next";
import { featuredAmbience, launchEventDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events | LEGENDS Microbrewery - Grand Opening & Special Events",
  description:
    "Join us at LEGENDS Microbrewery for our Grand Opening and special events. Experience craft beer, gourmet food, and unforgettable moments.",
  keywords:
    "brewery events bangalore, grand opening party, craft beer events bengaluru, microbrewery bangalore events",
  openGraph: {
    title: "Events | LEGENDS Microbrewery",
    description: "Join us for our Grand Opening and special events.",
    url: "https://legensmicrobrewery.com/events",
  },
};

export default function EventsPage() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">Our Grand Opening</p>
      <h1 className="royal-heading text-5xl mt-2 md:text-6xl">Grand Opening</h1>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden border border-[#a98f63]/40 h-72 lg:h-80">
          <img
            src={featuredAmbience[0]}
            alt="LEGENDS Microbrewery"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="royal-heading text-2xl text-[#a98f63]">LEGENDS Microbrewery</p>
            <p className="text-[#e8e0d0] text-sm mt-0.5">Kingdom of Brews</p>
          </div>
        </div>

        {/* Details */}
        <div className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/80 space-y-5">
          <div>
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">A Grand Celebration</p>
            <h2 className="royal-heading text-2xl mt-2 text-[#f5f0e8] md:text-3xl">
              The Grand Opening of<br />
              <span className="text-[#a98f63]">LEGENDS Microbrewery</span>
            </h2>
            <p className="mt-3 text-sm text-[#cbbca1] leading-relaxed">
              We celebrated passion, craftsmanship, and timeless grandeur with signature brews and royal feasts—an unforgettable night.
            </p>
          </div>

          <div className="h-px bg-[#a98f63]/30" />

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <div>
                <p className="text-[10px] text-[#cbbca1] uppercase tracking-widest">Date</p>
                <p className="royal-heading text-xl text-[#f5f0e8]">{launchEventDetails.dateLabel}</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#a98f63]/30" />

          <div className="grid grid-cols-2 gap-2 text-center">
            {["Signature Brews", "Royal Feasts"].map((item) => (
              <div key={item} className="rounded-xl border border-[#a98f63]/30 py-2 px-1">
                <p className="text-xs text-[#cbbca1]">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/legendsbreweryblr/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#a98f63] text-[#200b0f] font-semibold px-5 py-2.5 text-sm hover:bg-[#cbbca1] transition-colors"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {[featuredAmbience[1], featuredAmbience[2], featuredAmbience[3]].map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-[#a98f63]/25 h-44">
            <img src={img} alt="Legends venue" className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
