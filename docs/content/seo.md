# SEO Strategy

## Target Keywords
### Primary
- "restaurant nantes"
- "café du marché nantes"
- "restaurant cité des congrès nantes"
- "brasserie nantes"
- "bistro nantes"

### Secondary
- "menu du jour nantes"
- "restaurant fait maison nantes"
- "réservation restaurant nantes"
- "repas de groupe nantes"
- "restaurant près cité des congrès"
- "tête de veau nantes"
- "restaurant traditionnel nantes"

### Long-tail
- "meilleur restaurant fait maison nantes"
- "restaurant traditionnel français nantes"
- "déjeuner cité des congrès nantes"
- "restaurant rue de mayence nantes"
- "bistro cuisine maison nantes"

## Technical SEO

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Le Café du Marché",
  "description": "Bistro nantais depuis 1946. Cuisine traditionnelle fait maison, menu du jour, terrine du chef.",
  "servesCuisine": "French",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2 Rue de Mayence",
    "addressLocality": "Nantes",
    "postalCode": "44000",
    "addressRegion": "Pays de la Loire",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.2124664,
    "longitude": -1.5462527
  },
  "telephone": "+33240476350",
  "url": "https://lecafedumarche.com",
  "menu": "https://lecafedumarche.com/menu",
  "acceptsReservations": true,
  "priceRange": "€€",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "12:00",
      "closes": "14:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Friday"],
      "opens": "19:30",
      "closes": "22:30"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "650",
    "bestRating": "5"
  }
}
```

### Meta Tags
- Unique title + description per page
- Open Graph tags for social sharing (with dish photos)
- Twitter Card tags
- Example homepage: "Le Café du Marché — Bistro fait maison à Nantes | Depuis 1946"

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
- Google Business Profile — ensure NAP consistency:
  - **N**ame: Le Café du Marché
  - **A**ddress: 2 Rue de Mayence, 44000 Nantes
  - **P**hone: 02 40 47 63 50
- Consistent across: website, Google, TripAdvisor, TheFork, PagesJaunes, Instagram
- Encourage Google reviews (they already have strong ratings)
- TripAdvisor Travelers' Choice badge — could display on site
