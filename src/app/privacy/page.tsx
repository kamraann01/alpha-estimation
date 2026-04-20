import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: January 1, 2025</p>
        <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Information We Collect</h2>
            <p>We collect information you provide directly, such as when you request a quote or contact us. This may include your name, email address, phone number, company name, and project details.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, respond to inquiries, send you estimates and related communications, and improve our website.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to protect our rights.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:contact@alphaestimation.com" className="text-orange-400">contact@alphaestimation.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
