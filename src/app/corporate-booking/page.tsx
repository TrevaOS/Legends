import type { Metadata } from "next";
import { CorporateBookingClient } from "@/components/corporate-booking/CorporateBookingClient";

export const metadata: Metadata = {
  title: "Corporate Booking | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "Book LEGENDS Microbrewery for corporate events. Premium venue for team building, conferences, and corporate celebrations in Bengaluru.",
  keywords:
    "corporate event venue bengaluru, team building brewery, corporate booking bangalore, event space varthur",
  openGraph: {
    title: "Corporate Booking | LEGENDS Microbrewery",
    description: "Host your corporate event at LEGENDS Microbrewery.",
    url: "https://legendsbrewery.in/corporate-booking",
  },
};

export default function CorporateBookingPage() {
  return <CorporateBookingClient />;
}
