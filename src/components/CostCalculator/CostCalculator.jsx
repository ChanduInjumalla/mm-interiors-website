import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick, trackWhatsAppClick } from '../../utils/analytics';
import { businessInfo } from '../../data/businessInfo';
import './CostCalculator.css';

const BHK_OPTIONS = [
  { id: '1bhk', name: '1 BHK', subtitle: 'Compact Home (450-650 sq ft)', baseMin: 180000, baseMax: 280000 },
  { id: '2bhk', name: '2 BHK', subtitle: 'Standard Home (850-1200 sq ft)', baseMin: 350000, baseMax: 520000 },
  { id: '3bhk', name: '3 BHK', subtitle: 'Family Home (1300-1800 sq ft)', baseMin: 550000, baseMax: 820000 },
  { id: '4bhk', name: '4 BHK / Villa', subtitle: 'Spacious Villa (2000+ sq ft)', baseMin: 850000, baseMax: 1350000 },
  { id: 'duplex', name: 'Duplex Home', subtitle: 'Multi-level (2500+ sq ft)', baseMin: 1050000, baseMax: 1650000 },
];

const PACKAGES = [
  { 
    id: 'essential', 
    name: 'Essential', 
    multiplier: 1.0, 
    desc: 'MR Plywood + Matte Laminates + Standard Soft-Close Hardware',
    badge: 'Budget Friendly' 
  },
  { 
    id: 'premium', 
    name: 'Premium', 
    multiplier: 1.35, 
    desc: 'BWR/Boiling Waterproof Ply + High-Gloss/Acrylic + Branded Hardware + Cove Lighting',
    badge: 'Most Popular' 
  },
  { 
    id: 'luxury', 
    name: 'Luxury', 
    multiplier: 1.8, 
    desc: 'HDHMR/Marine Ply + Acrylic/PU Paint/Veneer + German Hardware + Profile & Smart Lighting',
    badge: 'High-End Finish' 
  },
];

const ROOM_ADDONS = [
  { id: 'kitchen', label: 'Modular Kitchen (Countertop + Cabinets + Baskets)', defaultSelected: true, weight: 1.0 },
  { id: 'masterBed', label: 'Master Bedroom Wardrobe + Lofts + Vanity', defaultSelected: true, weight: 1.0 },
  { id: 'secondBed', label: 'Second Bedroom Wardrobe & Storage', defaultSelected: true, weight: 0.9 },
  { id: 'livingTV', label: 'Living Room TV Unit & Feature Wall', defaultSelected: true, weight: 0.8 },
  { id: 'falseCeiling', label: 'False Ceiling with LED & Ambient Lighting', defaultSelected: true, weight: 0.85 },
  { id: 'pooja', label: 'Designer Pooja Unit / CNC Cutout', defaultSelected: false, weight: 0.4 },
  { id: 'wallPanelling', label: 'Fluted Wall Panelling & Wallpaper', defaultSelected: false, weight: 0.5 },
  { id: 'foyerShoe', label: 'Foyer Shoe Rack & Entryway Partition', defaultSelected: false, weight: 0.35 },
];

export default function CostCalculator() {
  const [selectedBhk, setSelectedBhk] = useState('2bhk');
  const [selectedPackage, setSelectedPackage] = useState('premium');
  const [selectedRooms, setSelectedRooms] = useState(() => {
    return ROOM_ADDONS.filter(r => r.defaultSelected).map(r => r.id);
  });

  const toggleRoom = (id) => {
    setSelectedRooms(prev => 
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  // Calculation logic
  const estimate = useMemo(() => {
    const bhk = BHK_OPTIONS.find(b => b.id === selectedBhk) || BHK_OPTIONS[1];
    const pkg = PACKAGES.find(p => p.id === selectedPackage) || PACKAGES[1];

    // Room scope ratio
    const totalPossibleWeight = ROOM_ADDONS.reduce((acc, r) => acc + r.weight, 0);
    const currentWeight = ROOM_ADDONS
      .filter(r => selectedRooms.includes(r.id))
      .reduce((acc, r) => acc + r.weight, 0);
    
    const scopeMultiplier = currentWeight / (totalPossibleWeight * 0.7);

    const min = Math.round((bhk.baseMin * pkg.multiplier * scopeMultiplier) / 5000) * 5000;
    const max = Math.round((bhk.baseMax * pkg.multiplier * scopeMultiplier) / 5000) * 5000;

    const formatLakhs = (val) => {
      const inLakhs = (val / 100000).toFixed(2);
      return `₹${inLakhs} Lakhs`;
    };

    return {
      minStr: formatLakhs(min),
      maxStr: formatLakhs(max),
      minRaw: min,
      maxRaw: max,
      bhkName: bhk.name,
      pkgName: pkg.name,
    };
  }, [selectedBhk, selectedPackage, selectedRooms]);

  const whatsappText = `Hello MM Interiors, I used your Cost Calculator for my ${estimate.bhkName} with ${estimate.pkgName} package (Estimated: ${estimate.minStr} - ${estimate.maxStr}). I would like to get a detailed room-by-room quotation.`;
  const whatsappUrl = businessInfo.whatsapp.messageLink(whatsappText);

  return (
    <div className="cost-calc">
      <div className="cost-calc__header">
        <span className="overline">Instant Estimation</span>
        <h3 className="cost-calc__title">Calculate Your Home Interior Cost in 30 Seconds</h3>
        <p className="cost-calc__subtitle">
          Select your home size and preferences to get a transparent price range based on current Hyderabad rates.
        </p>
      </div>

      <div className="cost-calc__body">
        {/* Step 1: BHK Selection */}
        <div className="cost-calc__step">
          <div className="cost-calc__step-header">
            <span className="cost-calc__step-num">1</span>
            <h4>Select Home Configuration</h4>
          </div>
          <div className="cost-calc__bhk-grid">
            {BHK_OPTIONS.map(bhk => (
              <button
                key={bhk.id}
                type="button"
                className={`cost-calc__bhk-btn ${selectedBhk === bhk.id ? 'is-active' : ''}`}
                onClick={() => setSelectedBhk(bhk.id)}
              >
                <span className="cost-calc__bhk-name">{bhk.name}</span>
                <span className="cost-calc__bhk-sub">{bhk.subtitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Quality & Package Selection */}
        <div className="cost-calc__step">
          <div className="cost-calc__step-header">
            <span className="cost-calc__step-num">2</span>
            <h4>Select Material & Quality Level</h4>
          </div>
          <div className="cost-calc__pkg-grid">
            {PACKAGES.map(pkg => (
              <button
                key={pkg.id}
                type="button"
                className={`cost-calc__pkg-btn ${selectedPackage === pkg.id ? 'is-active' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="cost-calc__pkg-top">
                  <span className="cost-calc__pkg-name">{pkg.name}</span>
                  <span className="cost-calc__pkg-badge">{pkg.badge}</span>
                </div>
                <p className="cost-calc__pkg-desc">{pkg.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Scope & Inclusions */}
        <div className="cost-calc__step">
          <div className="cost-calc__step-header">
            <span className="cost-calc__step-num">3</span>
            <h4>Select What You Need</h4>
          </div>
          <div className="cost-calc__rooms-grid">
            {ROOM_ADDONS.map(room => {
              const checked = selectedRooms.includes(room.id);
              return (
                <label key={room.id} className={`cost-calc__room-item ${checked ? 'is-checked' : ''}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleRoom(room.id)}
                    className="cost-calc__checkbox"
                  />
                  <span className="cost-calc__room-label">{room.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="cost-calc__result">
        <div className="cost-calc__result-left">
          <span className="cost-calc__result-overline">Estimated Budget Range for {estimate.bhkName}</span>
          <div className="cost-calc__result-price">
            <span className="cost-calc__price-range">{estimate.minStr} — {estimate.maxStr}*</span>
          </div>
          <p className="cost-calc__result-note">
            *Includes design, 3D visualization, materials, hardware, manufacturing, site execution and handover.
          </p>
        </div>

        <div className="cost-calc__result-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary cost-calc__cta-btn"
            onClick={trackWhatsAppClick}
          >
            💬 Get Detailed Estimate on WhatsApp
          </a>
          <Link
            to="/get-free-quote"
            className="btn btn--secondary cost-calc__cta-btn"
            onClick={() => trackCTAClick('Calculator Book Consultation')}
          >
            Book Free Site Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
