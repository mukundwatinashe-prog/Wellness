import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wellness Care",
  description:
    "Get in touch for care enquiries, professional referrals or career opportunities.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Whether you&apos;re a family looking for care, a professional making a referral, or
          interested in joining our team, we&apos;d like to hear from you.
        </p>
      </header>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
          <h2 className="font-display text-xl font-semibold text-white">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-4 text-neutral-400">
            <li>
              <span className="text-neutral-500">Email:</span>{" "}
              <a
                href="mailto:info@wellnesscare.example"
                className="text-primary-400 hover:text-primary-300"
              >
                info@wellnesscare.example
              </a>
            </li>
            <li>
              <span className="text-neutral-500">Phone:</span>{" "}
              <a
                href="tel:+440000000000"
                className="text-primary-400 hover:text-primary-300"
              >
                0000 000 0000
              </a>
            </li>
            <li>
              <span className="text-neutral-500">Address:</span>
              <br />
              [Your business address]
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/5 bg-neutral-850/50 p-8">
          <h2 className="font-display text-xl font-semibold text-white">
            What to include
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>• Your name and how you&apos;d like to be contacted</li>
            <li>• Whether it&apos;s a care enquiry, referral or career interest</li>
            <li>• Any relevant details (area, type of support, timescale)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
