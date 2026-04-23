import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "LEGENDS | Kingdom of Brews - Bengaluru",
  description:
    "Welcome to LEGENDS Microbrewery, Bengaluru. Premium craft beers, gourmet food, and royal ambiance. Open 12 PM - 1 AM daily at Balagere Road, Varthur.",
  keywords:
    "microbrewery bangalore, craft beer bengaluru, brewery near me, legends microbrewery, varthur brewery, craft beer restaurant bangalore",
  authors: [{ name: "LEGENDS Microbrewery" }],
  openGraph: {
    title: "LEGENDS | Kingdom of Brews - Bengaluru's Premier Microbrewery",
    description:
      "Experience craft beers brewed with meticulous care at LEGENDS Microbrewery. Reservation Booking available.",
    url: "https://legensmicrobrewery.com",
    siteName: "LEGENDS Microbrewery",
    images: [
      {
        url: "https://legensmicrobrewery.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEGENDS Microbrewery - Kingdom of Brews",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEGENDS | Kingdom of Brews - Bengaluru",
    description:
      "Craft beers, gourmet food, and royal ambiance at LEGENDS Microbrewery.",
    images: ["https://legensmicrobrewery.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LEGENDS Microbrewery",
    image: "https://legensmicrobrewery.com/og-image.jpg",
    description:
      "LEGENDS Microbrewery - Bengaluru's premier craft brewery with gourmet food and royal ambiance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Balagere Road, Varthur",
      addressLocality: "Bengaluru",
      postalCode: "560087",
      addressCountry: "IN",
      addressRegion: "Karnataka",
    },
    telephone: "+91-XXXXXXXXXX",
    url: "https://legensmicrobrewery.com",
    priceRange: "₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "12:00",
        closes: "01:00",
      },
    ],
    servesCuisine: ["Indian", "Continental"],
    sameAs: [
      "https://www.instagram.com/legends.microbrewery",
      "https://www.facebook.com/legends.microbrewery",
    ],
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://legensmicrobrewery.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1343335444390830');
fbq('track', 'PageView');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1343335444390830&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
