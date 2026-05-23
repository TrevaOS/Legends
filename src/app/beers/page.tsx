import { BeersClient } from "@/components/beers/BeersClient";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.beers;

export default function BeersPage() {
  return <BeersClient />;
}
