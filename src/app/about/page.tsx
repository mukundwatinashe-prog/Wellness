import type { Metadata } from "next";
import { ComplianceBadges } from "@/components/ComplianceBadges";

export const metadata: Metadata = {
  title: "About Us | Wellness Care",
  description:
    "Wellness Care is a regulated care provider. SSSC registered, Care Inspectorate regulated, PVG-checked staff.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            About us
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Wellness Care delivers person-centred care and support across Scotland. We are
            registered with the Scottish Social Services Council, regulated by the Care
            Inspectorate, and all our carers hold a valid PVG check through Disclosure
            Scotland.
          </p>
        </header>

        <div className="mt-14 space-y-10">
          <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              Our mission
            </h2>
            <p className="mt-3 text-neutral-400">
              To provide high-quality, dignified care that helps people live well at home
              and in their community. We put the person at the centre of everything we do
              and work in partnership with families, referrers and other professionals.
            </p>
          </section>

          <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              Our values
            </h2>
            <ul className="mt-4 space-y-2 text-neutral-400">
              <li>• <strong className="text-white">Person-centred</strong> — care that reflects each individual&apos;s wishes and goals</li>
              <li>• <strong className="text-white">Respect and dignity</strong> — treating everyone with kindness and respect</li>
              <li>• <strong className="text-white">Quality and safety</strong> — regulated, trained and PVG-checked teams</li>
              <li>• <strong className="text-white">Partnership</strong> — working openly with families and professionals</li>
            </ul>
          </section>
        </div>
      </div>

      <ComplianceBadges />
    </>
  );
}
