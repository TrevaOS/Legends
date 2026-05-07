import type { Metadata } from "next";
import { venueDetails } from "@/lib/data";

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
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">Events at LEGENDS</p>
      <h1 className="royal-heading text-5xl mt-2 md:text-6xl">Celebrate With Us</h1>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start">
        <div className="relative rounded-2xl overflow-hidden border border-[#a98f63]/40 bg-[#18070e] w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] mx-auto">
          <img
            src="/assets/images/events/Mothers Day.jpeg"
            alt="LEGENDS Mother's Day event creative"
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/80 space-y-5">
          <div>
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">Featured Celebration</p>
            <h2 className="royal-heading text-2xl mt-2 text-[#f5f0e8] md:text-3xl">
              Mother&apos;s Day at<br />
              <span className="text-[#a98f63]">LEGENDS Microbrewery</span>
            </h2>
            <p className="mt-3 text-sm text-[#cbbca1] leading-relaxed">Sunday, May 10th</p>
          </div>

          <div className="h-px bg-[#a98f63]/30" />

          <div className="space-y-2 text-sm text-[#e8e0d0]">
            <p>Grand Cake Cutting</p>
            <p>Live Band | Fun Activities</p>
            <p>12 PM - 4 PM</p>
            <p className="text-[#f2d9a8] font-semibold">Rs 1999 Fully Redeemable</p>
            <p>Kids below 12 enter free</p>
            <p>1st come first service</p>
          </div>

          <a
            href="https://widget.reservego.co/reserveOutlets/69e43f6414d072543704f2f8?source=9"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#a98f63] text-[#200b0f] font-semibold px-5 py-2.5 text-sm hover:bg-[#cbbca1] transition-colors"
          >
            Reserve
          </a>
        </div>
      </div>

      <div className="mt-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <article className="ornamental-border rounded-2xl p-6 bg-[#1a0010]/80 space-y-5">
          <div>
            <p className="text-xs text-[#a98f63] uppercase tracking-[0.4em]">Find Us Easily</p>
            <h2 className="royal-heading text-2xl mt-2 text-[#f5f0e8] md:text-3xl">Event Location</h2>
            <p className="mt-3 text-sm text-[#cbbca1] leading-relaxed">
              Planning to join us? Use the map to reach LEGENDS quickly and reserve your table before arriving.
            </p>
          </div>

          <div className="space-y-3 text-sm text-[#e8e0d0]">
            <p>{venueDetails.address}</p>
            <p>{venueDetails.hours}</p>
            <p>{venueDetails.phone}</p>
          </div>
        </article>

        <iframe
          title="Legends events map"
          className="w-full min-h-[360px] rounded-2xl border border-[#a98f63]/30"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={venueDetails.mapEmbedSrc}
        />
      </div>
    </div>
  );
}
