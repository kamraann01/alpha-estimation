import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://alphaestimation.com"),
  title: {
    default: "Alpha Estimation | Professional Construction Estimating Services",
    template: "%s | Alpha Estimation",
  },
  description: "Precision construction cost estimating for General Contractors & Subcontractors worldwide. 48hr turnaround, 98% accuracy, starting at $349.",
  keywords: "construction estimating, cost estimation, takeoff services, construction bids, general contractor estimating, material takeoff, commercial estimating",
  authors: [{ name: "Alpha Estimation" }],
  openGraph: {
    title: "Alpha Estimation | Professional Construction Estimating Services",
    description: "Precision construction cost estimating for General Contractors & Subcontractors worldwide. 48hr turnaround, 98% accuracy.",
    url: "https://alphaestimation.com",
    siteName: "Alpha Estimation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Estimation | Professional Construction Estimating",
    description: "Fast, accurate construction estimates starting at $349. 48hr turnaround.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0a0f1e] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
