import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Alpha Estimation",
  description: "Learn how our 3-step construction estimating process works. Upload plans, get a quote, receive your estimate.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
        <h1 className="text-5xl font-bold text-white mb-4">How It <span className="gradient-text">Works</span></h1>
        <p className="text-gray-400 text-xl">Simple, fast, and transparent. Here&apos;s how we go from your plans to a winning bid.</p>
      </div>
      <HowItWorks />
      <CTA />
    </div>
  );
}
