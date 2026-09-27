# Thapak Automotive and Robotics — Website

A Next.js 14 (App Router) marketing site built from the company's provided content.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — fonts (Archivo / IBM Plex Sans / IBM Plex Mono via next/font/google) and metadata
- `app/page.tsx` — assembles all sections
- `components/` — one component per section (Hero, About, Domains, Flagship, Pipeline, Approach, Philosophy, Industries, ManufacturingGlobal, Partner, Future, Footer, Nav, SectionHeading)
- `tailwind.config.ts` — design tokens (graphite / paper / blueprint / copper / steel palette)
- `app/globals.css` — blueprint-grid backgrounds, hairline rule utilities, hero draw-in animation

## Before you deploy

- `components/Partner.tsx` has a placeholder contact email (`info@thapakautomotive.example`) — swap in the real address.
- No logo/imagery was provided, so the design relies on typography, an SVG schematic in the hero, and a blueprint-grid motif. Add a logo/photography wherever you'd like.
- Fonts are fetched from Google Fonts at build time, so the build machine needs internet access.
