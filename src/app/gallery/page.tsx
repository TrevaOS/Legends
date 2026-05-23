import { GalleryClient } from "@/components/gallery/GalleryClient";

import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.gallery;

export default function GalleryPage() {
  return <GalleryClient />;
}
