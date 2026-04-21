"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-[#081c30]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative gradient-bg rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-white text-sm font-medium mb-5">
                <Clock className="w-4 h-4" />
                Estimates delivered in 24–48 hours
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Ready to Win
                <br />More Bids?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Send us your plans and get a professional, bankable estimate fast. Stop losing projects to competitors with better numbers.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/get-a-quote"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+19283817910"
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 (928) 381-7910
              </a>
              <p className="text-blue-200/70 text-sm text-center">No commitment. Free consultation included.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
