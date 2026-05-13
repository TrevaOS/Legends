"use client";

import type { Metadata } from "next";
import { useEffect } from "react";

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
  useEffect(() => {
    window.location.href = "https://widget.reservego.co/reserveOutlets/69e43f6414d072543704f2f8?source=9";
  }, []);

  return null;
}
