import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wellness Care",
  description:
    "Get in touch for care enquiries, professional referrals or career opportunities.",
};

const regionalNumbers = [
  {
    council: "Fife Council",
    display: "07354 937042",
    tel: "+447354937042",
  },
  {
    council: "Falkirk Council",
    display: "07340 881019",
    tel: "+447340881019",
  },
  {
    council: "Perth & Kinross Council",
    display: "07340 881019",
    tel: "+447340881019",
  },
] as const;

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
                href="mailto:admin@wellness-scs.co.uk"
                className="text-primary-400 hover:text-primary-300"
              >
                admin@wellness-scs.co.uk
              </a>
            </li>
            <li>
              <span className="mb-2 block text-neutral-500">Phone by council area:</span>
              <ul className="mt-2 space-y-3 border-l-2 border-primary-500/30 pl-4">
                {regionalNumbers.map(({ council, display, tel }) => (
                  <li key={council}>
                    <span className="block text-sm text-neutral-500">{council}</span>
                    <a
                      href={`tel:${tel}`}
                      className="text-base font-medium text-primary-400 hover:text-primary-300"
                    >
                      {display}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <span className="text-neutral-500">Address:</span>
              <br />
              Flexspace Business Units, Queensferry Rd, Dunfermline KY11 8UU
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
