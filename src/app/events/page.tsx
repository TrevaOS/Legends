import { featuredAmbience } from "@/lib/data";

export default function EventsPage() {
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">
      <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">Mark Your Calendar</p>
      <h1 className="royal-heading text-6xl mt-3">Grand Launch</h1>

      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden border border-[#a98f63]/40 h-96">
          <img
            src={featuredAmbience[0]}
            alt="Legends Microbrewery"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13080a]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="royal-heading text-3xl text-[#a98f63]">Legends Microbrewery</p>
            <p className="text-[#e8e0d0] mt-1">Kingdom of Brews</p>
          </div>
        </div>

        <div className="ornamental-border rounded-2xl p-8 bg-[#1a0010]/80">
          <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">Indulge in Grandeur</p>
          <h2 className="royal-heading text-4xl mt-4 text-[#f5f0e8]">
            The Grand Launch of<br />
            <span className="text-[#a98f63]">Legends Microbrewery</span>
          </h2>
          <p className="mt-4 text-[#cbbca1] leading-relaxed">
            A celebration of passion, craftsmanship, and timeless grandeur.
            Signature brews, royal feasts. A night to remember.
          </p>

          <div className="h-px bg-[#a98f63]/40 my-6" />

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <div>
                <p className="text-xs text-[#cbbca1] uppercase tracking-widest">Date</p>
                <p className="royal-heading text-2xl text-[#f5f0e8]">16 April 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a98f63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
              <div>
                <p className="text-xs text-[#cbbca1] uppercase tracking-widest">Time</p>
                <p className="royal-heading text-2xl text-[#f5f0e8]">7:00 PM Onwards</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#a98f63]/40 my-6" />

          <div className="grid grid-cols-3 gap-3 text-center">
            {["Signature Brews", "Royal Feasts", "Live Experience"].map((item) => (
              <div key={item} className="rounded-xl border border-[#a98f63]/30 p-3">
                <p className="text-xs text-[#cbbca1]">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="https://www.instagram.com/legendsbreweryblr/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#a98f63] text-[#200b0f] font-semibold px-6 py-3 hover:bg-[#cbbca1] transition-colors"
          >
            Follow for Updates
          </a>
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-5">
        {[featuredAmbience[1], featuredAmbience[2], featuredAmbience[3]].map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-[#a98f63]/25 h-52">
            <img src={img} alt="Legends venue" className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
