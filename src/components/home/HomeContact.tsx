"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Paperclip, X, Upload } from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const PROJECT_TYPES = [
  "Commercial Estimating",
  "Residential Estimating",
  "Quantity Takeoffs",
  "Subcontractor Estimating",
  "Industrial Estimating",
  "Conceptual / Feasibility",
  "General Inquiry",
];

export default function HomeContact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const allowed = Array.from(incoming).filter((f) => files.length + 1 <= 5);
    setFiles((prev) => [...prev, ...allowed].slice(0, 5));
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      files.forEach((f) => body.append("files", f));

      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", company: "", email: "", phone: "", projectType: "", message: "" });
        setFiles([]);
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
          <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request Your <span className="gradient-text">Free Quote</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Fill in your project details and we&apos;ll respond within 2 business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#0c2140] border border-white/10 rounded-2xl p-8"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center border border-green-500/30">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-white font-bold text-2xl">Quote Request Received!</h3>
                <p className="text-gray-400 max-w-sm">
                  Thank you! We&apos;ll review your project details and respond within 2 business hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-teal-400 text-sm hover:text-teal-300 transition-colors underline underline-offset-2"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Row 1: Name + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name *</label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className={inputCls}
                      placeholder="Smith Construction LLC"
                    />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputCls}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className={inputCls}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Type *</label>
                  <select
                    required
                    value={form.projectType}
                    onChange={e => setForm(f => ({ ...f, projectType: e.target.value }))}
                    className={inputCls + " appearance-none cursor-pointer"}
                  >
                    <option value="" className="bg-[#0c2140]">Select project type...</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#0c2140]">{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={inputCls + " resize-none"}
                    placeholder="Briefly describe your project — type, size, location, and any relevant details."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Attach Plans / Documents
                    <span className="text-gray-500 font-normal ml-1.5">(PDF, DWG, DXF, RVT, JPG, PNG — max 5 files)</span>
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-xl px-5 py-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
                      dragging
                        ? "border-teal-400/70 bg-teal-400/[0.04]"
                        : "border-white/10 hover:border-teal-400/40 hover:bg-white/[0.02]"
                    }`}
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-6 h-6 text-teal-400/70" />
                    <p className="text-gray-400 text-sm text-center">
                      <span className="text-teal-400 font-medium">Click to upload</span> or drag &amp; drop
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".pdf,.dwg,.dxf,.rvt,.jpg,.jpeg,.png,.xlsx,.xls,.zip"
                      className="hidden"
                      onChange={(e) => addFiles(e.target.files)}
                    />
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {files.map((f, i) => (
                        <li key={i} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-3 py-2 border border-white/[0.06]">
                          <div className="flex items-center gap-2 min-w-0">
                            <Paperclip className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="text-gray-300 text-xs truncate">{f.name}</span>
                            <span className="text-gray-500 text-xs shrink-0">({(f.size / 1024).toFixed(0)} KB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                            className="ml-2 text-gray-500 hover:text-red-400 transition-colors shrink-0"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-xl text-white font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-teal-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Quote Request"}
                  {status !== "loading" && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  We respond within 2 business hours &bull; No obligation &bull; 100% free
                </p>
              </form>
            )}
          </motion.div>

          {/* Sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact info */}
            <div className="bg-[#0c2140] border border-white/10 rounded-2xl p-6 space-y-5">
              <h3 className="text-white font-bold text-lg">Contact Information</h3>
              {[
                { Icon: Phone, label: "Call us directly", value: "+1 (928) 381-7910", href: "tel:+19283817910" },
                { Icon: Mail, label: "Email us", value: "contact@alphaestimation.com", href: "mailto:contact@alphaestimation.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-teal-400/10 border border-teal-400/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.Icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">{item.label}</p>
                    <a href={item.href} className="text-white font-semibold text-sm hover:text-teal-400 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-teal-400/10 border border-teal-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Office location</p>
                  <p className="text-white font-semibold text-sm">
                    117 S Lexington Street STE 100<br />
                    Harrisonville, MO 64701
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-xs pt-1 border-t border-white/[0.06]">
                Mon–Fri: 8am–6pm CST &bull; Saturday: 9am–2pm &bull; Rush: 24/7
              </p>
            </div>

            {/* What happens next */}
            <div className="bg-[#0c2140] border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-base mb-4">What Happens Next?</h3>
              <ol className="space-y-4">
                {[
                  { n: "1", title: "We review your plans", desc: "Our estimators assess your project scope within 1–2 hours." },
                  { n: "2", title: "We send a quote", desc: "You receive a fixed-price quote with turnaround time." },
                  { n: "3", title: "Estimate delivered", desc: "Full itemized estimate in PDF + Excel, ready to bid." },
                ].map((step) => (
                  <li key={step.n} className="flex gap-3">
                    <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-white text-sm font-semibold">{step.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Response Time", value: "< 2 hrs" },
                { label: "Projects Done", value: "650+" },
                { label: "Satisfaction", value: "98%" },
                { label: "Turnaround", value: "24–48hr" },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 bg-[#0c2140] rounded-xl border border-white/[0.08]">
                  <p className="text-xl font-bold gradient-text">{s.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
