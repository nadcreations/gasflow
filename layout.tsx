import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gasflow - LPG Cylinder Management Software | Biznhand",
  description:
    "Gasflow is a comprehensive LPG cylinder management system for distributors and dealers. Features include real-time inventory tracking, automated billing, multi-branch management, and mobile apps.",
  keywords: [
    "LPG management software",
    "cylinder tracking system",
    "gas distribution software",
    "inventory management",
    "Gasflow",
    "Biznhand",
  ],
  openGraph: {
    title: "Gasflow - LPG Cylinder Management Software",
    description:
      "Comprehensive LPG management solution with real-time tracking, automated billing, and analytics.",
    url: "https://biznhand.com/products/gasflow",
    images: [
      {
        url: "/images/Gasflow-logo.png",
        width: 1200,
        height: 630,
        alt: "Gasflow - LPG Management Made Easy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gasflow - LPG Cylinder Management Software",
    description:
      "Comprehensive LPG management solution with real-time tracking, automated billing, and analytics.",
    images: ["/images/Gasflow-logo.png"],
  },
};

export default function GasflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
