# Infrastructure — Hetzner VPS

## Server Setup
- **Provider**: Hetzner
- **OS**: Ubuntu (latest LTS)
- **Runtime**: Node.js 22 LTS
- **Process manager**: PM2 (auto-restart, logs, monitoring)
- **Reverse proxy**: Nginx
- **SSL**: Let's Encrypt via Certbot (auto-renewal)
- **Database**: PostgreSQL 16 (local on VPS)

## Deployment Strategy

### Option A: Simple Git Deploy (recommended to start)
```
Local → git push → VPS pulls → pnpm build → PM2 restart
```
- Webhook listener on VPS (simple Express server or use a tool like `webhook`)
- Or: SSH-based deploy script triggered from local/CI

### Option B: Docker (future)
```
Local → git push → build Docker image → deploy container
```
- More isolated, easier to replicate
- Worth migrating to once the project stabilizes

## Directory Structure on VPS
```
/var/www/cafe-du-marche/
├── current/          # Current deployment (symlink)
├── releases/         # Past releases (for rollback)
├── shared/           # Shared files (.env, uploads)
└── logs/             # PM2 and Nginx logs
```

## Nginx Config (skeleton)
```nginx
server {
    listen 443 ssl http2;
    server_name lecafedumarche.com www.lecafedumarche.com;

    ssl_certificate /etc/letsencrypt/live/lecafedumarche.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/lecafedumarche.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Backups
- PostgreSQL: `pg_dump` cron daily → stored in `/backups/` + optional sync to S3/Backblaze
- Uploads (media): rsync to backup location
- Retention: 30 days rolling

## Monitoring
- **Uptime**: UptimeRobot (free) or self-hosted Uptime Kuma
- **Errors**: Sentry (free tier) integrated in Next.js
- **Logs**: PM2 logs + Nginx access/error logs
- **Analytics**: Umami (self-hosted on same VPS) — privacy-friendly, GDPR-compliant

## Environment Variables
```env
# Database
DATABASE_URI=postgresql://user:pass@localhost:5432/cafe_du_marche

# Payload
PAYLOAD_SECRET=<random-secret>
NEXT_PUBLIC_SERVER_URL=https://lecafedumarche.com

# Notifications
RESEND_API_KEY=<key>         # or BREVO_API_KEY
TWILIO_ACCOUNT_SID=<sid>     # for SMS (Phase 5)
TWILIO_AUTH_TOKEN=<token>

# Analytics
NEXT_PUBLIC_UMAMI_URL=<url>
NEXT_PUBLIC_UMAMI_SITE_ID=<id>
```

## Domain
- Current domain: lecafedumarche.com (already owned — old site)
- DNS: Point A record to Hetzner VPS IP
- Transition: Once new site is ready, swap DNS (or deploy alongside with subdomain first)
