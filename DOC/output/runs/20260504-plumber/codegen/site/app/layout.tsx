import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBanner } from "@/components/layout/AnnouncementBanner";
import { FloatingContactDock } from "@/components/global/FloatingContactDock";
import { CookieBanner } from "@/components/global/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AusPlumb Pro | Same-Day Plumbing Across Australia",
  description:
    "Licensed and insured plumbing services with 24/7 emergency response, WhatsApp support, and AI chat assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <AnnouncementBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactDock />
        <CookieBanner />
      </body>
    </html>
  );
}
