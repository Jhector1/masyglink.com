// =============================================
// 3) app/page.tsx — cleaned hero + a11y + no ServiceTitan
// =============================================
import Link from "next/link";
// import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import Slideshow from "@/components/Slideshow";

export default function HomePage() {
  const SITE_URL = "https://extractor.masyglink.com";
  const loginUrl =
    process.env.NEXT_PUBLIC_VITE_CLIENT_URL || `${SITE_URL}/login`;
  return (
    <div className="w-screen">
      <section className="bg-gradient-to-b from-emerald-50 to-gray-100 py-16 px-6 sm:py-24 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center mb-12 rounded-3xl bg-white/70 backdrop-blur p-10 shadow-sm">
          <p className="text-sm font-semibold text-sky-700 uppercase tracking-widest">
            Fast. Accurate. Effortless.
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Smart Invoice, Receipt & Data Processor
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Convert invoices and receipts into structured data in seconds—no
            manual entry. Export to Excel/CSV and sync with QuickBooks or Xero
            with bank‑grade security.
          </p>
          <div className="mt-8">
            <Link
              href={loginUrl}
              className="inline-block rounded-full px-8 py-3 text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600 shadow-md transition"
              aria-label="Get started with Masyg Extractor"
            >
              Get Started in Seconds
            </Link>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Trusted by 100+ small businesses, freelancers, and finance teams.
          </p>
        </div>

        <Slideshow />

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <FeatureCard
            title="Advanced GPT Parsing"
            description="Extract quantities, amounts, vendors, and line items with 99.9% accuracy."
            icon="🔎"
          />
          <FeatureCard
            title="QuickBooks Integration"
            description="Post transactions and invoices to QuickBooks in real time."
            icon="💼"
          />
          <FeatureCard
            title="Xero Integration"
            description="Seamless two‑way sync for Xero ledgers and contacts."
            icon="🧾"
          />
          <FeatureCard
            title="Excel & CSV Exports"
            description="One‑click exports for audit‑ready spreadsheets."
            icon="📊"
          />
          <FeatureCard
            title="Bank‑Grade Security"
            description="Encryption in transit and at rest with strict access controls."
            icon="🔒"
          />
          <FeatureCard
            title="Excel Merge"
            description="Drag‑and‑drop combine spreadsheets; auto‑align columns and headers."
            icon="🔀"
          />
        </div>

        <div className="max-w-5xl mx-auto mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold">Why Masyg Extractor?</h2>
            <p className="mt-2 text-gray-700">
              Purpose‑built for AP teams that need accuracy, speed, and reliable
              accounting system syncs. No lock‑in, no black boxes—just clean,
              verifiable data.
            </p>
          </div>
          <div className="rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold">What you get</h2>
            <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
              <li>Human‑reviewable parsing with audit trail</li>
              <li>Bulk uploads with live progress</li>
              <li>QuickBooks/Xero adapters + Excel exports</li>
              <li>Role‑based permissions and activity logs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
