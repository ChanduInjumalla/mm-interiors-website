import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';

const GUARANTEES = [
  {
    icon: '🛡️',
    badge: '10-Year Coverage',
    title: '10-Year Material Warranty',
    desc: 'Comprehensive warranty covering all core plywood structural integrity, anti-termite protection, and surface delamination across modular kitchens and wardrobes.',
    points: ['100% replacement for material defects', 'Valid across all BWR & HDHMR woodwork', 'Formal warranty certificate provided at handover'],
  },
  {
    icon: '⏱️',
    badge: 'Strict Timeline',
    title: '45-Day Move-In Handover Guarantee',
    desc: 'Structured project milestones ensure your home is fully completed, deep-cleaned, and delivered on time without frustrating delays.',
    points: ['Dedicated site supervisor for coordination', 'Weekly milestone photo updates on WhatsApp', 'Zero delay penalty commitment'],
  },
  {
    icon: '🔒',
    badge: 'Price Transparency',
    title: '0% Hidden Cost Price Lock Guarantee',
    desc: 'No surprise bills midway through execution. The quotation agreed upon after 3D design approval is 100% price-locked.',
    points: ['Transparent itemized room-by-room pricing', 'Includes all hardware, labor and site execution', 'No sudden surcharge demands'],
  },
  {
    icon: '⚙️',
    badge: 'Precision Engineering',
    title: 'Factory Machine Edge-Banding',
    desc: 'All cabinet edges are sealed using industrial automated edge-banding machines with high-heat adhesive for 100% water-resistant protection.',
    points: ['Zero edge peeling or bubbling', 'Seamless aesthetic hairline joints', 'Protects against kitchen steam and bathroom humidity'],
  },
];

const INSPECTION_POINTS = [
  { step: '01', title: 'Raw Material Calibration', desc: '100% inspection of plywood brand, grade (IS:710/IS:303), and uniform sheet thickness before cutting.' },
  { step: '02', title: 'Precision Factory Cutting', desc: 'Computerized panel saws ensure exact 90-degree square cuts for perfectly aligned cabinets.' },
  { step: '03', title: 'Automated Edge Sealing', desc: 'Hot-melt adhesive application for waterproof edge protection against moisture penetration.' },
  { step: '04', title: 'Hardware Load Testing', desc: 'Soft-close hinges and drawer runners tested for smooth feather glide under load.' },
  { step: '05', title: 'Laser Level Site Installation', desc: 'Wall cabinets and base units mounted using precision laser levels for zero sagging.' },
  { step: '06', title: 'Electrical & Lighting Verification', desc: 'Full testing of profile LED channels, strip drivers, and spotlight connections.' },
  { step: '07', title: 'Countertop & Plumbing Alignment', desc: 'Quartz/Granite sink and faucet cutouts sealed with food-grade silicone sealant.' },
  { step: '08', title: 'Pre-Handover Deep Clean & Snag Check', desc: 'Complete removal of sawdust, protective films, and thorough 50-point inspection before keys are handed over.' },
];

export default function QualityWarrantyPage() {
  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Quality & Warranty' }]} />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Our Quality Promise</span>
            <h2>Built to Last. Delivered on Time.</h2>
            <div className="divider divider--center"></div>
            <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', maxWidth: '650px', margin: '0 auto' }}>
              We take full accountability for your home interior project — from factory-grade materials to precision on-site execution.
            </p>
          </div>

          {/* 4 Guarantees Grid */}
          <div className="grid grid--2" style={{ gap: 'var(--space-xl)' }}>
            {GUARANTEES.map((g, idx) => (
              <div key={idx} className="card" style={{ padding: 'var(--space-2xl)', background: 'var(--color-bg-card)', border: '1px solid var(--color-border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{g.icon}</span>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.25rem 0.65rem', background: 'rgba(184, 151, 106, 0.15)', color: 'var(--color-gold)', borderRadius: '4px' }}>
                    {g.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem' }}>{g.title}</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {g.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {g.points.map((pt, i) => (
                    <li key={i} style={{ fontSize: '0.8125rem', color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>✓</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Point Inspection Checklist */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Standard Operating Procedure</span>
            <h2>Our 8-Point Quality Inspection</h2>
            <div className="divider divider--center"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
            {INSPECTION_POINTS.map((pt, idx) => (
              <div key={idx} style={{ padding: 'var(--space-xl)', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>
                  {pt.step}
                </span>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.35rem' }}>{pt.title}</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)', lineHeight: 1.5, margin: 0 }}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Worry-Free Home Interiors"
        description="Book a free consultation today to discuss your floor plan and explore material samples."
        ctaText="Book Free Consultation"
        variant="dark"
      />
    </>
  );
}
