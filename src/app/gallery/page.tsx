import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "View the ambiance and food at LEGENDS Microbrewery. Explore our premium brewery, dining spaces, and culinary creations in Bengaluru.",
  keywords:
    "brewery gallery, microbrewery photos, restaurant ambiance, bengaluru restaurant gallery, craft beer venue",
  openGraph: {
    title: "Gallery | LEGENDS Microbrewery",
    description: "Explore the ambiance and cuisine at LEGENDS Microbrewery.",
    url: "https://legendsbrewery.in/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
