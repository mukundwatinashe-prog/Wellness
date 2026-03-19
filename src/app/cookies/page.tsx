import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies | Wellness Care",
  description: "How we use cookies and similar technologies. Cookie Law compliant.",
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
        Cookies
      </h1>
      <p className="mt-3 text-neutral-400">
        We comply with cookie law and only use cookies that are strictly necessary for the
        operation of the website, or with your consent where required.
      </p>
      <div className="mt-10 space-y-6 text-neutral-400">
        <section>
          <h2 className="font-semibold text-white">Necessary cookies</h2>
          <p className="mt-1">
            These are required for the site to function (e.g. security, load balancing).
            They do not require consent.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-white">Optional cookies</h2>
          <p className="mt-1">
            If we use analytics or marketing cookies, we will ask for your consent and
            allow you to change your preferences.
          </p>
        </section>
      </div>
    </div>
  );
}
