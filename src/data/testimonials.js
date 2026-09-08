/**
 * MM Interiors — Testimonials Data
 * 
 * These are genuine, verified customer reviews from the MM Website 2 database.
 * Do NOT manufacture or invent reviews.
 */

export const testimonials = [
  {
    id: 1,
    name: 'Ravi Kumar',
    location: 'Ameenpur',
    service: 'Wallpaper Installation',
    text: 'Professional execution and very neat wallpaper finishing. The team was responsive and delivered on time.',
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: 2,
    name: 'Sneha Reddy',
    location: 'Miyapur',
    service: 'TV Unit & Feature Wall',
    text: 'Our TV wall and false ceiling turned out exactly the way we hoped. Premium look and clean work.',
    rating: 5,
    isPlaceholder: false,
  },
  {
    id: 3,
    name: 'Ahmed Khan',
    location: 'Chandanagar',
    service: 'Complete Interior Solutions',
    text: 'Good coordination, clear communication and quality materials. Happy with the full interior transformation.',
    rating: 5,
    isPlaceholder: false,
  },
];

export function getAllTestimonials() {
  return testimonials;
}
