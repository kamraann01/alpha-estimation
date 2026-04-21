"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, MessageSquare, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    badge: null,
    price: "$349",
    per: "per project",
    desc: "For small projects, single-trade takeoffs, and residential scopes.",
    features: [
      { text: "Up to 2,000 sq ft", included: true },
      { text: "Single trade takeoff", included: true },
      { text: "48-hour delivery", included: true },
      { text: "PDF estimate", included: true },
      { text: "Email support", included: true },
      { text: "Excel breakdown", included: false },
      { text: "Revision included", included: false },
    ],
    cta: "Start Project",
    href: "/get-a-quote",
    popular: false,
  },
  {
    name: "Professional",
    badge: "Most Popular",
    price: "$699",
    per: "per project",
    desc: "For mid-size commercial, multi-trade, and multi-family projects.",
    features: [
      { text: "Up to 10,000 sq ft", included: true },
      { text: "Multi-trade takeoff", included: true },
      { text: "24-hour delivery", included: true },
      { text: "PDF estimate", included: true },
      { text: "Priority support", included: true },
      { text: "Excel breakdown included", included: true },
      { text: "One revision included", included: true },
    ],
    cta: "Start Project",
    href: "/get-a-quote",
    popular: true,
  },
  {
    name: "Enterprise",
    badge: null,
    price: "Custom",
    per: "contact for quote",
    desc: "For large-scale, complex, or ongoing project portfolios.",
    features: [
      { text: "Unlimited square footage", included: true },
      { text: "Full project scope", included: true },
      { text: "Rush delivery available", included: true },
      { text: "Detailed CSI breakdown", included: true },
      { text: "Dedicated estimator", included: true },
      { text: "Excel breakdown included", included: true },
      { text: "Unlimited revisions", included: true },
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
            <p className="section-label mx-auto mb-5">Transparent Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="gradient-text">Honest Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              No hourly rates, no hidden fees. Pay per project and know exactly what you&apos;ll get.
            </p>
          </motion.div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-[#0c2140] border-2 border-teal-400/50 shadow-2xl shadow-teal-500/10 md:-mt-4"
                  : "bg-[#0c2140] border border-white/[0.09] hover:border-white/[0.16]"
              }`}
            >
              {/* Top ambient glow for popular */}
              {plan.popular && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_50%_0%,rgba(0,196,180,0.09),transparent)] pointer-events-none" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="relative flex justify-center pt-5 pb-0">
                  <span className="inline-flex items-center gap-1.5 gradient-bg px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wide shadow-md shadow-teal-500/30">
                    <Zap className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`px-7 ${plan.popular ? "pt-5" : "pt-7"} pb-6 border-b border-white/[0.07]`}>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{plan.desc}</p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1.5">{plan.per}</p>
              </div>

              {/* Features */}
              <div className="px-7 py-6 flex-1">
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-4">What&apos;s included</p>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          f.included
                            ? "bg-teal-400/15 border border-teal-400/20"
                            : "bg-white/[0.04] border border-white/[0.07]"
                        }`}
                      >
                        <Check className={`w-3 h-3 ${f.included ? "text-teal-400" : "text-gray-600"}`} />
                      </div>
                      <span className={`text-sm ${f.included ? "text-gray-300" : "text-gray-600 line-through"}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-7 pb-7">
                <Link
                  href={plan.href}
                  className={`group flex w-full items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90 shadow-lg shadow-teal-500/25"
                      : "bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] hover:border-white/[0.2]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom quote callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#0c2140] border border-white/[0.08] rounded-2xl px-6 py-5"
        >
          <MessageSquare className="w-5 h-5 text-teal-400 shrink-0" />
          <p className="text-gray-400 text-sm text-center sm:text-left">
            <span className="text-white font-semibold">Have a unique project?</span>{" "}
            Every project is different — we offer fully custom quotes with no obligation. All plans include a free 15-minute consultation.
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 border border-teal-400/30 text-teal-400 rounded-xl text-sm font-semibold hover:bg-teal-400/10 transition-colors"
          >
            Request Custom Quote <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
