import Image from "next/image";

const badges = [
  {
    name: "SSSC",
    fullName: "Scottish Social Services Council",
    description:
      "We are registered with the Scottish Social Services Council. Our workforce meets national standards for skills, conduct and training in social care.",
    logoPath: "/logos/sssc.svg",
    logoAlt: "Scottish Social Services Council",
  },
  {
    name: "Care Inspectorate",
    fullName: "Care Inspectorate",
    description:
      "Our services are regulated by the Care Inspectorate. We are inspected against national care standards so you can be confident in the quality of care we provide.",
    logoPath: "/logos/care-inspectorate.svg",
    logoAlt: "Care Inspectorate",
  },
  {
    name: "Disclosure Scotland",
    fullName: "Disclosure Scotland – PVG Scheme",
    description:
      "All our carers hold a valid PVG (Protecting Vulnerable Groups) check through Disclosure Scotland. We never place anyone in a regulated role without an up-to-date PVG.",
    logoPath: "/logos/disclosure-scotland.svg",
    logoAlt: "Disclosure Scotland",
  },
];

export function ComplianceBadges() {
  return (
    <section
      className="border-y border-white/5 bg-neutral-850/50 py-16 sm:py-20"
      aria-labelledby="compliance-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="compliance-heading"
          className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
        >
          Regulated &amp; trusted
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-400">
          We meet the highest regulatory and safeguarding standards so families and
          referrers can have full confidence in our service.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col rounded-2xl border border-white/5 bg-neutral-850 p-6 shadow-lg"
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex-shrink-0 flex h-16 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                  <Image
                    src={badge.logoPath}
                    alt={badge.logoAlt}
                    width={96}
                    height={64}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{badge.fullName}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {badge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-500">
          We comply with SSSC, Care Inspectorate and Disclosure Scotland requirements.
          Official logos can be added to <code className="rounded bg-white/10 px-1">public/logos/</code> where permitted by each body.
        </p>
      </div>
    </section>
  );
}
