import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Alpha Estimation | Professional Construction Estimating Services",
  description: "Precision construction cost estimating for General Contractors & Subcontractors worldwide. Fast turnaround, local pricing, accurate takeoffs.",
  keywords: "construction estimating, cost estimation, takeoff services, construction bids, general contractor estimating",
  openGraph: {
    title: "Alpha Estimation | Professional Construction Estimating Services",
    description: "Precision construction cost estimating for General Contractors & Subcontractors worldwide.",
    url: "https://alphaestimation.com",
    siteName: "Alpha Estimation",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#0a0f1e] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
