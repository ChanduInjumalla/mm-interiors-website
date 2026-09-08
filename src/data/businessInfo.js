/**
 * MM Interiors — Business Information
 * 
 * Single source of truth for all genuine business contact details.
 * Extracted from MM Website 2 database (settings table).
 * 
 * DO NOT invent or fabricate any information here.
 * All data is verified from the existing MM Website 2 source.
 */

export const businessInfo = {
  name: 'MM Interiors',
  shortName: 'MM Interiors',
  tagline: 'Premium Interior & Design Studio',

  // Contact
  phone: {
    primary: '7993155725',
    secondary: '9008397793',
    primaryFormatted: '799 315 5725',
    secondaryFormatted: '900 839 7793',
  },
  whatsapp: {
    number: '917993155725',
    link: 'https://wa.me/917993155725',
    messageLink: (msg = 'Hello MM Interiors, I would like to discuss my interior project. Please share details.') =>
      `https://wa.me/917993155725?text=${encodeURIComponent(msg)}`,
  },
  email: 'info@mminteriors.com',

  // Address
  address: {
    line1: 'Sri Ram Nagar Colony',
    line2: 'Ameenpur, Sangareddy',
    state: 'Telangana',
    full: 'Sri Ram Nagar Colony, Ameenpur, Sangareddy, Telangana',
  },

  // Business Hours
  hours: {
    days: 'Monday to Saturday',
    time: '9:00 AM to 7:00 PM',
    full: 'Monday to Saturday · 9:00 AM to 7:00 PM',
  },

  // Service Areas
  serviceAreas: [
    'Hyderabad',
    'Ameenpur',
    'Miyapur',
    'Chandanagar',
    'Sangareddy',
    'Beeramguda',
    'Patancheru',
    'Lingampally',
    'Kukatpally',
  ],

  // Google Maps (Ameenpur, Sangareddy area)
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30437.70976034!2d78.29!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d0f0c37e7f%3A0x0!2sAmeenpur%2C%20Sangareddy%2C%20Telangana!5e0!3m2!1sen!2sin!4v1',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Ameenpur+Sangareddy+Telangana',
  },

  // Social Media (none confirmed from old website — placeholders marked)
  social: {
    // Add real social links when available
  },
};

/**
 * Services confirmed from old website database
 */
export const confirmedServices = [
  'Wallpaper Installation',
  '3D Wall Panels',
  'False Ceiling',
  'TV Unit & Feature Wall',
  'Modular Kitchen',
  'Complete Interior Solutions',
];

/**
 * Gallery photo registry — organized by category
 * These are genuine MM Interiors photographs from the Photos folder.
 */
export const photoGallery = {
  kitchen: [
    { src: '/images/kitchen/kitchen-1.jpg', alt: 'L-shaped modular kitchen with blue-grey glossy finish and LED backlighting by MM Interiors', category: 'kitchen' },
  ],
  poojaRoom: [
    { src: '/images/pooja-room/pooja-1.jpg', alt: 'Premium pooja unit with Om symbol, brass bells and idol niches by MM Interiors', category: 'pooja-room' },
    { src: '/images/pooja-room/pooja-2.jpg', alt: 'Pooja room with peacock feather CNC design, warm lighting and wood finish by MM Interiors', category: 'pooja-room' },
    { src: '/images/pooja-room/pooja-3.jpg', alt: 'Pooja unit with Om mandala backlight and golden tone shelving by MM Interiors', category: 'pooja-room' },
    { src: '/images/pooja-room/pooja-4.jpg', alt: 'Compact pooja unit with Om CNC cutout and bells by MM Interiors', category: 'pooja-room' },
  ],
  wardrobe: [
    { src: '/images/wardrobe/wardrobe-1.jpg', alt: 'Sliding wardrobe with vanity and mirror in teal and white finish by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-2.jpg', alt: 'Modern grey-white geometric sliding wardrobe with vanity niche by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-3.jpg', alt: 'Mint green sliding wardrobe with gold accents and false ceiling by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-4.jpg', alt: 'Blue and white wardrobe with vanity in bedroom by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-5.jpg', alt: 'White and stone-pattern chevron sliding wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-6.jpg', alt: 'Blue and white sliding wardrobe with gold stripes by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-7.jpg', alt: 'Hinged wardrobe in wood and cream glossy finish by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-8.jpg', alt: 'Teal and white geometric hinged wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-9.jpg', alt: 'Blue glossy wardrobe with vertical panels in bedroom by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-10.jpg', alt: 'Sliding wardrobe with grey-white diagonal and gold stripes by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-11.jpg', alt: 'Premium green and gold geometric sliding wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-12.jpg', alt: 'Black and white marble-look sliding wardrobe with loft by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-13.jpg', alt: 'Brown and white diagonal wardrobe with vanity area by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-14.jpg', alt: 'Grey geometric-print artistic sliding wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-15.jpg', alt: 'Brown and grey marble-look hinged wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-16.jpg', alt: 'Marble black and beige geometric sliding wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-17.jpg', alt: 'Teal and white diamond pattern sliding wardrobe by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-18.jpg', alt: 'Teal and white sliding wardrobe with study desk by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-19.jpg', alt: 'Blue and white hinged wardrobe with curved panels and window seat by MM Interiors', category: 'wardrobe' },
    { src: '/images/wardrobe/wardrobe-20.jpg', alt: 'Pink and white hinged wardrobe in classic pattern by MM Interiors', category: 'wardrobe' },
  ],
  kidsRoom: [
    { src: '/images/kids-room/kids-room-1.jpg', alt: 'Kids room wardrobe with rainbow print in purple and yellow by MM Interiors', category: 'kids-room' },
    { src: '/images/kids-room/kids-room-2.jpg', alt: 'Kids room wardrobe with study desk in teal and white by MM Interiors', category: 'kids-room' },
  ],
  bathroom: [
    { src: '/images/bathroom/bathroom-1.jpg', alt: 'Bathroom vanity with round mirror, wood paneling and pendant light by MM Interiors', category: 'bathroom' },
  ],
  tvUnit: [
    { src: '/images/tv-unit/tv-unit-1.jpg', alt: 'Living room TV unit with stone accent wall and blue fluted panel by MM Interiors', category: 'tv-unit' },
    { src: '/images/tv-unit/tv-unit-2.jpg', alt: 'Modern TV unit with green fluted panels and grey wall by MM Interiors', category: 'tv-unit' },
    { src: '/images/tv-unit/tv-unit-3.jpg', alt: 'Premium bedroom TV wall with gold frames and marble panels by MM Interiors', category: 'tv-unit' },
  ],
  livingRoom: [
    { src: '/images/living-room/living-room-1.jpg', alt: 'Living room interior with TV unit and stone accent wall by MM Interiors', category: 'living-room' },
    { src: '/images/living-room/living-room-2.jpg', alt: 'Modern living room with TV unit and fluted panels by MM Interiors', category: 'living-room' },
  ],
  bedroom: [
    { src: '/images/bedroom/bedroom-1.jpg', alt: 'Bedroom wardrobe with vanity in blue and white finish by MM Interiors', category: 'bedroom' },
    { src: '/images/bedroom/bedroom-2.jpg', alt: 'Bedroom with blue glossy wardrobe and false ceiling by MM Interiors', category: 'bedroom' },
    { src: '/images/bedroom/bedroom-3.jpg', alt: 'Bedroom with blue and white wardrobe, curved panels and window seat by MM Interiors', category: 'bedroom' },
  ],
  falseCeiling: [
    { src: '/images/false-ceiling/false-ceiling-1.jpg', alt: 'Kitchen false ceiling with recessed lighting by MM Interiors', category: 'false-ceiling' },
    { src: '/images/false-ceiling/false-ceiling-2.jpg', alt: 'Bedroom false ceiling with cove lighting by MM Interiors', category: 'false-ceiling' },
    { src: '/images/false-ceiling/false-ceiling-3.jpg', alt: 'False ceiling with colored cove lighting and design elements by MM Interiors', category: 'false-ceiling' },
  ],
};

/**
 * Get all photos as a flat array for gallery page
 */
export function getAllPhotos() {
  return Object.values(photoGallery).flat();
}

/**
 * Get photos by category
 */
export function getPhotosByCategory(category) {
  const categoryMap = {
    'kitchen': photoGallery.kitchen,
    'pooja-room': photoGallery.poojaRoom,
    'wardrobe': photoGallery.wardrobe,
    'kids-room': photoGallery.kidsRoom,
    'bathroom': photoGallery.bathroom,
    'tv-unit': photoGallery.tvUnit,
    'living-room': photoGallery.livingRoom,
    'bedroom': photoGallery.bedroom,
    'false-ceiling': photoGallery.falseCeiling,
  };
  return categoryMap[category] || [];
}

/**
 * Get hero photo for a given service/page
 */
export function getHeroPhoto(pageId) {
  const heroMap = {
    'home': photoGallery.tvUnit[0],
    'modular-kitchen': photoGallery.kitchen[0],
    'wardrobes': photoGallery.wardrobe[0],
    'living-room': photoGallery.livingRoom[0],
    'master-bedroom': photoGallery.bedroom[0],
    'bedroom': photoGallery.bedroom[1],
    'kids-room': photoGallery.kidsRoom[0],
    'pooja-room': photoGallery.poojaRoom[0],
    'bathroom': photoGallery.bathroom[0],
    'false-ceiling': photoGallery.falseCeiling[0],
    'tv-unit': photoGallery.tvUnit[0],
    'wall-panelling': photoGallery.tvUnit[0],
    'wallpaper': photoGallery.wardrobe[10],
    '3d-wall-panels': photoGallery.tvUnit[1],
    'about': photoGallery.wardrobe[10],
    'services': photoGallery.kitchen[0],
    'home-interiors': photoGallery.tvUnit[0],
    'gallery': photoGallery.wardrobe[0],
    'contact': photoGallery.tvUnit[2],
  };
  return heroMap[pageId] || photoGallery.tvUnit[0];
}
