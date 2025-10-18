// components/PageHeader.tsx
import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 to-white p-8 sm:p-12 shadow-sm border border-gray-100">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h1>
        {subtitle && <p className="mt-3 text-base sm:text-lg text-gray-700">{subtitle}</p>}
      </div>

      {/* subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl"
      />
    </header>
  );
}
