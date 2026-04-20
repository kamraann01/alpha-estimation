import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Home, FileSpreadsheet, HardHat, Factory, Lightbulb, ArrowRight } from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Commercial Estimating Services | Alpha Estimation",
  description: "Professional commercial construction estimating. Offices, retail, multi-family, and large-scale commercial projects.",
};

const scope = [
  "Office buildings & corporate campuses",
  "Retail stores & shopping centers",
  "Hotels & hospitality",
  "Restaurants & food service",
  "Medical & healthcare facilities",
  "Educational buildings",
  "Multi-family residential (5+ units)",
  "Parking structures & garages",
];

const trades = ["General Conditions", "Concrete", "Masonry", "Structural Steel", "Carpentry", "Roofing", "Plumbing", "HVAC", "Electrical", "Finishes", "Sitework"];

export default function CommercialPage() {
  return (
    <div className="pt-24">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-16">
        <Link href="/services" className="text-orange-500 text-sm hover:underline mb-6 inline-block">← All Services</Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
            <Building2 className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-wider">Service</p>
            <h1 className="text-4xl font-bold text-white">Commercial Estimating</h1>
          </div>
        </div>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
          We deliver detailed, CSI-formatted estimates for commercial construction projects of any scale. From tenant fit-outs to ground-up developments, our estimates help you win and stay profitable.
        </p>
      </section>

      <section className="bg-[#0d1225] section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Project Types We Cover</h2>
            <ul className="space-y-3">
              {scope.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Trades We Estimate</h2>
            <div className="flex flex-wrap gap-2">
              {trades.map((t, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm">{t}</span>
              ))}
            </div>
            <div className="mt-8 glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-1">Typical turnaround</p>
              <p className="text-white font-bold text-2xl">48 – 72 hours</p>
              <p className="text-gray-500 text-sm mt-1">Rush 24hr delivery available</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
