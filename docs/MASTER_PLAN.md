# Master Plan — Le Café du Marché

## Vision
A website that feels like walking into the restaurant: warm, generous, authentic. Not a template — a digital extension of Paul & Matthias's personality.

---

## Phase 1: Foundation (Week 1)
> Goal: Running Next.js + Payload CMS on local dev, deployable to VPS

- [ ] Initialize Next.js 15 project with Payload CMS 3.x embedded
- [ ] Set up PostgreSQL on VPS (or local Docker for dev)
- [ ] Configure Tailwind CSS v4 with brand tokens (colors, typography, spacing)
- [ ] Set up next-intl with FR/EN routing (`/fr`, `/en`, default `/` = FR)
- [ ] Create Payload collections: `DailyMenu`, `WineCard`, `GroupMeal`, `Reservation`, `Page`
- [ ] Basic deployment pipeline: Git push → build on VPS (PM2 or Docker)
- [ ] Domain & SSL setup

### Deliverable
Blank site running at the domain with CMS admin panel accessible.

---

## Phase 2: Design System & Layout (Week 2)
> Goal: The site looks and feels right, even without all content

- [ ] Design system: color palette, typography scale, component tokens
- [ ] Layout: header (nav + language switcher), footer (contact, hours, socials, map)
- [ ] Homepage structure: hero, daily menu preview, reservation CTA, gallery teaser
- [ ] Responsive design: mobile-first, beautiful on all screens
- [ ] Animations: subtle, tasteful (scroll reveals, hover states)
- [ ] Favicon, OG images, metadata

### Deliverable
Navigable site with all pages laid out, placeholder content, design system locked in.

---

## Phase 3: Core Features (Week 3)
> Goal: The restaurant can start using the site

- [ ] **Daily Menu page** — Pulls from Payload CMS, Paul/Matthias can update via admin
- [ ] **Reservation form** — Fields: date, time, guests, name, phone, email, message
- [ ] **Reservation backend** — Store in DB, auto-reply email/SMS confirmation
- [ ] **Wine card page** — CMS-managed, categorized (rouge, blanc, rosé, bulles, etc.)
- [ ] **About page** — Paul & Matthias story, philosophy, photos
- [ ] **Contact/Access** — Map (Leaflet or static), hours, phone

### Deliverable
Fully functional site — Paul & Matthias can update menu and receive reservations.

---

## Phase 4: Group Meals & Polish (Week 4)
> Goal: All pages complete, site is polished and production-ready

- [ ] **Repas de Groupe page** — Custom formulas, pricing, contact form or reservation variant
- [ ] **Photo gallery** — Dish photography integration (optimized with Next.js Image)
- [ ] **SEO** — Structured data (Restaurant schema), meta tags, sitemap, robots.txt
- [ ] **Performance** — Lighthouse audit, image optimization, lazy loading
- [ ] **Accessibility** — WCAG AA compliance check
- [ ] **Analytics** — Privacy-friendly (Plausible or Umami, self-hosted on VPS)

### Deliverable
Production-ready website, fully functional, beautiful, fast.

---

## Phase 5: Automation & Growth (Ongoing)
> Goal: The site works for them, not the other way around

- [ ] **Reservation dashboard** — Admin view in Payload to manage bookings
- [ ] **SMS integration** — Twilio or Brevo for reservation confirmations
- [ ] **Email templates** — Beautiful branded confirmation emails
- [ ] **Capacity management** — Time slots, max covers per service (future)
- [ ] **Integration with marketing repo** — Shared design tokens, API hooks
- [ ] **Monitoring** — Uptime checks, error tracking (Sentry)

---

## Architecture Decision Records
Key decisions are documented in `docs/architecture/`:
- Why Payload CMS over Strapi/Sanity → `tech-stack.md`
- VPS deployment strategy → `infrastructure.md`
- Project file structure → `project-structure.md`

## Design Decisions
- Brand identity & color system → `docs/design/brand-identity.md`
- Page-by-page specifications → `docs/design/pages.md`
