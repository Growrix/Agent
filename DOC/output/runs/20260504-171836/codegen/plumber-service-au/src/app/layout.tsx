import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { FloatingContactRail } from "@/components/contact/floating-contact-rail";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { validateEnv } from "@/env";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plumber AU | Same-Day Plumbing",
  description:
    "Modern Australia-focused plumbing website with fast call, WhatsApp, and AI assistant contact options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnv();

  return (
    <html lang="en-AU" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <FloatingContactRail />
      </body>
    </html>
  );
}
