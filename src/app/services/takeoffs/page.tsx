import type { Metadata } from "next";
import Link from "next/link";
import { FileSpreadsheet, ArrowRight } from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Material Takeoff Services",
  description: "Precise quantity takeoffs for all construction trades. Fast digital takeoffs from your plans.",
  alternates: { canonical: "/services/takeoffs" },
  openGraph: { title: "Material Takeoff Services | Alpha Estimation", description: "Precise quantity takeoffs for all construction trades. Fast digital takeoffs delivered in 24–48 hours.", url: "/services/takeoffs" },
};

const deliverables = [
  "Complete material quantities by trade",
  "Lumber & framing counts",
  "Concrete volume calculations",
  "Masonry unit counts",
  "Drywall & insulation areas",
  "Roofing material lists",
  "Door, window & hardware schedules",
  "Sitework quantities",
];

export default function TakeoffsPage() {
  return (
    <div className="pt-24">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-16">
        <Link href="/services" className="text-orange-500 text-sm hover:underline mb-6 inline-block">← All Services</Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
            <FileSpreadsheet className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-wider">Service</p>
            <h1 className="text-4xl font-bold text-white">Material Takeoffs</h1>
          </div>
        </div>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
          Accurate quantity takeoffs are the foundation of every winning bid. Our digital takeoff service delivers precise material counts fast, so you can price jobs with confidence.
        </p>
      </section>

      <section className="bg-[#0d1225] section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What&apos;s Included</h2>
            <ul className="space-y-3">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-1">Formats accepted</p>
              <p className="text-white font-bold text-2xl">PDF, DWG, Revit</p>
              <p className="text-gray-500 text-sm mt-1">Any plan format works</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-1">Delivery format</p>
              <p className="text-white font-bold text-2xl">Excel + PDF</p>
              <p className="text-gray-500 text-sm mt-1">Organized by trade & CSI code</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-1">Turnaround</p>
              <p className="text-white font-bold text-2xl">24 – 48 hours</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
