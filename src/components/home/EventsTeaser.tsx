import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";

export const EventsTeaser = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#140810] relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/assets/patterns/royal-pattern.png')", backgroundSize: "300px" }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em] mb-4">Upcoming Event</p>
        <h2 className="royal-heading text-5xl md:text-6xl">Grand Launch</h2>
        <p className="royal-heading text-2xl text-[#a98f63] mt-3">Legends Microbrewery</p>
        <div className="mt-8 ornamental-border rounded-2xl p-8 bg-[#200b14]/60 backdrop-blur-sm inline-block w-full max-w-xl mx-auto">
          <p className="text-[#cbbca1] text-sm uppercase tracking-widest">An evening of</p>
          <p className="royal-heading text-xl text-[#f5f0e8] mt-2">
            Passion · Craftsmanship · Timeless Grandeur
          </p>
          <div className="h-px bg-[#a98f63]/40 my-5" />
          <p className="royal-heading text-3xl text-[#a98f63]">17 April 2026</p>
          <p className="text-[#e8e0d0] mt-2 text-lg">7:00 PM Onwards</p>
          <p className="text-[#cbbca1] mt-1 text-sm">Signature brews. Royal feasts. A night to remember.</p>
        </div>
        <div className="mt-8">
          <RoyalButton href="/events">Event Details</RoyalButton>
        </div>
      </div>
    </section>
  </AnimatedSection>
);
