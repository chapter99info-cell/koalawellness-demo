export const site = {
  name: 'Koala Wellness & Spa',
  phone: '0474 146 501',
  phoneHref: 'tel:0474146501',
  address: '479 Toolong North Road, Kirkstall VIC 3283',
  hours: 'Every day 9:00 AM – 8:00 PM',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=479+Toolong+North+Road,+Kirkstall+VIC+3283&hl=en&z=14&output=embed',
  heroImage:
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80&auto=format&fit=crop',
} as const

export const services = [
  {
    name: 'Manual Lymphatic Drainage',
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

export const whyChooseUs = [
  {
    title: 'Qualified Therapists',
    description:
      'Experienced practitioners trained in massage, lymphatic drainage, and advanced skin therapy.',
  },
  {
    title: 'Premium Dermalogica Products',
    description:
      'Professional-grade skincare used in every facial and body treatment for visible, lasting results.',
  },
  {
    title: 'Peaceful Countryside Setting',
    description:
      'Unwind in a calm rural retreat just 12 km from Port Fairy on the Great Ocean Road.',
  },
  {
    title: 'Open Every Day',
    description:
      'Flexible hours from 9 AM to 8 PM, seven days a week — book when it suits you.',
  },
] as const
