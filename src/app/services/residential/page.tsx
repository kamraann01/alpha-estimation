import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Residential Estimating Services",
  description: "Accurate residential construction estimating for new homes, additions, and remodels.",
  alternates: { canonical: "/services/residential" },
  openGraph: { title: "Residential Estimating Services | Alpha Estimation", description: "Accurate residential construction estimating for new homes, additions, and remodels. Starting at $349.", url: "/services/residential" },
};

const scope = [
  "Single-family homes (new construction)",
  "Custom luxury homes",
  "Additions & room expansions",
  "Basement finishing",
  "Kitchen & bathroom remodels",
  "ADU / in-law suites",
  "Duplex & triplex",
  "Deck, patio & outdoor living",
];

export default function ResidentialPage() {
  return (
    <div className="pt-24">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-16">
        <Link href="/services" className="text-orange-500 text-sm hover:underline mb-6 inline-block">← All Services</Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
            <Home className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-wider">Service</p>
            <h1 className="text-4xl font-bold text-white">Residential Estimating</h1>
          </div>
        </div>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
          Whether you&apos;re building a custom home or renovating a kitchen, our residential estimates give you the precise numbers needed to bid confidently and protect your margin.
        </p>
      </section>

      <section className="bg-[#0d1225] section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What We Cover</h2>
            <ul className="space-y-3">
              {scope.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="w-4 h-4 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            {[
              { label: "Typical turnaround", value: "24 – 48 hours", sub: "Rush same-day available" },
              { label: "Format", value: "Excel / PDF", sub: "Room-by-room or CSI format" },
              { label: "Pricing", value: "Starting at $349", sub: "Per project, no surprises" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-white font-bold text-2xl">{item.value}</p>
                <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
