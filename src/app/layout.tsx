import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LaunchPopup } from "@/components/ui/LaunchPopup";
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
  title: "Legends | Kingdom of Brews - Bengaluru",
  description:
    "Welcome to Legends, Bengaluru. Craft beers brewed for heroes. Explore our beer menu and experience the Kingdom of Brews.",
  keywords:
    "microbrewery bangalore, craft beer bengaluru, legends brewery, kingdom of brews",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LaunchPopup />
      </body>
    </html>
  );
}
