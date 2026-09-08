import { useState } from 'react';
import './MaterialViewer.css';

const MATERIAL_CATEGORIES = [
  {
    id: 'core-boards',
    name: '1. Core Plywood & Boards',
    items: [
      {
        id: 'bwr-marine',
        name: 'BWR / Marine Grade Ply (IS:710)',
        badge: 'Waterproof Core',
        rating: '5/5',
        priceTier: '₹₹',
        idealFor: 'Modular Kitchens, Vanity Units, Wet Zones',
        warranty: '10-Year Warranty',
        desc: 'Boiling Waterproof plywood bonded with synthetic phenolic resin. Completely impervious to water, steam, and high humidity.',
        specs: ['100% Calibrated thickness', 'Zero warping guarantee', 'Anti-termite & borer treated'],
      },
      {
        id: 'hdhmr',
        name: 'HDHMR (High-Density Moisture Resistant)',
        badge: 'Precision CNC',
        rating: '4.8/5',
        priceTier: '₹₹',
        idealFor: 'Pooja Mandir Cutouts, Fluted Walls, Wardrobe Shutters',
        warranty: '10-Year Warranty',
        desc: 'High-density engineered board manufactured under intense heat and pressure. Super-dense core with zero voids, perfect for CNC routing.',
        specs: ['High screw-holding capacity', 'Smooth finish for PU paint', 'Termite & fungus resistant'],
      },
      {
        id: 'mr-ply',
        name: 'Commercial MR Plywood (IS:303)',
        badge: 'Budget Friendly',
        rating: '4.2/5',
        priceTier: '₹',
        idealFor: 'Bedroom Wardrobes, TV Units, Shoe Racks',
        warranty: '7-Year Warranty',
        desc: 'Moisture-resistant grade plywood suitable for all interior dry zones. Cost-effective, strong structural backbone for storage units.',
        specs: ['Uniform layer composition', 'Resin bonded', 'Economical choice for bedrooms'],
      },
    ],
  },
  {
    id: 'surface-finishes',
    name: '2. Surface Finishes & Laminates',
    items: [
      {
        id: 'acrylic',
        name: 'High-Gloss European Acrylic',
        badge: 'Mirror Finish',
        rating: '5/5',
        priceTier: '₹₹₹',
        idealFor: 'Kitchen Upper Shutters, Master Bedroom Wardrobes',
        warranty: 'UV Protected',
        desc: 'Ultra-glossy, mirror-like non-toxic acrylic sheets. Retains color brilliance for decades without yellowing under sunlight.',
        specs: ['Scratch-resistant topcoat', 'Seamless edge-banded finish', 'Easy 1-wipe cleaning'],
      },
      {
        id: 'matte-laminate',
        name: '1mm Anti-Fingerprint Matte Laminates',
        badge: 'Velvet Touch',
        rating: '4.7/5',
        priceTier: '₹₹',
        idealFor: 'All Wardrobe Shutters, Study Desks, Living Units',
        warranty: 'Daily Use Proof',
        desc: 'Premium 1mm thickness laminates with anti-fingerprint thermal healing surface. Soft velvety tactile feel that resists smudges.',
        specs: ['Zero light glare', '100+ Designer shades', 'Heat & stain resistant'],
      },
      {
        id: 'fluted-panels',
        name: 'Acoustic Fluted Wall Panels',
        badge: 'Architectural Trend',
        rating: '4.9/5',
        priceTier: '₹₹',
        idealFor: 'TV Accent Walls, Foyers, Headboard Walls',
        warranty: 'Long-Life Finish',
        desc: 'Precision-grooved charcoal, gold, and wood-finish vertical panels that add dramatic architectural depth and sound dampening.',
        specs: ['Waterproof charcoal base', 'Lightweight & fire-retardant', 'Available in gold, walnut & marble'],
      },
    ],
  },
  {
    id: 'hardware',
    name: '3. Hardware & Motion Systems',
    items: [
      {
        id: 'soft-close',
        name: 'BLUM & Hettich Soft-Close Hinges',
        badge: 'German Precision',
        rating: '5/5',
        priceTier: '₹₹',
        idealFor: 'All Kitchen & Wardrobe Hinged Doors',
        warranty: '200,000 Cycles Tested',
        desc: 'Clip-top concealed hinges with integrated liquid hydraulic dampers. Shuts silently and smoothly even when slammed.',
        specs: ['Corrosion-resistant nickel plated', '3-Way toolless adjustment', 'Lifetime smooth motion'],
      },
      {
        id: 'tandem-drawers',
        name: 'Tandem Box Heavy-Duty Drawers',
        badge: '45kg Load Capacity',
        rating: '5/5',
        priceTier: '₹₹₹',
        idealFor: 'Pots & Pans Kitchen Drawers, Thali Baskets',
        warranty: '10-Year Warranty',
        desc: 'Double-walled steel drawer systems with full-extension undermount synchronized runners for effortless opening under full load.',
        specs: ['100% full extension', 'Smooth silent feather glide', 'Customizable internal dividers'],
      },
    ],
  },
];

export default function MaterialViewer() {
  const [activeCategory, setActiveCategory] = useState('core-boards');
  const [activeMaterial, setActiveMaterial] = useState(MATERIAL_CATEGORIES[0].items[0]);

  const currentCategory = MATERIAL_CATEGORIES.find(c => c.id === activeCategory) || MATERIAL_CATEGORIES[0];

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const cat = MATERIAL_CATEGORIES.find(c => c.id === catId);
    if (cat && cat.items[0]) {
      setActiveMaterial(cat.items[0]);
    }
  };

  return (
    <div className="mat-viewer">
      <div className="mat-viewer__header">
        <span className="overline">Interactive Material Showcase</span>
        <h3 className="mat-viewer__title">Explore What Goes Inside Your Home</h3>
        <p className="mat-viewer__subtitle">
          Click any material below to inspect its specifications, durability grading, and recommended application.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mat-viewer__tabs">
        {MATERIAL_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            type="button"
            className={`mat-viewer__tab ${activeCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="mat-viewer__grid">
        {/* Left: Swatch List */}
        <div className="mat-viewer__list">
          {currentCategory.items.map(item => (
            <button
              key={item.id}
              type="button"
              className={`mat-viewer__item-btn ${activeMaterial.id === item.id ? 'is-active' : ''}`}
              onClick={() => setActiveMaterial(item)}
            >
              <div className="mat-viewer__item-top">
                <span className="mat-viewer__item-name">{item.name}</span>
                <span className="mat-viewer__item-badge">{item.badge}</span>
              </div>
              <span className="mat-viewer__item-ideal">Ideal for: {item.idealFor}</span>
            </button>
          ))}
        </div>

        {/* Right: Detailed Spec Card */}
        <div className="mat-viewer__detail">
          <div className="mat-viewer__detail-header">
            <div>
              <span className="mat-viewer__detail-badge">{activeMaterial.badge}</span>
              <h4 className="mat-viewer__detail-title">{activeMaterial.name}</h4>
            </div>
            <div className="mat-viewer__detail-rating">
              <span className="mat-viewer__rating-val">★ {activeMaterial.rating}</span>
              <span className="mat-viewer__price-tag">Cost: {activeMaterial.priceTier}</span>
            </div>
          </div>

          <p className="mat-viewer__detail-desc">{activeMaterial.desc}</p>

          <div className="mat-viewer__specs-box">
            <h5>Technical Highlights:</h5>
            <ul>
              {activeMaterial.specs.map((s, i) => (
                <li key={i}>✓ {s}</li>
              ))}
            </ul>
          </div>

          <div className="mat-viewer__detail-footer">
            <div>
              <span className="mat-viewer__footer-label">Recommended Zone:</span>
              <strong className="mat-viewer__footer-val">{activeMaterial.idealFor}</strong>
            </div>
            <div>
              <span className="mat-viewer__footer-label">Assurance:</span>
              <strong className="mat-viewer__footer-val" style={{ color: '#B8976A' }}>🛡️ {activeMaterial.warranty}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
