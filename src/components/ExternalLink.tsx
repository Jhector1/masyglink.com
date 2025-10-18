// components/ExternalLink.tsx
import Link from "next/link";
import { ComponentProps } from "react";

export default function ExternalLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />;
}
