import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick, trackWhatsAppClick } from '../../utils/analytics';
import { businessInfo } from '../../data/businessInfo';
import './StyleQuiz.css';

const QUESTIONS = [
  {
    id: 'vibe',
    title: 'Which living space aesthetic appeals to you most?',
    subtitle: 'Choose the visual vibe you would love to walk into every day.',
    options: [
      {
        id: 'contemporary',
        label: 'Contemporary Luxury',
        desc: 'Stone feature walls, brushed gold accents, fluted panels & cove lighting.',
        image: '/images/tv-unit/tv-unit-1.jpg',
        styleMatch: 'Contemporary Luxury',
      },
      {
        id: 'minimalist',
        label: 'Minimalist Zen',
        desc: 'Clean lines, hidden storage, muted earth tones & uncluttered open spaces.',
        image: '/images/bhk/apartment.jpg',
        styleMatch: 'Modern Minimalist',
      },
      {
        id: 'traditional',
        label: 'Warm Indian Heritage',
        desc: 'Rich teak wood, CNC mandir cutouts, brass detailing & warm illumination.',
        image: '/images/pooja-room/pooja-2.jpg',
        styleMatch: 'Warm Traditional',
      },
      {
        id: 'modern',
        label: 'Ultra-Modern High-Gloss',
        desc: 'Glossy acrylic finishes, integrated profile handles & ambient smart lights.',
        image: '/images/tv-unit/tv-unit-2.jpg',
        styleMatch: 'Modern High-Gloss',
      },
    ],
  },
  {
    id: 'material',
    title: 'Which material & texture palette do you prefer?',
    subtitle: 'This defines the tactile feel of your wardrobes, TV wall and kitchen.',
    options: [
      {
        id: 'gold-charcoal',
        label: 'Moody Charcoal & Champagne Gold',
        desc: 'Dark architectural elegance with metallic gold reveals.',
      },
      {
        id: 'wood-warm',
        label: 'Natural Walnut & Warm Beige',
        desc: 'Timeless wooden grain paired with soft neutral fabrics.',
      },
      {
        id: 'acrylic-white',
        label: 'Glossy White & Dual-Tone Accents',
        desc: 'Ultra-reflective, bright and easy-to-clean surfaces.',
      },
      {
        id: 'marble-fluted',
        label: 'Italian Marble & Acoustic Fluted Wood',
        desc: 'High-end hotel suite luxury with tactile fluted panelling.',
      },
    ],
  },
  {
    id: 'homeType',
    title: 'What is your home configuration?',
    subtitle: 'Helps us suggest the exact floor-plan scope for your layout.',
    options: [
      { id: '2bhk', label: '2 BHK Apartment' },
      { id: '3bhk', label: '3 BHK Apartment' },
      { id: '4bhk', label: '4 BHK / Luxury Flat' },
      { id: 'villa', label: 'Independent Villa / Duplex' },
    ],
  },
];

const STYLE_PROFILES = {
  'Contemporary Luxury': {
    title: 'Contemporary Luxury',
    match: '97% Match',
    tagline: 'Refined, architectural elegance with statement focal points',
    palette: ['#1F1F1D (Charcoal)', '#B8976A (Gold)', '#E0D7C6 (Warm Stone)', '#3D5A73 (Navy Accent)'],
    materials: 'Fluted Louver Panels · Italian Stone Laminates · Profile LED Lighting · Acrylic Kitchen',
    description: 'You appreciate sophisticated, high-end design where lighting and texture do the talking. Your dream home blends seamless functionality with eye-catching architectural feature walls.',
  },
  'Modern Minimalist': {
    title: 'Modern Minimalist',
    match: '95% Match',
    tagline: 'Clean geometry, hidden storage and calming open spaces',
    palette: ['#F5F3EE (Off-White)', '#8C857B (Warm Greige)', '#2C3E50 (Slate)', '#B8976A (Gold Accent)'],
    materials: 'Matte Finish Laminates · Handleless Push-to-Open Cabinets · Recessed Spotlights · Floor-to-Ceiling Storage',
    description: 'You believe less is more. Your ideal home prioritizes decluttered surfaces, intelligent concealed storage solutions, and serene ambient illumination.',
  },
  'Warm Traditional': {
    title: 'Warm Indian Traditional',
    match: '98% Match',
    tagline: 'Rich wooden warmth, sacred tranquility and handcrafted charm',
    palette: ['#633A18 (Teak Wood)', '#B8976A (Brass Gold)', '#F7E7CE (Champagne)', '#800020 (Deep Maroon)'],
    materials: 'Natural Wood Grain Laminates · Brass Bells & Hardware · CNC Om Mandir Cutouts · Cove Lighting',
    description: 'You value tradition, family warmth, and sacred spaces. Your home centers around a peaceful, artistic pooja mandir, welcoming foyer, and rich wood finishes.',
  },
  'Modern High-Gloss': {
    title: 'Modern High-Gloss',
    match: '94% Match',
    tagline: 'Sleek, reflective surfaces with effortless everyday maintenance',
    palette: ['#1B3A5C (Royal Navy)', '#FFFFFF (Crisp White)', '#B8976A (Gold Accent)', '#4A4A4A (Graphite)'],
    materials: 'High-Gloss Acrylic · Gola Profile Handles · Quartz Countertops · Glass Wardrobe Shutters',
    description: 'You want a striking, ultra-modern look that is easy to wipe clean and always looks brand new. Your dream home feels bright, spacious, and effortlessly chic.',
  },
};

export default function StyleQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelectOption = (questionId, option) => {
    const updated = { ...answers, [questionId]: option };
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate result based on first answer or selected style
      const primaryVibe = updated.vibe?.styleMatch || 'Contemporary Luxury';
      setResult(STYLE_PROFILES[primaryVibe] || STYLE_PROFILES['Contemporary Luxury']);
      trackCTAClick(`Style Quiz Completed: ${primaryVibe}`);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
  };

  const question = QUESTIONS[currentStep];

  return (
    <div className="style-quiz">
      {!result ? (
        <>
          {/* Progress Header */}
          <div className="style-quiz__header">
            <span className="overline">Interactive Style Discovery</span>
            <h3 className="style-quiz__title">{question.title}</h3>
            <p className="style-quiz__subtitle">{question.subtitle}</p>
            <div className="style-quiz__progress">
              <div 
                className="style-quiz__progress-bar" 
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Options Grid */}
          <div className={`style-quiz__options ${question.options[0].image ? 'has-images' : ''}`}>
            {question.options.map(opt => (
              <button
                key={opt.id}
                type="button"
                className="style-quiz__opt-btn"
                onClick={() => handleSelectOption(question.id, opt)}
              >
                {opt.image && (
                  <div className="style-quiz__opt-img-wrap">
                    <img src={opt.image} alt={opt.label} className="style-quiz__opt-img" loading="lazy" />
                  </div>
                )}
                <div className="style-quiz__opt-info">
                  <span className="style-quiz__opt-label">{opt.label}</span>
                  {opt.desc && <p className="style-quiz__opt-desc">{opt.desc}</p>}
                </div>
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <button 
              type="button" 
              className="style-quiz__back-btn"
              onClick={() => setCurrentStep(prev => prev - 1)}
            >
              ← Back to previous question
            </button>
          )}
        </>
      ) : (
        /* Result Screen */
        <div className="style-quiz__result">
          <div className="style-quiz__result-badge">{result.match}</div>
          <h3 className="style-quiz__result-title">Your Style: {result.title}</h3>
          <p className="style-quiz__result-tagline">{result.tagline}</p>
          <p className="style-quiz__result-desc">{result.description}</p>

          <div className="style-quiz__result-grid">
            <div className="style-quiz__result-card">
              <h4>🎨 Recommended Color Palette</h4>
              <ul>
                {result.palette.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="style-quiz__result-card">
              <h4>🪵 Signature Materials</h4>
              <p>{result.materials}</p>
            </div>
          </div>

          <div className="style-quiz__result-actions">
            <a
              href={businessInfo.whatsapp.messageLink(
                `Hello MM Interiors, I took the Style Quiz and my result is *${result.title}* (${answers.homeType?.label || 'Home'}). Can you share a customized moodboard and floor plan ideas?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary style-quiz__cta"
              onClick={trackWhatsAppClick}
            >
              💬 Get This Moodboard on WhatsApp
            </a>
            <Link to="/get-free-quote" className="btn btn--secondary style-quiz__cta">
              Book Free Site Consultation
            </Link>
            <button type="button" className="style-quiz__retake-btn" onClick={handleReset}>
              🔄 Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
