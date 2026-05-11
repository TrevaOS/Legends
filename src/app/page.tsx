import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactLocation } from "@/components/home/ContactLocation";
import { FeaturedBeers } from "@/components/home/FeaturedBeers";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { InstagramSection } from "@/components/home/InstagramSection";
import { MenuHighlights } from "@/components/home/MenuHighlights";
import { Testimonials } from "@/components/home/Testimonials";
import { NotificationMarquee } from "@/components/ui/NotificationMarquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NotificationMarquee
        notifications={[
          "21+ only for alcohol service",
          '⚠️ Entry not allowed with slippers',
          '⚠️ No outside food allowed',
          '📋 Reservations are first come, first served.',
          '⏱️ Full house = Minimum 30 mins wait.',
        ]}
        bgColor="#a98f63"
        textColor="#110f0f"
        speed="normal"
      />
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
