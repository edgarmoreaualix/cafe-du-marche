# Tools, Skills & Workflow — 10x Development Strategy

## When to Use What

### Claude Code (this CLI)
Use for **all hands-on development**:
- Scaffolding the Next.js + Payload project
- Writing components, collections, API routes
- Configuring infrastructure (Nginx, PM2, SSL)
- Debugging, refactoring, testing
- Git operations, deployments
- Reading and editing code

### Claude Projects (claude.ai)
Use for **thinking, planning, and content**:
- Brainstorming design directions (upload screenshots for feedback)
- Writing restaurant copy (About page, marketing text)
- Translating content FR ↔ EN with quality and nuance
- Reviewing design mockups (upload Figma exports or screenshots)
- Discussing architecture decisions before implementing
- Writing email/SMS templates with the right tone
- SEO content strategy

### Rule of Thumb
> If it touches files → Claude Code
> If it touches ideas → Claude Projects

---

## Recommended Dev Tools

### Design & Prototyping
- **v0.dev** — Generate UI components from prompts, export to Next.js/Tailwind
  - Use for: rapid prototyping of pages, getting a visual starting point
  - Workflow: describe page → get component → refine in Claude Code
- **Figma** (optional) — If Edgar wants pixel-perfect designs before coding

### Development
- **pnpm** — Package manager (fast, strict)
- **Biome** — Linter + formatter (faster than ESLint + Prettier)
- **TypeScript** — Strict mode, no `any`

### CMS
- **Payload CMS 3.x** — Already chosen, embedded in Next.js
- Admin panel at `/admin` — Paul & Matthias's interface

### Email
- **React Email** — Build email templates as React components
- **Brevo** (or Resend) — Send transactional emails

### Deployment
- **PM2** — Process manager on VPS
- **Nginx** — Reverse proxy
- **Certbot** — SSL certificates
- **GitHub Actions** (optional) — CI/CD pipeline if not using simple git deploy

### Monitoring
- **Umami** — Self-hosted analytics (GDPR-friendly, runs on same VPS)
- **Sentry** — Error tracking (free tier)
- **Uptime Kuma** — Self-hosted uptime monitoring

### Image Optimization
- **Sharp** — Used by Next.js Image under the hood
- Dish photos: provide originals, Next.js handles responsive sizes

---

## Development Workflow

### Daily Flow
```
1. Pick a feature from MASTER_PLAN.md
2. Read the relevant docs/features/ file for context
3. Implement in Claude Code (reference CLAUDE.md)
4. Test locally
5. Commit with clear message
6. Deploy to VPS (git push → auto-build)
```

### Working with Claude Code Efficiently
1. **Always have CLAUDE.md updated** — It's auto-loaded as context
2. **Reference docs/ files** — Tell Claude Code to read specific docs before implementing
3. **Use the knowledge base** — "Read docs/features/reservation-system.md then implement the form"
4. **Iterate in small chunks** — One feature per session works best
5. **Use git branches** — Feature branches, merge to main when ready

### Prompt Patterns for Claude Code

#### Starting a feature
```
Read docs/features/daily-menu-cms.md and docs/architecture/project-structure.md,
then implement the DailyMenu Payload collection and the menu page.
```

#### Design implementation
```
Read docs/design/brand-identity.md and docs/design/pages.md (section: Homepage),
then build the homepage layout with the design system.
```

#### Bug fixing
```
The reservation form isn't sending confirmation emails.
Check docs/features/notifications.md for the expected behavior,
then debug the Payload afterChange hook.
```

---

## Automations to Build

### 1. Daily Menu Reminder (Cron)
- Every morning at 9:00, check if today's menu is published
- If not: send Paul/Matthias a notification (email or SMS)
- "N'oubliez pas de publier le menu du jour !"

### 2. Reservation Auto-Cleanup
- Cron: mark past reservations as "completed" automatically
- Archive reservations older than 3 months

### 3. Deploy Pipeline
- Git push to main → webhook triggers build on VPS
- Build → restart PM2 → health check → done
- Rollback script if health check fails

### 4. Database Backup
- Daily pg_dump at 3:00 AM
- Keep 30 days rolling
- Optional: sync to Backblaze B2 (cheap offsite)

### 5. Image Optimization Pipeline
- When new dish photos are uploaded to Payload:
- Auto-generate sizes (thumbnail, card, hero)
- Strip EXIF data
- Convert to WebP

### 6. Menu Archive
- Automatically archive daily menus
- Future: "What were we serving this time last year?" (cool for Paul & Matthias)

---

## Skills to Integrate

### For the Website
- `next-intl` for i18n routing and messages
- `@payloadcms/richtext-lexical` for rich text editing in CMS
- `react-email` for email templates
- `@tanstack/react-query` (maybe) for client-side data fetching
- `framer-motion` for tasteful animations
- `leaflet` or `mapbox` for the contact page map

### For the VPS
- `pm2` ecosystem file for process management
- `nginx` config with caching rules for static assets
- `certbot` with auto-renewal cron
- `logrotate` for log management
- `fail2ban` for basic security

### Claude Code Specific
- Use `/commit` for clean commit messages
- Use plan mode for multi-file features
- Keep CLAUDE.md as the single source of truth
