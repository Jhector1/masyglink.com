// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExternalLink from "./ExternalLink";

const links = [
  { href: "/", label: "Home", external: false },
  { href: "/about", label: "About", external: false },
  { href: "/blog/why-masyg-extractor-best", label: "Blog", external: false },
  // { href: "/pricing", label: "Pricing" }, // uncomment when ready
  // { href: "/docs", label: "Docs" },       // uncomment when ready
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const appUrl =
    process.env.NEXT_PUBLIC_VITE_CLIENT_URL || "https://app.masyglink.com";

  const baseLink =
    "px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-600";
  const inactive = "text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  const active = "text-sky-700 bg-sky-50";

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* swap with <Image> if you have a logo file */}
            <Image
              width={40}
              alt="Masyg Logo"
              height={40}
              src={"/images/masyg_logo.svg"}
            />
            {/* <span className="inline-block h-8 w-8 rounded-lg bg-sky-600" aria-hidden /> */}
            <span className="sr-only">Masyg Extractor</span>
            <span className="hidden sm:inline text-gray-900 font-semibold">
              Masyg Extractor
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`${baseLink} ${isActive ? active : inactive}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right side CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Contact
            </Link>
            <ExternalLink
              href={`${appUrl}/login`}
              className="inline-block rounded-full px-4 py-2 text-white bg-sky-600 hover:bg-sky-700 shadow-sm"
            >
              Sign in
            </ExternalLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            aria-label="Open main menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-3 border-t border-gray-100">
            <div className="pt-2 flex flex-col">
              {links.map(({ href, label }) => {
                const isActive =
                  pathname === href ||
                  (href !== "/" && pathname.startsWith(href));
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`mx-1 mt-1 ${baseLink} ${
                      isActive ? active : inactive
                    }`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                );
              })}
              <ExternalLink
                href={`${appUrl}/login`}
                className="mx-1 mt-2 inline-block rounded-full px-4 py-2 text-white bg-sky-600 hover:bg-sky-700"
                onClick={() => setOpen(false)}
              >
                Sign in
              </ExternalLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
