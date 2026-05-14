import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | LEGENDS Microbrewery | Kingdom of Brews - Bengaluru",
  description:
    "Get in touch with LEGENDS Microbrewery. Contact us for reservations, events, or inquiries. Located in Varthur, Bengaluru.",
  keywords:
    "contact brewery bengaluru, legends microbrewery contact, reservation bengaluru, brewery inquiry",
  openGraph: {
    title: "Contact Us | LEGENDS Microbrewery",
    description: "Contact LEGENDS Microbrewery for reservations and inquiries.",
    url: "https://legendsbrewery.in/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
