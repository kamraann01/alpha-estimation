import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Alpha Estimation",
  description: "Frequently asked questions about our construction estimating services.",
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
        <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked <span className="gradient-text">Questions</span></h1>
        <p className="text-gray-400 text-xl">Everything you need to know about our services.</p>
      </div>
      <FAQ />
      <CTA />
    </div>
  );
}
