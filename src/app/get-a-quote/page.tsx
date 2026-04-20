"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, CheckCircle, Phone, Mail } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  projectSize: z.string().min(1, "Project size is required"),
  location: z.string().min(2, "Project location is required"),
  turnaround: z.string().min(1, "Turnaround time is required"),
  description: z.string().min(10, "Please describe your project"),
});

type FormData = z.infer<typeof schema>;

export default function GetAQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // In production: send to API route or email service
    console.log(data);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Quote Request Sent!</h2>
          <p className="text-gray-400 mb-8">We&apos;ll review your project details and get back to you within 2–4 business hours.</p>
          <a href="/" className="inline-block px-6 py-3 gradient-bg rounded-xl text-white font-semibold hover:opacity-90 transition-opacity">
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">Free Quote</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your <span className="gradient-text">Free Estimate</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll send you a detailed quote for our estimating services within 2–4 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="q-name" className="block text-sm text-gray-300 mb-2">Full Name *</label>
                  <input id="q-name" {...register("name")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="John Smith" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-email" className="block text-sm text-gray-300 mb-2">Email *</label>
                  <input id="q-email" {...register("email")} type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@company.com" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-phone" className="block text-sm text-gray-300 mb-2">Phone *</label>
                  <input id="q-phone" {...register("phone")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="+1 (555) 000-0000" />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-company" className="block text-sm text-gray-300 mb-2">Company Name</label>
                  <input id="q-company" {...register("company")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your Company LLC" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="q-projectType" className="block text-sm text-gray-300 mb-2">Project Type *</label>
                  <select id="q-projectType" {...register("projectType")} className="w-full bg-[#0d1225] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                    <option value="">Select type...</option>
                    <option>Commercial</option>
                    <option>Residential</option>
                    <option>Industrial</option>
                    <option>Renovation / Remodel</option>
                    <option>Subcontractor Trade</option>
                    <option>Other</option>
                  </select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-projectSize" className="block text-sm text-gray-300 mb-2">Project Size *</label>
                  <select id="q-projectSize" {...register("projectSize")} className="w-full bg-[#0d1225] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                    <option value="">Select size...</option>
                    <option>Under 2,000 sq ft</option>
                    <option>2,000 – 10,000 sq ft</option>
                    <option>10,000 – 50,000 sq ft</option>
                    <option>50,000+ sq ft</option>
                    <option>Not sure</option>
                  </select>
                  {errors.projectSize && <p className="text-red-400 text-xs mt-1">{errors.projectSize.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-location" className="block text-sm text-gray-300 mb-2">Project Location *</label>
                  <input id="q-location" {...register("location")} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors" placeholder="City, State / Country" />
                  {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
                </div>
                <div>
                  <label htmlFor="q-turnaround" className="block text-sm text-gray-300 mb-2">Turnaround Needed *</label>
                  <select id="q-turnaround" {...register("turnaround")} className="w-full bg-[#0d1225] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors">
                    <option value="">Select...</option>
                    <option>24 hours (Rush)</option>
                    <option>48 hours (Standard)</option>
                    <option>3–5 business days</option>
                    <option>Flexible</option>
                  </select>
                  {errors.turnaround && <p className="text-red-400 text-xs mt-1">{errors.turnaround.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="q-description" className="block text-sm text-gray-300 mb-2">Project Description *</label>
                <textarea id="q-description" {...register("description")} rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Describe your project, scope of work, trades needed, and any special requirements..." />
                {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
              </div>

              {/* File upload hint */}
              <div className="glass rounded-xl p-4 flex items-center gap-3 border border-dashed border-white/20">
                <Upload className="w-5 h-5 text-orange-500 shrink-0" />
                <p className="text-gray-400 text-sm">
                  Have plans? Email them to{" "}
                  <a href="mailto:contact@alphaestimation.com" className="text-orange-400 hover:text-orange-300">
                    contact@alphaestimation.com
                  </a>{" "}
                  after submitting this form.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 gradient-bg rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit Quote Request →"}
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Contact Directly</h3>
              <div className="space-y-4">
                <a href="tel:+19283817910" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <p className="text-white text-sm font-medium">+1 (928) 381-7910</p>
                  </div>
                </a>
                <a href="mailto:contact@alphaestimation.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email Us</p>
                    <p className="text-white text-sm font-medium">contact@alphaestimation.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">What Happens Next?</h3>
              <ol className="space-y-4">
                {[
                  "We review your project details",
                  "We send you a service quote within 2–4 hours",
                  "You approve and send your plans",
                  "We deliver your full estimate",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-gray-400 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
