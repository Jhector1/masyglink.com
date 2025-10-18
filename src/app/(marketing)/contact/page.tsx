// app/(marketing)/contact/page.tsx
import { buildMeta } from "@/lib/seo";
import PageHeader from "@/components/PageHeader";
// import ContactForm from "@/components/ContactForm";

export const metadata = buildMeta({
  title: "Contact",
  description:
    "Talk to the Masyg Extractor team about billing, integrations (QuickBooks, Xero), or pilot access. We usually reply within 1 business day.",
  path: "/contact",
  image: "/images/SEO2.png",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      <PageHeader
        eyebrow="Contact"
        title="We’d love to hear from you"
        subtitle="Questions about integrations, pricing, or pilots? Send us a note and we’ll get back within one business day."
      />

      {/* 2-column content: form + sidebar */}
      <section className="mt-10 grid gap-8 lg:grid-cols-[1fr,360px]">
        {/* <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <ContactForm />
        </div> */}

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">How can we help?</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li>• Product questions & demos</li>
              <li>• QuickBooks / Xero integration help</li>
              <li>• Billing & security inquiries</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">Email</h2>
            <p className="mt-2 text-sm text-gray-700">
              <a className="hover:underline" href="mailto:support@masyglink.com">
                support@masyglink.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">Response time</h2>
            <p className="mt-2 text-sm text-gray-700">
              We reply within 1 business day. For priority issues, include “Urgent” in the subject.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
