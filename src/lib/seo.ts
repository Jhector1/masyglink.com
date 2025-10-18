// =============================================
// 2) lib/seo.ts — helpers to generate page‑level metadata

import { Metadata } from "next";

// =============================================
export function buildMeta({
  title,
  description,
  path = "/",
  image = "/images/SEO2.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const base = process.env.NEXT_PUBLIC_CLIENT_URL || "https://www.masyglink.com";
  const url = new URL(path, base).toString();
  const fullTitle = `${title} | Masyg Extractor`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      images: [{ url: new URL(image, base).toString(), width: 1200, height: 630 }],
      siteName: "Masyg Extractor",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [new URL(image, base).toString()],
    },
  } satisfies Metadata;
}
