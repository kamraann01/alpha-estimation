"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function HomeContact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-teal-400/50 focus:bg-white/[0.06] transition-all";

  return (
    <section className="section-padding bg-[#081c30]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your <span className="gradient-text">Free Quote</span> Today
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Send us a message and we’ll respond within 2 hours during business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0c2140] border border-white/10 rounded-2xl p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center border border-green-500/30">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                <p className="text-gray-400">We’ll get back to you within 2 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-teal-400 text-sm hover:text-teal-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputCls}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputCls}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Type *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className={inputCls + " appearance-none cursor-pointer"}
                  >
                    <option value="" className="bg-[#0c2140]">Select service type...</option>
                    <option value="Commercial Estimating" className="bg-[#0c2140]">Commercial Estimating</option>
                    <option value="Residential Estimating" className="bg-[#0c2140]">Residential Estimating</option>
                    <option value="Takeoff Services" className="bg-[#0c2140]">Takeoff Services</option>
                    <option value="Subcontractor Estimating" className="bg-[#0c2140]">Subcontractor Estimating</option>
                    <option value="Industrial Estimating" className="bg-[#0c2140]">Industrial Estimating</option>
                    <option value="General Inquiry" className="bg-[#0c2140]">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={inputCls + " resize-none"}
                    placeholder="Briefly describe your project — type, size, location, and any relevant details."
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-xl text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-teal-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  {status !== "loading" && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { Icon: Phone, label: "Call us directly", value: "+1 (928) 381-7910", href: "tel:+19283817910" },
                  { Icon: Mail,  label: "Email us",        value: "contact@alphaestimation.com", href: "mailto:contact@alphaestimation.com" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-400/10 border border-teal-400/20 rounded-xl flex items-center justify-center shrink-0">
                      <item.Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-0.5">{item.label}</p>
                      <a href={item.href} className="text-white font-semibold hover:text-teal-400 transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-400/10 border border-teal-400/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-0.5">Office location</p>
                    <p className="text-white font-semibold">
                      117 S Lexington Street STE 100<br />
                      Harrisonville, MO 64701
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <p className="text-gray-400 text-sm mb-5 font-medium">Why contractors choose us</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Response Time", value: "< 2 hrs" },
                  { label: "Projects Done",  value: "500+" },
                  { label: "Satisfaction",   value: "98%" },
                  { label: "Turnaround",     value: "24–48hr" },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 bg-white/[0.03] rounded-xl border border-white/[0.06]">
                    <p className="text-xl font-bold gradient-text">{s.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              Mon–Fri: 8am–6pm CST · Saturday: 9am–2pm · Rush projects: 24/7
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
