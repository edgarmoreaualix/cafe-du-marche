export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Le Café du Marché',
    image: '/opengraph-image',
    url: 'https://lecafedumarche.com',
    telephone: '+33240476350',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2 Rue de Mayence',
      addressLocality: 'Nantes',
      postalCode: '44000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.2124664,
      longitude: -1.5462527,
    },
    priceRange: '€€',
    servesCuisine: 'French',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '12:00',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday', 'Friday'],
        opens: '19:30',
        closes: '22:30',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
