// app/(marketing)/blog/why-masyg-extractor-best/page.tsx
import { buildMeta } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = buildMeta({
  title: "Why Masyg Extractor Is the Best Choice for Invoice & Receipt OCR",
  description:
    "Compare Masyg Extractor to generic OCR: get 99.9% accuracy, bulletproof QuickBooks/Xero sync, Excel exports, and AP-grade audit trails.",
  path: "/blog/why-masyg-extractor-best",
  image: "/images/blog/why-masyg.png",
});

export default function BlogPost() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
      <PageHeader
        eyebrow="Blog"
        title="Why Masyg Extractor Is the Best in the Industry"
        subtitle="Generic OCR stops at text. Masyg delivers structured, ledger-ready data with traceability."
      />

      <article className="prose prose-slate mt-10 max-w-none prose-h2:scroll-mt-24">
        <p className="lead">
          Most OCR tools stop at text. Masyg Extractor delivers structured accounting data you can
          trust: vendors, dates, taxes, line items, and totals mapped into your ledger with full
          traceability.
        </p>

        <h2>What sets us apart</h2>
        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0">
          {[
            {
              k: "Precision parsing",
              v: "Invoice-aware models deliver field-level accuracy with confidence scores.",
            },
            { k: "Seamless sync", v: "Direct, reliable connections to QuickBooks and Xero." },
            { k: "Excel/CSV", v: "Audit-ready exports for analysis and reporting." },
            { k: "Security first", v: "Encryption + role-based access with detailed activity logs." },
          ].map((item) => (
            <li
              key={item.k}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <p className="m-0 text-sm text-gray-900 font-semibold">{item.k}</p>
              <p className="m-0 mt-1 text-sm text-gray-700">{item.v}</p>
            </li>
          ))}
        </ul>

        <h2>Results you can measure</h2>
        <p>
          Customers report <strong>80–95% time savings</strong> on AP entry, fewer reconciliation
          issues, and faster month-end. Curious how this looks in your workflow?{" "}
          <Link href="/contact">Let’s talk.</Link>
        </p>
      </article>
    </main>
  );
}
