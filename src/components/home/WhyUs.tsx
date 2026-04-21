"use client";

import { motion } from "framer-motion";
import { Shield, Zap, MapPin, Users, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Accuracy Guaranteed",
    desc: "All estimates are double-checked by our review team. We stand behind our numbers with full accountability.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most estimates delivered within 24–48 hours. Rush delivery available for tight deadlines.",
  },
  {
    icon: MapPin,
    title: "Local Pricing Data",
    desc: "Estimates adjusted for your project\'s zip code — accurate labor rates, material costs, and market conditions.",
  },
  {
    icon: Users,
    title: "Experienced Estimators",
    desc: "Our team has real field experience — not just paper estimating. We understand what it costs to build.",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    desc: "We operate as a professional estimating firm with full E&O insurance coverage on every project.",
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    desc: "Direct access to your estimator throughout the process. No call centers — just real professionals.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Why Alpha Estimation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              We Help You Win More <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Most contractors lose bids simply because they don&apos;t have time to estimate properly. We solve that. Send us your plans and focus on running your business — we handle the rest.
            </p>

            {/* Callout stat */}
            <div className="relative rounded-2xl p-6 overflow-hidden bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <p className="text-gray-300 text-sm mb-2 relative">The average contractor misses</p>
              <p className="text-5xl font-bold gradient-text relative">$200K+</p>
              <p className="text-gray-400 text-sm mt-2 relative">in monthly project revenue due to missed bids</p>
            </div>
          </motion.div>

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 hover:border-orange-500/25 hover:bg-white/[0.04] transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/15 transition-colors">
                  <r.icon className="w-4 h-4 text-orange-500" />
                </div>
                <h4 className="text-white font-semibold mb-1.5 text-sm">{r.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
