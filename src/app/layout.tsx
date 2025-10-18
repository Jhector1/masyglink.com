// =============================================
// 1) app/layout.tsx — production‑grade metadata + head tags
// =============================================
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// —— Prefer env for portability across preview/production
const SITE_URL =
  process.env.NEXT_PUBLIC_CLIENT_URL || "https://www.masyglink.com";
const BRAND = "Masyg Extractor";
const DEFAULT_TITLE = "Home";
const TITLE_TEMPLATE = `%s | ${BRAND}`;
const OG_IMAGE = `${SITE_URL}/images/SEO2.png`;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DESCRIPTION =
  "Save hours on data entry with AI-powered receipt & invoice extraction. 99.9% accuracy, instant Excel/CSV exports, and seamless QuickBooks + Xero integration for frictionless accounting.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${DEFAULT_TITLE} | ${BRAND}`,
    template: TITLE_TEMPLATE,
  },
  description: DESCRIPTION,
  keywords: [
    "invoice data extraction",
    "receipt OCR",
    "QuickBooks integration",
    "Xero integration",
    "Excel export",
    "CSV export",
    "AP automation",
    "accounts payable",
    "financial data processing",
    "AI invoice parser",
  ],
  applicationName: BRAND,
  authors: [{ name: BRAND }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title: `${DEFAULT_TITLE} | ${BRAND}`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND} – Smart Invoice & Receipt Processor`,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${DEFAULT_TITLE} | ${BRAND}`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: "@masyglink",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      // maxSnippet: -1,
      // maxImagePreview: "large",
      // maxVideoPreview: -1,
    },
  },
  category: "technology",
  // themeviColor: "#0ea5e9",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  verification: {
    // If you add Search Console/Bing/Pinterest later, drop codes here
    // google: "",
    // bing: "",
  },
  other: {
    // Helpful signals for parsers
    referrer: "strict-origin-when-cross-origin",
    "format-detection": "telephone=no, address=no, email=no",
  },
};
// ✅ ADD this:
export const viewport: Viewport = {
  // single color
  // themeColor: "#0ea5e9",

  // OR responsive by color scheme:
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* social fallbacks (in addition to Metadata API) */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Performance: preconnect + font display */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured Data (Organization + SaaS Product) */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: BRAND,
            url: SITE_URL,
            logo: `${SITE_URL}/images/logo.png`,
            sameAs: ["https://x.com/masyglink"],
          })}
        </Script>
        <Script
          id="ld-product"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: BRAND,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "128",
            },
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
