"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Zap, MapPin, Users, Award, MessageSquare, ArrowRight, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Accuracy Guaranteed",
    desc: "Every estimate goes through a second-review by a senior estimator before delivery. We stand behind our numbers — within ±10% of actual costs or we revise at no charge.",
    highlight: "±10% accuracy or we revise free",
    iconBg: "bg-teal-400/[0.12]",
    iconBorder: "border-teal-400/25",
    iconColor: "text-teal-400",
    highlightColor: "text-teal-400",
  },
  {
    icon: Zap,
    title: "24–48 Hour Turnaround",
    desc: "Standard delivery in 24–48 hours. Same-day rush available for tight bid deadlines. We never miss a deadline — your bid window is our priority.",
    highlight: "Rush same-day delivery available",
    iconBg: "bg-yellow-400/[0.12]",
    iconBorder: "border-yellow-400/25",
    iconColor: "text-yellow-400",
    highlightColor: "text-yellow-400",
  },
  {
    icon: MapPin,
    title: "Local Pricing Data",
    desc: "Estimates are geo-adjusted to your project location. Accurate labor rates, regional material costs, and current market conditions — not national averages.",
    highlight: "Zip-code-level pricing accuracy",
    iconBg: "bg-sky-400/[0.12]",
    iconBorder: "border-sky-400/25",
    iconColor: "text-sky-400",
    highlightColor: "text-sky-400",
  },
  {
    icon: Users,
    title: "Real Field Experience",
    desc: "Our estimators have actual construction backgrounds — not just software certifications. We know what things actually cost to build.",
    highlight: "15+ years combined field experience",
    iconBg: "bg-violet-400/[0.12]",
    iconBorder: "border-violet-400/25",
    iconColor: "text-violet-400",
    highlightColor: "text-violet-400",
  },
  {
    icon: Award,
    title: "Certified & Insured",
    desc: "CPE-certified estimators, ASPE membership, and full E&O insurance coverage on every project. Professional accountability you can rely on.",
    highlight: "CPE Certified · ASPE Member · E&O Insured",
    iconBg: "bg-emerald-400/[0.12]",
    iconBorder: "border-emerald-400/25",
    iconColor: "text-emerald-400",
    highlightColor: "text-emerald-400",
  },
  {
    icon: MessageSquare,
    title: "Direct Estimator Access",
    desc: "You communicate directly with the estimator on your project — no ticketing systems, no call centers, no delays. Real answers, fast.",
    highlight: "No middlemen — direct communication",
    iconBg: "bg-orange-400/[0.12]",
    iconBorder: "border-orange-400/25",
    iconColor: "text-orange-400",
    highlightColor: "text-orange-400",
  },
];

const winRateStats = [
  { value: "2×",   label: "Average win rate improvement" },
  { value: "98%",  label: "Client satisfaction score" },
  { value: "650+", label: "Projects delivered" },
  { value: "$0",   label: "Cost to get a quote" },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-[#081c30] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(0,196,180,0.04),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mx-auto mb-5">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Contractors{" "}
            <span className="gradient-text">Who Want to Win</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t just deliver numbers — we give you the edge to bid confidently, win consistently, and protect your margins.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Reason cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative bg-[#0c2140] border border-white/[0.08] rounded-2xl p-5 card-lift hover:border-white/15 overflow-hidden"
              >
                {/* Colored left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl ${r.iconBg.replace("/[0.12]", "")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{background: `var(--accent, currentColor)`}} />

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200 ${r.iconBg} border ${r.iconBorder}`}>
                    <r.icon className={`w-4 h-4 ${r.iconColor}`} />
                  </div>
                  <h4 className="text-white font-bold text-sm leading-tight">{r.title}</h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{r.desc}</p>
                <p className={`${r.highlightColor} text-[11px] font-semibold border-t border-white/[0.06] pt-3 flex items-center gap-1.5`}>
                  <span className="text-[9px]">✓</span>
                  {r.highlight}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Stats + callout */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Missed revenue callout */}
            <div className="relative rounded-2xl p-7 overflow-hidden border border-teal-400/20 bg-gradient-to-br from-teal-500/[0.08] to-transparent">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-400/5 rounded-full pointer-events-none" />
              <TrendingUp className="w-7 h-7 text-teal-400 mb-4" />
              <p className="text-gray-300 text-sm mb-1">The average GC misses out on</p>
              <p className="text-6xl font-extrabold gradient-text leading-none">$200K+</p>
              <p className="text-gray-400 text-sm mt-3 max-w-xs">in annual project revenue by not submitting enough bids due to estimating bottlenecks.</p>
              <div className="mt-5 pt-5 border-t border-white/[0.08]">
                <p className="text-gray-300 text-sm font-medium">Alpha Estimation clients average:</p>
                <p className="text-teal-400 font-bold text-lg mt-1">2× more bids submitted per month</p>
              </div>
            </div>

            {/* Win rate stat grid */}
            <div className="grid grid-cols-2 gap-3">
              {winRateStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="bg-[#0c2140] border border-white/[0.08] rounded-xl p-4 text-center card-lift hover:border-teal-400/20"
                >
                  <p className="text-2xl font-extrabold gradient-text">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-tight">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/get-a-quote"
              className="group flex items-center justify-center gap-2 px-7 py-4 gradient-bg rounded-xl text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-teal-500/25"
            >
              Start Winning More Bids
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
