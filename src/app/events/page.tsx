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
