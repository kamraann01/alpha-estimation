"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Pricing",
    q: "How much does an estimate cost?",
    a: "Pricing depends on project size and complexity. Small residential projects start at $349, mid-size commercial from $699, and large or complex projects are quoted individually. We always send you a quote — with no obligation — before starting any work.",
  },
  {
    category: "Turnaround",
    q: "How fast do you deliver?",
    a: "Standard turnaround is 24–48 hours for most projects. Complex large-scale projects may take 3–5 business days. Rush delivery (same day or next morning) is available for tight bid deadlines — just let us know.",
  },
  {
    category: "Deliverables",
    q: "What format do you deliver estimates in?",
    a: "You receive a professional PDF report plus a fully editable Excel spreadsheet with line-item breakdown, organized by trade and CSI division. Both are ready to include in your bid package, share with a client, or use internally.",
  },
  {
    category: "Plans",
    q: "What if I don't have complete plans?",
    a: "No problem. We work from partial plans, sketches, schematic designs, or even a written scope description. For preliminary budgets and feasibility studies, we can produce conceptual estimates with minimal documentation.",
  },
  {
    category: "Scope",
    q: "Do you cover all trades?",
    a: "Yes — we estimate all CSI divisions: concrete & foundations, structural steel, wood framing, masonry, MEP (mechanical, electrical, plumbing), HVAC, drywall, roofing, flooring, finishes, site work, and specialty trades.",
  },
  {
    category: "Accuracy",
    q: "How accurate are your estimates?",
    a: "For detailed plan sets, our estimates are typically within ±3–10% of actual costs. We use live, geo-adjusted pricing databases updated for current labor and material market conditions. We back our work — if an estimate misses by more than ±10%, we revise at no charge.",
  },
  {
    category: "Process",
    q: "Do I work directly with my estimator?",
    a: "Yes. You communicate directly with the senior estimator assigned to your project — no call centers, no ticket queues. You can email, call, or reply to your estimate PDF with questions and get a real response the same day.",
  },
  {
    category: "Revisions",
    q: "What if I need changes after delivery?",
    a: "Professional and Enterprise plan estimates include at least one free revision. If your scope changes mid-bid, we can update the estimate quickly. Minor clarifications are always handled at no extra charge.",
  },
];

export default function FAQ({ hideHeader = false }: { hideHeader?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#0c2140]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to know before getting started. Can&apos;t find an answer?{" "}
              <Link href="/contact" className="text-teal-400 hover:text-teal-300 underline">Ask us directly.</Link>
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-xl overflow-hidden border transition-all duration-200 ${
                open === i
                  ? "border-teal-400/40 bg-[#081c30] shadow-md shadow-teal-500/5"
                  : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.03]"
              }`}
            >
              <button
                className="w-full flex items-start justify-between px-5 py-4 text-left gap-3"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <div className="flex-1">
                  <span className="text-teal-400/60 text-[10px] font-bold uppercase tracking-wider block mb-0.5">
                    {faq.category}
                  </span>
                  <span className={`font-semibold text-sm leading-snug transition-colors ${open === i ? "text-white" : "text-gray-200"}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${open === i ? "gradient-bg" : "bg-white/[0.07]"}`}>
                  {open === i
                    ? <Minus className="w-3 h-3 text-white" />
                    : <Plus className="w-3 h-3 text-gray-400" />
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
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.06] pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#081c30] border border-white/[0.08] rounded-2xl px-6 py-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Still have a question?</p>
              <p className="text-gray-400 text-xs">We respond to every inquiry within 1 business hour.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:+19283817910" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/[0.12] rounded-xl text-white text-sm font-semibold hover:bg-white/5 transition-colors">
              Call Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 gradient-bg rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-md shadow-teal-500/20"
            >
              Send a Message <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
