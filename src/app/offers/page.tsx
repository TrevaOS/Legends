import { OffersClient } from "@/components/offers/OffersClient";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.offers;

export default function OffersPage() {
  return <OffersClient />;
}
