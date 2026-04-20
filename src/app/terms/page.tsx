import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>
        <div className="space-y-8 text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Services</h2>
            <p>Alpha Estimation provides construction estimating services. All estimates are prepared based on information and plans provided by the client. Estimates are for bidding purposes only and are not guaranteed final costs.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Payment</h2>
            <p>Payment is required before delivery of completed estimates. All fees are clearly communicated before work begins. Rush fees may apply for expedited turnarounds.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Accuracy Disclaimer</h2>
            <p>While we strive for the highest accuracy, all estimates are based on current market pricing and project documents provided. Alpha Estimation is not liable for cost overruns, missed scope, or errors in client-provided documents.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Confidentiality</h2>
            <p>All project information and plans submitted to Alpha Estimation are kept strictly confidential and are not shared with third parties.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
            <p>Questions? Email us at <a href="mailto:contact@alphaestimation.com" className="text-orange-400">contact@alphaestimation.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
