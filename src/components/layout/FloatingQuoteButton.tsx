"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function FloatingQuoteButton() {
  return (
    <Link
      href="/#contact"
      className="fixed bottom-6 right-5 z-40 lg:hidden inline-flex items-center gap-2 px-5 py-3.5 gradient-bg rounded-2xl text-white font-bold text-sm shadow-2xl shadow-teal-500/30 border border-teal-400/20 active:scale-95 transition-transform"
      aria-label="Get a free quote"
    >
      <MessageSquare className="w-4 h-4" />
      Get Free Quote
    </Link>
  );
}
