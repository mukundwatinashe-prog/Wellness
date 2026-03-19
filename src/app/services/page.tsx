import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Wellness Care",
  description:
    "Home care, supported living and specialist care. Person-centred, regulated support across Scotland.",
};

const services = [
  {
    id: "home-care",
    title: "Home care",
    summary:
      "Visiting care and support in your own home so you can live independently and safely.",
    points: [
      "Personal care and medication support",
      "Companionship and social support",
      "Household tasks and meal preparation",
      "Flexible visiting patterns to suit you",
    ],
  },
  {
    id: "support",
    title: "Supported living",
    summary:
      "Housing support and personal care designed around your goals and preferences.",
    points: [
      "Support to maintain your tenancy",
      "Personal care as needed",
      "Access to community and activities",
      "Partnership with housing providers",
    ],
  },
  {
    id: "complex",
    title: "Complex &amp; specialist care",
    summary:
      "Skilled teams for nursing-led care, dementia support and other specialist needs.",
    points: [
      "Nursing-led and clinical support",
      "Dementia and cognitive support",
      "Palliative and end-of-life care",
      "Transition and rehabilitation support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <header>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Our services
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-400">
          We provide regulated, person-centred care and support across Scotland. Every
          service is designed around the individual and delivered by trained, PVG-checked
          staff.
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-20 rounded-2xl border border-white/5 bg-neutral-850/50 p-8"
          >
            <h2 className="font-display text-2xl font-semibold text-white">
              {service.title}
            </h2>
            <p className="mt-3 text-neutral-400">{service.summary}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                  {point}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
