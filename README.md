# Wellness Care Website

A professional, modern marketing website for a regulated care provider. Built with **Next.js 15**, **TypeScript** and **Tailwind CSS**, aligned with the PRD (executive summary, scope, design, IA, compliance and technical recommendations).

## Features

- **Homepage** — Hero, services preview, **compliance & trust section** (SSSC, Care Inspectorate, Disclosure Scotland / PVG) with logo placeholders, and CTA
- **Services** — Home care, supported living, complex & specialist care
- **Referrals** — For NHS, local authorities and professionals
- **Careers** — Why join, requirements, PVG/SSSC noted
- **About** — Mission, values, compliance badges
- **Contact** — Enquiries, referrals, careers
- **Privacy & Cookies** — GDPR/Cookie Law–friendly placeholders

## Compliance section (homepage)

Near the bottom of the homepage, the site highlights:

1. **SSSC** — Scottish Social Services Council registration; workforce meets national standards.
2. **Care Inspectorate** — Services regulated and inspected against national care standards.
3. **Disclosure Scotland** — All carers have a valid PVG (Protecting Vulnerable Groups) check.

Placeholder logos live in `public/logos/`. Replace with official SSSC, Care Inspectorate and Disclosure Scotland logos where you have permission (e.g. [SSSC logos](https://www.sssc.uk.com/assets/logos/)).

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Outfit (body), Fraunces (display) via next/font

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — App Router pages and layout
- `src/components/` — Header, Footer, ComplianceBadges
- `public/logos/` — SSSC, Care Inspectorate, Disclosure Scotland logo assets

## PRD alignment

The site reflects the PRD’s:

- Executive summary and audience (families, NHS/LA, professionals, candidates, partners)
- Scope (Phase 1 marketing site)
- Design & brand (colour palette, typography, principles)
- Information architecture (sitemap: Home, Services, Referrals, Careers, About, Contact, Privacy, Cookies)
- Compliance (CQC/Scotland, ICO, GDPR, Cookie Law; Equality Act–friendly structure)
- Technical direction (Next.js; ready for Sanity/Vercel when you add them)
