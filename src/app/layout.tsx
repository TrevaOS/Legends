import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BookNowButton } from "@/components/BookNowButton";
import { siteMetadata } from "@/lib/seo/metadata";
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

export const metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LEGENDS Microbrewery",
    image: "https://legendsbrewery.in/og-image.jpg",
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
    url: "https://legendsbrewery.in",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LEGENDS Microbrewery",
    url: "https://legendsbrewery.in/",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LEGENDS Microbrewery",
    url: "https://legendsbrewery.in/",
    logo: "https://legendsbrewery.in/favicon-192.png",
    sameAs: [
      "https://www.instagram.com/legends.microbrewery",
      "https://www.facebook.com/legends.microbrewery",
    ],
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/images/events/image.webp" type="image/webp" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTCDTMDG');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Analytics 4 (GA4) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FMPTPCZMW9"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-FMPTPCZMW9', {
  'page_path': window.location.pathname,
  'anonymize_ip': true,
  'allow_google_signals': true,
  'allow_ad_personalization_signals': true
});`,
          }}
        />
        {/* End Google Analytics 4 */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTCDTMDG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        <BookNowButton />
      </body>
    </html>
  );
}
