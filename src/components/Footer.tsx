// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "./ExternalLink";
const appUrl =
  process.env.NEXT_PUBLIC_VITE_CLIENT_URL || "https://extractor.masyglink.com";

const nav = {
  product: [
    { href: "/about", label: "About", external: false },
    { href: "/blog/why-masyg-extractor-best", label: "Blog", external: false },
    // { href: "/pricing", label: "Pricing" },
  ],
  resources: [
    {
      href: "/blog/why-masyg-extractor-best",
      label: "Why Masyg",
      external: false,
    },
    // { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact", external: false },
  ],
  legal: [
    { href: `${appUrl}/privacy-policy`, label: "Privacy", external: true },
    { href: `${appUrl}/terms-of-use`, label: "Terms", external: true },
  ],
};

// function SocialIcon({
//   children,
//   href,
//   label,
// }: {
//   children: React.ReactNode;
//   href: string;
//   label: string;
// }) {
//   return (
//     <ExternalLink
//       href={href}
//       aria-label={label}
//       className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 transition"
//     >
//       {children}
//     </ExternalLink>
//   );
// }

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-emerald-400 to-fuchsia-500" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Brand + brief tagline */}
        <div className="flex flex-col items-center gap-3 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              width={40}
              alt="Masyg Logo"
              height={40}
              src={"/images/masyg_logo.svg"}
            />

            {/* <span className="inline-block h-9 w-9 rounded-xl bg-sky-600" aria-hidden /> */}
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Masyg Extractor
              </p>
              <p className="text-sm text-gray-600">
                AI invoice & receipt data extraction — fast, accurate,
                audit-ready.
              </p>
            </div>
          </div>
{/* 
          <div className="flex items-center gap-2">
            <SocialIcon href="https://x.com/masyglink" label="X (Twitter)">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path
                  d="M18.244 2H21l-6.51 7.44L22 22h-6.9l-4.55-5.94L4.3 22H2l6.98-7.98L2 2h6.9l4.11 5.37L18.244 2Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://github.com" label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path
                  d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.23 3.4 9.67 8.13 11.24.6.11.82-.27.82-.58 0-.28-.01-1.03-.02-2.02-3.31.74-4-1.62-4-1.62-.55-1.43-1.33-1.81-1.33-1.81-1.09-.77.08-.76.08-.76 1.2.09 1.83 1.25 1.83 1.25 1.07 1.88 2.79 1.34 3.47 1.02.11-.8.42-1.34.76-1.65-2.64-.31-5.41-1.36-5.41-6.05 0-1.34.46-2.44 1.22-3.3-.12-.31-.53-1.57.12-3.26 0 0 1-.33 3.3 1.25.95-.27 1.98-.41 3-.41s2.05.14 3 .41c2.3-1.58 3.3-1.25 3.3-1.25.65 1.69.24 2.95.12 3.26.76.86 1.22 1.96 1.22 3.3 0 4.69-2.77 5.73-5.42 6.04.43.37.81 1.1.81 2.22 0 1.61-.02 2.9-.02 3.3 0 .31.22.69.83.58A11.5 11.5 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path
                  d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5ZM3 8.98h3.96V21H3V8.98ZM9.5 8.98h3.79v1.64h.05c.53-.95 1.83-1.95 3.78-1.95 4.05 0 4.8 2.67 4.8 6.14V21h-3.96v-4.32c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28V21H9.5V8.98Z"
                  fill="currentColor"
                />
              </svg>
            </SocialIcon>
          </div> */}
        </div>

        {/* Links */}
        <div className="grid gap-8 border-t border-gray-100 py-10 sm:grid-cols-3">
          <NavGroup title="Product" items={nav.product} />
          <NavGroup title="Resources" items={nav.resources} />
          <NavGroup title="Legal" items={nav.legal} />
        </div>

        {/* Legal row */}
        <div className="flex flex-col-reverse items-center gap-3 border-t border-gray-100 py-8 text-sm text-gray-500 sm:flex-row sm:justify-between">
          <p>© {year} Masyg Extractor. All rights reserved.</p>
          <p className="text-gray-400">
            Built for accuracy, speed, and seamless accounting workflows.
          </p>
        </div>
      </div>
    </footer>
  );
}

function NavGroup({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string; external: boolean }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            {item.external ? (
              <ExternalLink
                href={item.href}
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
              >
                {item.label}
              </ExternalLink>
            ) : (
              <Link
                href={item.href}
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-sm"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
