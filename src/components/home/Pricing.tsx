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
    href: "/get-a-quote",
    popular: false,
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
    href: "/get-a-quote",
    popular: true,
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
    href: "/contact",
    popular: false,
  },
];

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="section-padding bg-[#081c30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">Transparent Pricing</p>
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
              className={`relative rounded-2xl flex flex-col p-8 overflow-hidden ${
                plan.popular
                  ? "bg-[#0c2140] border-2 border-teal-400/50 shadow-2xl shadow-blue-500/15 scale-105 z-10"
                  : "bg-[#0c2140] border border-white/10 hover:border-white/20 transition-colors"
              }`}
            >
              {/* Popular card ambient glow */}
              {plan.popular && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(0,196,180,0.08),transparent)] pointer-events-none" />
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 gradient-bg rounded-full shadow-lg shadow-blue-500/30 z-10">
                  <Zap className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="text-white text-xs font-bold uppercase tracking-wide">Most Popular</span>
                </div>
              )}

              <div className="mb-5 relative">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-7 relative">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                </div>
                <p className="text-xs mt-1 text-gray-500">{plan.per}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1 relative">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-teal-400/15 border border-teal-400/20">
                      <Check className="w-3 h-3 text-teal-400" />
                    </div>
                    <span className="text-sm text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all relative ${
                  plan.popular
                    ? "gradient-bg text-white hover:opacity-90 shadow-lg shadow-teal-500/25"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {plan.cta} →
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          All plans include a free consultation. Custom project?{" "}
          <Link href="/contact" className="text-teal-400 hover:text-teal-300 underline">
            Contact us for a quote.
          </Link>
        </p>
      </div>
    </section>
  );
}
