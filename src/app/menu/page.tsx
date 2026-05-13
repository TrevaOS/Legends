"use client";

import type { Metadata } from "next";
import { FlipbookMenu } from "@/components/menu/FlipbookMenu";
import { StrategicMenuView } from "@/components/menu/StrategicMenuView";

export const metadata: Metadata = {
  title: "Menu | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "Browse the menu of LEGENDS Microbrewery. Craft beers paired with gourmet food, signature dishes, and culinary experiences in Bengaluru.",
  keywords:
    "restaurant menu bengaluru, microbrewery menu, craft beer menu, gourmet food bangalore, brewery restaurant menu",
  openGraph: {
    title: "Menu | LEGENDS Microbrewery",
    description: "Explore our craft beer selection and gourmet food menu.",
    url: "https://legendsbrewery.in/menu",
  },
};

export default function MenuPage() {
  return (
    <>
      {/* Desktop - Flipbook View */}
      <div className="hidden md:block">
        <FlipbookMenu />
      </div>

      {/* Mobile - Strategic View with Beer Images */}
      <div className="md:hidden">
        <StrategicMenuView />
      </div>
    </>
  );
}
