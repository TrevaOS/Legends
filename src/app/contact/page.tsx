import { ContactClient } from "@/components/contact/ContactClient";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.contact;

export default function ContactPage() {
  return <ContactClient />;
}
