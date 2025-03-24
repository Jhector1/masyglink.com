
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://extractor.masyglink.com";
const defaultTitle = "Home";
const fullTitle = `${defaultTitle} | Masyg Extractor`;
const pageDescription =
  "Discover our innovative React app that extracts keywords from receipt invoices and integrates seamlessly with QuickBooks and other financial services.";
const imageUrl = `${BASE_URL}/images/SEO2.png`;

export const metadata: Metadata = {
  title: {
    default: fullTitle,
    template: "%s | Masyg Extractor",
  },
  description: pageDescription,
  keywords: "receipt invoices, keyword extractor, QuickBooks integration, React app",
  alternates: {
    canonical: BASE_URL,
  },
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: fullTitle,
    description: pageDescription,
    url: BASE_URL,
    siteName: "Masyg Extractor",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: fullTitle,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: pageDescription,
    images: [imageUrl],
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Example Video",
  "description": "An example video demonstrating our product features.",
  "thumbnailUrl": `${BASE_URL}/images/video-thumbnail.jpg`,
  "uploadDate": "2023-03-01",
  "duration": "PT1M33S",
  "contentUrl": `${BASE_URL}/videos/demo.mp4`,
  "embedUrl": `${BASE_URL}/videos/embed/demo`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}




// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });




// const BASE_URL = "https://extractor.masyglink.com";
// const defaultTitle = "Home";
// const fullTitle = `${defaultTitle} | Masyg Extractor`;
// const pageDescription =
//   "Discover our innovative React app that extracts keywords from receipt invoices and integrates seamlessly with QuickBooks and other financial services.";
// const imageUrl = `${BASE_URL}/images/SEO2.png`;

// export const metadata: Metadata = {
//   title: {
//     default: fullTitle,
//     template: "%s | Masyg Extractor",
//   },
//   description: pageDescription,
//   keywords: "receipt invoices, keyword extractor, QuickBooks integration, React app",

//   alternates: {
//     canonical: BASE_URL,
//   },
//   metadataBase: new URL(BASE_URL),
//   openGraph: {
//     title: fullTitle,
//     description: pageDescription,
//     url: BASE_URL,
//     siteName: "Masyg Extractor",
//     images: [
//       {
//         url: imageUrl,
//         width: 1200,
//         height: 630,
//         alt: fullTitle,
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: fullTitle,
//     description: pageDescription,
//     images: [imageUrl],
//   },
//   // additionalMetaTags: [
//   //   {
//   //     name: "keywords",
//   //     content:
//   //       "receipt invoices, keyword extractor, QuickBooks integration, React app",
//   //   },
//   // ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body         className={`${geistSans.variable} ${geistMono.variable} antialiased`}

      
//       >{children}</body>
//     </html>
//   );
// }
