"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-[#0a0f1e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative gradient-bg rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white rounded-full" />
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Win More Bids?
            </h2>
            <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
              Send us your plans today and get a professional estimate delivered within 24–48 hours. Stop leaving money on the table.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+19283817910"
                className="px-8 py-4 border-2 border-white/40 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Call +1 (928) 381-7910
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
