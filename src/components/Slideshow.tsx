
// =============================================
// 5) components/Slideshow.tsx — next/image + reduced motion + a11y
// =============================================
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Slide = { id: number; title: string; image: string; caption: string };

const slidesData: Slide[] = [
  { id: 1, title: "Excel", image: "/images/excel.png", caption: "Export data to Excel files effortlessly." },
  { id: 2, title: "CSV", image: "/images/csv.png", caption: "CSV support for universal portability." },
  { id: 3, title: "QuickBooks", image: "/images/quickbooks.png", caption: "Send data to QuickBooks for real‑time accounting." },
  { id: 4, title: "Xero", image: "/images/xero.png", caption: "Connect with Xero for comprehensive financials." },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return; // respect user preference
    timer.current = setInterval(() => setCurrent((p) => (p === slidesData.length - 1 ? 0 : p + 1)), 3500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full max-w-2xl mx-auto h-[20rem] my-16 overflow-hidden rounded-2xl" aria-label="Integrations slideshow">
      {slidesData.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${idx === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== current}
        >
          <Image src={slide.image} alt={slide.title} width={180} height={180} priority={idx === current} />
          <h2 className="mt-3 text-xl font-semibold text-gray-900">{slide.title}</h2>
          <p className="text-sm text-gray-700 px-4 text-center max-w-md">{slide.caption}</p>
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" aria-label="Slide indicators">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === current ? "bg-sky-600" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

