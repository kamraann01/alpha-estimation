"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error in development only to avoid leaking stack traces in production
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0f1e]">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Something went wrong</h1>
        <p className="text-gray-400 mb-8">
          An unexpected error occurred. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 gradient-bg rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link href="/" className="px-6 py-3 glass rounded-xl text-white font-semibold border border-white/10 hover:border-white/20 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
