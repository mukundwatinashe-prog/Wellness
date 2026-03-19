import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Referrals | Wellness Care",
  description:
    "Refer a client or patient to our regulated care and support services. For NHS, local authorities and professionals.",
};

export default function ReferralsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Professional referrals
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          We work with NHS boards, local authorities and other professionals to provide
          person-centred care and support. Our referral process is straightforward and we
          respond promptly.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
          <h2 className="font-display text-xl font-semibold text-white">
            Who we work with
          </h2>
          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>• NHS and health and social care partnerships</li>
            <li>• Local authority social work and commissioning</li>
            <li>• GPs, district nurses and other health professionals</li>
            <li>• Families and individuals (self-referral)</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
          <h2 className="font-display text-xl font-semibold text-white">
            What you can expect
          </h2>
          <ul className="mt-4 space-y-2 text-neutral-400">
            <li>• Clear response times and communication</li>
            <li>• Care plans aligned to assessed needs</li>
            <li>• SSSC registration and Care Inspectorate regulation</li>
            <li>• PVG-checked staff via Disclosure Scotland</li>
          </ul>
        </section>
      </div>

      <div className="mt-14 rounded-2xl border border-primary-500/30 bg-primary-950/30 p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-white">
          Make a referral
        </h2>
        <p className="mt-2 text-neutral-400">
          Contact us by phone or email with the person&apos;s details and we&apos;ll get back to you
          as soon as possible.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-600"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
