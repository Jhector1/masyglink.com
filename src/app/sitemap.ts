

// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.masyglink.com";
  return [
    { url: `${base}/`, priority: 1, changeFrequency: "weekly" },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/blog/why-masyg-extractor-best`, priority: 0.7, changeFrequency: "monthly" },
  ];
}

// =============================================
// 9) prettier config (optional) — consistent formatting
// =============================================
// .prettierrc
// {
//   "semi": true,
//   "singleQuote": true,
//   "printWidth": 100,
//   "trailingComma": "all",
//   "tabWidth": 2
// }

// =============================================
// 10) env example — set canonical URL once
// =============================================
// .env.local
// NEXT_PUBLIC_SITE_URL=https://www.masyglink.com
// NEXT_PUBLIC_VITE_CLIENT_URL=https://app.masyglink.com
