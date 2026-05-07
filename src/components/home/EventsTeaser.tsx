import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RoyalButton } from "@/components/ui/RoyalButton";

export const EventsTeaser = () => (
  <AnimatedSection>
    <section className="px-6 py-24 bg-[#140810] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,143,99,0.14),transparent_34%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em] mb-4">Events</p>
          <h2 className="royal-heading text-5xl md:text-6xl">Mother&apos;s Day Celebration</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <RoyalButton href="/events">View Event Details</RoyalButton>
            <RoyalButton href="https://widget.reservego.co/reserveOutlets/69e43f6414d072543704f2f8?source=9" variant="outline" target="_blank" rel="noreferrer">
              Reserve
            </RoyalButton>
          </div>
          <div className="mt-8 ornamental-border rounded-2xl p-6 bg-[#200b14]/60 backdrop-blur-sm w-full max-w-xl">
            <p className="text-[#cbbca1] text-sm uppercase tracking-widest">Mother&apos;s Day Event Details</p>
            <p className="royal-heading text-xl text-[#f5f0e8] mt-3">Sunday, May 10th</p>
            <p className="text-[#e8e0d0] mt-2">Grand Cake Cutting</p>
            <p className="text-[#e8e0d0]">Live Band | Fun Activities</p>
            <p className="text-[#e8e0d0]">12 PM - 4 PM</p>
            <p className="text-[#f2d9a8] font-semibold mt-2">Rs 1999 Fully Redeemable</p>
            <p className="text-[#e8e0d0]">Kids below 12 enter free</p>
            <p className="text-[#e8e0d0]">1st come first service</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[28px] border border-[#a98f63]/35 bg-[#200b14]/70 shadow-[0_20px_50px_rgba(0,0,0,0.25)] max-w-md mx-auto">
            <img
              src="/assets/images/events/Mothers Day.jpeg"
              alt="LEGENDS Mother's Day event creative"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </AnimatedSection>
);
