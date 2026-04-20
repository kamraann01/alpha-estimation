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
    desc: "Estimates adjusted for your project's zip code — accurate labor rates, material costs, and market conditions.",
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
            <div className="glass rounded-2xl p-6 border-l-4 border-orange-500">
              <p className="text-white font-semibold mb-2">The average contractor misses</p>
              <p className="text-5xl font-bold gradient-text">$200K+</p>
              <p className="text-gray-400 mt-1">in monthly project revenue due to missed bids</p>
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
                className="glass rounded-xl p-5 hover:border-orange-500/30 transition-colors"
              >
                <r.icon className="w-6 h-6 text-orange-500 mb-3" />
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
