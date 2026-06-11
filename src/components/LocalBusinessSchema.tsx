import { site } from '../data/site'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: site.name,
    description:
      'Premium massage and skin therapy spa in Kirkstall VIC, near Port Fairy and Warrnambool on the Great Ocean Road. Manual lymphatic drainage, relaxation massage, Dermalogica facials, and microneedling.',
    url: site.bookingUrl,
    telephone: '+61 474 146 501',
    email: site.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '479 Toolong North Road',
      addressLocality: 'Kirkstall',
      addressRegion: 'VIC',
      postalCode: '3283',
      addressCountry: 'AU',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.googleRating,
      reviewCount: site.googleReviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -38.289,
      longitude: 142.469,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
