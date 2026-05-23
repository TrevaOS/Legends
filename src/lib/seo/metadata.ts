import type { Metadata } from "next";

const SITE_URL = "https://legendsbrewery.in";
const SITE_NAME = "LEGENDS Microbrewery";
const BRAND_TITLE = "LEGENDS Microbrewery - Bengaluru";
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

const sharedTwitter: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  title: BRAND_TITLE,
  description: "Craft beers, gourmet food, and royal ambiance at LEGENDS Microbrewery.",
  images: [OG_IMAGE_URL],
};

const sharedRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
};

type RouteSeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  path: `/${string}`;
};

function buildRouteMetadata(config: RouteSeoConfig): Metadata {
  const pageUrl = `${SITE_URL}${config.path}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: config.path },
    openGraph: {
      title: config.ogTitle,
      description: config.ogDescription,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: sharedTwitter,
    robots: sharedRobots,
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: BRAND_TITLE,
  description:
    "Welcome to LEGENDS Microbrewery, Bengaluru. Premium craft beers, gourmet food, and royal ambiance. Open 12 PM - 1 AM daily at Balagere Road, Varthur.",
  keywords: [
    "microbrewery bangalore",
    "craft beer bengaluru",
    "brewery near me",
    "legends microbrewery",
    "varthur brewery",
    "craft beer restaurant bangalore",
  ],
  authors: [{ name: SITE_NAME }],
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: BRAND_TITLE,
    description:
      "Experience craft beers brewed with meticulous care at LEGENDS Microbrewery. Reservation Booking available.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: sharedTwitter,
  robots: sharedRobots,
};

export const pageMetadata = {
  about: buildRouteMetadata({
    title: "About LEGENDS Microbrewery - Bengaluru",
    description:
      "Discover the story behind LEGENDS Microbrewery. Crafted with passion, built on tradition, and rooted in excellence in Bengaluru.",
    keywords: [
      "about legends brewery",
      "craft beer story",
      "microbrewery bangalore history",
      "kingdom of brews",
    ],
    ogTitle: "About LEGENDS Microbrewery - Bengaluru",
    ogDescription: "Learn about our passion for craft beer and hospitality.",
    path: "/about",
  }),
  beers: buildRouteMetadata({
    title: "Our Beers | LEGENDS Microbrewery - Bengaluru",
    description:
      "Explore our premium craft beers at LEGENDS Microbrewery. Brewed with meticulous care, each beer tells a story of quality and innovation.",
    keywords: [
      "craft beers bengaluru",
      "microbrewery beers",
      "beer selection bangalore",
      "legends craft beer",
      "brewed beer india",
    ],
    ogTitle: "Our Beers | LEGENDS Microbrewery",
    ogDescription: "Discover our premium craft beer collection brewed for heroes.",
    path: "/beers",
  }),
  contact: buildRouteMetadata({
    title: "Contact Us | LEGENDS Microbrewery - Bengaluru",
    description:
      "Get in touch with LEGENDS Microbrewery. Contact us for reservations, events, or inquiries. Located in Varthur, Bengaluru.",
    keywords: [
      "contact brewery bengaluru",
      "legends microbrewery contact",
      "reservation bengaluru",
      "brewery inquiry",
    ],
    ogTitle: "Contact Us | LEGENDS Microbrewery",
    ogDescription: "Contact LEGENDS Microbrewery for reservations and inquiries.",
    path: "/contact",
  }),
  corporateBooking: buildRouteMetadata({
    title: "Corporate Booking | LEGENDS Microbrewery - Bengaluru",
    description:
      "Book LEGENDS Microbrewery for corporate events. Premium venue for team building, conferences, and corporate celebrations in Bengaluru.",
    keywords: [
      "corporate event venue bengaluru",
      "team building brewery",
      "corporate booking bangalore",
      "event space varthur",
    ],
    ogTitle: "Corporate Booking | LEGENDS Microbrewery",
    ogDescription: "Host your corporate event at LEGENDS Microbrewery.",
    path: "/corporate-booking",
  }),
  events: buildRouteMetadata({
    title: "Events | LEGENDS Microbrewery - Bengaluru",
    description:
      "Join us at LEGENDS Microbrewery for our Grand Opening and special events. Experience craft beer, gourmet food, and unforgettable moments.",
    keywords: [
      "brewery events bangalore",
      "grand opening party",
      "craft beer events bengaluru",
      "microbrewery bangalore events",
    ],
    ogTitle: "Events | LEGENDS Microbrewery - Bengaluru",
    ogDescription: "Join us for our Grand Opening and special events.",
    path: "/events",
  }),
  gallery: buildRouteMetadata({
    title: "Gallery | LEGENDS Microbrewery - Bengaluru",
    description:
      "View the ambiance and food at LEGENDS Microbrewery. Explore our premium brewery, dining spaces, and culinary creations in Bengaluru.",
    keywords: [
      "brewery gallery",
      "microbrewery photos",
      "restaurant ambiance",
      "bengaluru restaurant gallery",
      "craft beer venue",
    ],
    ogTitle: "Gallery | LEGENDS Microbrewery",
    ogDescription: "Explore the ambiance and cuisine at LEGENDS Microbrewery.",
    path: "/gallery",
  }),
  menu: buildRouteMetadata({
    title: "Menu | LEGENDS Microbrewery - Bengaluru",
    description:
      "Browse the menu of LEGENDS Microbrewery. Craft beers paired with gourmet food, signature dishes, and culinary experiences in Bengaluru.",
    keywords: [
      "restaurant menu bengaluru",
      "microbrewery menu",
      "craft beer menu",
      "gourmet food bangalore",
      "brewery restaurant menu",
    ],
    ogTitle: "Menu | LEGENDS Microbrewery",
    ogDescription: "Explore our craft beer selection and gourmet food menu.",
    path: "/menu",
  }),
  offers: buildRouteMetadata({
    title: "Offers | LEGENDS Microbrewery - Bengaluru",
    description:
      "Exclusive offers and deals at LEGENDS Microbrewery. Happy hour, special promotions, and royal rewards for our valued guests.",
    keywords: [
      "brewery offers bengaluru",
      "happy hour deals",
      "craft beer promotions",
      "microbrewery discounts",
    ],
    ogTitle: "Offers | LEGENDS Microbrewery",
    ogDescription: "Exclusive offers and deals at LEGENDS Microbrewery.",
    path: "/offers",
  }),
  reservations: buildRouteMetadata({
    title: "Book a Table | LEGENDS Microbrewery - Bengaluru",
    description:
      "Reserve your table at LEGENDS Microbrewery. Book online for a premium dining experience with craft beers and gourmet food in Bengaluru.",
    keywords: [
      "book table bengaluru",
      "reserve restaurant",
      "microbrewery reservation",
      "legends booking",
    ],
    ogTitle: "Book a Table | LEGENDS Microbrewery",
    ogDescription: "Reserve your table at LEGENDS Microbrewery.",
    path: "/reservations",
  }),
} as const;
