"use client";

import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Plans",
    desc: "Send us your blueprints, drawings, or project scope via email or our upload portal. Any format works — PDF, CAD, or Revit.",
  },
  {
    icon: FileText,
    title: "We Prepare Your Estimate",
    desc: "Our senior estimators perform a detailed digital takeoff and build your complete cost estimate based on local pricing data.",
  },
  {
    icon: CheckCircle,
    title: "Receive & Win Bids",
    desc: "You get a professional PDF + Excel estimate within 24–48 hours. Review in 15 minutes and submit a winning bid.",
  },
];

export default function HowItWorks({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="section-padding bg-[#0d1225]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Getting your estimate is simple. Three steps and you&apos;re ready to bid.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — aligns with icon center (w-16/2 = 32px = top-8) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                {/* Glass icon box — modern flat style */}
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-orange-500/30 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-orange-500" />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-2 -right-2 w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-500/30">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
