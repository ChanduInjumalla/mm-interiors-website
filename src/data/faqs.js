/**
 * MM Interiors — FAQ Data
 * Organized by category for use on specific pages and the main FAQ page.
 */

export const faqs = {
  general: [
    {
      question: 'What areas in Hyderabad do you serve?',
      answer: 'MM Interiors provides home interior design services across Hyderabad. Please contact us to discuss your specific location and project requirements.',
    },
    {
      question: 'What services does MM Interiors offer?',
      answer: 'We offer complete home interior design including modular kitchens, wardrobes, living room design, bedroom interiors, false ceilings, TV units, wall finishes, wallpaper installation, 3D wall panels, lighting design and more. We can handle individual rooms or your entire home.',
    },
    {
      question: 'How do I get started with my interior project?',
      answer: 'The first step is a consultation. You can reach us by phone, WhatsApp, or through the contact form on our website. We will discuss your requirements, visit your site when appropriate, and guide you through the design and execution process.',
    },
  ],
  cost: [
    {
      question: 'What factors affect interior design cost?',
      answer: 'Interior design cost depends on several factors: the size of your home (BHK), scope of work, material selections, hardware quality, civil and electrical requirements, timeline and design complexity. We can explain specific cost factors during a consultation.',
    },
    {
      question: 'Do you offer interior design for different budgets?',
      answer: 'Yes. We work with homeowners across different budgets by adjusting scope, material choices and design complexity. The key is understanding your priorities and making informed decisions together.',
    },
  ],
  process: [
    {
      question: 'How long does an interior design project take?',
      answer: 'Project timelines depend on the scope of work. A consultation will help us understand your requirements and provide a realistic timeline estimate for your specific project.',
    },
    {
      question: 'What is the interior design process at MM Interiors?',
      answer: 'Our process typically involves consultation, requirement understanding, site discussion, design development, material selection, approval, execution, quality checks and handover. Each step is discussed and agreed upon before proceeding.',
    },
  ],
  materials: [
    {
      question: 'What materials do you use for kitchens and wardrobes?',
      answer: 'We use quality plywood, laminates, hardware and countertop materials. The specific materials are selected based on your requirements, budget and durability preferences. We can explain the options during a consultation.',
    },
    {
      question: 'Do you provide a warranty on your work?',
      answer: 'Please contact us to discuss our specific warranty terms. We are committed to quality workmanship and use reliable materials in our projects.',
    },
  ],
  kitchen: [
    {
      question: 'What kitchen layouts can you design?',
      answer: 'We design L-shaped, U-shaped, parallel and straight kitchen layouts. The right layout depends on your kitchen dimensions, workflow preferences and storage requirements.',
    },
    {
      question: 'Can you renovate an existing kitchen?',
      answer: 'Yes, kitchen renovation is part of our services. We can redesign and rebuild your kitchen with new cabinets, countertops, hardware and layout improvements.',
    },
  ],
  bedroom: [
    {
      question: 'What does bedroom interior design include?',
      answer: 'Bedroom interior design can include bed wall design, wardrobes, side tables, vanity, lighting, ceiling design, color palette selection and storage planning. The scope depends on your specific needs.',
    },
  ],
  living: [
    {
      question: 'What does living room interior design include?',
      answer: 'Living room design can include TV unit and entertainment wall, seating layout, storage solutions, false ceiling, lighting design, partitions and material selections. We design the living room as part of your complete home flow.',
    },
  ],
};

/**
 * Get FAQs for a specific category
 */
export function getFaqsByCategory(category) {
  return faqs[category] || [];
}

/**
 * Get all FAQs (flat list)
 */
export function getAllFaqs() {
  return Object.values(faqs).flat();
}

/**
 * Get homepage FAQs (general + cost + process)
 */
export function getHomepageFaqs() {
  return [
    ...faqs.general,
    ...faqs.cost.slice(0, 2),
    ...faqs.process.slice(0, 1),
  ];
}
