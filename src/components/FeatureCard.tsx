// =============================================
// 4) components/FeatureCard.tsx — a11y + Image optional
// =============================================
import { ReactNode } from "react";
import Image from "next/image";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string | ReactNode;
  imageSrc?: string; // optional: if you want a branded icon
}

export default function FeatureCard({ title, description, icon, imageSrc }: FeatureCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition" aria-label={title}>
      <div className="flex items-center mb-3">
        {imageSrc ? (
          <Image src={imageSrc} alt="" width={32} height={32} className="mr-3" />
        ) : (
          <div className="text-2xl mr-3" aria-hidden>
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 leading-6">{description}</p>
    </article>
  );
}
