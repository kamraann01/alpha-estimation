import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Alpha Estimation",
  description: "Transparent construction estimating pricing. Starting at $349 per project. No hidden fees.",
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-4 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
        <h1 className="text-5xl font-bold text-white mb-4">Simple, <span className="gradient-text">Honest Pricing</span></h1>
        <p className="text-gray-400 text-xl">No surprises. No hourly confusion. Just clear pricing for professional estimates.</p>
      </div>
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
