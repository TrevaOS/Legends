import type { Metadata } from "next";
import { ReservationsClient } from "@/components/reservations/ReservationsClient";

export const metadata: Metadata = {
  title: "Book a Table | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "Reserve your table at LEGENDS Microbrewery. Book online for a premium dining experience with craft beers and gourmet food in Bengaluru.",
  keywords:
    "book table bengaluru, reserve restaurant, microbrewery reservation, legends booking",
  openGraph: {
    title: "Book a Table | LEGENDS Microbrewery",
    description: "Reserve your table at LEGENDS Microbrewery.",
    url: "https://legendsbrewery.in/reservations",
  },
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
