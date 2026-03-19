import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Wellness Care",
  description:
    "Join our team. We're looking for caring, motivated people. PVG required; we support registration and development.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Careers
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          We&apos;re always interested in hearing from people who want to make a difference in
          care. All successful candidates will need a PVG check through Disclosure Scotland
          and we support SSSC registration where required.
        </p>
      </header>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
          <h2 className="font-display text-xl font-semibold text-white">
            Why join us
          </h2>
          <ul className="mt-4 space-y-3 text-neutral-400">
            <li>• Regulated, supportive environment</li>
            <li>• Training and development</li>
            <li>• SSSC registration support</li>
            <li>• Competitive terms and conditions</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
          <h2 className="font-display text-xl font-semibold text-white">
            Requirements
          </h2>
          <ul className="mt-4 space-y-3 text-neutral-400">
            <li>• PVG membership (Disclosure Scotland) for regulated roles</li>
            <li>• Right to work in the UK</li>
            <li>• Values that match our person-centred approach</li>
          </ul>
        </section>
      </div>

      <div className="mt-14 rounded-2xl border border-primary-500/30 bg-primary-950/30 p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-white">
          Get in touch
        </h2>
        <p className="mt-2 text-neutral-400">
          Send us your CV and a short note about the kind of role you&apos;re looking for.
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
