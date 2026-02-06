# Le Café du Marché — Project Context

## Overview
Website for **Le Café du Marché**, a French brasserie in Nantes near La Cité des Congrès.
Owners: **Paul** and **Matthias** — bon vivants, generous, everything homemade.
Developer: Edgar (you're working with him as co-founder on this project).

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload CMS 3.x (embedded in Next.js — single deployment)
- **Database**: PostgreSQL (on the VPS)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **i18n**: next-intl (French + English)
- **Notifications**: Brevo or Resend (email) + Twilio or Brevo (SMS)
- **Hosting**: Hetzner VPS (Ubuntu, Node.js)

## Key Design Principles
- Warm French brasserie feel: varnished wood textures, olive green tones, cream accents
- Nantes identity: subtle nods to Tour Lu, local culture
- Generous, convivial, homemade — the site should feel like the food
- NOT the old website — fresh, modern, but soulful
- Bilingual FR/EN with quality translations (not afterthought English)

## Pages
1. **Homepage** — Hero, daily menu teaser, reservation CTA, ambiance photos
2. **La Carte du Jour** — Daily menu, updated via CMS by Paul/Matthias
3. **La Carte des Vins** — Wine card, also CMS-managed
4. **Réserver** — Reservation form with auto-confirmation (email/SMS)
5. **Repas de Groupe** — Group meal packages, custom formulas
6. **À Propos** — Story of Paul & Matthias, the restaurant's philosophy
7. **Contact / Accès** — Map, hours, phone, embedded in footer or standalone

## Knowledge Base
Detailed specs live in `docs/`:
- `docs/MASTER_PLAN.md` — Phased development plan
- `docs/architecture/` — Tech stack, infra, project structure
- `docs/design/` — Brand identity, page-by-page specs
- `docs/features/` — Each feature documented independently
- `docs/content/` — Restaurant info, SEO
- `docs/automation/` — Tools, workflows, skills

## Commands (once project is initialized)
```bash
pnpm dev          # Local dev server
pnpm build        # Production build
pnpm payload      # Payload CMS CLI
pnpm lint         # Lint
```

## Important Notes
- The old website (lecafedumarche.com) exists but its design is terrible — never use it as reference
- Instagram: @cafe_du_marche_nantes — use for vibe/content reference only
- Logo is in `assets/logo/` — olive green (#8B8B3E approx) + cream (#E8DFC0 approx) are starting colors but we're being creative
- Marketing is a separate repo — this project is the website only
- Menu changes DAILY — the CMS must make this dead simple for non-technical users
