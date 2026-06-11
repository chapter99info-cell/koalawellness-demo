export const site = {
  name: 'Koala Wellness & Spa',
  phone: '0474 146 501',
  phoneHref: 'tel:0474146501',
  email: 'kanokon95@gmail.com',
  bookingUrl: 'https://koalawellnessspa.setmore.com/',
  address: '479 Toolong North Road, Kirkstall VIC 3283',
  hours: 'Open every day, 9:00 AM – 8:00 PM',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=479+Toolong+North+Road,+Kirkstall+VIC+3283&hl=en&z=14&output=embed',
  heroImage:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80&auto=format&fit=crop',
  googleRating: 5.0,
  googleReviewCount: 10,
  chapter99Url: 'https://chapter99.com.au',
} as const

export const bookingLinkProps = {
  href: site.bookingUrl,
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

export const signatureTreatments = [
  {
    name: 'Manual Lymphatic Drainage (Castor Oil Detox Ritual)',
    duration: '90 min',
    price: '$150',
  },
  {
    name: 'Relaxation Massage',
    duration: '60 min',
    price: '$120',
  },
  {
    name: 'Thai Combination & Deep Tissue Massage',
    duration: '60 min',
    price: '$130',
  },
  {
    name: 'Facial Treatment with Dermalogica',
    duration: '60 min',
    price: '$150',
  },
  {
    name: 'Body Scrub & Wrap',
    duration: '60 min',
    price: '$150',
  },
  {
    name: 'Microneedling',
    duration: 'Per session',
    price: '$250',
  },
] as const

export const moreServices = [
  'Pregnancy (Prenatal) Massage',
  'Aromatherapy Massage',
  'Foot Massage & Reflexology',
  'Head Massage',
  'Face Massage & Lifting with Gua Sha',
  'Thai Herbal Steaming',
  'Aroma Oil Upgrades',
  'Gift Vouchers',
] as const

export const reviews = [
  {
    name: 'Sarah',
    text: 'The lymphatic drainage massage was so relaxing — I felt light and refreshed the very next day. A truly calming experience in a beautiful setting.',
  },
  {
    name: 'James',
    text: 'Than tailored the deep tissue session perfectly to my needs. Firm where it mattered, yet still deeply relaxing. I left feeling completely unwound.',
  },
  {
    name: 'Emma',
    text: 'Warm, welcoming, and professional from the moment I arrived. The facial with Dermalogica products left my skin glowing. Already booked my next visit.',
  },
] as const

export const paymentMethods = ['Visa', 'Mastercard', 'Apple Pay', 'Google Pay'] as const
