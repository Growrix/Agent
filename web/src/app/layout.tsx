import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { seo, brand } from "@/lib/content";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexroofingco.com"),
  title: {
    default: seo.home_title,
    template: `%s ${seo.default_title_suffix}`,
  },
  description: seo.home_description,
  applicationName: seo.site_name,
  authors: [{ name: brand.name }],
  openGraph: {
    type: "website",
    siteName: seo.site_name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t) { document.documentElement.setAttribute('data-theme', t); }
                else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch(e){}
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        {/* Skip link — first focusable element on every page */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
