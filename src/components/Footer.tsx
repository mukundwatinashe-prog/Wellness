import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services", label: "Our Services" },
    { href: "/services#home-care", label: "Home Care" },
    { href: "/services#support", label: "Support Living" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/referrals", label: "Referrals" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-850">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Wellness Care
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              Regulated, person-centred care and support across Scotland.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                {heading}
              </h3>
              <ul className="mt-3 space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-neutral-400 transition hover:text-primary-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/5 pt-8 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Wellness Care. All rights reserved.
          Registered with SSSC · Regulated by Care Inspectorate · PVG checked via Disclosure Scotland.
        </div>
      </div>
    </footer>
  );
}
