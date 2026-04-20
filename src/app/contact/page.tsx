"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Message Sent!</h2>
          <p className="text-gray-400 mb-8">We&apos;ll get back to you within 1–2 business hours.</p>
          <Link href="/" className="inline-block px-6 py-3 gradient-bg rounded-xl text-white font-semibold hover:opacity-90 transition-opacity">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
          <h1 className="text-5xl font-bold text-white mb-4">Get In <span className="gradient-text">Touch</span></h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Have a question or ready to start? We&apos;d love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {[
              { icon: Phone, title: "Phone", value: "+1 (928) 381-7910", href: "tel:+19283817910", external: false },
              { icon: Mail, title: "Email", value: "contact@alphaestimation.com", href: "mailto:contact@alphaestimation.com", external: false },
              { icon: MapPin, title: "Office", value: "117 S Lexington Street STE 100, Harrisonville, MO 64701", href: "https://maps.google.com/?q=117+S+Lexington+Street+STE+100+Harrisonville+MO+64701", external: true },
            ].map((item, i) => (
              <a key={i} href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-orange-500/30 transition-all">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">{item.title}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}
            <div className="glass rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Business Hours</p>
              <p className="text-white font-medium mt-1">Mon – Fri: 8:00 AM – 6:00 PM CST</p>
              <p className="text-gray-400 text-sm mt-1">We respond to emails 7 days a week.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-2">Your Name</label>
                <input id="contact-name" name="name" required autoComplete="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="John Smith" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-2">Email Address</label>
                <input id="contact-email" name="email" required type="email" autoComplete="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm text-gray-300 mb-2">Subject</label>
                <input id="contact-subject" name="subject" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="What can we help with?" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea id="contact-message" name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Tell us about your project or question..." />
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 gradient-bg rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-60">
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
