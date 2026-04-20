"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does an estimate cost?",
    a: "Pricing depends on project size and complexity. Small residential projects start at $349, mid-size commercial from $699, and large projects are quoted individually. We always send you a quote before starting.",
  },
  {
    q: "How fast do you deliver?",
    a: "Standard turnaround is 24–48 hours for most projects. For large or complex projects it may be 3–5 business days. Rush delivery is available for tight deadlines.",
  },
  {
    q: "What format do you deliver estimates in?",
    a: "You receive a professional PDF report and an Excel spreadsheet with full line-item breakdown, organized by trade and CSI division. Both are easy to review and share with clients.",
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
  const [open, setOpen] = useState<number | null>(0);

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
          <p className="text-gray-400 text-lg">Everything you need to know before getting started.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-xl overflow-hidden border transition-colors duration-200 ${
                open === i ? "border-orange-500/40 bg-[#131a2e]" : "border-white/8 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`font-semibold pr-4 text-base transition-colors ${open === i ? "text-white" : "text-gray-200"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "gradient-bg" : "bg-white/10"}`}>
                  {open === i
                    ? <Minus className="w-3.5 h-3.5 text-white" />
                    : <Plus className="w-3.5 h-3.5 text-gray-400" />
                  }
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

