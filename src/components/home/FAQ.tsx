"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does an estimate cost?",
    a: "Pricing depends on project size and complexity. Small residential projects start at $349, mid-size commercial from $699, and large projects are quoted individually. We always send you a quote before starting.",
  },
  {
    q: "How fast do you deliver?",
    a: "Standard turnaround is 24–48 hours for most projects. For large or complex projects it may be 3–5 business days. Rush delivery is available.",
  },
  {
    q: "What format do you deliver estimates in?",
    a: "You receive a professional PDF report and an Excel spreadsheet with full line-item breakdown. Both are easy to review and share with clients.",
  },
  {
    q: "What if I don't have complete plans?",
    a: "We can work from partial plans, sketches, or even a scope description for conceptual estimates. Just let us know what you have and we'll advise on the best approach.",
  },
  {
    q: "Do you cover all trades?",
    a: "Yes. We estimate all CSI divisions including concrete, framing, drywall, roofing, MEP, electrical, plumbing, HVAC, finishes, and site work.",
  },
  {
    q: "How accurate are your estimates?",
    a: "Our estimates are within ±10% of actual costs for detailed plans. We use up-to-date cost databases adjusted for your project's location and current market conditions.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[#0d1225]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-orange-500 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
