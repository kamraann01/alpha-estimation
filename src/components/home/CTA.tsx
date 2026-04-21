"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Clock, Shield, Star } from "lucide-react";

const guarantees = [
  { icon: Clock, text: "Delivered in 24–48 hrs" },
  { icon: Shield, text: "±10% accuracy or revised free" },
  { icon: Star, text: "98% client satisfaction" },
];

export default function CTA() {
  return (
    <section className="section-padding bg-[#081c30]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative gradient-bg rounded-3xl overflow-hidden"
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.06] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/[0.12] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(0,0,0,0.15),transparent)] pointer-events-none" />

          <div className="relative px-8 py-14 md:px-14 md:py-16">
            <div className="grid lg:grid-cols-5 gap-10 items-center">

              {/* Left copy — 3 cols */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" />
                  Estimates delivered in 24–48 hours
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
                  Ready to Win<br />More Bids?
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-md">
                  Stop losing projects to competitors with better numbers. Send us your plans — we&apos;ll deliver a professional, bankable estimate fast.
                </p>

                {/* Guarantee chips */}
                <div className="flex flex-wrap gap-3">
                  {guarantees.map((g, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-white text-xs font-medium">
                      <g.icon className="w-3.5 h-3.5 text-white/70" />
                      {g.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right actions — 2 cols */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                <Link
                  href="/get-a-quote"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#051525] rounded-xl font-bold text-base hover:bg-teal-50 transition-colors shadow-xl shadow-black/20"
                >
                  Get a Free Quote
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
                  No commitment. Free 15-min consultation included.<br />
                  We respond within 1 business hour.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
