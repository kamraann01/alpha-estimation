import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0f1e]">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold gradient-text mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 gradient-bg rounded-xl text-white font-semibold hover:opacity-90 transition-opacity">
            Back to Home
          </Link>
          <Link href="/get-a-quote" className="px-6 py-3 glass rounded-xl text-white font-semibold border border-white/10 hover:border-white/20 transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
