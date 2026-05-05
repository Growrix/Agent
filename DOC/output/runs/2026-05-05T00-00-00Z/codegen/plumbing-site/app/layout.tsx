import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ActionBar from "@/components/layout/ActionBar";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Same-day plumbing in your area",
    template: "%s | Local Plumbing",
  },
  description: "Local plumbing services with clear next steps. Call now or request a quote.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      <body className="min-h-full flex flex-col bg-[--color-background] text-[--color-text]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ActionBar />
        {/* Bottom padding spacer on mobile so content clears the sticky ActionBar */}
        <div className="h-14 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}

