import type { Metadata } from "next";
import Link from "next/link";
import { Factory, ArrowRight } from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industrial Estimating Services | Alpha Estimation",
  description: "Specialized estimating for industrial construction — warehouses, manufacturing, plants and more.",
};

const scope = [
  "Warehouses & distribution centers",
  "Manufacturing & production facilities",
  "Cold storage & food processing",
  "Chemical & industrial plants",
  "Power & utilities infrastructure",
  "Data centers",
  "Mining & resource facilities",
  "Industrial fit-out & retrofits",
];

export default function IndustrialPage() {
  return (
    <div className="pt-24">
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-16">
        <Link href="/services" className="text-orange-500 text-sm hover:underline mb-6 inline-block">← All Services</Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center">
            <Factory className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-wider">Service</p>
            <h1 className="text-4xl font-bold text-white">Industrial Estimating</h1>
          </div>
        </div>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
          Industrial projects demand specialized knowledge. Our team has experience estimating complex industrial facilities across multiple sectors with the precision required for large-scale bids.
        </p>
      </section>

      <section className="bg-[#0d1225] section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Project Types</h2>
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
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-2">Why industrial clients choose us</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                {["Deep knowledge of industrial specifications", "Familiar with AISC, ASCE, and IBC standards", "Experience with complex MEP systems", "Accurate structural steel quantification"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><ArrowRight className="w-3 h-3 text-orange-500 mt-1 shrink-0" />{t}</li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-1">Typical turnaround</p>
              <p className="text-white font-bold text-2xl">48 – 96 hours</p>
              <p className="text-gray-500 text-sm mt-1">Depending on project complexity</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
