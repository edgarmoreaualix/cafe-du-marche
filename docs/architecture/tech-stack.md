# Tech Stack Decisions

## Framework: Next.js 15 (App Router)
- Server components for SEO-critical pages (menu, about, contact)
- Client components for interactive elements (reservation form, language switcher)
- Built-in image optimization for dish photography
- API routes for reservation handling and webhook endpoints

## CMS: Payload CMS 3.x
**Why Payload over alternatives:**
- **vs Strapi**: Payload 3 embeds directly into Next.js (single app, single deployment). Strapi requires a separate server.
- **vs Sanity**: Self-hosted = full control on Hetzner VPS, no vendor dependency, no usage-based pricing.
- **vs Custom admin**: Payload gives us a polished admin UI for free. Paul & Matthias need something intuitive.

**Payload 3 advantages:**
- Lives inside the Next.js app (same repo, same deploy)
- TypeScript-native with auto-generated types
- Rich text editor, media management, drafts
- Access control for different admin roles
- Hooks system for automation (e.g., trigger notification on new reservation)

## Database: PostgreSQL
- Payload 3 supports Postgres natively via Drizzle ORM
- Robust, battle-tested, perfect for reservations + content
- Easy to backup on VPS with pg_dump cron

## Styling: Tailwind CSS v4
- Utility-first, fast iteration
- CSS-first configuration (no tailwind.config.js)
- Design tokens via CSS custom properties
- Easy to maintain consistent brand system

## i18n: next-intl
- Best-in-class Next.js internationalization
- Supports App Router
- Message files in JSON (easy for translators)
- Middleware-based locale detection

## Notifications
- **Email**: Resend (simple API, great DX) or Brevo (good for France, also does SMS)
- **SMS**: Brevo (2-in-1 with email) or Twilio (more reliable, wider reach)
- Decision: Start with email only, add SMS in Phase 5

## Package Manager: pnpm
- Fast, disk-efficient
- Strict dependency resolution

## Deployment
- Direct on Hetzner VPS (Ubuntu)
- PM2 for process management (or Docker if preferred)
- Nginx as reverse proxy with SSL (Let's Encrypt)
- Git-based deploys (push to main → webhook triggers build)
