import { ReservationsClient } from "@/components/reservations/ReservationsClient";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.reservations;

export default function ReservationsPage() {
  return <ReservationsClient />;
}
