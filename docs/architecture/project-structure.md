# Next.js + Payload CMS Project Structure

```
cafe-du-marche/
├── CLAUDE.md                          # Claude Code context (root)
├── docs/                              # Knowledge base (not deployed)
├── assets/                            # Source assets (logo, raw images)
│
├── src/
│   ├── app/
│   │   ├── (frontend)/                # Route group for public site
│   │   │   ├── [locale]/              # i18n dynamic segment
│   │   │   │   ├── layout.tsx         # Main layout (header, footer)
│   │   │   │   ├── page.tsx           # Homepage
│   │   │   │   ├── menu/
│   │   │   │   │   └── page.tsx       # Daily menu
│   │   │   │   ├── vins/
│   │   │   │   │   └── page.tsx       # Wine card
│   │   │   │   ├── reservation/
│   │   │   │   │   └── page.tsx       # Reservation form
│   │   │   │   ├── groupe/
│   │   │   │   │   └── page.tsx       # Group meals
│   │   │   │   └── a-propos/
│   │   │   │       └── page.tsx       # About
│   │   │   └── api/
│   │   │       ├── reservation/
│   │   │       │   └── route.ts       # Reservation submission endpoint
│   │   │       └── webhook/
│   │   │           └── route.ts       # External webhooks (SMS provider etc.)
│   │   │
│   │   └── (payload)/                 # Route group for Payload admin
│   │       └── admin/
│   │           └── [[...segments]]/
│   │               └── page.tsx       # Payload admin catch-all
│   │
│   ├── collections/                   # Payload CMS collections
│   │   ├── DailyMenu.ts              # Daily menu entries
│   │   ├── WineCard.ts               # Wine card items
│   │   ├── GroupMeal.ts              # Group meal formulas
│   │   ├── Reservation.ts            # Reservation submissions
│   │   ├── Media.ts                  # Uploaded images
│   │   └── User.ts                   # Admin users (Paul, Matthias)
│   │
│   ├── globals/                       # Payload globals (singleton content)
│   │   ├── SiteSettings.ts           # Hours, address, phone, socials
│   │   └── About.ts                  # About page content
│   │
│   ├── components/
│   │   ├── ui/                        # Design system primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── reservation/
│   │   │   └── ReservationForm.tsx
│   │   ├── menu/
│   │   │   ├── MenuSection.tsx
│   │   │   └── MenuItem.tsx
│   │   └── home/
│   │       ├── Hero.tsx
│   │       ├── DailyMenuPreview.tsx
│   │       └── ReservationCTA.tsx
│   │
│   ├── lib/
│   │   ├── payload.ts                 # Payload client helpers
│   │   ├── notifications.ts           # Email/SMS sending logic
│   │   └── utils.ts                   # Shared utilities
│   │
│   ├── i18n/
│   │   ├── config.ts                  # next-intl configuration
│   │   └── messages/
│   │       ├── fr.json                # French translations
│   │       └── en.json                # English translations
│   │
│   └── styles/
│       └── globals.css                # Tailwind imports + CSS custom properties
│
├── public/
│   ├── fonts/                         # Self-hosted fonts
│   ├── images/                        # Static images (optimized)
│   └── favicon.ico
│
├── payload.config.ts                  # Payload CMS configuration
├── next.config.ts                     # Next.js configuration
├── tailwind.config.ts                 # Tailwind (if needed beyond CSS)
├── tsconfig.json
├── package.json
└── .env.local                         # Local environment variables
```

## Key Architectural Decisions

### Route Groups
- `(frontend)` — Public-facing pages, wrapped in site layout
- `(payload)` — Payload admin panel, separate layout

### Locale Routing
- `/` redirects to `/fr` (default)
- `/en` for English
- All public routes nested under `[locale]`

### Collections vs Globals
- **Collections** (multiple entries): DailyMenu, WineCard, GroupMeal, Reservation, Media
- **Globals** (singletons): SiteSettings, About — content that exists once

### Component Organization
- `ui/` — Reusable design system components (no business logic)
- `layout/` — Structural components (header, footer)
- Feature folders (`reservation/`, `menu/`, `home/`) — Page-specific components
