import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Recognition | LEGENDS Microbrewery - Bengaluru",
  description:
    "LEGENDS Microbrewery's Zen Empire Japanese Lager wins Most Innovative Beer on Tap. Celebrating excellence in craft brewing.",
};

export default function AwardsPage() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 88px)", backgroundColor: "#000000" }}
    >
      {/* Background image — MOBILE only, full screen */}
      <div className="md:hidden absolute inset-0">
        <img
          src="/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 20%", display: "block" }}
        />
      </div>

      {/* Background image — desktop only, starts at card right edge (~700px from left) */}
      <div
        className="hidden md:block absolute top-0 h-full"
        style={{ left: "700px", right: 0 }}
      >
        <img
          src="/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ objectPosition: "center center", display: "block" }}
        />
        {/* LEFT fade — image burns into black toward the card edge */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to left, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0.90) 84%, #000 100%)",
        }} />
        {/* Amber ember — left burn zone only */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to left, transparent 50%, rgba(130,55,5,0.50) 68%, rgba(170,75,10,0.35) 80%, transparent 92%)",
        }} />
        {/* RIGHT fade — image burns into black at right edge */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(0,0,0,0) 65%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.90) 92%, #000 100%)",
        }} />
        {/* Amber ember — right burn zone */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, transparent 55%, rgba(130,55,5,0.45) 72%, rgba(170,75,10,0.30) 83%, transparent 92%)",
        }} />
        {/* Top & bottom vignette */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 14%, transparent 86%, rgba(0,0,0,0.55) 100%)",
        }} />
      </div>

      {/* ── DESKTOP layout ── */}
      <div
        className="absolute inset-0 hidden md:flex items-center justify-center"
        style={{ zIndex: 10, padding: "0 10%" }}
      >
        <div className="flex flex-row items-center gap-14 w-full">

          {/* Text — left side */}
          <div className="flex flex-col gap-4 shrink-0" style={{ width: "340px" }}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#a98f63]">
              Accolades &amp; Recognition
            </p>
            <h1 className="royal-heading text-4xl lg:text-5xl text-[#f5f0e8] leading-tight">
              Awards &amp;<br />Honours
            </h1>
            <div className="w-14 h-px bg-gradient-to-r from-[#a98f63] to-transparent" />
            <div className="inline-flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#a98f63] to-[#ccad44] rounded-full" />
              <span className="text-[#ccad44] text-[10px] font-semibold uppercase tracking-[0.35em]">First Award Win</span>
            </div>
            <div>
              <p className="text-[#a98f63] text-[11px] uppercase tracking-[0.4em] mb-1">Zen Empire · Japanese Lager</p>
              <h2 className="royal-heading text-2xl lg:text-3xl text-[#f5f0e8] leading-snug">Most Innovative<br />Beer on Tap</h2>
            </div>
            <div className="w-10 h-px bg-gradient-to-r from-[#a98f63] to-transparent" />
            <p className="text-[#c4b49a] text-sm leading-relaxed">
              Legends Microbrewery's Zen Empire Japanese Lager has been honoured
              with the award for Most Innovative Beer on Tap, a testament to our
              relentless pursuit of extraordinary craft brewing.
            </p>
            <div className="w-10 h-px bg-gradient-to-r from-[#a98f63] to-transparent" />
            <p className="text-[#a98f63]/60 text-xs italic">Legends Microbrewery, Bangalore</p>
          </div>

          {/* Image card — right of text, background image starts beyond this */}
          <div className="shrink-0">
            <div
              className="rounded-2xl overflow-hidden border border-[#a98f63]/40 shadow-[0_0_40px_rgba(169,143,99,0.25),0_12px_40px_rgba(0,0,0,0.9)]"
              style={{ width: "300px", height: "420px" }}
            >
              <img
                src="/assets/images/Awards/WhatsApp Image 2026-05-30 at 12.20.59 AM.webp"
                alt="Most Innovative Beer on Tap Award"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── MOBILE layout — text pinned to bottom ── */}
      <div
        className="absolute inset-0 flex md:hidden flex-col justify-end"
        style={{ zIndex: 10 }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 38%, rgba(0,0,0,0.65) 58%, rgba(0,0,0,0.95) 78%, #000 100%)",
          zIndex: 0,
        }} />
        <div className="relative px-6 pb-8" style={{ zIndex: 1 }}>
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#a98f63] mb-2">Accolades &amp; Recognition</p>
          <h1 className="royal-heading text-3xl text-[#f5f0e8] leading-tight mb-2">Awards &amp; Honours</h1>
          <div className="w-10 h-px bg-gradient-to-r from-[#a98f63] to-transparent mb-3" />
          <p className="text-[#a98f63] text-[10px] uppercase tracking-[0.4em] mb-1">Zen Empire · Japanese Lager</p>
          <h2 className="royal-heading text-xl text-[#f5f0e8] leading-snug mb-3">Most Innovative Beer on Tap</h2>
          <p className="text-[#c4b49a] text-xs leading-relaxed mb-3">
            Legends Microbrewery's Zen Empire Japanese Lager has been honoured with the award for Most Innovative Beer on Tap.
          </p>
          <p className="text-[#a98f63]/60 text-[10px] italic">Legends Microbrewery, Bangalore</p>
        </div>
      </div>

    </div>
  );
}
