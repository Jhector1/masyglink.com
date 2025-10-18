// app/(marketing)/about/page.tsx
import { buildMeta } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";

export const metadata = buildMeta({
  title: "About",
  description:
    "Masyg Extractor is an AI invoice & receipt data extraction platform delivering 99.9% accuracy, instant Excel/CSV exports, and direct QuickBooks/Xero sync.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <PageHeader
        eyebrow="About"
        title="Built for accountants, by engineers"
        subtitle="Our mission is simple: eliminate manual entry without sacrificing accuracy or control."
      />

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">What we do</h2>
          <p className="mt-2 text-gray-700">
            Masyg Extractor helps Accounts Payable teams eliminate manual data entry. Our GPT-assisted
            parsing engine is tuned for invoices and receipts, mapping vendors, dates, line items,
            taxes, and totals into clean, audit-ready records.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Why teams choose Masyg</h2>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>Accurate line-item extraction with confidence scores</li>
            <li>QuickBooks and Xero connectors</li>
            <li>Bulk uploads with live progress logs</li>
            <li>Role-based access control and detailed change history</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
