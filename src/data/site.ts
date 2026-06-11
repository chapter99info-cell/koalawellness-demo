export const site = {
  name: 'Koala Wellness & Spa',
  phone: '0474 146 501',
  phoneHref: 'tel:0474146501',
  email: 'koalawellnessspa@gmail.com',
  bookingUrl: 'https://koalawellnessspa.setmore.com',
  facebookUrl: 'https://www.facebook.com/koalawellnessspa',
  instagramUrl: 'https://www.instagram.com/koala_wellnessspa',
  reviewUrl: 'https://g.page/r/koalawellnessspa/review',
  address: '479 Toolong North Road, Kirkstall VIC 3283',
  hours: 'Open every day, 9:00 AM – 8:00 PM',
  tagline: 'Wellness is Care — Connection is Love and Care',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=479+Toolong+North+Road,+Kirkstall+VIC+3283&hl=en&z=14&output=embed',
  heroImage:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80&auto=format&fit=crop',
  googleRating: 5.0,
  googleReviewCount: 10,
  chapter99Url: 'https://chapter99info.tech',
} as const

export const bookingLinkProps = {
  href: site.bookingUrl,
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

export const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

export const signatureTreatments = [
  {
    name: 'Manual Lymphatic Drainage (Castor Oil Detox Ritual)',
    duration: '90 min',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80',
  },
  {
    name: 'Relaxation Massage',
    duration: '60 min',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce5e8b29?w=400&q=80',
  },
  {
    name: 'Thai Combination & Deep Tissue Massage',
    duration: '60 min',
    price: '$130',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80',
  },
  {
    name: 'Facial Treatment with Dermalogica',
    duration: '60 min',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80',
  },
  {
    name: 'Body Scrub & Wrap',
    duration: '60 min',
    price: '$150',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
  },
  {
    name: 'Microneedling',
    duration: 'Per session',
    price: '$250',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80',
  },
] as const

export const expressTreatments = [
  { name: 'Neck & Shoulder Release', duration: '30 min', price: '$50' },
  { name: 'Lower Back Relief', duration: '30 min', price: '$50' },
  { name: 'Foot Refresh Massage', duration: '30 min', price: '$50' },
  { name: 'Face & Head Massage', duration: '30 min', price: '$50' },
  { name: 'Lymphatic Quick Detox', duration: '30 min', price: '$70' },
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

export const paymentMethods = ['Visa', 'Mastercard', 'Apple Pay', 'Google Pay', 'Square'] as const

export const faqItems = [
  {
    question: 'Where is Koala Wellness & Spa located?',
    answer:
      '479 Toolong North Road, Kirkstall VIC 3283, 12km from Port Fairy.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Book online at our website or call 0474 146 501.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'Lymphatic drainage, Thai massage, facial treatments with Dermalogica, microneedling, body scrub & wrap, and more.',
  },
] as const
