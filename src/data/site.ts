export const site = {
  name: 'Rotaract Club of Bharatpur',
  shortName: 'Rotaract Bharatpur',
  motto: 'Fellowship Through Service',
  established: '25 November 2004',
  district: 'Rotaract District 3292',
  location: 'Bharatpur, Chitwan, Nepal',
  rotaryYear: 'RY 2026–27',
  // Set once domain is confirmed; sitemap/canonical depend on it.
  url: undefined as string | undefined,
  description:
    'Rotaract Club of Bharatpur is a youth-led service organization in Bharatpur, Chitwan, Nepal, building leadership, fellowship and community impact.',
} as const;

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
] as const;

export const contact = {
  email: 'bharatpur@3292.org',
  phones: ['9865368567', '9845959676'],
  // Unverified: leave undefined until club confirms. Format: '977XXXXXXXXXX'
  whatsapp: undefined as string | undefined,
  socials: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/1LHfuX3cvH/?mibextid=wwXIfr' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/rotaractclubofbharatpur?evlk=Z2lwdTYzM3M1YW5' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/rotaractclubofbharatpur/' },
  ],
} as const;

export const meeting = {
  venue: 'Diyalo Foodland, Bharatpur',
  schedule: 'Every 2nd and 4th Saturday of the English calendar',
  time: '8:30 AM',
  location: 'Bharatpur, Chitwan, Nepal',
  // Add only after venue is verified.
  mapUrl: undefined as string | undefined,
} as const;
