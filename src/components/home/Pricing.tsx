"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$349",
    per: "per project",
    desc: "Perfect for small projects and residential takeoffs",
    features: [
      "Up to 2,000 sq ft",
      "Single trade takeoff",
      "48-hour delivery",
      "PDF estimate",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
  },
  {
    name: "Professional",
    price: "$699",
    per: "per project",
    desc: "For mid-size commercial & multi-trade projects",
    features: [
      "Up to 10,000 sq ft",
      "Multi-trade takeoff",
      "24-hour delivery",
      "PDF + Excel estimate",
      "Priority support",
      "One revision included",
    ],
    cta: "Get Started",
    popular: true,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "contact for quote",
    desc: "For large-scale or complex project portfolios",
    features: [
      "Unlimited square footage",
      "Full project scope",
      "Rush delivery available",
      "Detailed CSI breakdown",
      "Dedicated estimator",
      "Unlimited revisions",
    ],
    cta: "Contact Us",
    popular: false,
    highlight: false,
  },
];

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="section-padding bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Transparent Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="gradient-text">Honest Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No hidden fees, no surprises. Choose a plan or request a custom quote for your project.
          </p>
        </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-[#f97316] to-[#ea580c] p-8 shadow-2xl shadow-orange-500/30 scale-105 z-10"
                  : "bg-[#0d1425] border border-white/10 p-8 hover:border-orange-500/20 transition-colors"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full shadow-lg">
                  <Zap className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                  <span className="text-orange-600 text-xs font-bold uppercase tracking-wide">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${plan.popular ? "text-orange-100" : "text-gray-400"}`}>{plan.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                </div>
                <p className={`text-xs mt-1 ${plan.popular ? "text-orange-200" : "text-gray-500"}`}>{plan.per}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-white/20" : "bg-orange-500/15"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-orange-500"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-orange-50" : "text-gray-300"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-a-quote"
                className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                    : "gradient-bg text-white hover:opacity-90"
                }`}
              >
                {plan.cta} →
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          All plans include a free consultation. Custom project? <Link href="/contact" className="text-orange-400 hover:text-orange-300 underline">Contact us for a quote.</Link>
        </p>
      </div>
    </section>
  );
}

