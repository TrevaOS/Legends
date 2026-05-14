import type { Metadata } from "next";
import { OffersClient } from "@/components/offers/OffersClient";

export const metadata: Metadata = {
  title: "Offers | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "Exclusive offers and deals at LEGENDS Microbrewery. Happy hour, special promotions, and royal rewards for our valued guests.",
  keywords:
    "brewery offers bengaluru, happy hour deals, craft beer promotions, microbrewery discounts",
  openGraph: {
    title: "Offers | LEGENDS Microbrewery",
    description: "Exclusive offers and deals at LEGENDS Microbrewery.",
    url: "https://legendsbrewery.in/offers",
  },
};

export default function OffersPage() {
  return <OffersClient />;
}
