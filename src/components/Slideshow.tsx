// components/Slideshow.tsx
"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  image: string;
  caption: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    title: "Excel",
    image: "/images/excel.png",
    caption: "Export data to Excel files effortlessly.",
  },
  {
    id: 2,
    title: "CSV",
    image: "/images/csv.png",
    caption: "CSV support for universal data portability.",
  },
  {
    id: 3,
    title: "QuickBooks",
    image: "/images/quickbooks.png",
    caption: "Coming soon!!!",
  },
  {
    id: 4,
    title: "Xero",
    image: "/images/xero.png",
    caption: "Coming soon!!!",
  },
  {
    id: 5,
    title: "Service Titan",
    image: "/images/service-titan.png",
    caption: "Coming soon!!!",
  },
];

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full max-w-2xl mx-auto h-[20rem] my-20 overflow-hidden">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`
            absolute inset-0 flex flex-col items-center justify-center
            transition-opacity duration-700 ease-in-out
            ${index === currentSlide ? "opacity-100" : "opacity-0"}
          `}
        >
          <img src={slide.image} alt={slide.title} className="w-1/3 h-auto object-contain mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{slide.title}</h2>
          <p className="text-sm text-gray-600 px-4 text-center">{slide.caption}</p>
        </div>
      ))}
    </main>
  );
};

export default Slideshow;
