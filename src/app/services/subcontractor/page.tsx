import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, ArrowRight } from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Subcontractor Estimating Services",
  description: "Trade-specific estimating for subcontractors. Electrical, plumbing, HVAC, concrete, framing and more.",
};

const trades = ["Electrical", "Plumbing", "HVAC / Mechanical", "Concrete & Foundations", "Framing & Carpentry", "Drywall & Finishes", "Painting", "Roofing", "Flooring", "Tile & Stone", "Landscaping & Sitework", "Fire Protection"];

export default function SubcontractorPage() {
  return (
    <div className="pt-24">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-16">
        <Link href="/services" className="text-orange-500 text-sm hover:underline mb-6 inline-block">← All Services</Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
            <HardHat className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-wider">Service</p>
            <h1 className="text-4xl font-bold text-white">Subcontractor Estimating</h1>
          </div>
        </div>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
          We specialize in trade-specific estimates for subcontractors. Get bid-ready numbers quickly without pulling your field crew off the job.
        </p>
      </section>

      <section className="bg-[#0d1225] section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Trades We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trades.map((trade, i) => (
              <div key={i} className="glass rounded-xl px-5 py-4 flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-gray-300">{trade}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Labor + Material", value: "Full breakdown" },
              { label: "Turnaround", value: "24 – 48 hours" },
              { label: "Starting at", value: "$349 per trade" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-white font-bold text-xl">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
