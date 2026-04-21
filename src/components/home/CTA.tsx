"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Clock, Shield, Star, CheckCircle } from "lucide-react";

const guarantees = [
  { icon: Clock,   text: "24–48 hr delivery" },
  { icon: Shield,  text: "\u00b110% accuracy guarantee" },
  { icon: Star,    text: "98% client satisfaction" },
];

const socialProof = [
  { value: "650+",  label: "Projects Delivered" },
  { value: "98%",   label: "Satisfaction Rate" },
  { value: "18+",   label: "Years Experience" },
  { value: "$0",    label: "To Get a Quote" },
];

const recentWins = [
  { name: "Marcus D.", role: "General Contractor, TX", text: "Bid won on a $4.2M warehouse — estimate was within 2% of actual costs." },
  { name: "Lisa R.",   role: "Developer, CA",           text: "3 estimates delivered in one week. Won 2 of those bids. ROI is unreal." },
];

export default function CTA() {
  return (
    <section className="section-padding bg-[#081c30] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(0,196,180,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative gradient-bg rounded-3xl overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/[0.12] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
          <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />

          <div className="relative px-8 py-14 md:px-14 md:py-16">
            <div className="grid lg:grid-cols-5 gap-10 items-center">

              {/* Left copy */}
              <div className="lg:col-span-3">
                {/* Star rating row */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/80 text-sm font-semibold">5.0</span>
                  <span className="text-white/50 text-sm">· 120+ verified reviews</span>
                </div>

                <h2 className="text-4xl md:text-[2.8rem] font-extrabold text-white leading-[1.07] tracking-tight mb-5">
                  Ready to Win<br />
                  <span className="text-white/90">More Bids This Month?</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                  Stop losing projects to competitors with better numbers. Send us your plans today — professional estimate delivered in 24–48 hours, guaranteed.
                </p>

                {/* Guarantee chips */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {guarantees.map((g, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-white text-xs font-medium">
                      <g.icon className="w-3.5 h-3.5 text-white/75" />
                      {g.text}
                    </div>
                  ))}
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-4 gap-3 max-w-sm">
                  {socialProof.map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-white font-extrabold text-xl leading-none">{s.value}</p>
                      <p className="text-white/50 text-[10px] mt-1 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right actions */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                <Link
                  href="/get-a-quote"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#051525] rounded-xl font-bold text-base hover:bg-teal-50 transition-colors shadow-xl shadow-black/25"
                >
                  Get My Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+19283817910"
                  className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/25 rounded-xl text-white font-semibold text-base hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +1 (928) 381-7910
                </a>
                <p className="text-white/40 text-xs text-center pt-1">
                  No commitment · Free quote · Responds in &lt;1 hour
                </p>

                {/* Mini testimonials */}
                <div className="mt-2 space-y-2.5">
                  {recentWins.map((w, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/[0.08] rounded-xl px-4 py-3 border border-white/[0.12]">
                      <CheckCircle className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/85 text-xs leading-relaxed">"{w.text}"</p>
                        <p className="text-white/45 text-[10px] mt-1 font-medium">{w.name} · {w.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
