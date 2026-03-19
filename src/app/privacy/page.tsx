import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wellness Care",
  description: "How we collect, use and protect your personal data. GDPR and ICO compliant.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
        Privacy policy
      </h1>
      <p className="mt-3 text-neutral-400">
        We take your privacy seriously and comply with UK GDPR and the Data Protection Act
        2018. We are registered with the ICO where required.
      </p>
      <div className="mt-10 space-y-6 text-neutral-400">
        <section>
          <h2 className="font-semibold text-white">What we collect</h2>
          <p className="mt-1">
            We collect only what is necessary to provide care, process referrals, or
            respond to enquiries (e.g. name, contact details, relevant care information).
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-white">How we use it</h2>
          <p className="mt-1">
            Your information is used to deliver and improve our services, fulfil legal and
            regulatory obligations, and communicate with you where appropriate.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-white">Your rights</h2>
          <p className="mt-1">
            You have rights to access, rectify, erase, restrict processing and object. You
            can contact us to exercise these rights or complain to the ICO.
          </p>
        </section>
      </div>
    </div>
  );
}
