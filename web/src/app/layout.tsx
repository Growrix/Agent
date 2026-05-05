import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { HeaderShell } from "@/components/layout/HeaderShell";
import { FooterTrust } from "@/components/layout/FooterTrust";
import { MobileSupportDock } from "@/components/layout/MobileSupportDock";
import { SupportFabCluster } from "@/components/support/SupportFabCluster";

const fontDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontBody = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solar Installation Service Company",
  description: "Modern solar installation frontend with dynamic content and conversion-focused experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${fontDisplay.variable} ${fontBody.variable}`} lang="en-US">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <HeaderShell />
        <main id="main-content">{children}</main>
        <FooterTrust />
        <SupportFabCluster />
        <MobileSupportDock />
      </body>
    </html>
  );
}
