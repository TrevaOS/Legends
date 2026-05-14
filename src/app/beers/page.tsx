import type { Metadata } from "next";
import { BeersClient } from "@/components/beers/BeersClient";

export const metadata: Metadata = {
  title: "Our Beers | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "Explore our premium craft beers at LEGENDS Microbrewery. Brewed with meticulous care, each beer tells a story of quality and innovation.",
  keywords:
    "craft beers bengaluru, microbrewery beers, beer selection bangalore, legends craft beer, brewed beer india",
  openGraph: {
    title: "Our Beers | LEGENDS Microbrewery",
    description: "Discover our premium craft beer collection brewed for heroes.",
    url: "https://legendsbrewery.in/beers",
  },
};

export default function BeersPage() {
  return <BeersClient />;
}
