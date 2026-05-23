import { CorporateBookingClient } from "@/components/corporate-booking/CorporateBookingClient";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.corporateBooking;

export default function CorporateBookingPage() {
  return <CorporateBookingClient />;
}
