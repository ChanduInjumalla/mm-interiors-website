/**
 * MM Interiors — Project Data System
 * 
 * IMPORTANT: Only genuine MM Interiors projects should be added here.
 * All entries below are marked as PLACEHOLDER and must be replaced
 * with real project information before production.
 * 
 * Do NOT invent project names, locations, client names, reviews, or details.
 */

export const projects = [
  // [PLACEHOLDER] — Replace with genuine MM Interiors projects
  // Each project should contain only verified information.
  // Example structure:
  // {
  //   slug: '3bhk-home-interiors-kondapur',
  //   title: '3BHK Complete Home Interiors — Kondapur',
  //   type: 'Complete Home',
  //   bhk: '3BHK',
  //   location: 'Kondapur',
  //   style: 'Modern',
  //   rooms: ['Living Room', 'Kitchen', 'Master Bedroom', 'Bedroom', 'Pooja Room'],
  //   services: ['modular-kitchen', 'wardrobes', 'living-room', 'false-ceiling'],
  //   heroImage: '/images/projects/kondapur-3bhk/hero.jpg',
  //   images: [
  //     '/images/projects/kondapur-3bhk/living-room.jpg',
  //     '/images/projects/kondapur-3bhk/kitchen.jpg',
  //   ],
  //   beforeImages: [],
  //   afterImages: [],
  //   description: 'Verified project description.',
  //   materials: 'Verified materials used.',
  //   isPlaceholder: false,
  // },
];

/**
 * Get all projects
 */
export function getAllProjects() {
  return projects;
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug) || null;
}

/**
 * Get projects filtered by type
 */
export function getProjectsByType(type) {
  return projects.filter(p => p.type === type);
}

/**
 * Get projects filtered by service
 */
export function getProjectsByService(serviceId) {
  return projects.filter(p => p.services && p.services.includes(serviceId));
}

/**
 * Get projects filtered by room
 */
export function getProjectsByRoom(room) {
  return projects.filter(p => p.rooms && p.rooms.includes(room));
}
