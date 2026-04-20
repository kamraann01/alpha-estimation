"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$349",
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
  },
  {
    name: "Professional",
    price: "$699",
    desc: "For mid-size commercial & multi-trade projects",
    features: [
      "Up to 10,000 sq ft",
      "Multi-trade takeoff",
      "24-hour delivery",
      "PDF + Excel estimate",
      "Priority support",
      "One revision included",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large-scale or complex project portfolios",
    features: [
      "Unlimited square footage",
      "Full project scope",
      "Rush delivery available",
      "Detailed breakdown",
      "Dedicated estimator",
      "Unlimited revisions",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.popular ? "gradient-bg" : "glass"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-orange-600 text-xs font-bold rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? "text-orange-100" : "text-gray-400"}`}>{plan.desc}</p>
              <div className="text-4xl font-bold text-white mb-8">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <Check className={`w-4 h-4 shrink-0 ${plan.popular ? "text-white" : "text-orange-500"}`} />
                    <span className={`text-sm ${plan.popular ? "text-orange-50" : "text-gray-300"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-a-quote"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "gradient-bg text-white hover:opacity-90"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
