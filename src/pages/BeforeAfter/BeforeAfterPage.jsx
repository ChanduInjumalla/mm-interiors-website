import SEOHead from '../../components/SEO/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CTASection from '../../components/CTA/CTASection';
import BeforeAfterSlider from '../../components/BeforeAfterSlider/BeforeAfterSlider';

const TRANSFORMATIONS = [
  {
    id: 'living-room-makeover',
    title: 'Living Room TV Feature Wall & Fluted Panelling',
    location: 'Ameenpur, Hyderabad',
    description: 'Transformed an empty cement wall into a luxury living room focal point featuring Italian stone texture backdrop, fluted panels, and warm indirect cove lighting.',
    beforeImage: '/images/tv-unit/tv-unit-2.jpg',
    afterImage: '/images/tv-unit/tv-unit-1.jpg',
  },
  {
    id: 'kitchen-makeover',
    title: 'L-Shaped Modular Kitchen with Smart Storage',
    location: 'Miyapur, Hyderabad',
    description: 'Converted an unfinished kitchen carcass into an ergonomic, high-gloss modular kitchen with seamless profile handles, quartz countertops, and BLUM soft-close drawers.',
    beforeImage: '/images/kitchen/kitchen-1.jpg',
    afterImage: '/images/full-home-interior.jpg',
  },
  {
    id: 'master-bedroom-wardrobe',
    title: 'Floor-to-Ceiling Sliding Wardrobe Suite',
    location: 'Chandanagar, Hyderabad',
    description: 'Designed and installed custom floor-to-ceiling sliding wardrobes with geometric accents, integrated vanity mirror, and overhead loft storage for 100% dust-free organization.',
    beforeImage: '/images/wardrobe/wardrobe-1.jpg',
    afterImage: '/images/wardrobe/wardrobe-11.jpg',
  },
];

export default function BeforeAfterPage() {
  return (
    <>
      <SEOHead />
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Projects', path: '/interior-design-projects' }, { label: 'Before & After' }]} />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="overline">Interactive Transformations</span>
            <h2>See the Real Transformation</h2>
            <div className="divider divider--center"></div>
            <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--fs-body-lg)', maxWidth: '650px', margin: '0 auto' }}>
              Drag the slider on each card to see the transformation from raw site construction to handover-ready luxury interiors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 'var(--space-2xl)' }}>
            {TRANSFORMATIONS.map(item => (
              <BeforeAfterSlider
                key={item.id}
                title={item.title}
                location={item.location}
                description={item.description}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Your Home Transformation?"
        description="Share your floor plan or current site photos. Our principal interior designer will help you visualize the complete makeover."
        ctaText="Plan My Transformation"
        variant="dark"
      />
    </>
  );
}
