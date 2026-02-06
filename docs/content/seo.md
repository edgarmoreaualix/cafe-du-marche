# SEO Strategy

## Target Keywords
### Primary
- "restaurant nantes"
- "café du marché nantes"
- "restaurant cité des congrès nantes"
- "brasserie nantes"

### Secondary
- "menu du jour nantes"
- "restaurant fait maison nantes"
- "réservation restaurant nantes"
- "repas de groupe nantes"
- "restaurant près cité des congrès"

### Long-tail
- "meilleur restaurant fait maison nantes"
- "restaurant traditionnel français nantes"
- "déjeuner cité des congrès nantes"

## Technical SEO

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Le Café du Marché",
  "servesCuisine": "French",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nantes",
    "addressCountry": "FR"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "...", "longitude": "..." },
  "url": "https://lecafedumarche.com",
  "menu": "https://lecafedumarche.com/menu",
  "acceptsReservations": true,
  "priceRange": "€€"
}
```

### Meta Tags
- Unique title + description per page
- Open Graph tags for social sharing (with dish photos)
- Twitter Card tags

### Sitemap
- Auto-generated via Next.js `sitemap.ts`
- Include all public pages
- Daily menu pages get `changefreq: daily`

### Performance
- Next.js Image optimization (WebP, lazy loading)
- Self-hosted fonts (no external requests)
- Minimal JavaScript (server components by default)
- Target: Lighthouse 95+ on all metrics

### Local SEO
- Google Business Profile (separate from website, but ensure NAP consistency)
- Consistent Name, Address, Phone across all platforms
- Encourage Google reviews
