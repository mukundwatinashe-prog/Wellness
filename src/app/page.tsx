import Link from "next/link";
import { ComplianceBadges } from "@/components/ComplianceBadges";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 gradient-mask-b bg-gradient-to-b from-primary-950/40 via-neutral-925 to-neutral-925" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(54,133,108,0.25),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-400">
            Regulated care &amp; support
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Person-centred care you can trust
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            We deliver high-quality home care and support across Scotland. Registered with
            SSSC, regulated by the Care Inspectorate, and every carer PVG-checked through
            Disclosure Scotland.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-600"
            >
              Arrange a conversation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            How we can help
          </h2>
          <p className="mt-2 max-w-2xl text-neutral-400">
            From visiting care at home to supported living and complex care, we tailor our
            support to each person and family.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Home care",
                summary:
                  "Visiting care and support in your own home so you can live independently and safely.",
                href: "/services#home-care",
              },
              {
                title: "Supported living",
                summary:
                  "Housing support and personal care designed around your goals and preferences.",
                href: "/services#support",
              },
              {
                title: "Complex &amp; specialist care",
                summary:
                  "Skilled teams for nursing-led care, dementia support and other specialist needs.",
                href: "/services#complex",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/5 bg-neutral-850/50 p-6 transition hover:border-primary-500/30 hover:bg-neutral-850"
              >
                <h3 className="font-semibold text-white group-hover:text-primary-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">{item.summary}</p>
                <span className="mt-3 inline-block text-sm font-medium text-primary-400">
                  Find out more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-primary-400 hover:text-primary-300"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance & trust – near bottom of homepage */}
      <ComplianceBadges />

      {/* CTA */}
      <section className="border-b border-white/5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to talk?
          </h2>
          <p className="mt-3 text-neutral-400">
            Whether you&apos;re a family, a referrer or a professional partner, we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-600"
            >
              Contact us
            </Link>
            <Link
              href="/referrals"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Professional referrals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
