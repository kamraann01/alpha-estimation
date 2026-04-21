import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alphaestimation.com"),
  title: {
    default: "Alpha Estimation | Accurate Construction Cost Estimating & Takeoff Services",
    template: "%s | Alpha Estimation",
  },
  description: "Professional construction cost estimating & takeoff services for General Contractors and Subcontractors worldwide. 500+ projects, 98% satisfaction, 24-48hr turnaround.",
  keywords: "construction estimating, cost estimation, takeoff services, construction bids, general contractor estimating, material takeoff, commercial estimating",
  authors: [{ name: "Alpha Estimation" }],
  openGraph: {
    title: "Alpha Estimation | Accurate Construction Cost Estimating & Takeoff Services",
    description: "Professional construction cost estimating & takeoff services. 500+ projects, 98% satisfaction, 24-48hr delivery.",
    url: "https://alphaestimation.com",
    siteName: "Alpha Estimation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Estimation | Professional Construction Estimating",
    description: "Accurate construction estimates & takeoff services. 500+ projects, 98% satisfaction, 24-48hr delivery.",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alpha Estimation",
    "description": "Professional construction cost estimating services for General Contractors & Subcontractors worldwide.",
    "url": "https://alphaestimation.com",
    "telephone": "+19283817910",
    "email": "contact@alphaestimation.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "117 S Lexington Street STE 100",
      "addressLocality": "Harrisonville",
      "addressRegion": "MO",
      "postalCode": "64701",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "120"
    },
    "sameAs": [
      "https://www.facebook.com/alphaestimation",
      "https://www.linkedin.com/company/alphaestimation"
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#081c30] text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-white focus:rounded-lg focus:font-semibold">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
