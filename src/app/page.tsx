import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactLocation } from "@/components/home/ContactLocation";
import { FeaturedBeers } from "@/components/home/FeaturedBeers";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { MenuHighlights } from "@/components/home/MenuHighlights";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedBeers />
      <MenuHighlights />
      <GalleryPreview />
      <InstagramSection />
      <Testimonials />
      <ContactLocation />
    </>
  );
}
